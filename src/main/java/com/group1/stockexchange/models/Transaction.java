package com.group1.stockexchange.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name="TRANSACTIONS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantity;
    private double value;
    private Date transactionDate;

    @ManyToOne
    @JoinColumn(name = "shareCode")
    private Share share;

    @ManyToOne
    @JoinColumn(name = "brokerId")
    private Broker broker;
}
