class Player extends Phaser.Physics.Arcade.Sprite {

    constructor(game, x, y, color) {
        super(game, x, y, "cat");
        game.add.existing(this);
        game.physics.add.existing(this);

        this.tint = color;
        this.color = color;
        
        this.init(game);
        this.start(game);
    }

    new_cat(game,x, y, color) {
        this.x = x;
        this.y = y;
        this.tint = color;
        this.color = color;

        this.start(game);
    }

    init(game) {

        this.on('animationcomplete', (animation, frame, sprite) => {
            if (animation.key == 'idle') {
                this.anims.play('idle_sit', true);
                this.anim = 'idle_sit';
            }
        }, this);

        game.physics.add.collider(this, game.platforms, () => {

        });
        game.physics.add.overlap(this, game.foodGroup, (_, food) => {
            if (food.looted) {
                return;
            }
            this.foodInRange = food;
        })
        game.physics.add.overlap(this, game.foodStorage, () => {
            this.transferFood(game);
        });

    }
    

    start(game) {
        this.setScale(g.pixelScale);
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
        this.grabFallDeceleration = 15;
        this.grabFallMaxSpeed = 200;

        this.maxWallJumps = 2;
        this.maxSkyJumps = 1;

        this.maxStamina = 100;
        this.staminaDrain = 10; //per second
        this.staminaRegeneration = 10; // per second
        this.stamina = this.maxStamina;

        this.lives = 3;
        this.foodHolding = 0;

        this.body.setSize(12, 12);
        this.body.setOffset(10, 20);

        this.isGrounded = false;

        this.setCollideWorldBounds(true);
    }


    increaseFood(data, amount) {
        const ui = data.ui;
        this.foodHolding += amount;
        ui.setFoodHolding(this.foodHolding);
    }
    decreaseFood(ui, amount) {
        this.foodHolding -= amount;
        ui.setFoodHolding(this.foodHolding);
    }

    transferFood(game) {
        if (this.foodHolding > 0) {
            game.increaseFood(1);
            this.decreaseFood(game.ui, 1);
        }
    }

    update(data) {

        const game = data.game;

        this.update_contacts(data);
        this.update_input(data);

        this.update_hMovement(data);
        this.update_vMovement(data);

        this.update_stamina(data);


        //
        this.update_interact(data);

    }

    update_interact(data) {
        const game = data.game;
        const ui = data.ui;
        if (this.foodInRange) {
            ui.setInteract(this.foodInRange);

            if (game.cursors.f.isDown) {
                this.foodInRange.looted = true;
                this.increaseFood(data, this.foodInRange.amount);
                this.foodInRange.particles.destroy();
                this.foodInRange.destroy();
            }

            this.foodInRange = undefined;
            return;
        }
        ui.setInteract();
    }

    update_contacts(data) {
        if (this.body.blocked.left) {
            if (!this.canGrabWall) {
                this.canGrabWall = true;
                this.canWallJump = true;
                this.wallDirectionIsLeft = true;
            }
        }
        else if (this.body.blocked.right) {
            if (!this.canGrabWall) {
                this.canWallJump = true;
                this.canGrabWall = true;
                this.wallDirectionIsLeft = false;
            }
        }
        else {
            this.canGrabWall = false;
            this.canWallJump = false;
        }

        this.isGrounded = this.body.onFloor();
        if (this.isGrounded) {
            this.wallJumps = this.maxWallJumps;
            this.skyJumps = this.maxSkyJumps;
        }
    }

    update_input(data) {

        const game = data.game;

        let input = { x: 0, y: 0};
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

        this.isGrabbingWall = this.canGrabWall && game.cursors.shift.isDown;
        this.isSlidingDownWall = this.canGrabWall && !this.isGrabbingWall;

        data.input = input;
        data.hMovement = hMovement;
        data.vMovement = vMovement;
    }

    update_stamina(data) {
        const deltaTime = data.deltaTime;
        if (this.usingStamina) {
            this.usingStamina = false;
        }
        else if (this.isGrounded) {
            if (this.stamina < this.maxStamina) {
                this.stamina += this.staminaRegeneration * deltaTime;
            }
        }
        this.update_staminaUI(data);
    }

    update_staminaUI(data) {
        const ui = data.ui;
        ui.setStamina(this.stamina / this.maxStamina);
    }

    update_hMovement(data) {

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

    update_vMovement(data) {
        const game = data.game;

        const jumpFirstDown = game.cursors.up.firstDown;
        data.jumpFirstDown = jumpFirstDown;
        
        const y = data.input.y;
        const vMovement = data.vMovement;

        this.stickingOnWall = false;

        if (this.isGrounded) {
            // On floor
            if (vMovement && jumpFirstDown) {
                let jumpVel = y * this.jumpVelocity;
                this.jump('ground', jumpVel);

                this.isGrounded = false;
            }
        }
        else if (this.isGrabbingWall) {
            // Grabbing on wall
            if (this.tryWallJump(data)) {

            }
            else {
                // stamina check
                if (this.grabbing_consumeStamina(data)) {
                    this.stickOnWall();
                }
                else {
                    this.slideDownWall();
                }
            }
        }
        else if (this.isSlidingDownWall) {
            // Not grabbing, but running towards the wall
            if (this.tryWallJump(data)) {

            }
            else {
                this.slideDownWall();
            }
        }
        else {
            // Sky - falling/jumping
            if (vMovement && jumpFirstDown && this.skyJumps > 0) {
                let jumpVel = y * this.jumpVelocity;
                this.jump('sky', jumpVel)
            }
        }

        this.body.setAllowGravity(!this.stickingOnWall);

        // Limit max falling speed to prevent player from glitching through Arcade's physics
        if (this.body.velocity.y > this.maxFallSpeed) {
            this.setVelocityY(this.maxFallSpeed);
        }

    }

    grabbing_consumeStamina(data) {
        const deltaTime = data.deltaTime;
        
        if (this.stamina > 0) {
            this.stamina -= this.staminaDrain * deltaTime;
            this.usingStamina = true;
            return true;
        }
        return false;
    }

    stickOnWall() {
        if (this.body.velocity.y >= 0) {
            this.setVelocityY(0);
            this.stickingOnWall = true;
        }
    }

    slideDownWall() {
        if (this.body.velocity.y > 0) {
            let velY = this.body.velocity.y - this.grabFallDeceleration;
            if (velY > this.grabFallMaxSpeed) {
                velY = this.grabFallMaxSpeed;
            }
            this.setVelocityY(velY);
        }
    }

    tryWallJump(data) {

        const vMovement = data.vMovement;
        const y = data.input.y;
        const jumpFirstDown = data.jumpFirstDown;

        if (vMovement && jumpFirstDown && this.canWallJump && this.wallJumps > 0) {
            let jumpVelX = this.wallJumpVelocityX;
            let jumpVelY = y * this.wallJumpVelocityY;

            this.jump('wall', jumpVelY, this.wallDirectionIsLeft ? jumpVelX : -jumpVelX);

            this.canWallJump = false;
            return true;
        }
        return false;
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