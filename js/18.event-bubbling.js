const button = document.querySelector("from button");
const div = querySelector("form div:nth child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
alert ("botton was clicked");
e.stopImmediatePropagation() // stop the event from bubbling up to the present elements
});

div.addEventListener("click", (e) => {
alert ("div was clicked");
});

form.addEventListener("click", (e) => {
alert ("formwas clicked");
});
document.addEventListener("click", (e) => {
alert ("form was clicked");
}); 

 

const listItems = document.querySelector("li")
listItems.forEach((item) => {
item.addEventListener("click, (e)=> {
    e.target.remove();
});
});


//add a single event listener on parent
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
    if (e.target.tagName === "li") {
        e.target.remove();
}
});






