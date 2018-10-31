function sendIndianResponse(myResponse)
{
    myResponse.setHeader('Content-Type', 'text/html');
    myResponse.write(`
   	 <!html>
   	 <html>
   		 <head>
   			 <title>Hello India</title>
   		 </head>
   		 <body>
   			 <h1>Namaste</h1>
   		 </body>
   	 </html>
    `);
}

module.exports = sendIndianResponse;
