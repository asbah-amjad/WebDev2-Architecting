import React, { useEffect, useState } from "react";
import {Sandwich} from "../components/Sandwich/Sandwich";
import { mockSandwichList } from "../mocks/sandwiches";
import { SandwichService } from "../services/SandwichService";

export const SandwichListView = () => {
    const [sandwiches, setSandwiches] = useState(mockSandwichList);

    const handleOrder = () => {
        console.log("User");
    };

    /*useEffect(() => {
        SandwichService.getListing().then(setSandwiches);
    }, []);*/

    return (
        <div>
            <h1>Sandwiches</h1>
            {sandwiches.map(data => <Sandwich key={data.id} {...data} onOrder={handleOrder}/>)}
        </div>
    );
};
