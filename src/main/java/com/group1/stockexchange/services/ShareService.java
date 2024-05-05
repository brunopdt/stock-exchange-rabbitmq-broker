package com.group1.stockexchange.services;

import com.group1.stockexchange.models.ShareModel;
import com.group1.stockexchange.repositories.ShareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShareService {
    @Autowired
    private ShareRepository shareRepository;

    public List<ShareModel> getShares(){
        return shareRepository.findAll();
    }
}
