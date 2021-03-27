import axios from "axios";
import { getApiUrl } from "../settings";

const baseUrl = "/order";

const getListing = () => {
    console.debug("Fetch a list of orders.");
    return axios.get(getApiUrl(baseUrl)).then(response => response.data);
};

export const OrderService = { getListing };
