const fs = require('fs');
const path = require('path');
const DirArchiver = require('dir-archiver');

if(process.argv.length < 3)
{
    console.log('missing argument');
    process.exit(1);
}
const my_args = process.argv.slice(2);
const my_dir = my_args[0];
const full_path_dir = path.resolve(my_dir);
const manifest_file = `${full_path_dir}${path.sep}manifest.webapp`;
let filename = '';
if (fs.existsSync(manifest_file))
{
    const data = fs.readFileSync(manifest_file);
    let tmp = JSON.parse(data);
    // clear all non alphanumeric character and spaces
    filename = tmp.name.toLowerCase()
        .replace(/\s/g, '')
        .replace(/[^a-z0-9]/gmi, "")
        .replace(/\s+/g, "")  + '.zip';
}
else
{
    console.log('missing manifest');
    process.exit(1);
}

const file_out = `${process.cwd()}${path.sep}${filename}`;
const excludes = [];

process.chdir(full_path_dir);

var archive = new DirArchiver('./', file_out, excludes);

archive.createZip();
console.log('zip created');