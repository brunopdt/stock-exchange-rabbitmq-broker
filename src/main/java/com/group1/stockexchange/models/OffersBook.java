package com.group1.stockexchange.models;

import jakarta.persistence.*;

@Entity
@Table(name="OFFERS_BOOKS")
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

    public OffersBook(){

    }

    public OffersBook(Long id, String type, int quantity, double price, Share share, Broker broker) {
        super();
        this.id = id;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
        this.share = share;
        this.broker = broker;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Share getShare() {
        return share;
    }

    public void setShare(Share share) {
        this.share = share;
    }

    public Broker getBroker() {
        return broker;
    }

    public void setBroker(Broker broker) {
        this.broker = broker;
    }
}