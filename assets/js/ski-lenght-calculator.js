//SKI LENGHT CALCULATOR JS
var inputLengthValue = '';
var inputAgeValue = '';
var inputStyleValue = '';

function ageFormCheck(that) {
    if (that.value == 8) {
        document.getElementById("style-block").style.display = "block";
    } else {
        document.getElementById("style-block").style.display = "none";
    }
}

function calculateTotal() {
   //Here we get the totals by calling our function
   //Each function returns a number so by calling them we add the values they return together
   var inputLengthValue = +document.getElementById("length").value;
   var inputAgeValue = +document.getElementById("age").value;
   var inputStyleValue = document.getElementById("style").value;
   var lengthCalculation = 0;

   //Barn 0-4 år: kroppslängd + 0 cm.
   if (inputAgeValue == 0) {
     lengthCalculation = inputLengthValue;
   //Barn 5-8 år: kroppslängd + 10 till 20 cm.
   } else if (inputAgeValue == 5) {
     lengthCalculation = (inputLengthValue + 10) + '-' + (inputLengthValue + 20);
   //Klassisk: kroppslängd + 20cm. Klassiska skidor tillverkas bara till längder upp till 207cm.
 } else if ((inputAgeValue == 8) && (inputStyleValue == 'Classic')){
   if(inputLengthValue < 207) {
     lengthCalculation = (inputLengthValue + 20);
   } else {
     lengthCalculation = 'Classic skis are only manufactured up to 207cm. Try Freestyle instead.';
   }
   //Fristil: kroppslängd + 10 till 15 cm.
   } else if ((inputAgeValue == 8) && (inputStyleValue == 'Freestyle')) {
     lengthCalculation1 = inputLengthValue + 10;
     lengthCalculation2 = inputLengthValue + 15;
     //Enligt tävlingsreglerna får inte skidan understiga kroppslängden med mer än 10cm.
     if ((lengthCalculation1 || lengthCalculation2) < (inputLengthValue - 10) ){
       //This is not possible since the ski's length is always 10 more than the person length
     } else {
      lengthCalculation = (inputLengthValue + 10) + '-' + (inputLengthValue + 15);
    }
   }

   //display the result
   var totalLengthObject = document.getElementById('totalLength');
   totalLengthObject.style.display='block';
   //If the user has chosen classic and is over 207cm tall we need a special text
   if ((inputAgeValue == 8) && (inputStyleValue == 'Classic') && (inputLengthValue > 207)){
     totalLengthObject.innerHTML = lengthCalculation;
   } else {//Otherwise, just run the normal totalLengthText
     totalLengthObject.innerHTML = "You should get skis with the following size: "+lengthCalculation+ ' cm';
   }
}

function hideTotal() {
   var totalLengthObject = document.getElementById('totalLength');
   totalLengthObject.style.display='none';
}
