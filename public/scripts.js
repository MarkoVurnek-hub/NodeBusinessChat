const username = prompt("Welcome to Farshore Partners chat!\n Please enter your username:")
const socket = io('https://chat-app-mrki.herokuapp.com', {
    query:{
        username
    }
});
let nsSocket = "";
socket.on('nsList', (nsData)=>{
    let namespaceDiv = document.querySelector('.namespaces');
    namespaceDiv.innerHTML = "";
    nsData.forEach((data)=>{
        namespaceDiv.innerHTML += `<div class="namespace" ns=${data.endpoint}> <img src="${data.img}" /> </div>`
    });

    Array.from(document.getElementsByClassName('namespace')).forEach((element)=>{
        element.addEventListener('click', (event)=>{
            const endpoint = element.getAttribute('ns');
            joinNS(endpoint);
        });
    });
    joinNS('/fs');
});




