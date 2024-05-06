package com.group1.stockexchange.models;

import jakarta.persistence.*;
import lombok.*;

/**
 * Modelo referente ao livro de ofertas
 */
@Entity
@Table(name="OFFERS_BOOKS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class OffersBookModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private int quantity;
    private double price;

    @ManyToOne
    @JoinColumn(name = "shareCode")
    private ShareModel share;

    @ManyToOne
    @JoinColumn(name = "brokerId")
    private BrokerModel broker;
}