package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.OffersBookModel;
import com.group1.stockexchange.services.OffersBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller referente ao livro de ofertas para as páginas de listagem de ações
 */
@RestController
@RequestMapping("/offersBook")
@Validated
public class OffersBookController {
    @Autowired
    private OffersBookService offersBookService;

    /**
     * Retorna as ofertas de compra e venda de uma ação
     * @param id Id da ação
     * @return Lista de ofertas de compra e venda
     */
    @GetMapping("/broker/{id}")
    public List<OffersBookModel> getBrokerPurchasedShares(@PathVariable Long id) {
        return offersBookService.getBrokerPurchasedShares(id);
    }
}
