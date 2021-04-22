const fs = require('fs');
/// create file
fs.writeFile('example.txt','this is an example text entered in file',(err)=>{
	if(err)
		console.log(err);
	else
	{
		console.log('File sucessfully created');
		
		/// fs 3 arguments filename, encoding type, function 
		// file without encoding
		fs.readFile('example.txt',(err,file)=>{
			if(err)
				console.log(err);
			else
			{
				console.log("file without encoding => " + file );
			}
		});
		// file with encoding 
		fs.readFile('example.txt','utf8',(err,file)=>{
			if(err)
				console.log(err);
			else
			{
				console.log("file with encoding => " + file );
			}	
		});
	}
	
});

/*

//rename file

fs.rename('example.txt','exapmle2.txt',(e)=>{
	if(e)
		console.log(e);
	else
		console.log("file sucessfully renamed");
});
*/