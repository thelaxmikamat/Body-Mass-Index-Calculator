const button= document.querySelector('button');
//taking action
//for calculating
button.addEventListener('click',()=>{
    //age
    const age1 = document.getElementById('age');
    const age =Number(age1.value);

    //invaild age
    if(age<2||age>120|| isNaN(age)){
        alert('Please enter a valid age between 2 and 120');
        return;
    }
    //height
    const feet= document.getElementById('feet');
    const number1= Number(feet.value);
    const inches= document.getElementById('inches');
    const number4= Number(inches.value);
    //weight
    const input2= document.getElementById('weight');
    const number2= Number(input2.value);

//converting height into meters
const Total_inch = (number1*12)+number4;
const height_meters =Total_inch*0.0254;

// invaild height and weight
 if(isNaN(height_meters)|| isNaN(number2))
    return;

    //output
    const number3= Math.pow(height_meters,2);
    const bmi =number2/number3;
    const result= document.getElementById('result');
    result.textContent= 'Result:' +bmi.toFixed(2);
})
  //for clear
const clearButton = document.getElementById('Clear');
clearButton.addEventListener('click', ()=>{
   const age= document.getElementById('age');
    age.value ='';
    const feet= document.getElementById('feet');
    feet.value ='';
    const inches= document.getElementById('inches');
    inches.value ='';
    const weight= document.getElementById('weight');
    weight.value ='';
    const male= document.getElementById('male');
    male.checked =false;
    const female= document.getElementById('female');
    female.checked= false;
    result.textContent='Result';
})