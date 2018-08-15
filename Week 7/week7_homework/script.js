var myObject = {input:'how are you?',output:'Excellent!'};
console.log(myObject);
function reply(){
  var question = document.getElementById("input").value
  if (question == myObject.input)  {
  document.getElementById("output").value = myObject.output;
  }
   else {
   document.getElementById("output").value =("I don't understand the command.Please enter another");
}
}
// document.getElementById("submit").onclick = reply();






//
