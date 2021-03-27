import React, { useEffect, useState } from "react";
import { mockSandwichList } from "../mocks/sandwiches";
import { SandwichService } from "../services/SandwichService";

export const SandwichListView = () => {
    const [sandwiches, setSandwiches] = useState(mockSandwichList);

    /*useEffect(() => {
        SandwichService.getListing().then(setSandwiches);
    }, []);*/

    return (
        <div>
            <h1>Sandwiches</h1>
            {JSON.stringify(sandwiches)}
        </div>
    );
};
