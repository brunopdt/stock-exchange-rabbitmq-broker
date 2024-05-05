package com.group1.stockexchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum OfferType {
    PURCHASE("Compra"),
    SALE("Venda");

    private final String description;
}
