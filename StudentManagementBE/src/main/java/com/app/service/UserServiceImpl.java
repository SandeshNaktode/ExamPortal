package com.app.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.RoleRepository;
import com.app.dao.UserRepository;
import com.app.pojos.User;
import com.app.pojos.UserRole;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	//creating User
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.findByUsername(user.getUsername());
		if (local != null) {
			System.out.println("User in already there!!!");
			
			throw new Exception("User Already Present!!!");
		}
		else {
			//Create user
			for (UserRole ur : userRoles) 
			{
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			local = this.userRepository.save(user);
		}
		return local;
	}


	//getting user by username
	@Override
	public User getUser(String username) {
		return this.userRepository.findByUsername(username);
	}


	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
		
	}


}
