$(document).ready(function() {
  $("#add-note").on("click", function() {
		var txt = document.getElementById("note-list");
		$("li").append(txt).css({ width: "150px", height: "100px", border: "2px solid grey"});
  });
});

