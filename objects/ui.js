class UI extends Phaser.GameObjects.Sprite {

    constructor(game) {
        super(game, 0, 0, "nothing");
        game.add.existing(this);

        this.init(game);
    }

    init(game) {

        this.children = [];
        this.interactText = game.add.text(0, 100, `Press F to interact`, { fontFamily: 'LameFont' });
        this.interactText.setOrigin(0.5, 0);

        //
        this.staminaFiller = game.add.sprite(1170, 700, 'UI_filler_green');
        this.staminaFillbar = game.add.sprite(1170, 700, 'UI_fillbar_blue');
        this.staminaText = game.add.text(1170 + 36, 700 - 146, `STAMINA`, { fontFamily: 'LameFont' });
        this.staminaFiller.setOrigin(0, 0);
        this.staminaFillbar.setOrigin(0, 0);
        this.staminaFillbar.setScale(game.g.pixelScale);
        this.staminaFiller.setScale(game.g.pixelScale);

        this.staminaFillbar.angle = this.staminaFiller.angle = -90;

        this.addSprite(this.staminaFiller);
        this.addSprite(this.staminaFillbar);
        this.add(this.staminaText);

        this.setStamina(1);

        //
        this.timeUntilWinter = game.add.text(640, 8, `Time Until Winter: `, { fontFamily: 'LameFont', fontSize: 28 });
        this.timeUntilWinter.setOrigin(0.5, 0);

        this.foodStored = game.add.text(8, 8, `Food Stored: 0`, { fontFamily: 'LameFont', fontSize: 24 });
        this.foodRequired = game.add.text(8, 48, `Food Required for 3 Cats: 300`, { fontFamily: 'LameFont', fontSize: 24 });
        this.foodHoldingIcon = game.add.sprite(8, 8, 'food');

        this.add(this.timeUntilWinter);
        this.add(this.foodStored);
        this.add(this.foodRequired);

        //
        this.foodHolding = game.add.text(8, 28, `x0`, { fontFamily: 'LameFont', fontSize: 24 });
        this.foodHoldingIcon.setOrigin(0, 0);
        this.foodHoldingIcon.setScale(1);

        let foodContainer = cellToWorld(64, 37);
        this.foodStoredW = game.add.text(foodContainer.x, foodContainer.y, `x0`, { fontFamily: 'LameFont', fontSize: 36 });
        this.foodStoredW.setOrigin(0, 0);
        this.foodStoredIconW = game.add.sprite(foodContainer.x - 48, foodContainer.y - 8, 'food');
        this.foodStoredIconW.setOrigin(0, 0);
        this.foodStoredIconW.setScale(2);

    }

    add(obj) {
        this.children.push(obj);
        obj.initialOffset = { x: obj.x, y: obj.y };
    }

    addSprite(obj) {
        this.add(obj);
    }

    update(data) {

        const game = data.game;
        const cam = game.cameras.main;
        const player = data.player;

        this.children.forEach((child) => {
            let x = 0;
            let y = 0;
            if (child.initialOffset) {
                x += child.initialOffset.x;
                y += child.initialOffset.y;
            }
            if (child.uiOffset) {
                x += child.uiOffset.x;
                y += child.uiOffset.y;
            }
            child.x = cam.scrollX + x;
            child.y = cam.scrollY + y;
        })

        this.foodHolding.x = player.x;
        this.foodHolding.y = player.y + 64;

        this.foodHoldingIcon.x = player.x - 28;
        this.foodHoldingIcon.y = player.y + 64;
    }

    setStamina(current) {
        this.staminaFiller.setScale(game.g.pixelScale * current, game.g.pixelScale);
    }

    setInteract(obj) {
        if (obj) {
            this.interactText.x = obj.x;
            this.interactText.y = obj.y - 54;
        }
        else {
            this.interactText.x = -100000;
            this.interactText.y = -100000;
        }
    }

    setFoodHolding(amount) {
        this.foodHolding.setText(`x${amount}`);
    }

    setFoodStored(amount) {
        this.foodStored.setText(`Food Stored: ${amount}`);
        this.foodStoredW.setText(`x${amount}`)
    }


}