 var myGreeting = [{ input:["hi","salam","are you busy"],output:[ 'awesome','good' ,'yes']},
{ input:["hey","chao","are you OK?"],output:[ 'fine','cool' ,'terrible!']},
{input:["whats up","how is your dAY?","do you feel better?"], output:[ 'great','not bad' ,'tired']}];//initiating an array with 3 input &output objects.
 console.log(myGreeting);//Displaying myGreeting array
function reply(){ //Creating reply() function
var question = document.getElementById("input").value ;//assigning the input to var question
var randomNumber = Math.floor(Math.random() * 3) + 0 ;// creating a random number btw 0-2 and store it in var
var filterType = null;// assigning filterType to null value
var timeoutID;
if (question == "set an alarm"){
  delayedAlert();
}
else if (question == "let's see a nice puppy"){
 loadDoc();
}
else{
for(i= 0;i<3;i++){//creating for loop ot iterate over the input array
if  (myGreeting[i].input.includes(question)){//using includes method to verify to compare btw 'myGreeting.input' and var question
var userInput = myGreeting[i].input.filter(myGreeting => myGreeting==question)//filter for array myGreeting and store it in var userInput
console.log(userInput);
 if(document.getElementById("longest").checked == true) { //checking if the longest button has been clicked
    var myLongest = myGreeting[i].output.sort(function (a, b) { return b.length - a.length; })[0];//sorting out the longest num and store it
 document.getElementById('output').value +=   "user:" +userInput+"\nchatbot: " + myLongest+"\n" ;//concatinating the 'userInput with the output value'
}
  else if (document.getElementById("shortest").checked == true){//Checking if the shortest button has been clicked
      var myShortest = myGreeting[i].output.sort(function (a, b) { return a.length - b.length; })[0];//sorting out the shortest num and store it
      document.getElementById('output').value += "User:"+userInput+"\nchatbot:"+myShortest+"\n";////concatinating the 'userInput with the output value
    }
   else if (document.getElementById("random").checked == true){//Checking if the random button has been clicked
       var myNum = myGreeting[i].output[randomNumber];//associated the randomNumber with the output
       document.getElementById('output').value +=  "user:"+userInput+"\nchatbot:"+myNum+"\n";//concatinating the 'userInput with the output value
      }
     }
    }
   }
  }
document.getElementById('submit').onclick=function(){reply()};//creating onclick function
function loadDoc() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var obj = JSON.parse(this.responseText);
      document.getElementById("puppy").innerHTML = "<img src=" + obj.message + ">";
    }
  }
  http.open("GET", "https://dog.ceo/api/breeds/image/random ", true);
  http.send();
}
var timeoutID;
function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}
function slowAlert() {
  alert("Did you forget about me? It's your friend, the Alarm!");
}
function clearAlert() {
  window.clearTimeout(timeoutID);
}
