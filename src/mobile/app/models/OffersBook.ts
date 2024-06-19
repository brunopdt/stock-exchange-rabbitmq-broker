import Broker from "./Broker";
import Share from "./Share";

export default class OffersBook {
    type?: string;

    id?: number;

    quantity?: number;

    price?: number;

    share?: Share;

    broker?: Broker;
}
