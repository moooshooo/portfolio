/* 
Author: Mos
Date: 2025-09-26
Version: 0.1
Project Name: Portfolio
*/






//Funktion som hämtar sista push av denna repo källa: ChatPGT
async function getLastPush() {
    const response = await fetch("https://api.github.com/repos/moooshooo/portfolio/");
    const data = await response.json();

    // "pushed_at" is an ISO timestamp
    const lastPush = new Date(data.pushed_at);

    // Format it for display
    document.getElementById("lastUpdated").textContent =
        "Last push to GitHub: " + lastPush.toLocaleString("sv-SE");
}

getLastPush();