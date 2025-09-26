/* 
Author: Mos
Date: 2025-09-25
Version: 0.6
Project Name: Miniräknare
*/
console.log("Empowered by: MoS")
console.log("=================")

const btnList = document.getElementsByClassName("btnInput")
const showIndisplay = document.getElementById("Display")
const result = document.getElementById("resultBtn")
const back = document.getElementById("back")
//const dateStamp = document.getElementById("dateStamp")

//Går igenom alla button i btnList och väljer ut en onClick, ,  och sedan om det går åt skogen skriver den ut "ops!" 
for(button of btnList) {
    const btn = button 
    button.onclick = () => {
        if(showIndisplay.textContent === "0"){
            //ser till att nollställa räknaren innan du skriver något om det är 0
            showIndisplay.textContent = ""
        }else if(showIndisplay.textContent === "-- 2-long --"){
            //Nollställer om du har texten -- 2-long --
           showIndisplay.textContent = ""
        }else if(showIndisplay.textContent === "Ops!"){
            //Nollställer om du har texten Ops!
           showIndisplay.textContent = ""
        } 
        showIndisplay.textContent += btn.textContent
    }
}
/* 
console.log(showIndisplay.textContent) */

const allClear = document.getElementById("ac")
allClear.onclick = () =>{
    showIndisplay.textContent = 0
}

result.addEventListener("click", () => {
    const toCalculate = showIndisplay.textContent
    try {
        const ekvResult = eval(toCalculate)
        showIndisplay.textContent = ekvResult
        //Validerar om du har för lång resultat längre än 10 tecken
        if (ekvResult.toString().length >= 10) {
            showIndisplay.textContent = "-- 2-long --"
        }
    } catch (error) {
        showIndisplay.textContent = "Ops!"
    }
})

//Slisar/tarbort den sista siffran
back.addEventListener("click", () => {
    showIndisplay.textContent = showIndisplay.textContent.slice(0, -1)
})

//Leker med Datum
/* const showDateStamp = new Date()
dateStamp.textContent = showDateStamp.toLocaleString("sv-SE") */


//Funktion som hämtar sista push av denna repo källa: ChatPGT
async function getLastPush() {
    const response = await fetch("https://api.github.com/repos/moooshooo/calculator");
    const data = await response.json();

    // "pushed_at" is an ISO timestamp
    const lastPush = new Date(data.pushed_at);

    // Format it for display
    document.getElementById("lastUpdated").textContent =
        "Last push to GitHub: " + lastPush.toLocaleString("sv-SE");
}

getLastPush();


//Dark mode skift.
const changeBtn = document.getElementById("darkM")

changeBtn.addEventListener("click",() => {
    if (document.body.classList.toggle("darkMcss")) {
        changeBtn.textContent = "☀️ Light mode"
    }else {
    changeBtn.textContent = "🌙 Dark mode"
  }
})