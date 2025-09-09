import { ArrowUpDown, Menu } from "lucide-react";
import ProductCard from "./ProductCard";

const Prodcuts = () => {
  return (
    <div className="mt-4 grid p-4">
      <span className="text-2xl font-semibold">Shop</span>
      <div className="flex justify-between">
        <a href="#" className="flex items-center gap-1">
          <Menu />
          <span>Show sidebar</span>
        </a>
        <ArrowUpDown />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Prodcuts;
