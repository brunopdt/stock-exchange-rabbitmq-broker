package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.BrokerModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.group1.stockexchange.services.BrokerService;

import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

/**
 * Controller referente ao broker (corretor)
 */
@RestController
@RequestMapping("/broker")
@Validated
public class BrokerController {
    @Autowired
    private BrokerService brokerService;

    /**
     * Retorna a página de login
     * @return
     */
    @GetMapping("/login")
    public ModelAndView login() {
        return new ModelAndView("login");
    }

    /**
     * Retorna a página de registro
     * @return
     */
    @GetMapping("/register")
    public ModelAndView register() {
        return new ModelAndView("register");
    }

    /**
     * Retorna a página de listagem de ações
     * @return
     */
    @GetMapping("/shares")
    public ModelAndView shareList() {
        return new ModelAndView("share");
    }

    /**
     * Método para realizar o login do usuário verificando os campos inseridos
     * @return
     */
    @PostMapping("/login")
    public RedirectView postMethodName(@RequestParam("email") String email,
                                       @RequestParam("password") String password,
                                       Model model) {
        BrokerModel broker = brokerService.isValidBroker(email, password);
        if (broker != null) {
            return new RedirectView("/broker/shares?userId=" + broker.getId());
        } else{
            model.addAttribute("message", "Login inválido");
            return new RedirectView("/broker/login");
        }
    }

    /**
     * Método para realizar o cadastro do usuário 
     * @return
     */
    @PostMapping("/register")
    public RedirectView postMethodName(@RequestParam("name") String name,
                                       @RequestParam("email") String email,
                                       @RequestParam("password") String password,
                                       Model model) {

        // Verifica se o email já está cadastrado
        if (brokerService.isEmailAlreadyRegistered(email)) {
            model.addAttribute("error", "O email fornecido já está cadastrado. Por favor, use outro email.");
            return new RedirectView("/broker/login");
        }

        // Se o email não estiver cadastrado, proceder com o cadastro
        brokerService.registerUser(name, email, password);
        return new RedirectView("/broker/login");
    }
}