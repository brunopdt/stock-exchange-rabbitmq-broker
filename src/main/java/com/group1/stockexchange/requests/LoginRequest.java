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
public class LoginRequest {
    @NotEmpty(message = "Email é obrigatório")
    private String email;

    @NotEmpty(message = "Password é obrigatório")
    private String password;
}
