var tree = {
    height: 0,
    char: ''
};
var tree_height = document.getElementById("tree_height");
var tree_char = document.getElementById("tree_char");
var tree_button = document.getElementById("tree_button")


tree_height.addEventListener('keyup', function (event) {
 if (event.which === 13) {
     set_height(event.target.value);
 }
});

tree_char.addEventListener('keyup', function (event) {
 if (event.which === 13) {
     set_char(event.target.value);
 }
});

tree_button.addEventListener("click", function (event) {
    set_height_and_char();
});

function set_height(height) {
  tree.height = height;
  console.log("Updated tree height to " + tree.height);
}

function set_char(char) {
  tree.char = char;
  console.log("Updated tree char to " + tree.char);
}

function set_height_and_char() {
  if(tree_height.value > 0) {
    set_height(tree_height.value);
  } else {
    alert('You must set a height value.');
    return;
  }

  if(tree_char.value === '') {
    alert('You must enter a character for your tree');
    return;
  } else if(tree_char.value.length > 1) {
    alert('You must enter only a single character for your tree');
    return;
  } else {
    set_char(tree_char.value);
  }

  grow_tree(tree);
}

function grow_tree (tree) {
  var spaces = tree.height - 1;
  var char = tree.char;
  var char_string = "";

  for (var i = 0, j = spaces; i < tree.height; i++, j--) {
    char_string += char;
    console.log(" ".repeat(j) + char_string);
    char_string += char;
  }
}











