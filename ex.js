// express first example
// params example
// querry example
const exp = require('express');
const app = exp();
app.get('/',(req,res)=>{
	res.send('hello this is first express example');
});

app.get('/example',(req,res)=>{
	res.send('hello this is first express example route');
});

app.get('/example/:name/:age',(req,res)=>{
	res.send('hello this is first express example route with parms');
	console.log(req.params.name +" : "+req.params.age);
	console.log(req.query);
});
app.listen('3000');