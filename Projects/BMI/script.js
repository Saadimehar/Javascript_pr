const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }else if (weight === '' || height<0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else {
        const bmi = ((weight * 10000)/(height*height)).toFixed(3);
        //Result
        // results.innerHTML = `<span>${bmi}</span>`
        
        //Show weight results like Under, Normal & Over Weight
        weightcat = ''
        if(bmi<18.6){
            weightcat = `Under Weight`;
        }else if(bmi<=24.9){
            weightcat = `Normal`;
        }else {
            weightcat = `Over Weight`;   
        }

        //Results
        results.innerHTML = `<span>Your BMI is ${bmi}  (${weightcat})</span>`
        
    }




});