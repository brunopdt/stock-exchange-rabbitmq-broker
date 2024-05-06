package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.ShareModel;
import com.group1.stockexchange.services.ShareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller referente às ações para as páginas de listagem de ações
 */
@RestController
@RequestMapping("/share")
@Validated
public class ShareController {
    @Autowired
    private ShareService shareService;

    /**
     * Retorna as ações disponíveis
     * @return Lista de ações
     */
    @GetMapping("/")
    public List<ShareModel> getShares() {
        return shareService.getShares();
    }
}
