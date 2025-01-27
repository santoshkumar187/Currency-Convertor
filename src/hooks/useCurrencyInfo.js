import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const url = `https://v6.exchangerate-api.com/v6/deae27c5319fb86d4277ab51/latest/${currency}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => setData(response.conversion_rates))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency, url]);

    return data;
}

export default useCurrencyInfo;


