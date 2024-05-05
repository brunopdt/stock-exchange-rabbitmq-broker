package com.group1.stockexchange.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group1.stockexchange.models.BrokerModel;

@Repository
public interface BrokerRepository extends JpaRepository<BrokerModel, Long> {
    BrokerModel findByEmail(String email);
}
