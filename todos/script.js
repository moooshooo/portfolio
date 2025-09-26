/* 
Author: Mos
Date: 2025-09-25
Version: 0.2
 */

console.log("Empowered by: MoS")
console.log("=================")
const inputField = document.getElementById("inputField")
const taskList = document.getElementById("taskList")

//lägger till knapp med ren html
//const deleteBtn = "<button>Ta bort</button>"

const addTask = () => {
    console.log("Startar addTask() funktionen")
    
    //Hämtar innehåll från fältet
    const todoName = inputField.value.trim()
    //Validering: Kollar om todoName är tom
    if (todoName ===""){
        alert("Sopa! Skriv något innan du trycker.")
        return // avbryt funktionen
    }
    //Skriver ut todoName data som skrivit
    //console.log(todoName)

    //Denna Variabel skapar en HTML element <li>
    const listItem = document.createElement("li")
    listItem.classList.add("listItem")

    //Skapar en div inuti <li> med en class
    const listItemContainer = document.createElement("div")
    listItemContainer.classList.add("listItemContainer")

    //Skapar en P för texten
    const textP = document.createElement("p")
    textP.classList.add("textP")
    textP.textContent = todoName

    //Lägger till  en ta bort knapp och lägger en class deleteBtn
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.textContent = "Ta bort"

    //Ren HTML
    //listItem.innerHTML = todoName + deleteBtn

    // Lägg till <div> i <li>
    listItem.appendChild(listItemContainer)

    //Detta lägger texten och ta bort knappen in i <div>
    listItemContainer.appendChild(textP)
    listItemContainer.appendChild(deleteBtn)

    //Lägg till i listan
    taskList.appendChild(listItem)

    //Rensar input listan
    inputField.value = ""

    //Skapar en eventlistner som verkar vara en funtion som aktiveras när du klickar "click"
    /* deleteBtn.addEventListener("click", () => {
        listItem.remove()
    }) */
    //Alternativ att ta bortknappen
    deleteBtn.onclick = () => {
        taskList.removeChild(listItem)
    }
}