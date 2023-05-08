

        //this.load.image('platform', 'images/platform.png');
        //this.load.spritesheet('campfire', 'images/campfire.png', { frameWidth: 32, frameHeight: 32 });
        

    //createStars() {
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
    //}

    
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

        
    //createSnow() {
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
    //} // createSnow()

    //setWeather(weather) {

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
    //} // setWeather(weather)

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