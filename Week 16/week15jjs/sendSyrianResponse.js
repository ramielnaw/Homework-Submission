
function sendSyrianResponse(myResponse)
{
    myResponse.setHeader('Content-Type', 'text/html');
    myResponse.write(`
   	 <!html>
   	 <html>
   		 <head>
   			 <title>Hello Syria</title>
   		 </head>
   		 <body>
   			 <h1>Marhaba</h1>
   		 </body>
   	 </html>
    `);
}

module.exports = sendSyrianResponse;
