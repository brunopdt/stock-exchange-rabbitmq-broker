package com.group1.stockexchange.repositories;

import com.group1.stockexchange.models.OffersBookModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repositório referente ao livro de ofertas
 */
@Repository
public interface OffersBookRepository extends JpaRepository<OffersBookModel, Long> {
    List<OffersBookModel> findByTypeAndBrokerId(String type, Long brokerId);
}
