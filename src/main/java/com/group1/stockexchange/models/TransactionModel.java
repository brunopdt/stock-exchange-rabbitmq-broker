package com.group1.stockexchange.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

/**
 * Modelo referente a transação
 */
@Entity
@Table(name="TRANSACTIONS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class TransactionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantity;
    private double value;
    private Date transactionDate;

    @ManyToOne
    @JoinColumn(name = "shareCode")
    private ShareModel share;

    @ManyToOne
    @JoinColumn(name = "brokerId")
    private BrokerModel broker;
}
