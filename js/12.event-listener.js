const clearBtn = document.querySelector("#clear");
function onClear() {
    const itemList = document.querySelector("ul");
    const items = itemList.querySelector("li");
    while(itemList.firstChild) {
itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.onclick = () => alert("Clear Items");
clearBtn.onclick = () => console.log("Clear Items");

//use eventListener to attach a function to button
clearBtn.addEventListener("click",() => console.log("Clear Items"));

clearBtn.addEventListener("click", onclear):

setTimeout(() => clearBtn.removeEventListener("click", onclear), 
5000);
setTimeout(() => clearBtn.click(),5000)








