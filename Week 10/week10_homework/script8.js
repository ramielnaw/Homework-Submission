var myGreeting = [{ input:["hi","salam","are you busy"],output:[ 'awesome','good' ,'yes']},
{ input:["hey","chao","are you OK?"],output:[ 'fine','cool' ,'terrible!']},
{input:["whats up","how is your dAY?","do you feel better?"], output:[ 'great','not bad' ,'tired']}];
 console.log(myGreeting);//Displaying myGreeting array
function reply(){ //Creating reply() function
var question = document.getElementById("input").value ;
var randomNumber = Math.floor(Math.random() * 3) + 0 ;// creating a random number btw 0-2 and store it in var
var filterType = null;// assigning filterType to null value
for(i= 0;i<3;i++){
if  (myGreeting[i].input.includes(question)){
  if(document.getElementById("longest").checked == true) { //checking if the longest button has been clicked
    var myLongest = myGreeting[i].output.sort(function (a, b) { return b.length - a.length; })[0];//sorting out the longest num and store it

    document.getElementById('output').value = ("chatbot :" + myLongest) ;
}
}
  else if (document.getElementById("shortest").checked == true){//Checking if the shortest button has been clicked
       var myShortest = myGreeting[i].output.sort(function (a, b) { return a.length - b.length; })[0];//sorting out the shortest num and store it
      document.getElementById('output').value= ("chatbot :" + myShortest);//getting the value of the shortest
    }
    else if (document.getElementById("random").checked == true){
       var myNum = myGreeting[i].output[randomNumber];//associated the randomNumber with the output
      document.getElementById('output').value =  ("chatbot : "    + myNum) ;//getting the stored randomNumber value
    }
return console.log("right")
}
}
return console.log("wronge")
}
document.getElementById('submit').onclick=function(){reply()};
