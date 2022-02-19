"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const core_1_1 = require("@core/core-1");
const s3_helper_1 = require("@aws-cloud/s3-helper");
var s3Helper = new s3_helper_1.S3Helper();
var core = new core_1_1.Core1(s3Helper);
function version() {
    return "feature-1\n---\n" + core.version() + "\n---";
}
exports.version = version;
