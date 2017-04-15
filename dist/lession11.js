var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
displayColors("Red");
displayColors("Red", "Green", "Blue");
displayColors("Red", "Green");
//# sourceMappingURL=lession11.js.map