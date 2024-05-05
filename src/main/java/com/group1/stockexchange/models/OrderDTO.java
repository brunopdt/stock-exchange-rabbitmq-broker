package com.group1.stockexchange.models;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class OrderDTO {
    private String brokerId;
    @Getter
    private String active;
    private float price;
    private int stockAmount;
}
