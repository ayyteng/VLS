package com.VLS.controller;

import org.springframework.web.bind.annotation.*;

import com.VLS.entity.User;
import com.VLS.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    private UserService userService;

    @GetMapping("/select")
    public @ResponseBody Iterable<User> selectAll(){
        return userService.selectAll();
    }


    @PostMapping("/login")
    public User userLogin(@RequestBody User user){
        User userEntityFromService = userService.userLogin(user);
        return userEntityFromService;
    }


}
