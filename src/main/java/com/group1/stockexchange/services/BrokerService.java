package com.group1.stockexchange.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group1.stockexchange.models.BrokerModel;
import com.group1.stockexchange.repositories.BrokerRepository;

/**
 * Serviço referente ao broker (corretor)
 */
@Service
public class BrokerService {

    @Autowired
    private BrokerRepository brokerRepository;

    /**
     * Verifica se o corretor é válido
     * @param email
     * @param password
     * @return
     */
    public BrokerModel isValidBroker(String email, String password) {
        BrokerModel broker = brokerRepository.findByEmail(email);

        if(broker != null && broker.getPassword().equals(password)){
            return broker;
        };
        return null;
    }

    /**
     * Verifica se o email já está registrado
     * @param email
     * @return
     */
    public boolean isEmailAlreadyRegistered(String email) {
        return brokerRepository.findByEmail(email) != null;
    }

    /**
     * Registra um novo usuário
     * @param name
     * @param email
     * @param password
     * @return
     */
    public boolean registerUser(String name, String email, String password) {
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
