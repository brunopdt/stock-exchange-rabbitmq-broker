package com.group1.stockexchange.services;

import com.group1.stockexchange.models.TransactionModel;
import com.group1.stockexchange.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    public List<TransactionModel> getBrokerTransactions(Long id){
        return transactionRepository.findByBrokerId(id);
    }
}
