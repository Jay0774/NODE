// create http server in node

const http = require('http');
const ser = http.createServer((req,res)=>{
	if(req.url === '/')
	{
		res.write('Hello this is http sever from node js');
		res.end();
	}
	else
	{
		res.write('Hello this is http sever from other doamin');
		res.end();
	}

});

ser.listen('3000');