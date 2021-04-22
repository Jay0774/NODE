const rl= require('readline');
const r = rl.createInterface({input : process.stdin,
output : process.stdout});

let n1=Math.floor((Math.random()*10)+1);
let n2=Math.floor((Math.random()*10)+1);
let ans = n1+n2;

r.question("what is "+n1+"+"+n2+"? \n",(userinput)=>{
	if(userinput.trim()==ans){
		r.close();
	}
	else{
		r.setPrompt('Incorrect answer please try again..\n');
		r.prompt();
		r.on('line',(userinput)=>{
			if(userinput.trim()==ans)
			{ 
				r.close();
			}
			else
			{
				r.setPrompt('Your answer '+userinput+' is incorrect try again..\n');
				r.prompt();
			}
		});
	}
});

r.on('close',()=>{
	console.log('Correct answer!!!!!');
});