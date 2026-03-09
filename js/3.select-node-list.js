// select multiple elements and return a NodeList (array-like object)
// a. select by className
const listItems = document.querySelectorAll(".items");
// return Modelust
console.log(listItem);
// get all text content including children
console.log(listItem[0].innerText); 

// get first element in the NodeList and chang its color to red
listItems[0].style.color = "red";
listItems.forEach((item, index)) => {
    item.style.color = "blue";
    }
if (index === 1){
    item.remove();
}
if (index === 0){
    // be careful: replace the html structure with text content 
    item.innerText = "Orange"\
    // copy the complete html struction insert by InnHTML
    item.innerHTML=  `orange`


}

// Nodelist has internal forEach, HTMLCollection doesnt have forEach, but we can convert it to an array and use forEach






