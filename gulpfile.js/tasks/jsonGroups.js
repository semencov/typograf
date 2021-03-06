'use strict';

const { src, dest } = require('gulp');
const fs = require('fs');
const gulpRename = require('gulp-rename');
const paths = require('../paths');

function jsonGroups() {
    return src(paths.json.groups)
        .pipe(gulpRename('typograf.groups.json'))
        .pipe(dest(paths.dir.build))
        .on('end', () => {
            const dir = paths.dir.build;
            const path = `${dir}typograf.groups.json`;
            const txt = fs.readFileSync(path);

            try {
                JSON.parse(txt);
            } catch(e) {
                console.error(`Error at ${path}`);
                process.exit(1);
            }

            fs.writeFileSync(`${dir}typograf.groups.js`, `export default ${txt};
`);
        });
}

module.exports = jsonGroups;
