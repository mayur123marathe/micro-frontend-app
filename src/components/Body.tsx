import React, { Suspense, useState, useEffect } from "react";
const ItemCart = React.lazy(() => import("item_cart/ItemCart"));
import "./styles/body.css";
import { useNavigate } from "react-router-dom";

import type { CardData } from "item_cart/ItemCart";

export default function Body() {
  const navigate = useNavigate();
  const [detailItems, setDetailItems] = useState<CardData[]>([]);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/recipes?limit=15&select=id,name,image,cuisine,rating"
    )
      .then((res) => res.json())
      .then((data) => setDetailItems(data.recipes));
  }, []);

  return (
    <div>
      <h1>Hungry? We’ve Got You Covered</h1>
      <p>Select a product to view details or add it directly to your cart</p>

      <Suspense fallback={<div>Loading Item Carts...</div>}>
        <div className="item-cart-container">
          {detailItems.map((item, index) => (
            <ItemCart key={index} data={item} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
