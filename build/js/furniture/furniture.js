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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmdXJuaXR1cmUvZnVybml0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBmdXJuaXR1cmUgPSB7XG4gICAgaXRlbXM6IHt9LFxuICAgIGluaXRGdXJuaXR1cmVzOiBmdW5jdGlvbihnYW1lKSB7XG4gICAgICAgIHZhciBmdXJuaXR1cmUgPSBnYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICBmdXJuaXR1cmUuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHNvZmEgPSBmdXJuaXR1cmUuY3JlYXRlKGdhbWUud29ybGQud2lkdGggLSAxMzAsIDE3MCwgJ3NvZmEnKTtcbiAgICAgICAgc29mYS5zY2FsZS5zZXRUbygyKTtcbiAgICAgICAgc29mYS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IGZ1cm5pdHVyZTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1cm5pdHVyZTsiXSwiZmlsZSI6ImZ1cm5pdHVyZS9mdXJuaXR1cmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
