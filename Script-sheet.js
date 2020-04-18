// JavaScript Document
// Exported openNav, closeNav, changeColor, addNote


		//Open Sidenav
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
		//Close Sidenav
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
		//Change the color of the header and sidenav
function changeColor() {
	let color = document.getElementById("colorInputColor").value;
	document.getElementById('mySidenav').style.backgroundColor = color;
	document.getElementById('mainHeader').style.backgroundColor = color;
}
		//Note Script
function addNote(){
	let note = prompt("Add your note","");
	var para = document.createElement("li");
	para.setAttribute("id", "note");
	var node = document.createTextNode(note);
	para.appendChild(node);
	var element = document.getElementById("noteList");
	element.appendChild(para);
	$("#note").hide().appendTo( "#note" ).fadeIn( 'slow' );
}