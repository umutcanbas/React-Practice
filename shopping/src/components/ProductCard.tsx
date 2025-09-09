import { Check, Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="grid gap-1 rounded bg-white p-3 text-sm shadow">
      <img src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/acer-conceptd-7-ezel-1.jpg" />
      <span className="font-semibold">Acer Concept 7 </span>
      <span className="text-gray-500">Business Laptop </span>
      <div className="flex gap-1">
        <Star size={16} color={"#ccc"} />
        <Star size={16} color={"#ccc"} />
        <Star size={16} color={"#ccc"} />
        <Star size={16} color={"#ccc"} />
        <Star size={16} color={"#ccc"} />
        <Star size={16} color={"#ccc"} />
      </div>
      <div className="flex items-center gap-1">
        <Check size={16} color="#1111ff" />
        <span>In Stock</span>
      </div>
      <span className="text-blue-500">3,700.00</span>
      <button className="bg-bl-600 rounded-l-lg px-4 py-3 text-white">
        Add to Cart
      </button>
      <span className="text-gray-500">30890</span>
    </div>
  );
};

export default ProductCard;
