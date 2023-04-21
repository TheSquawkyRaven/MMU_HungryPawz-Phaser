const game = {
    pixelScale: 4,
    gridSize: 24 * 4,
};

class Level extends Phaser.Scene {
    constructor(key) {
        super(key);
        this.levelKey = key
        this.nextLevel = {
            'Level1': 'Level2',
            'Level2': 'Level3',
            'Level3': 'Level4',
            'Level3': 'Credits',
        }
    }

    preload() {
        this.load.spritesheet('cat', 'images/Cat-Sheet.png', { frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet('oak_woods_tileset', 'images/oak_woods_v1.0/oak_woods_tileset.png', { frameWidth: 24, frameHeight: 24 })
        this.load.tilemapTiledJSON('map', 'Tiled/map.json');


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
    } // createStars

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
            repeat: -1 //Repeat forever
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

        // const weathers = {

        //     'morning': {
        //         'color': 0xecdccc,
        //         'bgColor': 0xF8c3aC,
        //         'snow': 1,
        //         'wind': 20,
        //     },

        //     'afternoon': {
        //         'color': 0xffffff,
        //         'bgColor': 0x0571FF,
        //         'snow': 1,
        //         'wind': 80,
        //     },

        //     'twilight': {
        //         'color': 0xccaacc,
        //         'bgColor': 0x18235C,
        //         'snow': 10,
        //         'wind': 200,
        //     },

        //     'night': {
        //         'color': 0x555555,
        //         'bgColor': 0x000000,
        //         'snow': 0,
        //         'wind': 0,
        //     },
        // }

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

        //this.createStars();

        //this.createParallaxBackgrounds();
        this.initAnimations();

        const player = this.player = this.physics.add.sprite(128, 128, 'cat')
        player.setScale(game.pixelScale);
        player.anims.play('walk', true);
        player.movementSpeed = 100;
        player.body.setSize(16, 16);
        player.body.setOffset(8, 16);

        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('oak_woods_tileset', 'oak_woods_tileset');
        const platforms = this.platforms = map.createStaticLayer('Base', tileset, 0, 200);
        platforms.setCollisionByExclusion(-1, true);
        platforms.setScale(game.pixelScale)

        // const blocks = this.blocks = this.physics.add.staticGroup();
        // let b = blocks.create(game.gridSize, game.gridSize * 3, 'blocks');
        // b.setScale(game.pixelScale);
        // b.refreshBody();
        // b.setFrame(3);

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.blocks);


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
    } // create()

    createPlatform(xIndex, yIndex) {
        // Creates a platform evenly spaced along the two indices.
        // If either is not a number it won't make a platform
        // if (typeof yIndex === 'number' && typeof xIndex === 'number') {
        //     gameState.platforms.create((220 * xIndex), yIndex * 70, 'platform').setOrigin(0, 0.5).refreshBody();
        // }
    }

    update() {

        let input = new Phaser.Math.Vector2();
        if (this.cursors.right.isDown) {
            input.x += 1;
            this.player.setFlipX(false)
        }
        if (this.cursors.left.isDown) {
            input.x -= 1;
            this.player.setFlipX(true)
        }
        if (this.cursors.up.isDown) {
            input.y -= 1;
        }
        if (this.cursors.down.isDown) {
            input.y += 1;
        }
        if (input.x != 0 && input.y !== 0){
            input.normalize();
        }
        this.player.setVelocityX(input.x * this.player.movementSpeed);
        this.player.setVelocityY(input.y * this.player.movementSpeed);

        // if (gameState.active) {
        //     gameState.goal.anims.play('fire', true);
        //     if (gameState.cursors.right.isDown) {
        //         gameState.player.flipX = false;
        //         gameState.player.setVelocityX(gameState.speed);
        //     } else if (gameState.cursors.left.isDown) {
        //         gameState.player.flipX = true;
        //         gameState.player.setVelocityX(-gameState.speed);
        //     } else {
        //         gameState.player.setVelocityX(0);
        //         gameState.player.anims.play('idle', true);
        //     }

        //     if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space)
        //         && gameState.player.body.touching.down) {
        //         gameState.player.setVelocityY(-500);
        //     }

        //     if (!gameState.player.body.touching.down) {
        //     }

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

// heights are the heights of the platforms
class Level1 extends Level {
    constructor() {
        super('Level1')
        this.heights = [4, 7, 5, null, 5, 4, null, 4, 4];
        this.weather = 'morning';
    }
}

class Level2 extends Level {
    constructor() {
        super('Level2')
        this.heights = [5, 4, null, 4, 6, 4, 6, 5, 5];
        this.weather = 'afternoon';
    }
}

class Level3 extends Level {
    constructor() {
        super('Level3')
        this.heights = [6, null, 6, 4, 6, 4, 5, null, 4];
        this.weather = 'twilight';
    }
}

class Level4 extends Level {
    constructor() {
        super('Level4')
        this.heights = [6, null, 6, 4, 6, 4, 5, null, 4];
        this.weather = 'night';
    }
}

// class Credits extends Phaser.Scene {
//     constructor() {
//         super('Credits')
//     }

//     preload() {
//         this.load.spritesheet('codey_sled', 'images/codey_sled.png', { frameWidth: 81, frameHeight: 90 });
//     }

//     create() {
//         gameState.player = this.add.sprite(config.width / 2, config.height / 2, 'codey_sled');

//         this.anims.create({
//             key: 'sled',
//             frames: this.anims.generateFrameNumbers('codey_sled'),
//             frameRate: 10,
//             repeat: -1
//         })

//         gameState.player.angle = 20;
//     }

//     update() {
//         gameState.player.anims.play('sled', true);
//     }
// }

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
            gravity: { y: 800 },
            enableBody: true,
        }
    },
    pixelArt: true,
    scene: [Level1, Level2, Level3, Level4]
};

const runningGame = new Phaser.Game(config);
