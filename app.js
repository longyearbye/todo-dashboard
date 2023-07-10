window.addEventListener('load', toDay)

function toDay() {
    let date = new Date(); 
    let dayNum = date.getDay() ;
    let day = date.getDate(); 
    //let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = date.getMonth() + 1; 
    let hour = date.getHours() ;
    let minute = date.getMinutes(); 
    let ampm = hour >=12 ? 'PM' : 'AM'; 
    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
    


    hour = hour % 12; // 12 - hour module 
    hour = hour ? hour : '12'; 
    hour = hour < 10 ? '0' + hour : hour; 
    minute = minute < 10 ? '0' + minute : minute;
    day = day < 10 ? '0' + day : day; 
    month = month < 10 ? '0' + month : month;  
    document.getElementById('time').innerHTML = `${dayNames[dayNum]} ${day} ${month} ${hour}:${minute} ${ampm}`; 

    setTimeout(toDay, 200); 
    
}

toDay(); 


let countdownDate = new Date("Aug 12, 2023 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("perseid").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML =
      "IT'S THE NIGHT OF SHOOTING STARS!";
  }
}, 1000);

//notes 
const noteSpace = document.getElementsByClassName('notespace')[0]; 
const createBox = document.getElementsByClassName('notes') [0];
const note = document.getElementById('note'); 

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; 

contentArray.forEach(divMaker) ; 

function divMaker(text){
     
    let div = document.createElement('div'); 
    let h2note = document.createElement('h2'); 
    let btn = document.createElement('button'); 

    div.className = 'notespace'; 

    h2note.setAttribute('style', 'display: flex; color: white; padding: 15px; margin-top: 30px'); 
    h2note.innerHTML = text.mynote; 

    btn.setAttribute('style', 'padding: 5px; margin-left: 595px'); 
    btn.innerHTML = 'delete';  
    btn.addEventListener('click', function () {
      div.remove(); 
      localStorage.clear() ;
      contentArray = []; 
    })

    div.appendChild(h2note); 
    div.appendChild(btn); 
    noteSpace.appendChild(div); 
}

function addNote() {
  let Info = {
      'mynote': note.value, 
  }

  contentArray.push(Info) ;
  localStorage.setItem('items', JSON.stringify(contentArray)); 
  divMaker(contentArray[contentArray.length -1])
  note.value = ''; 
}

//toggle

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundImage = "url('th.jpg')";
  } else {
    bodyEl.style.backgroundImage = "url('R.jpg')";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
});


