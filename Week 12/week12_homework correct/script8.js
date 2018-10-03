var myGreeting = [{ input:["hi","salam","are you busy"],output:[ 'awesome','good' ,'yes']},
{ input:["hey","chao","are you OK?"],output:[ 'fine','cool' ,'terrible!']},
{input:["whats up","how is your dAY?","do you feel better?"], output:[ 'great','not bad' ,'tired']}];//initiating an array with 3 input &output objects.
 console.log(myGreeting);//Displaying myGreeting array
async function showWeather() {//calling API with showWeather function using async-await
	let response = await fetch(//fetching the API called link
		'http://api.openweathermap.org/data/2.5/forecast?q=toronto&id=524901&APPID=5fd6885f22db74a75577fb62515ae40c'//API called this link included unique key
	);
	let data = await response.json();//waiting for fetching response
	return data;
}

function reply() { //declaring reply function
  //document.getElementById('imageDisplay').src = '';
 //user values
	let question = document.getElementById('input').value;// storing the input into question
	let randm = document.getElementById('random').checked;
	let shortest = document.getElementById('shortest').checked;
	let longest = document.getElementById('longest').checked;//accessing user's bottom and varify if checked

	let outputArray = [];//declaring outputArray

	for (let one of myGreeting) {//iterate the myGreeting array using for loop
		if (one.input.includes(question)) {//using the includes function to verify the input
			outputArray = one.output;
		}
	} // outputArray = [x,y,z]
	if (outputArray.length > 0) {// verifying the longest,Shortest
		console.log('2');
		let sorted = outputArray.sort((a, b) => {//
			return b.length - a.length;// returning the longest between a,b
		});
		document.getElementById('output').value += `User: ${question} \r\n`;//getting the value of output

		if (randm) {
			document.getElementById('output').value += `Chatbot: ${outputArray[
				Math.floor(Math.random() * 3)//creating a random number btw 0-2 and get its value
			]} \r\n \r \n`;
		} else if (shortest) {
			document.getElementById('output').value += `Chatbot: ${sorted[sorted.length - 1]} \r\n \r\n`;
		} else if (longest) {
			document.getElementById('output').value += `Chatbot: ${sorted[0]} \r\n \r\n`;
		}

	} else if (question === "let's see a nice puppy") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log(xhttp);
			if (this.readyState == 4 && this.status == 200) {
				// Typical action to be performed when the document is ready:
				//document.getElementById('imageDisplay').src = xhttp.responseURL;
        var obj = JSON.parse(this.responseText);
      document.getElementById("puppy").innerHTML = "<img src=" + obj.message + ">";
    	}
		};
		xhttp.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
		xhttp.send();
  }//calling API to get the dog photo
		//document.getElementById('puppy').src = 'https://images.dog.ceo/bâ€¦hound/n02089078_1454.jpg';
    else if (question == "set an alarm"){
      delayedAlert();//calling the alarm function
 }
else if (question === 'Show me the weather for today' || question === 'Show me the weather for tomorrow') {
		showWeather ()
			.then((data) => {
				if (question === 'Show me the weather for today') {
					document.getElementById('output').value += `Chatbot: ${Math.ceil(//getting the value of tempreture from the weather key
						data.list[0].main.temp - 273
					)} \r\n \r\n`;
				} else {
					document.getElementById('output').value += `Chatbot: ${Math.ceil(
						data.list[8].main.temp - 273
					)} \r\n \r\n`;
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	} else {
		document.getElementById('output').value = "I don't understand that command. Please enter another. \r\n \r\n";
	}
}
document.getElementById('submit').onclick=function(){reply()};//creating onclick function
var timeoutID;
function delayedAlert() {//alarm function
  timeoutID = window.setTimeout(slowAlert, 2000);
}
function slowAlert() {
  alert("Did you forget about me? It's your friend, the Alarm!");
}
function clearAlert() {
  window.clearTimeout(timeoutID);
}
