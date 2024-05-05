package com.group1.stockexchange.services;

import com.group1.stockexchange.models.Transaction;
import com.group1.stockexchange.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getBrokerTransactions(Long id){
        return transactionRepository.findByBrokerId(id);
    }
}
