"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LeakyBucketAlgorithm {
    constructor(millisecondsBetweenDropLeaks, sizeInDrops) {
        this.millisecondsBetweenDropLeaks = millisecondsBetweenDropLeaks;
        this.sizeInDrops = sizeInDrops;
        this.numberOfDrops = 0;
        this.timestampOfLastDropLeak = new Date(-8640000000000000);
    }
    addDrop() {
        const currentTimestamp = new Date();
        const millisecondsSinceLastDropLeaked = currentTimestamp.getTime() - this.timestampOfLastDropLeak.getTime();
        const numberOfDropsToLeak = Math.floor(millisecondsSinceLastDropLeaked / this.millisecondsBetweenDropLeaks);
        if (numberOfDropsToLeak > 0) {
            if (this.numberOfDrops <= numberOfDropsToLeak) {
                this.numberOfDrops = 0;
            }
            else {
                this.numberOfDrops -= numberOfDropsToLeak;
            }
            this.timestampOfLastDropLeak = currentTimestamp;
        }
        if (this.numberOfDrops < this.sizeInDrops) {
            this.numberOfDrops++;
            return true;
        }
        return false;
    }
    getNumberOfDrops() {
        return this.numberOfDrops;
    }
    toString() {
        return [
            `Burst of ${this.sizeInDrops} drops every ${this.milisecondsToString(this.sizeInDrops * this.millisecondsBetweenDropLeaks)}`,
            `Average of ${this.numberToString(1000 / this.millisecondsBetweenDropLeaks)} drops per second`,
            `Average of ${this.numberToString(60000 / this.millisecondsBetweenDropLeaks)} drops per minute`,
        ].join('\r\n');
    }
    milisecondsToString(value) {
        if (value < 1000) {
            return `${this.numberToString(value)} milliseconds`;
        }
        else if (value >= 1000 && value < 60000) {
            return `${this.numberToString(value / 1000)} seconds`;
        }
        else if (value >= 60000 && value < 3600000) {
            return `${this.numberToString(value / 1000 / 60)} minutes`;
        }
        else {
            return `${this.numberToString(value / 1000 / 60 / 60)} hours`;
        }
    }
    numberToString(value) {
        return (Math.round(value * 1000) / 1000).toString();
    }
}
exports.LeakyBucketAlgorithm = LeakyBucketAlgorithm;
//# sourceMappingURL=leaky-bucket-algoritm.js.map