package com.padel.social.padelbackend.controller;

import com.padel.social.padelbackend.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

    @GetMapping("/users")
    public List<User> getUsers() {
        // Datos de ejemplo
        User user1 = new User(1L, "Nahuel", 28, "player", true, 120);
        User user2 = new User(2L, "Canchita Central", 0, "court", false, 0);
        User user3 = new User(3L, "Lucas", 25, "player", false, 50);

        return Arrays.asList(user1, user2, user3);
    }
}
