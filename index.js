let screen = document.getElementById('screen');
let result=document.getElementById('calc')
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '×') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            result.innerHTML="";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            result.innerHTML=screen.value;
            screen.value = eval(screen.value);
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '+') {
            buttonText = '+';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '−') {
            buttonText = '-';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '⋅') {
            buttonText='.';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}