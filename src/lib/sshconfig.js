// sshconfig.js

"use strict"
var fs = require('fs');
var path = require('path');
var userHome = process.env.HOME || process.env.USERPROFILE;
var prefix = path.join(userHome, '.ssh');
var sshConfigDir = path.join(prefix, 'config.d');
var sshConfig = path.join(prefix, 'config');

function sshConfigUpdate() {
  fs.readdir(sshConfigDir, function (e, files) {
    if (e) {
      console.log("Run 'sshconfig init' before trying to update aliases.\n");
      throw e;
    }

    files.map(function (file) {
      return path.join(sshConfigDir, file);
    }).filter(function (file) {
      return fs.statSync(file).isFile();
    }).forEach(function (file) {
      var content = fs.readFileSync(file, 'utf8');
      fs.appendFileSync(sshConfig, content);
    });
  });
}

exports.convert = function() {
  if (process.argv.length > 2) {
    var arg = process.argv[2];

    switch (arg) {
      case 'update':
          try {
            sshConfigUpdate();
          } catch (e) {
            if ( e.code != 'EEXIST' ) throw e;
          }
        break;
      case 'init':
      default:
        try {
          fs.mkdirSync(sshConfigDir);
          console.log("SSH Config Manager is ready!\n\nAdd your first ssh alias at " + sshConfigDir);
        } catch (e) {
          if ( e.code != 'EEXIST' ) throw e;
        }
    }
  }
}
