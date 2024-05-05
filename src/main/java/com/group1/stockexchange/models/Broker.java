package com.group1.stockexchange.models;

import jakarta.persistence.*;

@Entity
@Table(name="BROKERS")
public class Broker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String password;

    private double email;

    public Broker(){

    }

    public Broker(Long id, String name, String password, double email) {
        super();
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public double getEmail() {
        return email;
    }

    public void setEmail(double email) {
        this.email = email;
    }
}
