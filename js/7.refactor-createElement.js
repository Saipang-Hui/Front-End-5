function createNewItem(item){
   const li = document.createElement("li");
   li.appendChild(document.createTextNode(item));
    const button = createItem("remove-item btn-link text-red", "button");
      const icon = createItem("fa-sold fa-xmark" , "i");
     button.appendChild(icon);
     li.appendChild(button);
     document.querySelector(".items").appendChild(li);


    }
createNewItem("bread");
function createItem(classes, element){
    const item = document.createElement(element);
  item.className = classes;
  return item;
}
function createButton(classes){
    const button = document.createElement("button");
    button.className = classes;
    return button;
}

function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}



