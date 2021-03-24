import fs from "fs";
import path from "path";

/**
 * Copies files recursively, equivalent to cp -R on linux.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
export const copyRecursiveSync = function (src: string, dest: string) {
  var exists = fs.existsSync(src);
  var stats = exists ? fs.statSync(src) : null;
  var isDirectory = exists && stats && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};
