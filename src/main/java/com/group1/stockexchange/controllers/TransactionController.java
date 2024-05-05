package com.group1.stockexchange.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.group1.stockexchange.models.OrderDTO;
import com.group1.stockexchange.models.Transaction;
import com.group1.stockexchange.services.TransactionService;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
@Validated
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/sell")
    public String sell(@RequestBody OrderDTO orderDTO) {
        return sendOrder(orderDTO, "sell");
    }

    @PostMapping("/buy")
    public String buy(@RequestBody OrderDTO orderDTO) {
        return sendOrder(orderDTO, "buy");
    }

    private String sendOrder(OrderDTO orderDTO, String orderType) {
        try {
            String jsonOrder = objectMapper.writeValueAsString(orderDTO);
            rabbitTemplate.convertAndSend(orderType, orderDTO.getActive(), jsonOrder.getBytes());
            return "[X] " + orderType.substring(0,1).toUpperCase() + orderType.substring(1) + " order sent successfully!";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }

    @GetMapping("/broker/{id}")
    public List<Transaction> getBrokerTransactions(@PathVariable Long id) {
        return transactionService.getBrokerTransactions(id);
    }
}
