1/ function vehicle(vicColor,vicCode,vicAge) {

if (vicCode == 1 ){
    console.log(vicColor,vicCode = "car")
  }
    else {
      console.log(vicCode = "motorbike")
    }
if (vicAge > 0 && vicAge < 5){
      console.log(vicAge= "used")
    }
  else {

    console.log(vicAge= "new")
  }
   }
vehicle("blue",1,3)

//result//
"blue","car","used"

2/function myMotor(vicColor,vicCode,vicAge) {

if (vicCode == 3 ){
    console.log(vicColor,vicCode = "\tbike")
  }
    else if(vicCode == 2) {
      console.log(vicCode = "caravan")
    }

    else {
      console.log(vicCode = "motorbike")
    }

 if (vicAge > 0 && vicAge<5){
      console.log(vicAge= "used")
    }
  else {

    console.log(vicAge= "\tnew")
  }
   }
myMotor("\tgreen",3,0)

//result//
" green"
" bike"
" new"

3/ var hyfTeachers = {Youssef: 'intro', Rajaie: 'html.css', Saad: 'javaScript'};
console.log(hyfTeachers.Youssef);
// rsult//
'intro'
