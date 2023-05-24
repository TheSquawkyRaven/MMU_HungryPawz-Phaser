/********************************************
Course : TGD2251 Game Physics
Session: Trimester 2, 2022/23
ID and Name #1 : 1191101213 RavenLimZheXuan
Contacts #1 : 011-55873318 1191101213@student.mmu.edu.my
********************************************/

let vol = 1.0;

let g = {
    tileScale: 3,
    pixelScale: 4,
};

let foodSpawns = [
    { x: 24, y: 3, amount: 10, sprite: 'trash' },
    { x: 49, y: 18, amount: 10, sprite: 'trash' },
    { x: 30, y: 20, amount: 10, sprite: 'trash' },
    { x: 15, y: 40, amount: 10, sprite: 'trash' },
    { x: 28, y: 30, amount: 10, sprite: 'trash' },
    { x: 29, y: 30, amount: 10, sprite: 'trash' },
    { x: 64, y: 30, amount: 10, sprite: 'trash' },
    { x: 95, y: 22, amount: 10, sprite: 'trash' },
    { x: 42, y: 61, amount: 10, sprite: 'trash' },
    { x: 19, y: 61, amount: 10, sprite: 'trash' },
    { x: 5, y: 62, amount: 10, sprite: 'trash' },
    { x: 77, y: 24, amount: 10, sprite: 'trash' },
    { x: 65, y: 60, amount: 10, sprite: 'trash' },
    { x: 79, y: 4, amount: 10, sprite: 'trash' },
    { x: 65, y: 13, amount: 10, sprite: 'trash' },
    { x: 59, y: 15, amount: 10, sprite: 'trash' },
    { x: 67, y: 16, amount: 10, sprite: 'trash' },

    { x: 20, y: 3, amount: 20, sprite: 'trash_big', center: 'no' },
    { x: 81, y: 36, amount: 20, sprite: 'trash_big', center: 'no' },
    { x: 24, y: 52, amount: 20, sprite: 'trash_big', center: 'no' },
    { x: 69, y: 7, amount: 20, sprite: 'trash_big', center: 'no' },

    { x: 105, y: 16, amount: 15, sprite: 'trash_bin', center: 'x' },
    { x: 39, y: 42, amount: 15, sprite: 'trash_bin', center: 'x' },

    { x: 110, y: 29, amount: 60, sprite: 'trash_bigbin', center: 'x' },

    { x: 41, y: 29, amount: 30, sprite: 'trash_mail', center: 'y', },

    { x: 74, y: 56, amount: 20, sprite: 'trash_bigbox', center: 'no' },
    { x: 98, y: 61, amount: 20, sprite: 'trash_bigbox', center: 'no' },
    { x: 97, y: 41, amount: 20, sprite: 'trash_bigbox', center: 'no' },

    { x: 101, y: 47, amount: 10, sprite: 'trash_box' },
    { x: 102, y: 47, amount: 10, sprite: 'trash_box' },
    { x: 113, y: 41, amount: 10, sprite: 'trash_box' },
    { x: 76, y: 56, amount: 10, sprite: 'trash_box' },
    { x: 45, y: 42, amount: 10, sprite: 'trash_box' },

    { x: 9, y: 14, amount: 15, sprite: 'vending_blue', center: 'x' },
    { x: 68, y: 2, amount: 15, sprite: 'vending_blue', center: 'x' },
    { x: 10, y: 14, amount: 15, sprite: 'vending_green', center: 'x' },
    { x: 85, y: 21, amount: 15, sprite: 'vending_green', center: 'x' },
    { x: 67, y: 2, amount: 15, sprite: 'vending_red', center: 'x' },
    { x: 84, y: 13, amount: 15, sprite: 'vending_red', center: 'x' },

    { x: 7, y: 23, amount: 5, sprite: 'berries' },
    { x: 9, y: 23, amount: 5, sprite: 'berries' },
    { x: 11, y: 23, amount: 5, sprite: 'berries' },
    { x: 13, y: 23, amount: 5, sprite: 'berries' },
    { x: 15, y: 23, amount: 5, sprite: 'berries' },
    { x: 4, y: 27, amount: 5, sprite: 'berries' },
    { x: 6, y: 27, amount: 5, sprite: 'berries' },
    { x: 8, y: 27, amount: 5, sprite: 'berries' },
    { x: 10, y: 27, amount: 5, sprite: 'berries' },
    { x: 12, y: 27, amount: 5, sprite: 'berries' },
    { x: 14, y: 27, amount: 5, sprite: 'berries' },
    { x: 16, y: 27, amount: 5, sprite: 'berries' },
    { x: 6, y: 31, amount: 5, sprite: 'berries' },
    { x: 8, y: 31, amount: 5, sprite: 'berries' },
    { x: 10, y: 31, amount: 5, sprite: 'berries' },
    { x: 12, y: 31, amount: 5, sprite: 'berries' },
    { x: 14, y: 31, amount: 5, sprite: 'berries' },
    { x: 16, y: 31, amount: 5, sprite: 'berries' },
    { x: 18, y: 31, amount: 5, sprite: 'berries' },
    { x: 4, y: 35, amount: 5, sprite: 'berries' },
    { x: 6, y: 35, amount: 5, sprite: 'berries' },
    { x: 8, y: 35, amount: 5, sprite: 'berries' },
    { x: 10, y: 35, amount: 5, sprite: 'berries' },
    { x: 12, y: 35, amount: 5, sprite: 'berries' },
    { x: 14, y: 35, amount: 5, sprite: 'berries' },
    { x: 16, y: 35, amount: 5, sprite: 'berries' },
];

let spikeSpawns = [
    { x: 10, y: 3, sprite: 'spike', r: 0 },
    { x: 14, y: 3, sprite: 'spike', r: 0 },
    { x: 15, y: 3, sprite: 'spike', r: 0 },
    { x: 9, y: 27, sprite: 'spike', r: 0 },
    { x: 17, y: 29, sprite: 'spike', r: 90 },
    { x: 19, y: 28, sprite: 'spike', r: 270 },
    { x: 19, y: 29, sprite: 'spike', r: 270 },
    { x: 11, y: 31, sprite: 'spike', r: 0 },
    { x: 5, y: 32, sprite: 'spike', r: 270 },
    { x: 5, y: 33, sprite: 'spike', r: 270 },
    { x: 7, y: 35, sprite: 'spike', r: 0 },
    { x: 13, y: 35, sprite: 'spike', r: 0 },
    { x: 8, y: 40, sprite: 'spike', r: 0 },
    { x: 12, y: 40, sprite: 'spike', r: 0 },
    { x: 10, y: 52, sprite: 'spike', r: 0 },
    { x: 14, y: 52, sprite: 'spike', r: 0 },
    { x: 17, y: 51, sprite: 'spike', r: 270 },
    { x: 19, y: 50, sprite: 'spike', r: 180 },
    { x: 23, y: 30, sprite: 'spike', r: 0 },
    { x: 24, y: 30, sprite: 'spike', r: 0 },
    { x: 39, y: 30, sprite: 'spike', r: 0 },
    { x: 42, y: 30, sprite: 'spike', r: 0 },
    { x: 87, y: 28, sprite: 'spike', r: 180 },
    { x: 88, y: 28, sprite: 'spike', r: 180 },
    { x: 89, y: 28, sprite: 'spike', r: 180 },
    { x: 63, y: 54, sprite: 'spike', r: 180 },
    { x: 65, y: 56, sprite: 'spike', r: 0 },
    { x: 66, y: 55, sprite: 'spike', r: 0 },
    { x: 69, y: 54, sprite: 'spike', r: 180 },
    { x: 33, y: 42, sprite: 'spike', r: 0 },
    { x: 71, y: 48, sprite: 'spike', r: 0 },
    { x: 72, y: 48, sprite: 'spike', r: 0 },
    { x: 73, y: 48, sprite: 'spike', r: 0 },
    { x: 83, y: 48, sprite: 'spike', r: 0 },
    { x: 84, y: 48, sprite: 'spike', r: 0 },
    { x: 57, y: 56, sprite: 'spike', r: 0 },
    { x: 63, y: 54, sprite: 'spike', r: 180 },
    { x: 69, y: 54, sprite: 'spike', r: 180 },
    { x: 62, y: 60, sprite: 'spike', r: 0 },
    { x: 93, y: 52, sprite: 'spike', r: 0 },
    { x: 102, y: 41, sprite: 'spike', r: 0 },
    { x: 104, y: 41, sprite: 'spike', r: 0 },
    { x: 106, y: 41, sprite: 'spike', r: 0 },
    { x: 105, y: 47, sprite: 'spike', r: 0 },
    { x: 111, y: 47, sprite: 'spike', r: 0 },
    { x: 108, y: 45, sprite: 'spike', r: 180 },
    { x: 114, y: 53, sprite: 'spike', r: 0 },
    { x: 114, y: 53, sprite: 'spike', r: 0 },
    { x: 107, y: 61, sprite: 'spike', r: 0 },
    { x: 108, y: 61, sprite: 'spike', r: 0 },
    { x: 111, y: 61, sprite: 'spike', r: 0 },
    { x: 112, y: 61, sprite: 'spike', r: 0 },

    { x: 71, y: 5, sprite: 'spike', r: 0 },
    { x: 72, y: 13, sprite: 'spike', r: 0 },
    { x: 78, y: 13, sprite: 'spike', r: 0 },
    { x: 77, y: 16, sprite: 'spike', r: 0 },
    { x: 72, y: 19, sprite: 'spike', r: 0 },
]

let playerSpawn = {
    x: 61,
    y: 36
}

let catSleepSpots = [
    { x: 56, y: 34 },
    { x: 55, y: 30 },
]

let winState = {
    food: 0,
    cats: 0,
};

let currentScene;

class StartingScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartingScene" });
        this.g = g;
    }

    preload() {
        currentScene = this;
        
        //Background
        this.load.image('bg1', 'images/free-scrolling-city-backgrounds-pixel-art/BG1.png');
        this.load.image('bg2', 'images/free-scrolling-city-backgrounds-pixel-art/BG2.png');
        this.load.image('bg3', 'images/free-scrolling-city-backgrounds-pixel-art/BG3.png');
        this.load.image('bg4', 'images/free-scrolling-city-backgrounds-pixel-art/BG4.png');

        this.load.image('pole', 'images/pole.png');
        this.load.spritesheet('cat', 'images/Cat-Sheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    createBackgrounds() {
        let bg1 = this.add.image(0, 0, 'bg1');
        let bg2 = this.add.image(0, this.cameras.main.height, 'bg2');
        let bg3 = this.add.image(0, this.cameras.main.height, 'bg3');
        let bg4 = this.add.image(0, this.cameras.main.height, 'bg4');

        bg1.setOrigin(0, 0);
        bg2.setOrigin(0, 1);
        bg3.setOrigin(0, 1);
        bg4.setOrigin(0, 1);

        bg1.setScale(3);
        bg2.setScale(2);
        bg3.setScale(2);
        bg4.setScale(2);
    }

    createPlatform() {
        let pole = this.add.image(0, this.cameras.main.height, 'pole');
        pole.setOrigin(0, 1);
        pole.setScale(g.tileScale);
    }

    createCat() {
        let catsGroup = this.physics.add.staticGroup();
        let cat = catsGroup.create(175, this.cameras.main.height - (120 * g.tileScale), 'cat');
        cat.anims.play('lay_sleeping', true);
        cat.setScale(g.pixelScale);
        cat.setOrigin(0, 1);
    }

    create() {

        
        this.anims.create({
            key: 'lay_sleeping',
            frames: this.anims.generateFrameNumbers('cat', { start: 88, end: 95 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        });

        this.createBackgrounds();
        this.createPlatform();
        this.createCat();

        let title = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Hungry Pawz', { fontFamily: 'LameFont', fontSize: 64 });
        title.setOrigin(0.5);


        let startButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 50, 'Start game', { fontFamily: 'LameFont', fontSize: 28 });
        startButton.setOrigin(0.5);
        startButton.setPadding(10);
        startButton.setStyle({ backgroundColor: '#111' });
        startButton.setInteractive({ useHandCursor: true });
        startButton.on('pointerdown', () => {
            this.scene.start("GameScene");
        });
        startButton.on('pointerover', () => startButton.setStyle({ fill: '#f39c12' }));
        startButton.on('pointerout', () => startButton.setStyle({ fill: '#FFF' }));
    }

    update() {

    }




}

class EndingScene extends Phaser.Scene {
    constructor() {
        super({ key: "EndingScene" })
        this.g = g;
    }
    preload() {
        currentScene = this;

        this.load.image('bg5', 'images/free-scrolling-city-backgrounds-pixel-art/BG5.png');
        this.load.image('bg6', 'images/free-scrolling-city-backgrounds-pixel-art/BG6.png');
        this.load.image('bg7', 'images/free-scrolling-city-backgrounds-pixel-art/BG7.png');
        this.load.image('bg8', 'images/free-scrolling-city-backgrounds-pixel-art/BG8.png');

        this.load.image('pole', 'images/pole.png');
        this.load.spritesheet('cat', 'images/Cat-Sheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    createBackgrounds() {
        let bg1 = this.add.image(0, 0, 'bg5');
        let bg2 = this.add.image(0, this.cameras.main.height, 'bg6');
        let bg3 = this.add.image(0, this.cameras.main.height, 'bg7');
        let bg4 = this.add.image(0, this.cameras.main.height, 'bg8');

        bg1.setOrigin(0, 0);
        bg2.setOrigin(0, 1);
        bg3.setOrigin(0, 1);
        bg4.setOrigin(0, 1);

        bg1.setScale(3);
        bg2.setScale(2);
        bg3.setScale(2);
        bg4.setScale(2);
    }
    
    create() {

        this.createBackgrounds();

        let quitButton = this.add.text(this.cameras.main.centerX, 550, 'Quit', { fontFamily: 'LameFont', fontSize: 28 });
        quitButton.setOrigin(0.5);
        quitButton.setPadding(10);
        quitButton.setStyle({ backgroundColor: '#111' });
        quitButton.setInteractive({ useHandCursor: true });
        quitButton.on('pointerdown', () => {
            this.scene.start("StartingScene");
        });
        quitButton.on('pointerover', () => quitButton.setStyle({ fill: '#f39c12' }));
        quitButton.on('pointerout', () => quitButton.setStyle({ fill: '#FFF' }));


        let foodGained = this.add.text(this.cameras.main.centerX, 50, `Food Obtained In Storage: ${winState.food}`, { fontFamily: 'LameFont', fontSize: 28 });
        foodGained.setOrigin(0.5, 0);
        foodGained.tint = 0x000000;

        let catsLeft = this.add.text(this.cameras.main.centerX, 75, `Cats Left: ${winState.cats}`, { fontFamily: 'LameFont', fontSize: 28 });
        catsLeft.setOrigin(0.5, 0);
        catsLeft.tint = 0x000000;

        let afterWinter = this.add.text(this.cameras.main.centerX, 150, `After Winter...`, { fontFamily: 'LameFont', fontSize: 28 });
        afterWinter.setOrigin(0.5, 0);
        afterWinter.tint = 0x000000;

        // Ending text
        let endingText;
        let catsSurvived;
        let foodPercentage = winState.food / (winState.cats * 200);
        if (winState.cats == 3) {
            if (foodPercentage >= 1) {
                endingText = `[Ending 1]\nAll of the cats survived the winter while having a full belly.`;
                catsSurvived = 3;
            }
            else if (foodPercentage >= 0.6666) {
                endingText = `[Ending 2]\nThere wasn't enough food for all.\nOne of the cats died, but the rest managed to survive through the winter.`;
                catsSurvived = 2;
            }
            else if (foodPercentage >= 0.3333) {
                endingText = `[Ending 3]\nThere wasn't enough food.\nThe cats fought amongst each other and only one of them survived the winter.`;
                catsSurvived = 1;
            }
            else {
                endingText = `[Ending 4]\nAll the cats died from the severe lack of food.`;
                catsSurvived = 0;
            }
        }
        else if (winState.cats == 2) {
            if (foodPercentage >= 1) {
                endingText = `[Ending 5]\nThe cat's sacrifice will not be forgotten.\nThe 2 of remaining cats survived through the winter.`;
                catsSurvived = 2;
            }
            else if (foodPercentage >= 0.5) {
                endingText = `[Ending 6]\nThere wasn't enough food for the both of them.\nThe cats fought amongst each other and the other one survived the winter.`;
                catsSurvived = 1;
            }
            else {
                endingText = `[Ending 7]\nBoth the cats died from the severe lack of food.`;
                catsSurvived = 0;
            }
        }
        else if (winState.cats == 1) {
            if (foodPercentage >= 1) {
                endingText = `[Ending 8]\nThe cat survived winter, at the cost of its friends.\nA lonely journey awaits, but the cat will be forever grateful.`;
                catsSurvived = 1;
            }
            else {
                endingText = `[Ending 9]\nThe cat died from the severe lack of food.`;
                catsSurvived = 0;
            }
        }
        else {
            endingText = `[Ending 10]\nThe cats fought for their own survival.\nBut the world leaves them no mercy.\nNo one will even know the cats existed.`;
            catsSurvived = 0;
        }

        let ending = this.add.text(this.cameras.main.centerX, 300, endingText, { fontFamily: 'LameFont', fontSize: 32 });
        ending.setOrigin(0.5, 0);
        ending.tint = 0x000000;

        let catsSurvivedT = this.add.text(this.cameras.main.centerX, 450, `Cats Survived: ${catsSurvived}`, { fontFamily: 'LameFont', fontSize: 28 });
        catsSurvivedT.setOrigin(0.5, 0);
        catsSurvivedT.tint = 0x000000;
    }

    update() {

    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
        this.g = g;
    }

    preload() {
        currentScene = this;

        //Background
        this.load.image('bg1', 'images/free-scrolling-city-backgrounds-pixel-art/BG1.png');
        this.load.image('bg2', 'images/free-scrolling-city-backgrounds-pixel-art/BG2.png');
        this.load.image('bg3', 'images/free-scrolling-city-backgrounds-pixel-art/BG3.png');
        this.load.image('bg4', 'images/free-scrolling-city-backgrounds-pixel-art/BG4.png');

        //
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
        this.load.image('black', 'images/black.png');

        //UI
        this.load.image('UI_fillbar_blue', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Fillbar_01_Hollow.png');
        this.load.image('UI_fillbar_orange', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Fillbar_02_Hollow.png');
        this.load.image('UI_filler_green', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Filler_01.png');
        this.load.image('UI_filler_red', 'images/Complete_GUI_Essential_Pack_Free_Version/01_Basic_Collection/01_Flat_Theme/Sprites/UI_Flat_Filler_02.png');

        this.load.spritesheet('lives', 'images/ui_lives.png', { frameWidth: 27, frameHeight: 9 });

        this.load.image('food', 'images/food.png');
        this.load.image('shine', 'images/shine.png');

        this.load.image('trash', 'images/trash.png');
        this.load.image('trash_bin', 'images/trash_bin.png');
        this.load.image('trash_big', 'images/trash_big.png');
        this.load.image('trash_bigbin', 'images/trash_bigbin.png');
        this.load.image('berries', 'images/berries.png');
        this.load.image('trash_mail', 'images/trash_mail.png');
        this.load.image('trash_bigbox', 'images/trash_bigbox.png');
        this.load.image('trash_box', 'images/trash_box.png');

        this.load.image('vending_blue', 'images/vending_blue.png');
        this.load.image('vending_green', 'images/vending_green.png');
        this.load.image('vending_red', 'images/vending_red.png');

        this.load.image('spike', 'images/spike.png');


        //Audio
        this.load.audio('music', 'audio/Johnny Tal - Cool strolling Cat.mp3');
        this.load.audio('cat_hurt', 'audio/meowing_cat.mp3');
        this.load.audio('cat_start', 'audio/Meow.ogg');
        this.load.audio('cat_die', 'audio/kitten_mew-1.wav');
        this.load.audio('cat_jump', 'audio/SFX_Jump_22.wav');
        this.load.audio('cat_wallJump', 'audio/SFX_Jump_11.wav');
        this.load.audio('gain', 'audio/SFX_Jump_17.wav');
        this.load.audio('deposit', 'audio/Ejimas1.mp3');



    }

    createParallaxBackgrounds() {
        let bg1 = this.add.image(0, 0, 'bg1');
        let bg2 = this.add.image(0, this.cameras.main.height, 'bg2');
        let bg3 = this.add.image(0, this.cameras.main.height, 'bg3');
        let bg4 = this.add.image(0, this.cameras.main.height, 'bg4');

        bg1.setOrigin(0, 0);
        bg2.setOrigin(0, 1);
        bg3.setOrigin(0, 1);
        bg4.setOrigin(0, 1);

        bg1.setScale(3);
        bg2.setScale(2);
        bg3.setScale(2);
        bg4.setScale(2);

        const game_width = 8640;
        const window_width = config.width;

        bg1.setScrollFactor(0);
        bg2.setScrollFactor((bg2.getBounds().width - window_width) / (game_width - window_width), 0);
        bg3.setScrollFactor((bg3.getBounds().width - window_width) / (game_width - window_width), 0);
        bg4.setScrollFactor((bg4.getBounds().width - window_width) / (game_width - window_width), 0);

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
            key: 'lay_sleeping',
            frames: this.anims.generateFrameNumbers('cat', { start: 88, end: 95 }),
            frameRate: 8,
            repeat: -1 //Repeat forever
        })
        this.anims.create({
            key: 'ded',
            frames: this.anims.generateFrameNumbers('cat', { start: 296, end: 303 }),
            frameRate: 8,
            repeat: 0 // Once
        })

    }


    create() {
        this.active = true
        this.initAnimations();

        this.createParallaxBackgrounds();



        this.create_tilemap();
        this.create_food();
        this.create_spikes();

        this.foodStored = 0;
        this.catsLeft = 3;
        this.usingCat = 1; //1, 2, 3 - don't use 0
        this.cats = [
            {
                number: 1,
                color: 0xffffff,
                lives: 3,
                dead: false,
            },
            {
                number: 2,
                color: 0xff6c9c,
                lives: 3,
                dead: false,
            },
            {
                number: 3,
                color: 0x70ff9e,
                lives: 3,
                dead: false,
            }
        ];

        this.create_player();

        this.ui = new UI(this);

        this.cat_start = this.sound.add('cat_start');
        this.cat_start.volume = vol;
        this.cat_start.play();

        this.cat_hurt = this.sound.add('cat_hurt');
        this.cat_hurt.volume = vol;

        this.cat_die = this.sound.add('cat_die');
        this.cat_die.volume = vol;

        this.cat_jump = this.sound.add('cat_jump');
        this.cat_jump.volume = 0.5 * vol;
        this.cat_wallJump = this.sound.add('cat_wallJump');
        this.cat_wallJump.volume = 0.3 * vol;

        this.gain = this.sound.add('gain');
        this.gain.volume = 0.5 * vol;
        this.deposit = this.sound.add('deposit');
        this.deposit.volume = vol;

        this.music = this.sound.add('music');
        this.music.volume = 0.5 * vol;
        this.music.loop = true;
        this.music.play();


        this.snap_camera(this.player.x, this.player.y);

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

        this.sleepingCats = this.physics.add.staticGroup();
        this.deadCats = this.physics.add.staticGroup();
        let i = 0;
        this.cats.forEach((cat) => {
            if (cat.number != this.usingCat) {
                this.spawn_sleepingCat(cat, catSleepSpots[i]);
                i++;
            }
            else {
                this.spawn_sleepingCat(cat, { x: 10000, y: 10000 });
            }
        });

        let playerPos = cellToWorldCenterX(playerSpawn.x, playerSpawn.y);
        this.player = new Player(this, playerPos.x, playerPos.y, this.cats[this.usingCat - 1]);
    }


    spawn_sleepingCat(cat, sleepSpot) {
        let pos = cellToWorldCenterX(sleepSpot.x, sleepSpot.y);
        cat.sleepingCat = this.sleepingCats.create(pos.x, pos.y, "cat");
        cat.sleepingCat.tint = cat.color;
        cat.sleepingCat.anims.play('lay_sleeping', true);
        cat.sleepingCat.setScale(g.pixelScale);
        cat.sleepingCat.x = cat.sleepingCat.x + 48;
        cat.sleepingCat.y = cat.sleepingCat.y + 8;
        cat.sleepingCat.refreshBody();

        cat.sleepingCat.cat = cat;
    }

    switchCat(fromCat, toCat) {
        let fCat = fromCat.sleepingCat;
        fromCat.sleepingCat = toCat.sleepingCat;
        toCat.sleepingCat = fCat;
    }

    spawn_deadCat(cat, pos) {
        let ded = this.deadCats.create(pos.x, pos.y, "cat");
        ded.tint = cat.color;
        ded.anims.play('ded', true);
        ded.setScale(g.pixelScale);

        this.catsLeft--;
        this.ui.setFoodStored(this.foodStored);
        this.check_objective();
    }

    check_objective() {
        if (this.foodStored >= (this.catsLeft * 200)) {
            if (this.catsLeft == 0) {
                winState.food = this.foodStored;
                winState.cats = this.catsLeft;
                this.scene.start("EndingScene");

            }
            else {
                winState.food = this.foodStored;
                winState.cats = this.catsLeft;
                this.scene.start("EndingScene");

            }
        }
    }
    outOfTime() {
        winState.food = this.foodStored;
        winState.cats = this.catsLeft;
        this.scene.start("EndingScene");
    }

    getNextAliveCat() {
        let aliveCat = 0;
        this.cats.forEach((cat) => {
            if (aliveCat == 0 && !cat.dead) {
                aliveCat = cat;
                return;
            }
        })
        if (aliveCat != 0) {
            return aliveCat;
        }
    }

    increaseFood(amount) {
        this.foodStored += amount;
        this.ui.setFoodStored(this.foodStored);
        this.check_objective();
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

        const black_tiles = map.addTilesetImage('black', 'black');
        const oak_woods_tileset = map.addTilesetImage('oak_woods_tileset', 'oak_woods_tileset');
        const city_buildings = map.addTilesetImage('city_buildings', 'city_buildings');
        const city_props = map.addTilesetImage('city_props', 'city_props');
        const city_tileset = map.addTilesetImage('city_tileset', 'city_tileset');
        const city2_tileset = map.addTilesetImage('city2_tileset', 'city2_tileset');
        const future_tiles = map.addTilesetImage('future_tiles', 'future_tiles');
        const neon_tiles = map.addTilesetImage('neon_tiles', 'neon_tiles');

        const black = map.createStaticLayer('Black Filter', [black_tiles]);
        const tintedBackground = map.createStaticLayer('Tinted Background', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const background = map.createStaticLayer('Background', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const base = this.platforms = map.createStaticLayer('Base', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const decoBackground = map.createStaticLayer('DecoBackground', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);
        const deco = map.createStaticLayer('Deco', [oak_woods_tileset, city_buildings, city_props, city_tileset, city2_tileset, future_tiles, neon_tiles], 0, 0);

        black.setScale(g.tileScale);
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
            if (foodSpawn.center) {
                if (foodSpawn.center == 'no') {
                    pos = cellToWorld(foodSpawn.x, foodSpawn.y);
                }
                if (foodSpawn.center == 'x') {
                    pos = cellToWorldCenterX(foodSpawn.x, foodSpawn.y);
                }
                if (foodSpawn.center == 'y') {
                    pos = cellToWorldCenterY(foodSpawn.x, foodSpawn.y);
                }
            }
            let food = this.foodGroup.create(pos.x, pos.y, foodSpawn.sprite);
            food.amount = foodSpawn.amount;

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

            food.setScale(g.tileScale);
            food.refreshBody();
        });
    }

    create_spikes() {
        this.spikesGroup = this.physics.add.staticGroup();
        spikeSpawns.forEach((spikeSpawn) => {
            let pos = cellToWorldCenter(spikeSpawn.x, spikeSpawn.y);
            if (spikeSpawn.center) {
                if (spikeSpawn.center == 'no') {
                    pos = cellToWorld(spikeSpawn.x, spikeSpawn.y);
                }
                if (spikeSpawn.center == 'x') {
                    pos = cellToWorldCenterX(spikeSpawn.x, spikeSpawn.y);
                }
            }
            let spike = this.spikesGroup.create(pos.x, pos.y, spikeSpawn.sprite);

            spike.setScale(g.tileScale);
            spike.refreshBody();
            spike.body.setSize(40, 40);
            spike.body.setOffset(16, 16);
            if (spikeSpawn.r) {
                spike.angle = spikeSpawn.r;
            }
        })
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

// linear interpolation
function lerp(from, to, t) {
    return from + (to - from) * t
}

function cellToWorld(cellX, cellY) {
    return { x: cellX * g.tileWidth * g.tileScale, y: cellY * g.tileWidth * g.tileScale }
}
function cellToWorldCenterX(cellX, cellY) {
    return { x: (cellX * g.tileWidth * g.tileScale) + (g.tileWidth / 2 * g.tileScale), y: cellY * g.tileWidth * g.tileScale }
}
function cellToWorldCenterY(cellX, cellY) {
    return { x: cellX * g.tileWidth * g.tileScale, y: (cellY * g.tileWidth * g.tileScale) + (g.tileHeight / 2 * g.tileScale) }
}
function cellToWorldCenter(cellX, cellY) {
    return { x: (cellX * g.tileWidth * g.tileScale) + (g.tileWidth / 2 * g.tileScale), y: (cellY * g.tileWidth * g.tileScale) + (g.tileHeight / 2 * g.tileScale) }
}

// angle between 2 objects
function getAngle(obj1, obj2) {
    // angle in degrees
    let angleDeg = (Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x) * 180 / Math.PI);
    return angleDeg;
}
function getPointInCircleFromAngle(angle) {
    return {
        x: Math.sin(angle),
        y: Math.sin(angle)
    };
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
            debug: false,
            gravity: { y: 1000 },
            enableBody: true,
        }
    },
    audio: {
        disableWebAudio: true
    },
    pixelArt: true,
    scene: [
        new StartingScene(),
        new GameScene(),
        new EndingScene(),
    ]
};

const game = new Phaser.Game(config);
game.g = g;

// Cheating purposes
function EndGame(catsLeft, food) {
    winState.food = food;
    winState.cats = catsLeft;
    currentScene.scene.start("EndingScene");
}
