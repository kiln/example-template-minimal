var state =  {
	number: 23
};

var div;

function draw() {
	div = document.createElement("div");
	div.style.margin = "24px";
	div.style.padding = "24px";
	div.style.border = "1px solid black";
	document.body.appendChild(div);

	update();
}

function update() {
	div.innerHTML = "The number is " + state.number;
}

window.template = {
	state: state,
	draw: draw,
	update: update
};
