

// let text = document.getElementById('show')
// function print(seat){
//     text.innerHTML += button.innerHTML
// }   

//     let btn = document.querySelectorAll(".seat");

//     btn.addEventListener("click", function () { 
//     for (let i = 0; i < btn.length; i++) {
//         // btn[i].backgroundColor = "red";
//       document.getElementById('show').innerHTML = btn[i];
//     }
// });

// const rows = 5;
// const columns = 6;


// function generateBusLayout(rows, columns) {
//   const busLayout = document.getElementById('bus-layout');

//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= columns; j++) {
//       const seat = document.createElement('div');
//       seat.className = 'seat';
//       seat.dataset.row = i;
//       seat.dataset.column = j;
//       seat.textContent = `${i}-${j}`;
//       seat.addEventListener('click', toggleSeat);
//       busLayout.appendChild(seat);
//     }
//   }
// }

// function toggleSeat() {
//   this.classList.toggle('occupied');
// }


// window.onload = function() {
//   generateBusLayout(rows, columns);
// };


// const rows = 5;
// const columns = 6;
// const maxSelectedSeats = 7;

// let selectedSeats = [];

// Function to generate bus layout
// function generateBusLayout(rows, columns) {
//   const busLayout = document.getElementById('bus-layout');

//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= columns; j++) {
//       const seat = document.createElement('div');
//       seat.className = 'seat';
//       seat.dataset.row = i;
//       seat.dataset.column = j;
//       seat.textContent = `${i}-${j}`;
//       seat.addEventListener('click', toggleSeat);
//       busLayout.appendChild(seat);
//     }
//   }
// }

// Function to toggle seat status
// function toggleSeat() {
//   const errorMessage = document.getElementById('error-message');

//   if (this.classList.contains('occupied')) {
//     errorMessage.textContent = 'This seat is already occupied.';
//     return;
//   }

//   errorMessage.textContent = '';

//   this.classList.toggle('selected');

//   const selectedCount = document.getElementById('selected-count');
//   selectedSeats = Array.from(document.querySelectorAll('.seat.selected'));
//   selectedCount.textContent = selectedSeats.length;

//   if (selectedSeats.length > maxSelectedSeats) {
//     errorMessage.textContent = `You can only select up to ${maxSelectedSeats} seats.`;
//     this.classList.remove('selected');
//   }
// }

// Generate bus layout on page load
// window.onload = function() {
//   generateBusLayout(rows, columns);
// };




// document.addEventListener("DOMContentLoaded", function () {
//   let seatCheckboxes = document.querySelectorAll('.seats');
//   let totalAmountDisplay = document.querySelector('.total-amount-value');

//   let seatPrice = 385;
//   let totalAmount = 0;

//   seatCheckboxes.forEach(function (checkbox)

// {
//       checkbox.addEventListener("change", function () {
//           let seatLabel = checkbox.nextElementSibling; 
//           let seatNumber = seatLabel.innerHTML; 
//           let selectedSeats = document.querySelectorAll('.seats:checked').length;
//           if (selectedSeats > 5) {
//               checkbox.checked = false; 
//               return;
//           }

//           if (checkbox.checked) {
//               totalAmount += seatPrice;
//               seatLabel.style.backgroundColor = '#dddddd;'; 
//           } else {
//               totalAmount -= seatPrice;
//               seatLabel.style.backgroundColor = '#25b9f4;'; 
//           }

//           totalAmountDisplay.innerHTML = totalAmount;
//       });
//   });
// });


