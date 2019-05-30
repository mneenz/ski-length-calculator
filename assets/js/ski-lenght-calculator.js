//SKI LENGHT CALCULATOR JS
var inputLengthValue = '';
var inputAgeValue = '';
var inputStyleValue = '';

function ageFormCheck(that) {
    if (that.value == 8) {
        document.getElementById("style").style.display = "block";
    } else {
        document.getElementById("style").style.display = "none";
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
   } else if ((inputAgeValue == 8) && (inputStyleValue == 'Classic') && (inputLengthValue < 207)) {
     lengthCalculation = (inputLengthValue + 20);
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
   var divobj = document.getElementById('totalPrice');
   divobj.style.display='block';
   divobj.innerHTML = "You should get ski's with the following size:"+lengthCalculation+ ' cm';
}

function hideTotal() {
   var divobj = document.getElementById('totalPrice');
   divobj.style.display='none';
}
