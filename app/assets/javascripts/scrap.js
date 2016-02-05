$(document).ready(function() {
	// put a message
	var message = "<p>Hi</p>"
	$('.test').append(message);

	// render a table
	var content = "<table>"
	for(i=0; i<3; i++){
	    content += '<tr><td>' + 'result ' +  i + '</td></tr>';
	}
	content += "</table>"

	$('#render_table').append(content);
	// add a to do list
	$('#button').click(function() {
		var toAdd = $('input[name=check_list_item]').val();
		$('.list').append('<div class="item">' + toAdd + '</div>');
	});
	// remove item in list when clicked
	$(document).on('click', '.item', function() {
		$(this).remove();
	});

	
	var table = document.createElement("table");
	for (var i = 1; i < 9; i++) {
	    var tr = document.createElement('tr');
	    for (var j = 1; j < 9; j++) {
	        var td = document.createElement('td');
	        if (i%2 == j%2) {
	            td.className = "white";
	        } else {
	            td.className = "black";
	        }
	        tr.appendChild(td);

	    }
	    table.appendChild(tr);
	}
	$('.chessboard').append(table);
	// var piece = $('<img/>').attr({src: 'pawn.png', height: 100px})
	// piece.appendTo($('td'));
	
});
