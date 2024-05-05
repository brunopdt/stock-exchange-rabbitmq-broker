package com.group1.stockexchange.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {
    @GetMapping("/hello")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}


