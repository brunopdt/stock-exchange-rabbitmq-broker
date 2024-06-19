import axios from "axios"

const header = { Pragma: "no-cache", "Content-Type": "application/json" }

const ip = "https://stock-exchange-rabbitmq-broker-gndb.onrender.com/"

export const useApi = axios.create({
  headers: header,
  baseURL: ip,
})