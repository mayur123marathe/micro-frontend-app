// src/declarations.d.ts

declare module "nav/Navbar" {
  import React from "react";
  const Component: React.ComponentType;
  export default Component;
}

declare module "item_cart/ItemCart" {
  import React from "react";

  export type CardData = {
    image: string;
    name: string;
    cuisine: string;
    rating: number;
    id: number;
  };

  export type CardDetailsProps = {
    data: CardData;
  };

  const ItemCart: React.ComponentType<CardDetailsProps>;
  export default ItemCart;
}

declare module "product_page/ProductPage" {
  import React from "react";
  const ProductPage: React.ComponentType;
  export default ProductPage;
}

declare module "store_remote/Store" {
  import { ReactNode } from "react";
  export function StoreProvider({
    children,
  }: {
    children: ReactNode;
  }): JSX.Element;

  export function useStore(): {
    cart: any[];
    setCart: (newItem: any[]) => void;
  };
}
