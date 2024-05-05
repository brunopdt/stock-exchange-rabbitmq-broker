package com.group1.stockexchange.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="TRANSACTIONS")
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
    private BrokerModel broker;

    public Transaction(){

    }

    public Transaction(Long id, int quantity, double value, Date transactionDate, Share share, BrokerModel broker) {
        super();
        this.id = id;
        this.quantity = quantity;
        this.value = value;
        this.transactionDate = transactionDate;
        this.share = share;
        this.broker = broker;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Share getShare() {
        return share;
    }

    public void setShare(Share share) {
        this.share = share;
    }

    public BrokerModel getBroker() {
        return broker;
    }

    public void setBroker(BrokerModel broker) {
        this.broker = broker;
    }
}
