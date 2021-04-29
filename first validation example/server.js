// npm install joi for validation
const Joi = require('joi');
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
	const schema = Joi.object().keys({
		email : Joi.string().trim().email().required(),
		password : Joi.string().min(5).max(10).required()	
	});
	const val = schema.validate(req.body);
	res.send(val);
	res.json({sucess : true});
});
app.listen(3000);