<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1 align="center">Student Registration</h1>
	<h5 style="color: red;">${requestScope.message}</h5>
	<div align="center">
	<form method="post">
		<table class="table table-striped">
			<tr>
				<td>Name:</td>
				<td><input type="text" name="name" /></td>
			</tr>
			<tr>
				<td>Address:</td>
				<td><input type="text" name="address" /></td>
			</tr>
			<tr>
				<td>DOB:</td>
				<td><input type="date" name="dob" /></td>
			</tr>
			<tr>
				<td>CGPA:</td>
				<td><input type="number" name="cgpa" /></td>
			</tr>

			<tr>
				<td><input type="submit" value="submit" /></td>
			</tr>
		</table>
	</form>
	</div>
</body>
</html>