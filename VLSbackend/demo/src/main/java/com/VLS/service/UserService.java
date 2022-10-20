package com.VLS.service;

import org.springframework.stereotype.Service;

import com.VLS.entity.User;


@Service
public interface UserService {

     Iterable<User> selectAll();
     User userLogin(User user);
}
