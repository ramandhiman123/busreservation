

// let to = document.getElementById('to');

// document.querySelectorAll('#from');
// function list() {

//     let from = document.getElementById('from').value;
//     let to = document.getElementById('to').value;


//     if (from === 'chandigarh')
//     {
//         alert('select the bus');
//     }

// }


// && from.value === 'manali-delhi' && from.value === 'shimla-kangra' && from.value === 'kangra-delhi'
// // && from.value === 'hamirpur-palampur' && from.value === 'palampur-manali' && from.value === 'recongpeo-chandigarh'
// && from.value === 'delhi-chandigarh'


// function validateForm() {
//     let from = document.getElementById("from").value;
//     let to = document.getElementById("to").value;



// if (from === "" || to === "") {
//     alert("Please select both 'from' and 'to' locations.");
// } else if(from === to){
//        alert("Please enter different places 'from' and 'to'. ");
//  }//else if(from === document.querySelectorAll('bus-from')){
//         for(i=0;i<=li;i++){
//     alert('match');
//         }    
// }
//     else {
//         alert("Searching for buses from " + from + " to " + to + "...");
//        document.getElementById("show").src = "file:///C:/Users/Raman/OneDrive/Desktop/js%20final/loginform/sbsection.html";
//     }
// }

let list = [
    { from: 'Chandigarh', to: 'Delhi', time: '10:00 AM' },
    { from: 'Chandigarh', to: 'Delhi', time: '10:00 AM' },
    { from: 'Chandigarh', to: 'Delhi', time: '10:00 AM' },
    { from: 'Chandigarh', to: 'Delhi', time: '10:00 AM' },
    { from: 'Manali', to: 'leh', time: '10:00 AM' },
    { from: 'Kangra', to: 'jammu', time: '10:00 AM' },
    { from: 'Cchamba', to: 'Shimla', time: '10:00 AM' },
    { from: 'Palampur', to: 'Recongpeo', time: '10:00 AM' }
];



let button = document.getElementById("submit");
button.addEventListener("click", function () {
    let start = document.getElementById('from').value;
    let dest = document.getElementById('to').value;
    let ti = document.getElementById('date').value;


    if (start === "" || dest === "" || ti === "") {
        alert("Please select both 'from' and 'to' locations.");
    } else if (start === dest) {
        alert("Please enter different places 'from' and 'to'. ");
    }

    for (i = 0; i < list.length; i++) {

        if (list[i].from === start && list[i].to === dest) {

            document.getElementById('show').innerHTML += list[i].from + ' ' + 'to' + '  ' + ' ' + list[i].to + '  ' + list[i].time +
                "<button type='text' class='btn1'>book</button>" + "<br>";

        
        }
        else {
            // alert('bus is not available');
        }
    }
});






