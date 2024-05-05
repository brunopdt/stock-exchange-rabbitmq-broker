package com.group1.stockexchange.repositories;

import com.group1.stockexchange.models.OffersBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffersBookRepository extends JpaRepository<OffersBook, Long> {
    List<OffersBook> findByTypeAndBrokerId(String type, Long brokerId);
}
