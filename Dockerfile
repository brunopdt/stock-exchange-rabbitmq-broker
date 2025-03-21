# Dockerfile para ambiente de build da aplicação
FROM eclipse-temurin:22-jdk AS build
WORKDIR /app
COPY . .

RUN apt-get update
RUN apt-get install maven -y
RUN mvn clean package

# Segundo estágio do Dockerfile para montar o container de execução da aplicação
FROM eclipse-temurin:22-jre
WORKDIR /app
COPY --from=build /app/target/stock-exchange-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]