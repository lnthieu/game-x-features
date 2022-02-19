import { Core1 } from "@core/core-1"
import { S3Helper } from "@aws-cloud/s3-helper"


var s3Helper = new S3Helper();
var core = new Core1(s3Helper);

export function version(): string {
  
  return "feature-1\n---\n" + core.version() +"\n---";
}
