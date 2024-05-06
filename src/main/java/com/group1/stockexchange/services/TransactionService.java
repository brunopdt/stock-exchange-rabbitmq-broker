package com.group1.stockexchange.services;

import com.group1.stockexchange.config.RabbitMqConfig;
import com.group1.stockexchange.models.OrderDTO;
import com.group1.stockexchange.models.TransactionModel;
import com.group1.stockexchange.repositories.TransactionRepository;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * Serviço referente às transações
 */
@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    /**
     * Retorna as transações de um corretor
     * @param id id do corretor
     * @return lista de transações
     */
    public List<TransactionModel> getBrokerTransactions(Long id) {
        return transactionRepository.findByBrokerId(id);
    }

    /**
     * Publica uma mensagem na fila de ordens
     * @param orderDTO DTO da ordem
     * @param orderType tipo da ordem
     * @return mensagem de sucesso ou erro
     */
    public String publishMessage(OrderDTO orderDTO, String orderType) {
        ConnectionFactory factory = RabbitMqConfig.getConnectionFactory();

        try (Connection connection = factory.newConnection(); Channel channel = connection.createChannel()) {
            String message = orderDTO.getStockAmount() + ";" + orderDTO.getPrice() + ";"
                    + orderDTO.getBrokerId();

            channel.basicPublish(orderType, orderDTO.getActive(), null, message.getBytes(StandardCharsets.UTF_8));

            return "[X] " + orderType.substring(0, 1).toUpperCase() + orderType.substring(1)
                    + " order sent successfully! Message: " + message;
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}