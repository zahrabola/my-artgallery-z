import React, { useState, useEffect } from "react";
import "./Shop.css";

const Shop = () => {
  const [datashop, setDataShop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await fetch(
          "https://api.artic.edu/api/v1/products?limit=8"
        );
        const jsonShopData = await response.json();
        setDataShop(jsonShopData);
      } catch (error) {
        setError(error);
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
    <div className="shop-container">
      <h1>Shop</h1>
      
      {/*<p>Products</p> <h1>{datashop.info.version}</h1>
    <p>{datashop.info.license_text}</p> */}
       <hr />
      <div className="shop-card-scroll">
        {datashop.data.map((shopdata) => (
          <div key={shopdata.id} className="shop-card">
           <a href={shopdata.web_url}>
        <img src={shopdata.image_url} alt={shopdata.api_model} />
        <div className="shop-card-overlay">
          <h5>{shopdata.title}</h5>
        </div>
      </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
