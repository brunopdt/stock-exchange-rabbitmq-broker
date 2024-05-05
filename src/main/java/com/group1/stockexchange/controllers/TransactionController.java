package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.TransactionModel;
import com.group1.stockexchange.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transaction")
@Validated
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/broker/{id}")
    public List<TransactionModel> getBrokerTransactions(@PathVariable Long id) {
        return transactionService.getBrokerTransactions(id);
    }
}
