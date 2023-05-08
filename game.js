let g = {
    tileScale: 3,
    pixelScale: 4,
};

let foodSpawns = [
    { x: 64, y: 30, amount: 5, sprite: 'trash' }
];

let playerSpawns = [
    { x: 61, y: 36, color: 0xffffff },
    { x: 57, y: 34, color: 0xffff00 },
    { x: 55, y: 30, color: 0xff00ff },
]

class Level extends Phaser.Scene {
    constructor(config) {
        super(config);
        this.g = g;
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

        //UI
        this.load.image('UI_fillbar_blue', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Fillbar_01_Hollow.png');
        this.load.image('UI_fillbar_orange', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Fillbar_02_Hollow.png');
        this.load.image('UI_filler_green', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Filler_01.png');
        this.load.image('UI_filler_red', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Filler_02.png');

        this.load.image('food', 'images/food.png');
        this.load.image('shine', 'images/shine.png');

    }

    createParallaxBackgrounds() {
        this.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0x00ffbb).setOrigin(0, 0);


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


    create() {
        this.active = true
        this.initAnimations();

        console.log(game);

        this.create_tilemap();
        this.create_food();

        this.foodStored = 0;
        this.catsLeft = 3;
        this.usingCat = 1;
        this.cats = [
            {
                number: 1,
                alive: true,
            },
            {
                number: 2,
                alive: true,
            },
            {
                number: 3,
                alive: true,
            }
        ]

        this.create_player();
        
        this.ui = new UI(this);


        this.snap_camera(this.player.x, this.player.y);

        // const blocks = this.blocks = this.physics.add.staticGroup();
        // let b = blocks.create(game.gridSize, game.gridSize * 3, 'blocks');
        // b.setScale(game.pixelScale);
        // b.refreshBody();
        // b.setFrame(3);
        //this.physics.add.collider(gameState.player, gameState.platforms);

        this.cursors = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,

            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            f: Phaser.Input.Keyboard.KeyCodes.F,
        });

    }

    create_player() {
        let playerSpawn = playerSpawns[this.usingCat - 1];
        let playerPos = cellToWorldCenterX(playerSpawn.x, playerSpawn.y);
        this.player = new Player(this, playerPos.x, playerPos.y, playerSpawn.color);

        this.cats.forEach((cat) => {
            if (cat.number == this.usingCat) {
                return;
            }
            this.spawn_sleepingCat(cat.number);
        });
    }

    cat_died(number) {
        this.cats[number - 1].alive = false;
    }

    spawn_sleepingCat(cat) {
        //todo spawn sleeping cat
    }

    increaseFood(amount) {
        this.foodStored += amount;
        this.ui.setFoodStored(this.foodStored);
    }

    create_tilemap() {
        const map = this.make.tilemap({ key: 'map' });

        const sizeX = map.widthInPixels * g.tileScale;
        const sizeY = map.heightInPixels * g.tileScale;
        g.gameWidth = sizeX;
        g.gameHeight = sizeY;
        g.tileWidth = map.tileWidth;
        g.tileHeight = map.tileHeight;

        this.cameras.main.setBounds(0, 0, sizeX, sizeY);
        this.physics.world.setBounds(0, 0, sizeX, sizeY);

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

        tintedBackground.setScale(g.tileScale);
        background.setScale(g.tileScale);
        base.setScale(g.tileScale);
        decoBackground.setScale(g.tileScale);
        deco.setScale(g.tileScale);

        tintedBackground.forEachTile(function (tile) {
            tile.alpha = 100 / 255;
        });


        base.setCollisionByExclusion(-1, true);
    }

    create_food() {

        this.foodStorage = this.physics.add.staticGroup();
        let pos = cellToWorldCenterX(64, 36);
        let foodStorage = this.foodStorage.create(pos.x, pos.y, 'nothing');
        foodStorage.setScale(g.tileWidth * g.tileScale * 5);
        foodStorage.refreshBody();

        this.foodGroup = this.physics.add.staticGroup();
        foodSpawns.forEach((foodSpawn) => {
            let pos = cellToWorldCenter(foodSpawn.x, foodSpawn.y);

            let sprite = 'city_props'
            let frame = 34;
            if (foodSpawn.sprite === 'trash') {
                sprite = 'city_props';
                frame = 34;
            }
            let food = this.foodGroup.create(pos.x, pos.y, sprite);
            food.setFrame(frame);

            food.particles = this.add.particles('shine');
            let sizeX = food.displayWidth * g.tileScale;
            let sizeY = food.displayHeight * g.tileScale;
            let extX = sizeX / 2;
            let extY = sizeY / 2;
            food.emitter = food.particles.createEmitter({
                x: { min: food.x - extX, max: food.x + extX },
                y: { min: food.y - extY, max: food.y + extY },
                lifespan: 2000,
                speedX: { min: -5, max: 5 },
                speedY: { min: -5, max: 5 },
                scale: { start: 0.6, end: 0 },
                frequency: 100,
                blendMode: 'ADD'
            });

            food.amount = foodSpawn.amount;

            food.setScale(g.tileScale);
            food.refreshBody();
        });
    }

    snap_camera(x, y) {
        x = Math.round(x - this.cameras.main.height / 2);
        y = Math.round(y - this.cameras.main.height / 2);
        this.cameras.main.setScroll(x, y);
    }

    update() {
        const deltaOne = game.loop.delta / 16;
        const deltaTime = game.loop.delta / 1000;

        let data = {
            game: this,
            deltaTime: deltaTime,
            deltaOne: deltaOne,

            player: this.player,
            ui: this.ui,
        }

        this.player.update(data);
        this.update_camera();
        this.ui.update(data);

    }

    update_camera() {
        const cam = this.cameras.main;
        let toX = this.player.x - this.cameras.main.width / 2;
        let toY = this.player.y - this.cameras.main.height / 2;

        // Rounding to prevent pixel tearing
        let x = Math.round(lerp(cam.scrollX, toX, 0.15));
        let y = Math.round(lerp(cam.scrollY, toY, 0.15));

        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }
        this.cameras.main.setScroll(x, y);
    }


}

function lerp(from, to, t) {
    return from + (to - from) * t
}

function cellToWorld(cellX, cellY) {
    return { x: cellX * g.tileWidth * g.tileScale, y: cellY * g.tileWidth * g.tileScale }
}
function cellToWorldCenterX(cellX, cellY) {
    return { x: (cellX * g.tileWidth * g.tileScale) + (g.tileWidth / 2 * g.tileScale), y: cellY * g.tileWidth * g.tileScale }
}
function cellToWorldCenter(cellX, cellY) {
    return { x: (cellX * g.tileWidth * g.tileScale) + (g.tileWidth / 2 * g.tileScale), y: (cellY * g.tileWidth * g.tileScale) + (g.tileHeight / 2 * g.tileScale) }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    fps: { target: 60 },
    backgroundColor: "000000",
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
game.g = g;
