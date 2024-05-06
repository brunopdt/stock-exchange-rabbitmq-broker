package com.group1.stockexchange.repositories;

import com.group1.stockexchange.models.TransactionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repositório referente às transações
 */
@Repository
public interface TransactionRepository extends JpaRepository<TransactionModel, Long> {
    List<TransactionModel> findByBrokerId(Long brokerId);
}
