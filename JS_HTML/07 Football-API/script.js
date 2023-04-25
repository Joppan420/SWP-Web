const loadData = () =>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) =>{
        result.json().then((data) => {
            
            fillTable(data);
        })
    })
}

const fillTable = (data) =>{

    let html = "";

    data.forEach(element => {
        html += `<div class="table">
        <div class="teamIMG"><img src="${element.teamIconUrl}" alt="Team Icon">
        <div class="name"> ${element.teamName}</div>
        </div>
        <p class="points"> ${element.points}</p></div>`;
    });
    document.getElementById("output").innerHTML = html;

}

loadData();