var atmInput = document.querySelector ('#atmInput')
var atmCashBackButton = document.querySelector ('#atmDeleteButton');
var atmAddButton = document.querySelector ('#atmAddButton');
// var atmShowButton = document.querySelector ('#atmShowButton');
var atmTotal = document.querySelector("#atmTotal");
var atmTotal = document.querySelector("#atmRemove");
// var div = document.querySelector("div");


// function BankCustomur(add, cashBack, show)  {

//     this.add = add;
//     this.cashBack = cashBack;
//     this.show = show;


    
// }

var arr = [];

console.log(atmInput.value);
// console.log(atmCashBackButton);
// console.log(atmAddButton);
// console.log(atmRemove);





var total;
var balance ;

function cash(a, b) {
    return a-b;
    }

    function calc1() {
         var spendingMoney = +atmInput.value
        console.log(arr)
        balance = total - spendingMoney;
        atmTotal.innerHTML = `${balance} Azn`;
    
        
    
    
    }

    // atmCashBackButton.addEventListener('click',calc1 );
    console.log(calc1())

function add(a,b) {
return a+b;
}

function calc2() {
    arr.push(+atmInput.value)
    total = arr.reduce(add, 0)
    atmTotal.innerHTML = `${total} azn`

    

console.log(arr)
}

atmAddButton.addEventListener('click',calc2 );

atmCashBackButton.addEventListener('click', calc1)

// console.log(atmCashBackButton)

