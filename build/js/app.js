var tables = require('./furniture/tables');
var furniture = require('./furniture/furniture');
var coworkers = require('./coworkers/coworkers');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('floor', '../img/floor.jpg');
    game.load.image('table', '../img/furniture/desc.png');
    game.load.image('sofa', '../img/furniture/sofa.png');
    game.load.spritesheet('dude', '../img/dude.png', 67, 100);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, game.world.width, game.world.height, 'floor');

    tables.initTables(game);
    furniture.initFurnitures(game);
    coworkers.initCoworkers(game);

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    game.physics.arcade.collide(coworkers.items, tables.items);
    game.physics.arcade.collide(coworkers.items, furniture.items);

    coworkers.items.body.velocity.x = 0;
    coworkers.items.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        coworkers.items.body.velocity.x = -150;

        coworkers.items.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        coworkers.items.body.velocity.x = 150;

        coworkers.items.animations.play('right');
    }
    else if (cursors.up.isDown)
    {
        //  Move to the right
        coworkers.items.body.velocity.y = -150;

        coworkers.items.animations.play('left');
    }
    else if (cursors.down.isDown)
    {
        //  Move to the right
        coworkers.items.body.velocity.y = 150;

        coworkers.items.animations.play('right');
    }
    else
    {
        //  Stand still
        coworkers.items.animations.stop();

        coworkers.items.frame = 1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhYmxlcyA9IHJlcXVpcmUoJy4vZnVybml0dXJlL3RhYmxlcycpO1xudmFyIGZ1cm5pdHVyZSA9IHJlcXVpcmUoJy4vZnVybml0dXJlL2Z1cm5pdHVyZScpO1xudmFyIGNvd29ya2VycyA9IHJlcXVpcmUoJy4vY293b3JrZXJzL2Nvd29ya2VycycpO1xuXG52YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDYwMCwgUGhhc2VyLkFVVE8sICcnLCB7IHByZWxvYWQ6IHByZWxvYWQsIGNyZWF0ZTogY3JlYXRlLCB1cGRhdGU6IHVwZGF0ZSB9KTtcblxuZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgICBnYW1lLmxvYWQuaW1hZ2UoJ2Zsb29yJywgJy4uL2ltZy9mbG9vci5qcGcnKTtcbiAgICBnYW1lLmxvYWQuaW1hZ2UoJ3RhYmxlJywgJy4uL2ltZy9mdXJuaXR1cmUvZGVzYy5wbmcnKTtcbiAgICBnYW1lLmxvYWQuaW1hZ2UoJ3NvZmEnLCAnLi4vaW1nL2Z1cm5pdHVyZS9zb2ZhLnBuZycpO1xuICAgIGdhbWUubG9hZC5zcHJpdGVzaGVldCgnZHVkZScsICcuLi9pbWcvZHVkZS5wbmcnLCA2NywgMTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIGdhbWUuYWRkLnRpbGVTcHJpdGUoMCwgMCwgZ2FtZS53b3JsZC53aWR0aCwgZ2FtZS53b3JsZC5oZWlnaHQsICdmbG9vcicpO1xuXG4gICAgdGFibGVzLmluaXRUYWJsZXMoZ2FtZSk7XG4gICAgZnVybml0dXJlLmluaXRGdXJuaXR1cmVzKGdhbWUpO1xuICAgIGNvd29ya2Vycy5pbml0Q293b3JrZXJzKGdhbWUpO1xuXG4gICAgY3Vyc29ycyA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGNvd29ya2Vycy5pdGVtcywgdGFibGVzLml0ZW1zKTtcbiAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmNvbGxpZGUoY293b3JrZXJzLml0ZW1zLCBmdXJuaXR1cmUuaXRlbXMpO1xuXG4gICAgY293b3JrZXJzLml0ZW1zLmJvZHkudmVsb2NpdHkueCA9IDA7XG4gICAgY293b3JrZXJzLml0ZW1zLmJvZHkudmVsb2NpdHkueSA9IDA7XG5cbiAgICBpZiAoY3Vyc29ycy5sZWZ0LmlzRG93bilcbiAgICB7XG4gICAgICAgIC8vICBNb3ZlIHRvIHRoZSBsZWZ0XG4gICAgICAgIGNvd29ya2Vycy5pdGVtcy5ib2R5LnZlbG9jaXR5LnggPSAtMTUwO1xuXG4gICAgICAgIGNvd29ya2Vycy5pdGVtcy5hbmltYXRpb25zLnBsYXkoJ2xlZnQnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3Vyc29ycy5yaWdodC5pc0Rvd24pXG4gICAge1xuICAgICAgICAvLyAgTW92ZSB0byB0aGUgcmlnaHRcbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmJvZHkudmVsb2NpdHkueCA9IDE1MDtcblxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuYW5pbWF0aW9ucy5wbGF5KCdyaWdodCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjdXJzb3JzLnVwLmlzRG93bilcbiAgICB7XG4gICAgICAgIC8vICBNb3ZlIHRvIHRoZSByaWdodFxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuYm9keS52ZWxvY2l0eS55ID0gLTE1MDtcblxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuYW5pbWF0aW9ucy5wbGF5KCdsZWZ0Jyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnNvcnMuZG93bi5pc0Rvd24pXG4gICAge1xuICAgICAgICAvLyAgTW92ZSB0byB0aGUgcmlnaHRcbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmJvZHkudmVsb2NpdHkueSA9IDE1MDtcblxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuYW5pbWF0aW9ucy5wbGF5KCdyaWdodCcpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAvLyAgU3RhbmQgc3RpbGxcbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmFuaW1hdGlvbnMuc3RvcCgpO1xuXG4gICAgICAgIGNvd29ya2Vycy5pdGVtcy5mcmFtZSA9IDE7XG4gICAgfVxufSJdLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
