class UI extends Phaser.GameObjects.Sprite {

    constructor(game) {
        super(game, 0, 0, "nothing");
        game.add.existing(this);

        this.init(game);
    }

    init(game) {

        this.children = [];
        this.interactText = game.add.text(0, 0, `Press F to interact`, { fontFamily: 'LameFont' });
        this.add(this.interactText);

        this.staminaFiller = game.add.sprite(0, 0, 'UI_filler_green');
        this.staminaFillbar = game.add.sprite(0, 0, 'UI_fillbar_blue');
        this.addSprite(this.staminaFiller);
        this.addSprite(this.staminaFillbar);
        this.setStamina(1);

    }

    add(obj) {
        this.children.push(obj);
        obj.setOrigin(0, 0);
    }

    addSprite(obj) {
        this.add(obj);
        obj.setScale(game.g.pixelScale);
    }

    update(data) {

        const game = data.game;
        const cam = game.cameras.main;

        this.children.forEach((child) => {
            child.x = cam.scrollX + 10;
            child.y = cam.scrollY + 10;
        })
    }

    setStamina(current) {
        this.staminaFiller.setScale(game.g.pixelScale * (current / 1.1), game.g.pixelScale);
    }


}