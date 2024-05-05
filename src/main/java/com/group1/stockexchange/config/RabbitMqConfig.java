package com.group1.stockexchange.config;

import com.rabbitmq.client.ConnectionFactory;
import org.springframework.context.annotation.Configuration;

/**
 * Classe responsável por configurar a conexão com o servidor do RabbitMQ
 */
@Configuration
public class RabbitMqConfig {
    private static final String HOST = "toad.rmq.cloudamqp.com";
    private static final String USERNAME = "aksbeybs";
    private static final String PASSWORD = "QyQqdyI9_4BEwkFf1j0vyvZD0ZNVsl2-";
    private static final String VIRTUAL_HOST = "aksbeybs";

    public static ConnectionFactory getConnectionFactory() {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost(HOST);
        factory.setUsername(USERNAME);
        factory.setPassword(PASSWORD);
        factory.setVirtualHost(VIRTUAL_HOST);
        return factory;
    }
}
