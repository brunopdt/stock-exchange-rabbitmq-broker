package com.group1.stockexchange.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.group1.stockexchange.services.BrokerService;

import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;


@RestController
@RequestMapping("/broker")
@Validated
public class BrokerController {
    @Autowired
    private BrokerService brokerService;


    @GetMapping("/login")
    public ModelAndView login() {
        return new ModelAndView("login");
    }

    @PostMapping("/login")
    public String postMethodName(@RequestParam("email") String email,
                              @RequestParam("password") String password,
                              Model model) {
        if (brokerService.isValidBroker(email, password)) {
            return "redirect:/register";
        } else{
             model.addAttribute("message", "Login inválido");
            return "login";
        }
    }

    @GetMapping("/register")
    public ModelAndView register() {
        return new ModelAndView("register");
    }

    @PostMapping("/register")
    public String postMethodName(@RequestParam("name") String name,
                              @RequestParam("email") String email,
                              @RequestParam("password") String password,
                              Model model) {

        // Verifica se o email já está cadastrado
        if (brokerService.isEmailAlreadyRegistered(email)) {
            model.addAttribute("error", "O email fornecido já está cadastrado. Por favor, use outro email.");
            return "register";
        }

        // Se o email não estiver cadastrado, proceder com o cadastro
        brokerService.registerUser(name, email, password);
        return "redirect:/login"; 
    }    

}