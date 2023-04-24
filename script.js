document.addEventListener("DOMContentLoaded", function() {
    function add() {
        const el1 = document.getElementById("n1").value;
        const el2 = document.getElementById("n2").value;
        document.getElementById("res").textContent = parseInt(el1) + parseInt(el2);
    }
    function sub() {
        const el1 = document.getElementById("n1").value;
        const el2 = document.getElementById("n2").value;
        document.getElementById("res").textContent = parseInt(el1) - parseInt(el2);
    }
    const btnAdd = document.querySelector(".add");
    const btnSub = document.querySelector(".sub");

    btnAdd.addEventListener("click", function() {
        add();
    })
    btnSub.addEventListener("click", function() {
        sub();
    })
   
    // parseInt - глобальна функція, яка перетворює рядок на число. Якщо рядок не можна перетворити у число повертає NaN;
    // getElementByID - глобальна функція, яка дозволяє взяти тег елемента з HTML за його власним id; 
    // innerHTML - глобальна функція, яка дозволяє отримати HTML-вміст елемента у вигляді рядка. Ми також можемо змінювати його;
    // textContent - глобальна функція, яка дозволяє класти результат у вигляді тексту в теги HTML.

    const btnClick = document.querySelector(".click");

    btnClick.addEventListener("click", () => {
        let txt1 = "";
        let txt2 = "";
        txt1 = document.test.bt.value;
        txt2 = document.test.bt.name;
        document.getElementById("ex1").innerHTML = 
        `
        <hr>
        Ви натиснули кнопку: ${txt1.bold()} з ім'ям: ${txt2.bold()}
        <hr>
        `;
    })

    document.getElementById("switch").addEventListener("click", () => {
        [
            document.getElementById("one").value,
            document.getElementById("two").value
        ] = [
            document.getElementById("two").value,
            document.getElementById("one").value
        ]
       })
    

})