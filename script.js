alert("click on screen to change the color")

        function myfun() {


            let div1 = document.querySelector('.divi1');
            let div2 = document.querySelector('.divi2');
            let div3 = document.querySelector('.divi3');
            let div4 = document.querySelector('.divi4');
            let div5 = document.querySelector('.divi5');


            let number1 = Math.floor(Math.random() * 16777215);
            let newnum1= "#" + number1.toString(16);
            div1.style.backgroundColor = newnum1;
            div1.innerHTML=newnum1;

            let number2 = Math.floor(Math.random() * 16777215);
            let newnum2= "#" + number2.toString(16);
            div2.style.backgroundColor = newnum2;
            div2.innerHTML=newnum2;

            let number3 = Math.floor(Math.random() * 16777215);
            let newnum3= "#" + number3.toString(16);
            div3.style.backgroundColor = newnum3;
            div3.innerHTML=newnum3;

            let number4 = Math.floor(Math.random() * 16777215);
            let newnum4= "#" + number4.toString(16);
            div4.style.backgroundColor = newnum4;
            div4.innerHTML=newnum4;

            let number5 = Math.floor(Math.random() * 16777215);
            let newnum5= "#" + number5.toString(16);
            div5.style.backgroundColor = newnum5;
            div5.innerHTML=newnum5;

        };
