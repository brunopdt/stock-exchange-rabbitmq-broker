package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.BrokerModel;
import com.group1.stockexchange.requests.LoginRequest;
import com.group1.stockexchange.requests.RegisterBrokerRequest;
import com.group1.stockexchange.responses.BaseResponse;
import com.group1.stockexchange.responses.LoginResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
     * Método para realizar o login do usuário verificando os campos inseridos e redirecionar o web para a respectiva página
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
     * Método para realizar o login do usuário verificando os campos inseridos
     * @return ResponseEntity<LoginResponse>
     */
    @PostMapping("/userLogin")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        BrokerModel broker = brokerService.isValidBroker(loginRequest.getEmail(), loginRequest.getPassword());
        LoginResponse response = new LoginResponse();
        if (broker != null) {
            response.setUserId(broker.getId());
            response.setMessage("Login bem-sucedido");
            return ResponseEntity.ok(response);
        } else {
            response.setMessage("Login inválido");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    /**
     * Método para realizar o cadastro do usuário e redirecionar o web para a respectiva página
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

    /**
     * Método para realizar o cadastro do usuário 
     * @return
     */
    @PostMapping("/registerUser")
    public ResponseEntity<BaseResponse> registerUser(@Valid @RequestBody RegisterBrokerRequest request) {
        BaseResponse response = new BaseResponse();

        if (brokerService.isEmailAlreadyRegistered(request.getEmail())) {
            response.setMessage("O email fornecido já está cadastrado. Por favor, use outro email.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        brokerService.registerUser(request.getName(), request.getEmail(), request.getPassword());
        response.setMessage("Cadastro realizado com sucesso");

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}