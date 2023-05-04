const g = {
    pixelScale: 4,
    gridSize: 24 * 4,
};

class Level extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    preload() {
        this.load.spritesheet('cat', 'images/Cat-Sheet.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('oak_woods_tileset', 'images/oak_woods_v1.0/oak_woods_tileset.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('city_buildings', 'images/Sidescroller Shooter - Central City/Assets/Buildings.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('city_props', 'images/Sidescroller Shooter - Central City/Assets/Props-01.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('city_tileset', 'images/Sidescroller Shooter - Central City/Assets/Tiles.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('city2_tileset', 'images/Action Pack - CITY/Assets/Assets_City.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('future_tiles', 'images/TILESET_FUTURISTIC_CITY_BY_CUBIC TREE - GRAPHICS/TILESET_FUTURISTIC_CITY.png', { frameWidth: 24, frameHeight: 24 });
        this.load.spritesheet('neon_tiles', 'images/NeonCityFree/Free/FreeAsset.png', { frameWidth: 24, frameHeight: 24 });
        this.load.tilemapTiledJSON('map', 'Tiled/map.json');
        this.load.image('nothing', 'images/nothing.png');


        //this.load.image('platform', 'images/platform.png');
        //this.load.spritesheet('campfire', 'images/campfire.png', { frameWidth: 32, frameHeight: 32 });
    }

    createStars() {
        // gameState.stars = [];

        // function getStarPoints() {
        //     const color = 0xffffff;
        //     return {
        //         x: Math.floor(Math.random() * 900),
        //         y: Math.floor(Math.random() * config.height * .5),
        //         radius: Math.floor(Math.random() * 3),
        //         color,
        //     }
        // }

        // for (let i = 0; i < 200; i++) {
        //     const { x, y, radius, color } = getStarPoints();
        //     const star = this.add.circle(x, y, radius, color)
        //     star.setScrollFactor(Math.random() * .1);
        //     gameState.stars.push(star)
        // }
    }

    createParallaxBackgrounds() {
        this.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0x00ffbb).setOrigin(0, 0);

        //gameState.bg1 = this.add.image(0, 0, 'bg1');
        //gameState.bg2 = this.add.image(0, 0, 'bg2');
        //gameState.bg3 = this.add.image(0, 0, 'bg3');

        //gameState.bg1.setOrigin(0, 0);
        //gameState.bg2.setOrigin(0, 0);
        //gameState.bg3.setOrigin(0, 0);

        //const game_width = parseFloat(gameState.bg3.getBounds().width)
        //gameState.width = game_width;
        //const window_width = config.width

        //const bg1_width = gameState.bg1.getBounds().width
        //const bg2_width = gameState.bg2.getBounds().width
        //const bg3_width = gameState.bg3.getBounds().width

        //gameState.bgColor.setScrollFactor(0);
        //gameState.bg1.setScrollFactor(bg1_width / bg3_width);
        //gameState.bg2.setScrollFactor(bg2_width / bg3_width);

    }

    initAnimations() {
        this.anims.create({
            key: 'idle_sit',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 15 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('cat', { start: 16, end: 31 }),
            frameRate: 8,
            repeat: 1
        })
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('cat', { start: 32, end: 47 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('cat', { start: 48, end: 51 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'run_fast',
            frames: this.anims.generateFrameNumbers('cat', { start: 56, end: 57 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'run_faster',
            frames: this.anims.generateFrameNumbers('cat', { start: 64, end: 66 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'lay_tired',
            frames: this.anims.generateFrameNumbers('cat', { start: 72, end: 75 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'lay_looking',
            frames: this.anims.generateFrameNumbers('cat', { start: 80, end: 87 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'lay_sleeping',
            frames: this.anims.generateFrameNumbers('cat', { start: 88, end: 95 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'lay_sneak_prepare',
            frames: this.anims.generateFrameNumbers('cat', { start: 96, end: 99 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'lay_sneak',
            frames: this.anims.generateFrameNumbers('cat', { start: 104, end: 107 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'sit_to_stand',
            frames: this.anims.generateFrameNumbers('cat', { start: 112, end: 115 }),
            frameRate: 8,
            repeat: 0 //Once
        })
        this.anims.create({
            key: 'stand_to_sit',
            frames: this.anims.generateFrameNumbers('cat', { start: 120, end: 125 }),
            frameRate: 8,
            repeat: 0 //Once
        })
        this.anims.create({
            key: 'spitting',
            frames: this.anims.generateFrameNumbers('cat', { start: 128, end: 131 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'shocked',
            frames: this.anims.generateFrameNumbers('cat', { start: 144, end: 151 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'jump_start',
            frames: this.anims.generateFrameNumbers('cat', { start: 152, end: 155 }),
            frameRate: 8,
            repeat: 0 //Repeat forever
        })
        this.anims.create({
            key: 'jump_end',
            frames: this.anims.generateFrameNumbers('cat', { start: 160, end: 165 }),
            frameRate: 8,
            repeat: 0 //Repeat forever
        })
        this.anims.create({
            key: 'sit_to_look_down',
            frames: this.anims.generateFrameNumbers('cat', { start: 168, end: 171 }),
            frameRate: 8,
            repeat: 0 //Repeat forever
        })
        this.anims.create({
            key: 'look_down_to_sit',
            frames: this.anims.generateFrameNumbers('cat', { start: 176, end: 179 }),
            frameRate: 8,
            repeat: 0 //Repeat forever
        })
        this.anims.create({
            key: 'look_down_lick',
            frames: this.anims.generateFrameNumbers('cat', { start: 256, end: 259 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })

    }

    onPlayerAnimationComplete(animation, frame, sprite) {
        if (animation.key == 'idle') {
            this.player.anims.play('idle_sit', true);
            this.player.anim = 'idle_sit';
        }
    }

    createSnow() {
        // gameState.particles = this.add.particles('snowflake');

        // gameState.emitter = gameState.particles.createEmitter({
        //     x: { min: 0, max: config.width * 2 },
        //     y: -5,
        //     lifespan: 2000,
        //     speedX: { min: -5, max: -200 },
        //     speedY: { min: 200, max: 400 },
        //     scale: { start: 0.6, end: 0 },
        //     quantity: 10,
        //     blendMode: 'ADD'
        // }
        // )

        // gameState.emitter.setScrollFactor(0);
    } // createSnow()

    setWeather(weather) {

        // let { color, bgColor, snow, wind } = weathers[weather];

        // gameState.bg1.setTint(color);
        // gameState.bg2.setTint(color);
        // gameState.bg3.setTint(color);
        // gameState.bgColor.fillColor = bgColor;
        // gameState.emitter.setQuantity(snow);
        // gameState.emitter.setSpeedX(-wind);
        // gameState.player.setTint(color);

        // for (let platform of gameState.platforms.getChildren()) {
        //     platform.setTint(color);
        // }

        // if (weather === 'night') {
        //     gameState.stars.forEach(star => star.setVisible(true));
        // } else {
        //     gameState.stars.forEach(star => star.setVisible(false));
        // }

        // return
    } // setWeather(weather)

    levelSetup() {
        // for (const [xIndex, yIndex] of this.heights.entries()) {
        //     this.createPlatform(xIndex, yIndex);
        // }

        // // Create the campfire at the end of the level
        // gameState.goal = this.physics.add.sprite(gameState.width - 40, 100, 'campfire');

        // this.physics.add.overlap(gameState.player, gameState.goal,
        //     function () {
        //         this.cameras.main.fade(800,     // duration in milliseconds
        //             0, 0, 0, // amount to fade the red, green, blue channels towards
        //             false,   // true or false, force the effect to start immediately, even if already running 
        //             function (camera, progress) {
        //                 if (progress > .9) {
        //                     this.scene.stop(this.levelKey);
        //                     this.scene.start(this.nextLevel[this.levelKey]);
        //                 }
        //             }
        //         );
        //     },
        //     null, this
        // );

        // this.setWeather(this.weather);
    } // levelSetup()

    create() {
        this.active = true
        this.initAnimations();

        console.log(game);




        const map = this.make.tilemap({ key: 'map' });
        const oak_woods_tileset = map.addTilesetImage('oak_woods_tileset', 'oak_woods_tileset');
        const city_buildings = map.addTilesetImage('city_buildings', 'city_buildings');
        const city_props = map.addTilesetImage('city_props', 'city_props');
        const city_tileset = map.addTilesetImage('city_tileset', 'city_tileset');
        const city2_tileset = map.addTilesetImage('city2_tileset', 'city2_tileset');
        const future_tiles = map.addTilesetImage('future_tiles', 'future_tiles');
        const neon_tiles = map.addTilesetImage('neon_tiles', 'neon_tiles');

        const tintedBackground = map.createStaticLayer('Tinted Background', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const background = map.createStaticLayer('Background', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const base = this.platforms = map.createStaticLayer('Base', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const decoBackground = map.createStaticLayer('DecoBackground', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const deco = map.createStaticLayer('Deco', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        
        tintedBackground.setScale(g.pixelScale);
        background.setScale(g.pixelScale);
        base.setScale(g.pixelScale)
        decoBackground.setScale(g.pixelScale);
        deco.setScale(g.pixelScale);

        base.setCollisionByExclusion(-1, true);




        const player = this.player = this.physics.add.sprite(128, 128, 'cat')
        player.setScale(g.pixelScale);
        player.on('animationcomplete', this.onPlayerAnimationComplete, this);
        player.anims.play('walk', true);
        player.anim = 'walk';
        player.xAcceleration = 40;
        player.xDeceleration = 50;
        player.jumpVelocity = 600;
        player.wallJumpVelocity = 600;
        player.maxXSpeed = 400;
        player.maxFallSpeed = 750;
        player.body.setSize(16, 16);
        player.body.setOffset(8, 16);
        player.gravity = true;

        player.isGrounded = false;

        this.debugText = this.add.text(0, 0, 'Player', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        console.log(this.debugText)

        // const blocks = this.blocks = this.physics.add.staticGroup();
        // let b = blocks.create(game.gridSize, game.gridSize * 3, 'blocks');
        // b.setScale(game.pixelScale);
        // b.refreshBody();
        // b.setFrame(3);

        this.physics.add.collider(this.player, this.platforms, () => {
            if (player.body.onFloor()) {
                player.isGrounded = true;
            }


        });


        //game.block = this.physics.add.sprite(40, 100, 'block');


        //this.createSnow();

        //this.levelSetup();

        //this.cameras.main.setBounds(0, 0, gameState.bg3.width, gameState.bg3.height);
        //this.physics.world.setBounds(0, 0, gameState.width, gameState.bg3.height + gameState.player.height);

        this.cameras.main.startFollow(
            this.player,
            true,
            0.15, 0.15
        )

        //this.physics.add.collider(gameState.player, gameState.platforms);
        //this.physics.add.collider(gameState.goal, gameState.platforms);

        this.cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        });
    }

    update() {
        const delta = game.loop.delta / 16;

        this.player.canWallJump = false;
        if (this.player.body.blocked.left) {
            this.player.canWallJump = true;
        }
        if (this.player.body.blocked.right) {
            this.player.canWallJump = true;
        }

        if (this.player.canWallJump) {
            if (this.player.gravity) {
                this.player.setVelocityY(0);
                this.player.body.setAllowGravity(false);
                this.player.gravity = false;
            }
        }
        else {
            if (!this.player.gravity) {
                this.player.body.setAllowGravity(true);
                this.player.gravity = true;
            }
        }

        let input = new Phaser.Math.Vector2();
        let verticalMovement, horizontalMovement = false;
        if (this.cursors.right.isDown) {
            input.x += 1;
            horizontalMovement = true;
            this.player.setFlipX(false)
        }
        if (this.cursors.left.isDown) {
            input.x -= 1;
            horizontalMovement = horizontalMovement ? false : true; // Cancel out horizontal movement
            this.player.setFlipX(true)
        }
        if (this.cursors.up.isDown) {
            input.y -= 1;
            verticalMovement = true;
        }
        if (this.cursors.down.isDown) {
            //input.y += 1;
            //verticalMovement = true;
        }

        // Horizontal Movement
        if (horizontalMovement) {
            let xVel = this.player.body.velocity.x + input.x * this.player.xAcceleration * delta;
            let isMaxSpeed = false;
            if (xVel > this.player.maxXSpeed) {
                xVel = this.player.maxXSpeed;
                isMaxSpeed = true;
            }
            else if (xVel < -this.player.maxXSpeed) {
                xVel = -this.player.maxXSpeed;
                isMaxSpeed = true;
            }
            this.player.setVelocityX(xVel);
            this.player.anims.play('run', true);
            this.player.anim = 'run';
        }
        else {
            let xVel = this.player.body.velocity.x;
            let isStopped = false;
            if (xVel > 0) {
                xVel -= this.player.xDeceleration * delta;
                if (xVel < 0) {
                    xVel = 0;
                }
            }
            else if (xVel < 0) {
                xVel += this.player.xDeceleration * delta;
                if (xVel > 0) {
                    xVel = 0;
                }
            }
            else {
                isStopped = true;
            }
            this.player.setVelocityX(xVel);
            if (isStopped) {
                if (this.player.anim != 'idle_sit') {
                    this.player.anims.play('idle', true);
                    this.player.anim = 'idle';
                }
            }
            else{
                this.player.anims.play('run', true);
                this.player.anim = 'run';
            }
        }

        // Vertical Movement
        if (this.player.isGrounded) {
            if (verticalMovement) {
                let jumpVel = input.y * this.player.jumpVelocity;
                this.player.setVelocityY(jumpVel);
            }
            this.player.isGrounded = false;
        }
        else if (this.player.canWallJump) {
            if (verticalMovement) {
                let jumpVel = input.y * this.player.wallJumpVelocity;
                this.player.setVelocityY(jumpVel);
            }
        }
        if (this.player.body.velocity.y > this.player.maxFallSpeed) {
            this.player.setVelocityY(this.player.maxFallSpeed);
        }


        this.debugText.x = this.player.x - 45;
        this.debugText.y = this.player.y + 70;
        
        //     if (gameState.player.y > gameState.bg3.height) {

        //         // Camera Shake Effect
        //         // https://photonstorm.github.io/phaser3-docs/Phaser.Cameras.Scene2D.Effects.Shake.html        
        //         this.cameras.main.shake(240,   // duration - in milliseconds
        //             .01,   // intensity.
        //             false, // force - force the shake effect to start immediately, even if already running.
        //             function (camera, progress) {
        //                 if (progress > .9) {
        //                     // TASK : call appropriate function to restart the current level

        //                 }
        //             }
        //         );
        //     }
        // }
    }


}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    fps: { target: 60 },
    backgroundColor: "b9eaff",
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 1000 },
            enableBody: true,
        }
    },
    pixelArt: true,
    scene: [Level]
};

const game = new Phaser.Game(config);
