package com.group1.stockexchange.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="SHARES", uniqueConstraints=@UniqueConstraint(columnNames={"code"}))
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Share {
    @Id
    private String code;
    private String name;
    private String activity;
}

