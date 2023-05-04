class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(game, x, y) {
        super(game, x, y, "cat");
        game.add.existing(this);
        game.physics.add.existing(this);

        this.init(game);
    }

    init(game) {
        this.setScale(g.pixelScale);

        this.on('animationcomplete', (animation, frame, sprite) => {
            if (animation.key == 'idle') {
                this.anims.play('idle_sit', true);
                this.anim = 'idle_sit';
            }
        }, this);
        this.anims.play('walk', true);
        this.anim = 'walk';

        // Movement
        this.xAcceleration = 40;
        this.xDeceleration = 50;
        this.jumpVelocity = 600;
        this.wallJumpVelocityY = 600;
        this.wallJumpVelocityX = 600;
        this.maxXSpeed = 400;
        this.maxFallSpeed = 750;

        this.maxWallJumps = 2;
        this.maxSkyJumps = 1;

        this.body.setSize(16, 16);
        this.body.setOffset(8, 16);

        this.isGrounded = false;


        game.physics.add.collider(this, game.platforms, () => {

        });

        return this;
    }

    update(data) {

        const game = data.game;

        if (this.body.blocked.left) {
            if (!this.grabbingWall) {
                this.grabbingWall = true;
                this.canWallJump = true;
                this.wallDirectionIsLeft = true;
            }
        }
        else if (this.body.blocked.right) {
            if (!this.grabbingWall) {
                this.canWallJump = true;
                this.grabbingWall = true;
                this.wallDirectionIsLeft = false;
            }
        }
        else {
            this.grabbingWall = false;
            this.canWallJump = false;
        }

        this.isGrounded = this.body.onFloor();
        if (this.isGrounded) {
            this.wallJumps = this.maxWallJumps;
            this.skyJumps = this.maxSkyJumps;
        }

        let input = new Phaser.Math.Vector2();
        let vMovement, hMovement = false;
        if (game.cursors.right.isDown) {
            input.x += 1;
            hMovement = true;
            this.setFlipX(false)

            if (game.cursors.right.wasUp) {
                game.cursors.right.firstDown = true;
                game.cursors.right.wasUp = false;
            }
            else {
                game.cursors.right.firstDown = false;
            }
        }
        else {
            game.cursors.right.wasUp = true;
            game.cursors.right.firstDown = false;
        }
        if (game.cursors.left.isDown) {
            input.x -= 1;
            hMovement = hMovement ? false : true; // Cancel out horizontal movement
            this.setFlipX(true)

            if (game.cursors.left.wasUp) {
                game.cursors.left.firstDown = true;
                game.cursors.left.wasUp = false;
            }
            else {
                game.cursors.left.firstDown = false;
            }
        }
        else {
            game.cursors.left.wasUp = true;
            game.cursors.left.firstDown = false;
        }
        if (game.cursors.up.isDown) {
            input.y -= 1;
            vMovement = true;

            if (game.cursors.up.wasUp) {
                game.cursors.up.firstDown = true;
                game.cursors.up.wasUp = false;
            }
            else {
                game.cursors.up.firstDown = false;
            }
        }
        else {
            game.cursors.up.wasUp = true;
            game.cursors.up.firstDown = false;
        }
        if (game.cursors.down.isDown) {
            //input.y += 1;
            //verticalMovement = true;
        }
        data.input = input;
        data.hMovement = hMovement;
        data.vMovement = vMovement;


        this.horizontalMovement(data);
        this.verticalMovement(data);


    }

    horizontalMovement(data) {

        const x = data.input.x;
        const hMovement = data.hMovement;
        const deltaOne = data.deltaOne;

        if (hMovement) {
            let xVel = this.body.velocity.x + x * this.xAcceleration * deltaOne;
            let isMaxSpeed = false;
            if (xVel > this.maxXSpeed) {
                xVel = this.maxXSpeed;
                isMaxSpeed = true;
            }
            else if (xVel < -this.maxXSpeed) {
                xVel = -this.maxXSpeed;
                isMaxSpeed = true;
            }
            this.setVelocityX(xVel);
            this.anims.play('run', true);
            this.anim = 'run';
        }
        else {
            let xVel = this.body.velocity.x;
            let isStopped = false;
            if (xVel > 0) {
                xVel -= this.xDeceleration * deltaOne;
                if (xVel < 0) {
                    xVel = 0;
                }
            }
            else if (xVel < 0) {
                xVel += this.xDeceleration * deltaOne;
                if (xVel > 0) {
                    xVel = 0;
                }
            }
            else {
                isStopped = true;
            }
            this.setVelocityX(xVel);
            if (isStopped) {
                if (this.anim != 'idle_sit') {
                    this.anims.play('idle', true);
                    this.anim = 'idle';
                }
            }
            else {
                this.anims.play('run', true);
                this.anim = 'run';
            }
        }
    }

    verticalMovement(data) {
        const game = data.game;

        let jumpFirstDown = game.cursors.up.firstDown;
        
        const y = data.input.y;
        const vMovement = data.vMovement;

        if (this.isGrounded) {
            // On floor
            if (vMovement && jumpFirstDown) {
                let jumpVel = y * this.jumpVelocity;
                this.jump('ground', jumpVel);

                this.isGrounded = false;
            }
        }
        else if (this.grabbingWall) {
            // On wall
            if (vMovement && jumpFirstDown && this.canWallJump && this.wallJumps > 0) {
                let jumpVelX = this.wallJumpVelocityX;
                let jumpVelY = y * this.wallJumpVelocityY;

                this.jump('wall', jumpVelY, this.wallDirectionIsLeft ? jumpVelX : -jumpVelX);

                this.canWallJump = false;
            }
            else {
                this.setVelocityY(0);
            }
        }
        else {
            // Sky - falling/jumping
            if (vMovement && jumpFirstDown && this.skyJumps > 0) {
                let jumpVel = y * this.jumpVelocity;
                this.jump('sky', jumpVel)
            }
        }

        // Limit max falling speed to prevent player from glitching through Arcade's physics
        if (this.body.velocity.y > this.maxFallSpeed) {
            this.setVelocityY(this.maxFallSpeed);
        }
    }

    jump(type, velY, velX) {
        if (type === 'ground') {
            this.setVelocityY(velY);
        }
        else if (type === 'sky') {
            this.setVelocityY(velY);
            this.skyJumps--;
        }
        else if (type === 'wall') {
            this.setVelocityY(velY);
            this.setVelocityX(velX);
            this.wallJumps--;
        }
    }

}