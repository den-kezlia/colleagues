var coworkers = {
    items: {},
    initCoworkers: function(game) {
        var dude = game.add.sprite(0, game.world.height - 100, 'dude');

        //  We need to enable physics on the player
        game.physics.arcade.enable(dude);

        //  Player physics properties. Give the little guy a slight bounce.
        dude.body.bounce.y = 0;
        dude.body.gravity.y = 10;
        dude.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        dude.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
        dude.animations.add('right', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);

        this.items = dude;
    }
};

module.exports = coworkers;