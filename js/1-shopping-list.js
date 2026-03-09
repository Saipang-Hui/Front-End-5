let output;
// list all elements inside htmlcollection 
output = document.all;
// element inside htmlcollection
output = document.all[11];
output = document.all.length;
//=================
// html in text form
output = document.documentElement;
output = document.head;
output = document.body;
//=================
// from element inspect direct children
output = document.body.children;
// other element types (eg meta)
output = document.domain;
output = document.URL;
output = document.doctype;
output = document.characterSet;
output = document.contentType;
// forms 
output = document.forms;  
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method; // method by GET or by POST
output = document.forms[0].action;
// output = document.forms[0].action; (by get or post)
document.forms[0].id = "new-id";
output = document.forms[0].id; 
console.log(output);
// link
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = "https://facebook.com";
output = document.links[0].className = "text-red"
output = document.links[0].classList; 
//image
output = document.images;
output = document.images[0];
output = document.images[0].src;
// convert HTMLCollection to Array type and then forEach to loop through
const forms = Array.from(document.form);
forms.forEach((form) => console.log(form));
console.log(output);






