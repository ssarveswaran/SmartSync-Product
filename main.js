var overlay=document.getElementById("overlay");
var poppop=document.getElementById("poppop");
var cancel=document.getElementById("cancel1");

function add(){
    overlay.style.display="block";
    poppop.style.display="block";
    
}
cancel.addEventListener("click",function(event){
   event.preventDefault();
    overlay.style.display="none";
    poppop.style.display="none";
   
})
var title=document.getElementById("title");
var desc=document.getElementById("desc");
var add1=document.getElementById("add1");
var container=document.querySelector(".container");
var delete1=document.getElementById("delete");
add1.addEventListener("click",function(event){
    event.preventDefault();
   var d=document.createElement("div");
   d.setAttribute("id","middle");
   d.innerHTML=`
   <h2>${title.value}</h2>
   <p>${desc.value}</p>
   <button id="delete">Delete</button>
 `;
   container.append(d);
   overlay.style.display="none";
   poppop.style.display="none";

})
// Add event listener to a parent element
container.addEventListener('click', function(event) {
    // Check if the clicked element is the delete button
    if (event.target.id === 'delete') {
        event.target.parentElement.remove();
    }
});



