package com.group1.stockexchange.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="OFFERS_BOOKS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class OffersBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private int quantity;
    private double price;

    @ManyToOne
    @JoinColumn(name = "shareCode")
    private Share share;

    @ManyToOne
    @JoinColumn(name = "brokerId")
    private Broker broker;
}