var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function deleteItem(){
	var	li = this.parentElement;
    ul.removeChild(li);		
};

function toggleClass(){
	 this.classList.toggle("done");	
};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.onclick = toggleClass;
	
	var button = document.createElement("button");
	button.className = "delete";	
	button.onclick = deleteItem;

	var buttonI = document.createElement("i");
	buttonI.className = 'fa fa-trash';
	button.appendChild(buttonI);

	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
};


// add item to the list
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// toggleClass
// $("li").click(function () {
//     $(this).toggleClass('done');
// });


var itemList = document.getElementsByClassName("delete");
for (var i = 0; i < itemList.length; i++) {	
	itemList[i].onclick = deleteItem;
	var li = itemList[i].parentElement;
	li.onclick = toggleClass;
};





