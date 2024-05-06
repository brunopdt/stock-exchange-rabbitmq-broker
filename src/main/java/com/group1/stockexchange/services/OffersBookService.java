package com.group1.stockexchange.services;

import com.group1.stockexchange.enums.OfferType;
import com.group1.stockexchange.models.OffersBookModel;
import com.group1.stockexchange.repositories.OffersBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Serviço referente ao livro de ofertas
 */
@Service
public class OffersBookService {
    @Autowired
    private OffersBookRepository offersBookRepository;

    /**
     * Retorna as ações compradas por um corretor
     * @param id id do corretor
     * @return lista de ações compradas
     */
    public List<OffersBookModel> getBrokerPurchasedShares(Long id){
        return offersBookRepository.findByTypeAndBrokerId(OfferType.PURCHASE.getDescription(), id);
    }
}
