var express=require('express');
var path=require('path');
var app=express();
console.log(__dirname);
app.use('/static', express.static('public'));
app.get('/',function(req,res)){
	res.status(200);
	res.sendFile(path.join(__dirname,'/index.html'));
};

app.get('/login',function(req,res)){
res.status(200);
res.sendFile(path.join(__dirname,'/login.html'));
};
app.listen(3000,function())
{
console.log("we are listening at port 3000");
};
