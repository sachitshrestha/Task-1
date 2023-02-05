import express from 'express'
var app = express();
import bodyParser from "bodyParser"
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// const server = http.createserver(function(req,res){})

app.use(express.static('public'));
app.get('/form.html', function(req, res)
{
	res.sendFile( __dirname + "/" + "form.html");

})

app.post('/process_post', urlencodedParser, function(req, res)
{
	response ={
		first_name:req.query.first_name,
		last_name:req.query.last_name,
		Email: req.query.Email,
		Phone: req.query.Phone,
		Gender:req.query.Gender,
		Hobbies:req.query.Hobbies

		};
			   console.log(reponse);
			   res.end(JSON.stringify(response));
})


var server = app.listen(8080,function()
{
	var host = server.address().address
	var port =  server.address().port
	console.log("app listening to the port", host ,port);
})