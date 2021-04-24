
// for creating and deleting folder use mkdir and rmdir
/*
const fs = require('fs');
fs.mkdir('folder1',(err)=>{
	if(err)
		console.log(err);
	else
	{
		console.log('sucessfully folder created..');
		fs.rmdir('folder1',(err)=>{
			if(err)
				console.log(err);
			else
				console.log('sucessfully deleted also..');
		});
	}
});
*/
// for creating and deleting files in a folder use writfile and unlink 
// for reading directory use readdir

const fs=require('fs');
fs.mkdir('folder1',(err)=>{
	if(err)
		console.log(err);
	else
	{
		console.log('sucessfully folder created..');
		fs.writeFile('./folder1/a.txt','first file',(err)=>{
			if(err)
				console.log(err);
			else
				console.log('sucessfully created a.txt also..');
		});
		fs.writeFile('./folder1/b.txt','second file',(err)=>{
			if(err)
				console.log(err);
			else
				console.log('sucessfully created b.txt also..');
		});
		
	}
});
fs.readdir('folder1',(err,files)=>{
			if(err)
				console.log(err);
			else{
				console.log(files);
				for(let file of files)
				{
					fs.unlink('./folder1/'+file,(err)=>{
						if(err)
							console.log(err);
						else
							console.log('sucessfully deleted file');
					});
				}
			}
		});