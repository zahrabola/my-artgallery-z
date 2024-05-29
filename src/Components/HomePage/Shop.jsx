import React, { useState, useEffect } from "react";

const Shop = () => {
  const [datashop, setDataShop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(
          "https://api.artic.edu/api/v1/products?limit=8"
        );
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setDataShop(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchShopData();
  }, []);

  console.log(datashop);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!datashop) {
    return <div>Loading Shop Information .... </div>;
  }

  return (
    <div>
      <h1>{datashop.info.version}</h1>
      <p>{datashop.info.license_text}</p>
      <div className="imggrid">
        {datashop.data.map((shopdata) => (
          <div key={shopdata.id}>
             <div>

<h2> {shopdata.title}</h2>
</div>
            <img src={shopdata.image_url}  alt={shopdata.api_model}/>
           
          </div>
        ))}
      </div>
      Shop
    </div>
  );
};

export default Shop;
