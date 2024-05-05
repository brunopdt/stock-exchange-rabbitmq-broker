package com.group1.stockexchange.controllers;

import com.group1.stockexchange.models.Share;
import com.group1.stockexchange.services.ShareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/share")
@Validated
public class ShareController {
    @Autowired
    private ShareService shareService;

    @GetMapping("/")
    public List<Share> getShares() {
        return shareService.getShares();
    }
}
