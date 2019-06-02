//SKI LENGHT CALCULATOR JS

//Create or input field variable strings.
var inputLengthValue = '';
var inputAgeValue = '';
var inputStyleValue = '';

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
     lengthCalculation = 'Classic skis are only manufactured up to 207cm.<br>Try Freestyle instead.';
   }
   //Fristil: kroppslängd + 10 till 15 cm.
   } else if ((inputAgeValue == 8) && (inputStyleValue == 'Freestyle')) {
     lengthCalculation1 = inputLengthValue + 10;
     lengthCalculation2 = inputLengthValue + 15;
     //Enligt tävlingsreglerna får inte skidan understiga kroppslängden med mer än 10cm.
     if ((lengthCalculation1 || lengthCalculation2) < (inputLengthValue - 10) ){
       //This is not possible since the skis length is always 10 more than the person length
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
     totalLengthObject.innerHTML = "<h3>Recommended ski length:</h3>"+lengthCalculation+ ' cm';
   }
}

//Hide/Show the Ski style based on age
function ageFormCheck(that) {
    if (that.value == 8) { //If the user is older than 8
        document.getElementById("style-block").style.display = "block";
    } else {
        document.getElementById("style-block").style.display = "none";
    }
}

//Display the range value
//taken from https://css-tricks.com/value-bubbles-for-range-inputs/
function updateRangeHtml() {
  var el, newPoint, newPlace, offset, siblings, k;
    width    = this.offsetWidth; //Get the input width
    newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min")); //Calculate where how far the point has been dragged
    offset   = -1;
    if (newPoint < 0) { newPlace = 0;  }//If the point is less than 0, make the newplace 0
    else if (newPoint > 1) { newPlace = width; } //If the point is larger then 1, set the newplace to our width variable
    else { newPlace = width * newPoint + offset; offset -= newPoint;} //Otherwise, take the width times our new point plus the offset. Make the offset variable: offset (-1) minus the new point.
    outPutObject = document.getElementById("rangeText"); //Get the output cause we need to fill it with the value
    outputTag = outPutObject;
    outputTag.innerHTML        = this.value+'cm';
}

function modifyRangeInput() {
    var inputLength = document.getElementById("length");
      inputLength.onchange = updateRangeHtml; //Run the function when the range thumb is moved

      // the following taken from http://stackoverflow.com/questions/2856513/trigger-onchange-event-manually
      if ("fireEvent" in inputLength) { //If an event as been fired
          inputLength.fireEvent("onchange"); //Fire the "onchange" event
      } else {
        var evt = new Event("HTMLEvents", {"change":true});
          inputLength.dispatchEvent(evt); //Dispatches the HTMLEvents event
      }
}

modifyRangeInput(); //Run the range input valeu function
