package com.group1.stockexchange.repositories;

import com.group1.stockexchange.models.ShareModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShareRepository extends JpaRepository<ShareModel, String> {
}
