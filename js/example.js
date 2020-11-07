/*
Paprawin Boonyakida

Gui Programming
In-class Exercise
*/


// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector("ul");  //Gets the unordered list
var list1 = document.createElement("li"); 
list1.textContent = "cream"; // write to the list
ul.append(list1); // add to end of list

// ADD NEW ITEM START OF LIST
var list2 = document.createElement("li");
list2.textContent = "kale";
ul.prepend(list2);  // add to beginning of list

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var allListElem = document.querySelectorAll("li");
var i;
// define class name = cool for all list elements
for (i = 0; i < ul.childElementCount ; i++){
    allListElem[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var span = document.createElement("span");
span.textContent = ul.childElementCount;  // span will show number of list items
document.querySelector("h2").append(span); // display in html