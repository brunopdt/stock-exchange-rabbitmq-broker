package com.group1.stockexchange.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class OrderDTO {
    private Long brokerId;
    private String active;
    private float price;
    private int stockAmount;
}
