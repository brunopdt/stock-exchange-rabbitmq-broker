package com.group1.stockexchange.requests;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterBrokerRequest {
    @NotEmpty(message = "Name é obrigatório")
    String name;

    @NotEmpty(message = "Email é obrigatório")
    String email;

    @NotEmpty(message = "Password é obrigatório")
    String password;
}
