package com.group1.stockexchange.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.group1.stockexchange.services.BrokerService;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class BrokerController {
    
    private final BrokerService brokerService;

    BrokerController(BrokerService brokerService) {
        this.brokerService = brokerService;
    }
  
    @GetMapping("/login")
    public ModelAndView login() {
        ModelAndView mv = new ModelAndView("login");
        return mv;
    }
      
    @PostMapping("/login")
    public String postMethodName(@RequestParam("email") String email,
                              @RequestParam("password") String password,
                              Model model) {
        if (brokerService.isValidBroker(email, password)) {
            return "redirect:/cadastro";
        } else{
             model.addAttribute("message", "Login inválido");
            return "login";
        }
    }

    @GetMapping("/cadastro")
    public ModelAndView cadastro() {
        ModelAndView mv = new ModelAndView("cadastro");
        return mv;
    }

    @PostMapping("/cadastro")
    public String postMethodName(@RequestParam("name") String name,
                              @RequestParam("email") String email,
                              @RequestParam("password") String password,
                              Model model) {

        // Verifica se o email já está cadastrado
        if (brokerService.isEmailAlreadyRegistered(email)) {
            model.addAttribute("error", "O email fornecido já está cadastrado. Por favor, use outro email.");
            return "cadastro"; 
        }

        // Se o email não estiver cadastrado, proceder com o cadastro
        brokerService.cadastrarUsuario(name, email, password);
        return "redirect:/login"; 
    }    

}