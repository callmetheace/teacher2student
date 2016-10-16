console.log('\'Allo \'Allo!');
       
function getTeacher(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/accounts?q={'role':'teacher'}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '<tr>';
		$.each(data, function(key, data){

			output += '<td>' + data.school + '</td>';
			output += '<td>' + data.name + '</td>';
			output += '<td>' + data.email + '</td>';
		});
		output += '</tr>';
		$('#teacher').append(output);
	});
}

function getTeacherAdmin(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/accounts?q={'role':'teacher'}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + "<input type='checkbox'>" + '</td>';
			output += '<td>' + data.school + '</td>';
			output += '<td>' + data.name + '</td>';
			output += '<td>' + data.email + '</td>';
		});
		output += '</tr>';
		$('#teacher').append(output);
	});
}
          

function getStudent(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/accounts?q={'role':'student'}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + data.school + '</td>';
			output += '<td>' + data.name + '</td>';
			output += '<td>' + data.email + '</td>';
		});
		output += '</tr>';
		$('#student').append(output);
	});
}

function getStudentAdmin(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/accounts?q={'role':'student'}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + "<input type='checkbox'>" + '</td>';
			output += '<td>' + data.school + '</td>';
			output += '<td>' + data.name + '</td>';
			output += '<td>' + data.email + '</td>';
		});
		output += '</tr>';
		$('#student').append(output);
	});
}

function getClasses(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/classes?s={'school':1}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + data.school + '</td>';
			output += '<td>' + data.name + '</td>';
			output += '<td>' + data.year + '</td>';
			output += '<td>' + data.semester + '</td>';
			output += '<td>' + data.teacher + '</td>';
		});
		output += '</tr>';
		$('#classes').append(output);
	});
}

function getClassesAdmin(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/classes?s={'school':1}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + "<input type='checkbox'>" + '</td>';
			output += '<td>' + data.school + '</td>';
			output += '<td>' + data.name + '</td>';
			output += '<td>' + data.year + '</td>';
			output += '<td>' + data.semester + '</td>';
			output += '<td>' + data.teacher + '</td>';
		});
		output += '</tr>';
		$('#classes').append(output);
	});
}

function getSchools(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/schools?s={'name':1}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + data.name + '</td>';
		});
		output += '</tr>';
		$('#schools').append(output);
	});
}

function getSchoolsAdmin(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/schools?s={'name':1}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + "<input type='checkbox'>" + '</td>';
			output += '<td>' + data.name + '</td>';
		});
		output += '</tr>';
		$('#schools').append(output);
	});
}



function getAttendance(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/attendance?s={'date':1}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + data.date + '</td>';
			output += '<td>' + data.class + '</td>';
			output += '<td>' + data.status + '</td>';
			output += '<td>' + data.teacher + '</td>';
			output += '<td>' + data.student + '</td>';
		});
		output += '</tr>';
		$('#attendance').append(output);
	});
}

function markAttendance(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/teacher2student/collections/attendance?s={'date':1}&apiKey=9OlKIk_1eYTOmAL0HZQ9mYlqOGNhevoh",

	}).done(function(data){
		var output = '';
		$.each(data, function(key, data){
			output += '<tr>';
			output += '<td>' + "<input type='checkbox'>" + '</td>';
			output += '<td>' + data.date + '</td>';
			output += '<td>' + data.class + '</td>';
			output += '<td>' + data.status + '</td>';
			output += '<td>' + data.teacher + '</td>';
			output += '<td>' + data.student + '</td>';
		});
		output += '</tr>';
		$('#attendance').append(output);
	});
}

