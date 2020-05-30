var net = require("net")
var util = require('util');

const port = process.env.PORT

console.log(`Listening on ${port}`)

const telnetServer = net.createServer()

var muteStatus = 'MUOFF'

telnetServer.on('connection',function(client){

	client.on('data',function(data){
    var command = Buffer.from(data).toString()
    command.trim()

    switch(command) {
      case 'MU?':
        client.write(muteStatus)
        break;
      case 'MUON':
        muteStatus = 'MUON'
        client.write(`${muteStatus}\r`)
        break;
      case 'MUOFF':
        muteStatus = 'MUOFF'
        client.write(`${muteStatus}\r`)
        break;
    }
	})

	client.on('end', function(data){

	})
})

telnetServer.listen(port);