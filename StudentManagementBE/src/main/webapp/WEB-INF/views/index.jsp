<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2 align="center">Welcome To CDAC Acts Pune</h2>
	<spring:url var="url" value="/" />
	<div align="center">
	<form method="post">
		<table class="table table-dark table-hover">
			<tr>
				<th>Course</th>
			</tr>
			<c:forEach var="Course" items="${requestScope.course_list}">
				<tr>
					<td>${Course.couresName}</td>
					<td><a href="delete/${Course.courseId}">Delete</a></td>
					<td><a href="save/${Course.courseId}">Admit Student</a></td>
				</tr>
			</c:forEach>
		</table>
	</form>
	</div>
</body>
</html>