var express = require('express')
    ,app = express()
    ,last_value;

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {

  var text = "req: " + req.query.command + " --> ";
  if(req.query.command == ""){
    text = "{\"command\": \"" + last_value + "\"}";
  }else{
  	if(req.query.command == "empty"){
  		last_value = "";
  		text = "{}"
  	}else{
      last_value = req.query.command;
      text = text + "{ \"new_command\": \"" + last_value + "\"}";
  	}
  } res.send(text);
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
})
