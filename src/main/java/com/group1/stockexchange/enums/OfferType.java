package com.group1.stockexchange.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Enum que representa o tipo de oferta (compra ou venda)
 */
@AllArgsConstructor
@Getter
public enum OfferType {
    PURCHASE("buy"),
    SALE("sell");

    private final String description;
}
