package com.group1.stockexchange.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group1.stockexchange.models.BrokerModel;
import com.group1.stockexchange.repositories.BrokerRepository;

@Service
public class BrokerService {

    @Autowired
    private BrokerRepository brokerRepository;


    public boolean isValidBroker(String email, String password) {
        BrokerModel broker = brokerRepository.findByEmail(email);
        return broker != null && broker.getPassword().equals(password);
        
    }

    public boolean isEmailAlreadyRegistered(String email) {
        return brokerRepository.findByEmail(email) != null;
    }

    public boolean cadastrarUsuario(String name, String email, String password) {
        if (isEmailAlreadyRegistered(email)) {
            return false;
        }
        BrokerModel broker = new BrokerModel();
        broker.setName(name);
        broker.setEmail(email);
        broker.setPassword(password);
        brokerRepository.save(broker); 
        return true;
    }

}
