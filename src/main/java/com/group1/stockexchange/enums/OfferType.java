package com.group1.stockexchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum OfferType {
    PURCHASE("buy"),
    SALE("sell");

    private final String description;
}
