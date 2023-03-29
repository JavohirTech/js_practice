const checkIcon = document.querySelector(".popup .icon i");
const checkTitle = document.querySelector(".title");
const checkDesc = document.querySelector(".desc");
const popup = document.querySelector(".popup");

const checkConnection = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(response.ok < 300){
            console.log("true");
            checkIcon.className = "uil uil-wifi";
            checkTitle.textContent = "Restored Connection";
            checkDesc.textContent = "Your network is avaible";
            popup.classList.add("success-connection")

        }else{
            console.log("false");
        }

    }catch(error){
        console.log(error)
    }
}


setInterval(checkConnection, 1000);