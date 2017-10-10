"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventsMock = /** @class */ (function () {
    function EventsMock() {
    }
    EventsMock.instance = function () {
        return jasmine.createSpyObj('events', ['subscribe', 'publish', 'unsubscribe']);
    };
    return EventsMock;
}());
exports.EventsMock = EventsMock;
//# sourceMappingURL=events.js.map