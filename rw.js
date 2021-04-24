// readstream and writestream 
const fs = require('fs');
const r = fs.createReadStream('./example.txt','utf8');
const w = fs.createWriteStream('example2.txt');
r.on('data',(chunk)=>{
	w.write(chunk);
});

// this can also be done using pipes
const fs = require('fs');
const r = fs.createReadStream('./example.txt','utf8');
const w = fs.createWriteStream('example2.txt');
r.pipe(w);

// for reading large files or to compress them for uncompression use "Gunzip"
const fs = require('fs');
const z = require('zlib');
const g = z.createGzip();
const r = fs.createReadStream('./example.txt','utf8');
const w = fs.createWriteStream('example2.txt.gz');
r.pipe(g).pipe(w);