package com.group1.stockexchange.models;

import jakarta.persistence.*;
import lombok.*;

/**
 * Modelo referente ao broker (corretora)
 */
@Entity
@Table(name="BROKERS")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class BrokerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String password;

    private String email;
}
