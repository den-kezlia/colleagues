var furniture = {
    items: {},
    initFurnitures: function(game) {
        var furniture = game.add.group();
        furniture.enableBody = true;

        var sofa = furniture.create(game.world.width - 130, 170, 'sofa');
        sofa.scale.setTo(2);
        sofa.body.immovable = true;

        this.items = furniture;
    }
};

module.exports = furniture;