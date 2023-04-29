
var atmInput = document.querySelector ('#atmInput')
var atmCashBackButton = document.querySelector ('#atmDeleteButton');
var atmAddButton = document.querySelector ('#atmAddButton');
var atmTotal = document.querySelector("#atmTotal");


console.log(atmInput.value);

var balance = 0;

    function calc2() {
        var addMoney = +atmInput.value
        balance = balance + addMoney
        atmTotal.innerHTML = `${balance} azn`
        console.log(addMoney);
    }
    function calc1() {
        var spendingMoney = +atmInput.value

      if(balance <  spendingMoney ){
       
      alert("Yazilan mebleg balansa uygun deyil");
      return balance;
    }

        balance =balance - spendingMoney;
        atmTotal.innerHTML = `${balance} Azn`;
     
    }
    
    console.log(balance)

atmAddButton.addEventListener('click',calc2 );
atmCashBackButton.addEventListener('click', calc1)



































// var atmInput = document.querySelector ('#atmInput')
// var atmCashBackButton = document.querySelector ('#atmDeleteButton');
// var atmAddButton = document.querySelector ('#atmAddButton');
// var atmShowButton = document.querySelector ('#atmShowButton');
// var atmTotal = document.querySelector("#atmTotal");
// var atmTotal = document.querySelector("#atmRemove");
// var div = document.querySelector("div");



// var arr = [];

// console.log(atmInput.value);
// console.log(atmCashBackButton);
// console.log(atmAddButton);
// console.log(atmRemove);





// var total;
// var balance ;

// function cash(a, b) {
//     return a-b;
//     }

//     function calc1() {
//          var spendingMoney = +atmInput.value
//         console.log(arr)
//         balance = balance - spendingMoney;
//         atmTotal.innerHTML = `${balance} Azn`;
    
        
    
    
//     }

//     console.log(calc1())

// function add(a,b) {
// return a+b;
// }

// function calc2() {
//     arr.push(+atmInput.value)
//     total = arr.reduce(add, 0)
//     atmTotal.innerHTML = `${total} Azn`

    

// console.log(arr)
// }

// atmAddButton.addEventListener('click',calc2 );

// atmCashBackButton.addEventListener('click', calc1)

// console.log(atmCashBackButton)




