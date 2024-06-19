import axios from "axios"

const header = { Pragma: "no-cache", "Content-Type": "application/json" }

//Descomentar para rodar local
//const ip = "http://localhost:8080/"

const ip = "https://stock-exchange-rabbitmq-broker-gndb.onrender.com/"

export const useApi = axios.create({
  headers: header,
  baseURL: ip,
})