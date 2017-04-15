var employee = {
    id: 1,
    getLog: function () {
        var _this = this;
        var self = this;
        setTimeout(function () {
            console.log(self.id);
        }, 1000);
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
employee.getLog();
//# sourceMappingURL=lession9.js.map