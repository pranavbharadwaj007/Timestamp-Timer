"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Custom hook to manage a timer
function useTimestampTimer(initialTimestamp) {
    var _a = (0, react_1.useState)(0), elapsedTime = _a[0], setElapsedTime = _a[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            var currentTime = new Date().getTime();
            var elapsed = currentTime - initialTimestamp;
            setElapsedTime(elapsed);
        }, 1000); // Update every second
        return function () {
            clearInterval(interval);
        };
    }, [initialTimestamp]);
    return elapsedTime;
}
exports.default = useTimestampTimer;
