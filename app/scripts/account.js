//document.ready
$(document).ready(function(){
	$('#registerUser').on('submit', function(e){
		e.preventDefault();
		//grab the data in the inputs.
		var schoolName = 'Broward College';
		var accountType = $('#account_type option:selected').text();
		var name = $('#name').val();
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();

	//have to add validation for password entry.


	var url = 'https://api.mlab.com/api/1/databases/teacher2student/collections/accounts?apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh';

		//ajax fields to input.. 
		/*school, role, username, password, name , 
		email, class, students */
		//make ajax call
		$.ajax({
			url: url,
			//decides what is going to be posted onto the json
			data: JSON.stringify({
				"school": schoolName,
				"role": accountType,
				"username": username,
				"password": password,
				"name": name,
				"email": email
			}),
			type: 'POST',
			contentType: 'application/json',
			success: function(data){
				//if it's successful and posts we redirect to..
				window.location.href="index.html"
			},
			error: function(xhr, status, err){
				console.log(err);
			}
		});

	});

	//signing in 	
	
});

