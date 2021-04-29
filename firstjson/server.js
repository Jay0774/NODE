const express = require('express');
const bodyp = require('body-parser');
const path = require('path');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyp.urlencoded({extended : false}));
app.use(bodyp.json());
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'static','index.html'));
});
app.post('/',(req,res)=>{
	console.log(req.body);
	res.json({sucess : true});
});
app.listen(3000);