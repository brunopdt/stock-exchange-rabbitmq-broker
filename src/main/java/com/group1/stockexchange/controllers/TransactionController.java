package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.OrderDTO;
import com.group1.stockexchange.models.TransactionModel;
import com.group1.stockexchange.services.TransactionService;
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


    @PostMapping("/sell")
    public String sell(@RequestBody OrderDTO orderDTO) {
        return transactionService.publishMessage(orderDTO, "sell");
    }

    @PostMapping("/buy")
    public String buy(@RequestBody OrderDTO orderDTO) {
        return transactionService.publishMessage(orderDTO, "buy");
    }

    @GetMapping("/broker/{id}")
    public List<TransactionModel> getBrokerTransactions(@PathVariable Long id) {
        return transactionService.getBrokerTransactions(id);
    }
}
