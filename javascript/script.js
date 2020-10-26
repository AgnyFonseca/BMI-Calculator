function calculate() {
    var weight = parseFloat(document.getElementById('weight').value)
    var height = parseFloat(document.getElementById('height').value)
    height = height * height
    var res = document.getElementById('res')
    var bmi = (weight / height).toFixed(2)
    var answer = ''

    if (bmi < 16) {
        answer = 'Very severely underweight'

    } else if (bmi >= 16 && bmi <= 16.99) {
        answer = 'Severely underweight'

    } else if (bmi >= 17 && bmi <= 18.49) {
        answer = 'Underweight'

    } else if (bmi >= 18.50 && bmi <= 24.99) {
        answer = 'Normal'

    } else if (bmi >= 25 && bmi <= 29.99) {
        answer = 'Overweight'

    } else if (bmi >= 30 && bmi <= 34.99) {
        answer = 'Obese Class I'

    } else if (bmi >= 35 && bmi <= 39.99) {
        answer = 'Obese Class II'

    } else {
        answer = 'Obese Class III'
    }

    document.getElementById('bmi').innerHTML = bmi
    res.innerHTML = `${answer}`

}

 function clean() {
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
    document.getElementById('bmi').innerHTML = ''
    document.getElementById('res').innerHTML = ''
 }
