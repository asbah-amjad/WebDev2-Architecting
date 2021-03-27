import axios from "axios";
import { mockOrderList } from "../mocks/orders";
import { OrderService } from "./OrderService";

jest.mock("axios");

describe("SandwichService", () => {
    it("should fetch a list of sandwiches", async () => {
        axios.get.mockResolvedValue({ data: mockOrderList });
        const data = await OrderService.getListing();
        expect(data).toEqual(mockOrderList);
    });
});
