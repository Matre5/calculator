alert(
    'Welcome to your calculator'
);
alert(
    "This calculator can perform the following\nAddition +\nSubtraction - \nMultiplication *\nDivision /"
)
const opertor = prompt(
    "Enter the operation you want to perform: \n+ \n-\n*\n/"
)
const input = prompt(
    "Input first number"
)
const input2 = prompt(
    "Input second number"
)

num1 = Number.input;
num2 = Number.input2;
sign = opertor;

    if (sign == "+") {
        result = num1 + num2;
        alert(result);
    } else if (sign == "-") {
        result = num1 - num2;
        alert(result);
    } else if (sign == "*") {
        result = num1 * num2;
        alert(result);
    }else if (sign == "/") {
        result = num1 / num2;
        alert(result)
    }else{
        alert("Wrong operator try again..")
    }
