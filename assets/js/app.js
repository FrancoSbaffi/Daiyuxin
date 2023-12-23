
function bgAnimationItems(){
    const rows = 7, cols = 10;
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        const div = document.createElement("div");
        div.className = `col-${j+1}`;
        const svg = `
        <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512" xml:space="preserve">
   <path style="fill: rgba(255, 0, 0, 0.254)" d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
       c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
       c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
       c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
       c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
       C512,137.911,498.388,101.305,474.655,74.503z"/>
   <path style="fill: rgba(217, 217, 217, 0.146);" d="M160.959,401.243c-36.618-30.304-65.836-62.565-86.845-95.889
       c-26.529-42.083-39.981-85.961-39.981-130.418c0-37.025,13.612-73.631,37.345-100.433c21.44-24.213,49.775-39.271,81.138-43.443
       c-5.286-0.786-10.653-1.189-16.082-1.189c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936
       c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146
       c2.203,0.988,4.779,0.988,6.981,0c0.689-0.308,5.586-2.524,13.577-6.588C251.254,463.709,206.371,438.825,160.959,401.243z"/>
   </svg>   
        `;
        div.innerHTML = svg;
        document.querySelector(".bg-animation-effect").appendChild(div);
      }
    }
  }
  bgAnimationItems();
  


// TOGGLE THEME

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
});

// CLOCK

const timeArea = document.querySelector(".time");

const timePeriod = document.querySelector(".time-per");

const tik = () => {

    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes; 
    }

    if (seconds < 10) {
        seconds = "0" + seconds; 
    }

    const ampm = (hours >= 12) ? "pm" : "am";

    const time = `${hours}:${minutes}:${seconds}`;

    timeArea.innerHTML = time;
    timePeriod.innerHTML = ampm;

    setTimeout(tik, 1000);

};

tik();


 const filtro = document.getElementById('filtro');
 const nombres = document.getElementById('nombres');


 filtro.addEventListener('input', () => {
   const textoFiltro = filtro.value.toLowerCase();
   const divsNombres = nombres.querySelectorAll('div');

   
   divsNombres.forEach(divNombre => {
     const textoDiv = divNombre.innerText.toLowerCase();
     if (textoDiv.includes(textoFiltro)) {
       divNombre.style.display = 'block';
     } else {
       divNombre.style.display = 'none';
     }
   });
 });