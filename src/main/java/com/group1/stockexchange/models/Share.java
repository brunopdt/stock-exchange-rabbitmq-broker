package com.group1.stockexchange.models;

import jakarta.persistence.*;

@Entity
@Table(name="SHARES", uniqueConstraints=@UniqueConstraint(columnNames={"code"}))
public class Share {
    @Id
    private String code;
    private String name;
    private String activity;

    public Share(){

    }

    public Share(String code, String name, String activity) {
        super();
        this.code = code;
        this.name = name;
        this.activity = activity;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }
}

