const form = document.querySelector('form')
//  this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height < 0 || isNaN(height)){

       result.innerHTML = `Please give a valid height ${height}` 
    } else if(weight < 0 || isNaN(weight)){

       result.innerHTML = `Please give a valid weight ${weight} `;
    } else{
    const bmi = (weight /((height*height)/10000)).toFixed(2)
    // show the BMI result

    result.innerHTML = `<span>${bmi}</span>`
  };


//   const bmiguide = document.querySelector('#bmiguide')
//   const bmiresult = document.querySelector('#result')
//     if (bmiresult <= 18.6) {
//       bmiguide.innerHTML = `You are underweight `
// } else if (bmiresult > 18.6 && bmiresult < 24.9 ){
//       bmiguide.innerHTML = `you are Normal range `
//  } else if (bmiresult >= 24.9){
//       bmiguide.innerHTML = `You are Overweight `
// }
//     bmiresult.innerHTML = `<span>${bmiguide} </span>`
    
});
