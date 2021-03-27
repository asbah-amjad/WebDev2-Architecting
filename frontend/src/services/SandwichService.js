import axios from "axios";
import {getApiUrl} from "../settings";

const baseUrl = "/sandwich";

const getListing = () => {
    console.debug("Fetch a list of sandwiches.");
    return axios.get(getApiUrl(baseUrl)).then(response => response.data);
};

export const SandwichService = { getListing };
