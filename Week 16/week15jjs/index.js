//Broke down into multiple files
var myHttp = require('http');
var sendIndianResponse = require('./sendIndianResponse');
var sendSyrianResponse = require('./sendSyrianResponse');
const myServerPort = 8080;

function sendDefaultResponse(myResponse)
{
    myResponse.setHeader('Content-Type', 'text/html');
    myResponse.write(`
   	 <!html>
   	 <html>
   		 <head>
   			 <title>Hello Canada</title>
   		 </head>
   		 <body>
       <h1>Hello Rami</h1>
          		 </body>
          	 </html>
           `);
       }

       function handleIncomingRequest (inRequest, myResponse) {
           switch(inRequest.url)
           {
          	 case "/": sendDefaultResponse(myResponse);
          		 break;
          	 case "/India": sendIndianResponse(myResponse);
          		 break;
          	 case "/Syria": sendSyrianResponse(myResponse);
          		 break;
          	 //case "/ethiopia": sendEthiopianResponse(myResponse);
          	 //    break;
          	 //case "/pakistan": sendPakistaniResponse(myResponse);
          	 //    break;
          	 default:
          		 myResponse.statusCode = 404;
               	myResponse.writeHead(200, {'Content-Type': 'text/plain'});
               	myResponse.write("Error! Information not found.");
               	break;
           }
           myResponse.end();
       }

       var myServer = myHttp.createServer(handleIncomingRequest);
       myServer.listen(myServerPort, function() {
           console.log("Server listening on port " + myServerPort)
       });
