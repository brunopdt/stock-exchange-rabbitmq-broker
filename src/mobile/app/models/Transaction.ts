import Broker from "./Broker";
import Share from "./Share";

export default class Transaction {
    id?: number;

    quantity?: number;

    value?: number;

    transactionDate?: Date;

    broker?: Broker;

    share?: Share;
}