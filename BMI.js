    function window_onload() {
        document.body.style.backgroundColor = "pink";
    }
    function btnCalc_onclick() {

        let heightCM = txtHeight.value;
    let weightKG = txtWeight.value;

    if (heightinput.value == "in") {
        heightCM = txtHeight.value * 2.54;
        }
    if (weightinput.value == "lbs") {
        weightKG = txtWeight.value * 0.453592;
        }

    const height100 = heightCM / 100;
    const BMI = weightKG / (height100 * height100);

    bmiResult.innerText = "Your BMI result is " + BMI.toFixed(1);

    if (txtHeight.value == "") {
        HeightHidden.innerText = "Please input your height.";
    bmiResult.innerText = "";
        } else {
        HeightHidden.innerText = "";
        }

    if (txtWeight.value == "") {
        WeightHidden.innerText = "Please input your weight.";
    bmiResult.innerText = "";
        } else {
        WeightHidden.innerText = "";
        }

    if (txtAge.value == "") {
        AgeHidden.innerText = "Please input your age.";
    bmiResult.innerText = "";
        } else {
        AgeHidden.innerText = "";
        }

    if (bmiResult.innerText == "") {
        bmiCategory.innerText = "";
    bmiSolutions.innerText = "";
        } else {
            if (txtAge.value < 20) {
                if (BMI < 16.5) {
        bmiCategory.innerText = "You are underweight.";
    bmiSolutions.innerText = "Eating nutritious foods that are high in calories is a good way to gain weight. It's also important to understand the reason why you're underweight. Eat more frequently, maintain a healthy diet, choose food with lots of nutrients, and exercise regularly.";
                }
                if (BMI >= 16.5) {
        bmiCategory.innerText = "You are normal.";
    bmiSolutions.innerText = "You are healthy, keep up the good work and stay healthy!";
                }
                if (BMI >= 23) {
        bmiCategory.innerText = "You are overweight.";
    bmiSolutions.innerText = "Here are some tips to help you lose weight: Do not skip breakfast, eat plenty of fruits and vegetables, get more active, drink plenty of water, use smaller plates, and plan your meals.";
                }
                if (BMI >= 28) {
        bmiCategory.innerText = "You are obese.";
    bmiSolutions.innerText = "Seek help from doctors, get medical treatments, discipline yourself to lose weight."
                }
            }
            if (txtAge.value >= 20) {
                if (BMI < 18.5) {
        bmiCategory.innerText = "You are underweight.";
    bmiSolutions.innerText = "Eating nutritious foods that are high in calories is a good way to gain weight. It's also important to understand the reason why you're underweight. Eat more frequently, maintain a healthy diet, choose food with lots of nutrients, and exercise regularly.";
                }
                if (BMI >= 18.5) {
        bmiCategory.innerText = "You are normal.";
    bmiSolutions.innerText = "You are healthy, keep up the good work and stay healthy!";
                }
                if (BMI >= 25) {
        bmiCategory.innerText = "You are overweight.";
    bmiSolutions.innerText = "Here are some tips to help you lose weight: Do not skip breakfast, eat plenty of fruits and vegetables, get more active, drink plenty of water, use smaller plates, and plan your meals.";
                }
                if (BMI >= 30) {
        bmiCategory.innerText = "You are obese.";
    bmiSolutions.innerText = "Seek help from doctors, get medical treatments, discipline yourself to lose weight."
                }
            }
            
        }
    }