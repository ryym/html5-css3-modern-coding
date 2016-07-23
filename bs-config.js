/*
 | Browser-sync config file
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 */
module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": [
      "index.html",
      "standard-layout"
    ],
    "server": true,
    "port": 3000
};
