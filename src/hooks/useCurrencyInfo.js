import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://open.er-api.com/v6/latest/${currency}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        }
      })
      .catch((err) => console.error("Failed to fetch currency data", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
