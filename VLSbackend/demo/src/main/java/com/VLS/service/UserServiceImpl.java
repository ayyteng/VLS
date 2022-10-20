package com.VLS.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.VLS.entity.User;
import com.VLS.repository.UserRepository;

public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public Iterable<User> selectAll() {
        return userRepository.findAll();
    }

    @Override
    public User userLogin(User user) {
        User userEntityFromDb = userRepository.getById(user.getUserId());
        if(user.getUserId().equals(userEntityFromDb.getUserId()) && user.getUserPassword().equals(userEntityFromDb.getUserPassword())){
            return userEntityFromDb;
        }
        return user;
    }
}
