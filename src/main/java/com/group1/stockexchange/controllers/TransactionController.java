package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.OrderDTO;
import com.group1.stockexchange.models.TransactionModel;
import com.group1.stockexchange.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller referente às transações de compra e venda de ações
 */
@RestController
@RequestMapping("/transaction")
@Validated
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    /**
     * Realiza uma transação de venda de ações
     * @param orderDTO
     * @return
     */
    @PostMapping("/sell")
    public String sell(@RequestBody OrderDTO orderDTO) {
        return transactionService.publishMessage(orderDTO, "sell");
    }

    /**
     * Realiza uma transação de compra de ações
     * @param orderDTO
     * @return
     */
    @PostMapping("/buy")
    public String buy(@RequestBody OrderDTO orderDTO) {
        return transactionService.publishMessage(orderDTO, "buy");
    }

    /**
     * Retorna as transações de um corretor
     * @param id Id do corretor
     * @return Lista de transações
     */
    @GetMapping("/broker/{id}")
    public List<TransactionModel> getBrokerTransactions(@PathVariable Long id) {
        return transactionService.getBrokerTransactions(id);
    }
}
