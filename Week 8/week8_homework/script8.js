var myGreeting = [{ input:"hi",output:[ 'how is ur day?','Salam' ,'hey']},
{ input:"how are you?",output:[ 'fine','cool' ,'terrible!']},
{input:"whats up",output:[ 'great','not bad' ,'tired']}];
console.log(myGreeting);//Displaying myGreeting array
function reply(){ //Creating reply() function
var question = document.getElementById("input").value ;//the varible question assigned to the "input" value
var randomNumber = Math.floor(Math.random() * 3) + 0 ;// craeting arandom number btw 0-2 and store it in var
var filterType = null;// assigning filterType to null value
var myResult = myGreeting.filter(myGreeting => myGreeting.input == question); //filtered array stored in var
console.log(myResult);//printing the result of the filtered array
var x = myResult[0].output[2]; //accessing the properties of the output and store them in var x
console.log(x);

if (myResult.length > 0){
   if(document.getElementById("longest").checked == true) { //checking if the longest button has been clicked
     var myLongest = myResult[0].output.sort(function (a, b) { return b.length - a.length; })[0];//sorting out the longest num and store it
     document.getElementById('output').value=myLongest;// getting the value of the longgest
   }
      else if (document.getElementById("shortest").checked == true){//Checking if the shortest button has been clicked
        var myShortest = myResult[0].output.sort(function (a, b) { return a.length - b.length; })[0];//sorting out the shortest num and store it
       document.getElementById('output').value=myShortest;//getting the value of the shortest
     }
     else if (document.getElementById("random").checked == true){
        var myNum = myResult[0].output[randomNumber];//associated the randomNumber with the output
       document.getElementById('output').value = myNum;//getting the stored randomNumber value

     }
   }
  }
document.getElementById('submit').onclick=function(){reply()};
