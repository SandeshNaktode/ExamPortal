package com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.app.service.UserService;

@SpringBootApplication
public class ExamServerApplication implements CommandLineRunner{
	
 
	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(ExamServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Starting Code");
		
//		User user = new User();
//		 user.setFirstname("Sandesh");
//		 user.setLastname("Naktode");
//		 user.setUsername("Sandesh123");
//		 user.setPassword("abc");
//		 user.setEmail("sandesh@gamil.com");
//		 user.setProfile("default.png");
//		 
//		 Role role1 = new Role();		 
//		 role1.setRoleId(44L);
//		 role1.setRoleName("ADMIN");
//		 
//		 Set<UserRole> userRoleSet = new HashSet<UserRole>();
//		 UserRole userRole = new UserRole();
//		 userRole.setRole(role1);
//		 userRole.setUser(user);
//		 
//		 userRoleSet.add(userRole );
//		 
//		User user1 =  this.userService.createUser(user, userRoleSet);
//		
//		System.out.println(user1.getFirstname());
//		 
		 
	}

}
