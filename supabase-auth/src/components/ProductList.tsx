import { useEffect } from "react";
import ProductDelete from "./ProductDelete";
import ProductEdit from "./ProductEdit";

type Props = {
  sessionUserId: string | null;
  getProduct: () => void;
  products: Product[];
};

export type Product = {
  id: string;
  user_id: string;
  name: string;
  price: number;
  created_at: string;
};

const ProductList = ({ sessionUserId, getProduct, products }: Props) => {
  useEffect(() => {
    getProduct();
  }, [sessionUserId]);

  return (
    <div>
      {products.map((p) => (
        <li className="gap-4 flex">
          <span>
            {p.name} :{p.price}
          </span>
          <ProductDelete getProduct={getProduct} id={p.id} />
          <ProductEdit product={p} getProduct={getProduct} />
        </li>
      ))}
    </div>
  );
};

export default ProductList;
