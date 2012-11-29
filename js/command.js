(function () {
    Vimulator.Command = function (options) {
        this.argType = options.argument || "none";
        this.callback = options.callback;
        this.subCommands = options.subCommands;
        this.defaultCount = "defaultCount" in options ? options.defaultCount : 1;
    };

    Vimulator.Command.prototype.wantsOperation = function () {
        return this.argType === "operation";
    };

    Vimulator.Command.prototype.wantsLiteral = function () {
        return this.argType === "literal";
    };

    Vimulator.Command.prototype.getCommand = function (key) {
        return this.subCommands.getCommand(key);
    };

    Vimulator.Command.prototype.execute = function (vim, count, argument) {
        count = count === null ? this.defaultCount : count;
        this.callback(vim, count, argument);
    };
}());