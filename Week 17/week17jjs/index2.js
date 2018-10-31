// Added URL query string checking
var myHttp = require('http');
var myUrl = require('url');
var sendIndianResponse = require('./sendIndianResponse');
const myServerPort = 8080;
 var num1=0;
 var num2=0;

function sendDefaultResponse(myResponse)
{
   myResponse.setHeader('Content-Type', 'text/html');
   myResponse.write(`
    <!html>
    <html>
      <head>
        <title> Canada</title>
      </head>
      <body>
        <h1>hello Rami</h1>
      </body>
      </html>
    `);
}
function sendAdditionResponse(result,myResponse)//creating the addition function
{
    myResponse.setHeader('Content-Type', 'text/html');
    myResponse.write(`
      <!html>
      <html>
        <head>
          <title> Canada</title>
        </head>
        <body>
          <h1>`+ num1 + `+` + num2 + `=`+result+`</h1>
        </body>
       </html>
     `);
 }
 function sendSubtractionResponse(result,myResponse)// creating the subtraction function
 {
     myResponse.setHeader('Content-Type', 'text/html');
     myResponse.write(`
      <!html>
      <html>
        <head>
          <title> Canada</title>
        </head>
        <body>
          <h1>`+ num1 + `-` + num2 + `=`+result+`</h1>
        </body>
        </html>
      `);
  }
  function sendMultiplyResponse(result,myResponse)//creating the multiplication function
  {
      myResponse.setHeader('Content-Type', 'text/html');
      myResponse.write(`
        <!html>
        <html>
          <head>
            <title> Canada</title>
          </head>
          <body>
            <h1>`+ num1 + `*` + num2 + `=`+result+`</h1>
          </body>
         </html>
       `);
  }
  function sendFoShoesResponse(myResponse)//creating the multiplication function
  {
      myResponse.setHeader('Content-Type', 'text/html');
      myResponse.write(`
        <!html>
        <html>
          <head>
          <style>
          .button {
              background-color: green;
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin: 4px 2px;
              cursor: pointer;
          }
          </style>
          </head>
          <body>
            <h1></h1>
              <p><a class="button" href="https://shop.nordstrom.com/c/mens-formal-shoes">Formal Shoes</a></p>
          </body>
         </html>
       `);
}
     function sendCaShoesResponse(myResponse)//creating the Cashoes function
     {
         myResponse.setHeader('Content-Type', 'text/html');
         myResponse.write(`
           <!html>
           <html>
             <head>
             <style>
             .button {
                 background-color: Maroon;
                 border: none;
                 color: white;
                 padding: 15px 32px;
                 text-align: center;
                 text-decoration: none;
                 display: inline-block;
                 font-size: 16px;
                 margin: 60px 8px;
                 cursor: pointer;
             }
             </style>
             </head>
             <body>
               <h1></h1>
                 <p><a class="button" href="https://www.softmoc.com/ca/mens-shoes/casual-shoes">Casual Shoes</a></p>
             </body>
            </html>
          `);
        }
function handleIncomingRequest (inRequest, myResponse) {
   var parsedUrl = myUrl.parse(inRequest.url, true);
   var inPath = parsedUrl.pathname;
   var inQuery = parsedUrl.query;
   switch(inPath)
   {
      case "/":
        // var inText = inQuery.greeting;
      sendDefaultResponse(myResponse);
      break;

      case "/add/":// declaring the two numbers
      num1 =inQuery.num1;
      num2=inQuery.num2;
     var result = parseInt(num1)+parseInt(num2);//parsing num1/num2
     sendAdditionResponse(result,myResponse);//calling addition function
     break;

     case "/sub/":
     num1 =inQuery.num1;
     num2=inQuery.num2;
     var result = parseInt(num1)-parseInt(num2);
     sendSubtractionResponse(result,myResponse);// calling subtaction function
     break;

     case "/multy/":
     num1 =inQuery.num1;
     num2=inQuery.num2;
     var result = parseInt(num1)*parseInt(num2);
     sendMultiplyResponse(result,myResponse);// calling multiplication function
     break;

     case "/FoShoes/": sendFoShoesResponse(myResponse);
     break;

     case "/CaShoes/": sendCaShoesResponse(myResponse);
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
   console.log("Serverz listening on port " + myServerPort)
});
