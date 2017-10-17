"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var EventsMock = /** @class */ (function () {
    function EventsMock() {
    }
    EventsMock.instance = function () {
        return create_spy_1.createSpyObj('events', ['subscribe', 'publish', 'unsubscribe']);
    };
    return EventsMock;
}());
exports.EventsMock = EventsMock;
//# sourceMappingURL=events.js.map