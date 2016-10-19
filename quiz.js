var user_tree_height;
var user_tree_char;

document.getElementById("tree_height").addEventListener('keyup', function (event) {
  if (event.which === 13) {
  	eval_tree_height();
  }
});

document.getElementById("tree_char").addEventListener('keyup', function (event) {
  if (event.which === 13) {
  	eval_tree_char();
  }
});

document.getElementById("tree_button").addEventListener("click", function (event) {
	eval_tree_height() + eval_tree_char();
});

function eval_tree_height() {

	user_tree_height = document.getElementById("tree_height").value

	console.log(user_tree_height);
}

function eval_tree_char() {
	user_tree_char = document.getElementById("tree_char").value

	console.log(user_tree_char);
}































