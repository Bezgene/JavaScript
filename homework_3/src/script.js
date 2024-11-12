let number1 = prompt("First number:", "");
let operation = prompt("Operation:", "");
let number2 = prompt("Second number:", "");
function Calculate(num1, num2, operator)
{   let num3;

    if (operator==="+")
    {
        num3 = +num1 + +num2;
    }
    if(operator==="-")
    {
        num3 = num1-num2;
    }
    if(operator==="/")
    {
        num3 = num1/num2;
    }
    if (operator === 0) {
        return 'Cannot be divided by zero';
    }
    if(operator==="*")
    {
        num3 = num1*num2;
    }

    console.log(num1, operator, num2, "=", num3)

}
Calculate(number1, number2, operation);
