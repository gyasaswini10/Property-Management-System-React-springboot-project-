package com.example.demo.controller;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Users;
import com.example.demo.model.UsersManager;
import com.example.demo.repository.UsersRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UsersController {
	@Autowired
	UsersManager um;
	UsersRepository usersRepository;
	@PostMapping("/signup")
	public String signup(@RequestBody Users U)
	{
		return um.addUser(U);
	}
	@PostMapping("/signin")
	  public String signin(@RequestBody Users U) {
		return um.ValidateCredentials(U.getEmail(),U.getPassword());
	  }
	@GetMapping("/forgotpassword/{email}")
	  public String forgotPassword(@PathVariable("email") String emailid) {
	    
	    return um.recoverPassword(emailid);
	  }
	@PostMapping("/getfullname")
	public String getFullname(@RequestBody Map<String, String> data)
	{
		return um.getFullname(data.get("csrid"));
	}
	@PostMapping("/getemail")
	public String getEmail(@RequestBody Map<String, String> data)
	{
		return um.getEmail(data.get("csrid"));
	}
}