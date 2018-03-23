"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leaky_bucket_algoritm_1 = require("./leaky-bucket-algoritm");
const leakyBucketAlgorithm = new leaky_bucket_algoritm_1.LeakyBucketAlgorithm(200, 10);
console.log(leakyBucketAlgorithm.toString());
function setupTimeout() {
    setTimeout(() => {
        if (leakyBucketAlgorithm.addDrop()) {
            console.log(`Added (${leakyBucketAlgorithm.getNumberOfDrops()})`);
        }
        else {
            console.log(`Overflow (${leakyBucketAlgorithm.getNumberOfDrops()})`);
        }
        setupTimeout();
    }, (500 * Math.random()) + 50);
}
setupTimeout();
//# sourceMappingURL=app.js.map