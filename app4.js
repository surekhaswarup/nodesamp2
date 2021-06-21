var exp = require ('express')
var app= exp()

app.get('/',function(req,res){
    res.send("You called Root" + port);
});

app.get('/download',function(req,res){
    res.download("./package.json",function(){
        console.log("Download is OVER");
    });
});

const port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log("server is runnning at " + port)
});