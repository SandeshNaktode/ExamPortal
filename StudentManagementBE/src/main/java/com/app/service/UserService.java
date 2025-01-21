package com.app.service;

import java.util.Set;

import com.app.pojos.User;
import com.app.pojos.UserRole;

public interface UserService {

	//creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	//get user by username
	public User getUser(String username);
	
	//delete user by id
	public void deleteUser(Long userId);
	
	//update userdetails by id
	//public void updateUser(Long userId);
}
