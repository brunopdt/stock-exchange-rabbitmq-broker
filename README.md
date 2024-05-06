# stock-exchange-rabbitmq-broker

<h1 align="center">
    <span href="">🔗 Trabalho de Spring MVC - Home Broker </span>
</h1>

## 📈 Bolsa-de-Valores
Laboratório de Desenvolvimento de Aplicações Móveis e Distribuidas.
Esse projeto tem como objetivo elaborar um sistema para uma bolsa de valores baseado no framework back-end Java Spring. 
O trabalho consiste na construção de uma aplicação completa que oferece uma interface de home
broker e operacionaliza a negociação de ativos em uma bolsa de valores

Este sistema realizado proporciona aos usuários a capacidade de visualizar e negociar ativos na bolsa de valores de forma eficiente, com a corretora atuando como intermediária entre os usuários e a bolsa de valores. O Servidor MQ desempenha um papel crucial na comunicação entre a Corretora e a Bolsa de Valores, garantindo uma troca eficaz de informações e a execução precisa das transações.


## 👥 Alunos:
* Bárbara Mattioly Andrade  
* Bruno Pontes Duarte
* Laura Enísia Rodrigues Melo
* Samuel Marques Sousa Leal
 
## 👨‍🏫 Professor:
* Rommel Carneiro

## 💻 Para compilação e execução do sistema:

> Etapa 1 - Clone dos repositórios
* Clone os repositórios do projeto https://github.com/barbaraMattioly/stock-exchange-rabbitmq (bolsa de valores - servidor rabbitmq) e https://github.dev/brunopdt/stock-exchange-rabbitmq-broker (broker app - corretora).


> Etapa 2 - Executar a bolsa de valores

* Execute o StockExchangeRabbitMqApplication localizado na pasta stockExchange através do "Run" da IDE utilizada, ou via terminal 
* Digite o endereço do servidor (https://stock-exchange-rabbitmq-broker.onrender.com) ou mantenha como "localhost";
* Clique em "Abrir Negociações";

> Etapa 3 - Executar uma corretora 

* Execute o StockExchangeRabbitMqApplication localizado na pasta stockExchange através do "Run" da IDE utilizada, ou via terminal 
* Digite o endereço do servidor (https://stock-exchange-rabbitmq-broker.onrender.com/broker/login) ou mantenha como localhost ("localhost:8080/broker/login")
* Caso possua conta entre com e-mail e senha. Se não, realize o cadastro.
* Após logar, será exibida a lista de ativos com ações disponíveis para compra
* Selecione uma ação da bovespa que deseja possuir e clique no botão 'comprar' 
* Digite a quantidade de lotes e o preço a serem negociados para esta ação;
* Clique no botão 'Confirmar Compra' para abrir uma oferta de compra ou clique no botão 'Cancelar' para cancelar a ação; 

> Etapa 4 - Acompanhar ações compradas 
* Clique na aba "Minhas Ações";
* Será disponibilizado a listagem de ações compradas com a opção de relizar as vendas

> Etapa 5 - Acompanhar transações 
* Clique na aba "Transações";
* Será disponibilizado a listagem de transações com suas respectivas datas, ordens, quantidades e valores respectivos das ordens realizadas, seja compra ou venda.

> Etapa 6 - Encaminhar mensagens 

* O envio de mensagens acontece automaticamente quando a bolsa de valores recebe qualquer mensagem;

> Etapa 7 - Realizar transação 

* Assim como a etapa 6, também acontece automaticamente quando uma nova oferta é publicada no livro de ofertas;
