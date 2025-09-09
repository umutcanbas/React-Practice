import { Filter, Heart, Menu, ShoppingCart, User } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 flex w-full justify-around border-t border-gray-100 bg-white py-2 shadow">
      <button className="grid justify-items-center">
        <Menu />
        <span> Menu</span>
      </button>
      <button className="grid place-items-center">
        <Filter />
        <span> Filters</span>
      </button>
      <button className="grid place-items-center">
        <Heart />
        <span> Wishlist</span>
      </button>
      <button className="grid place-items-center">
        <ShoppingCart />
        <span> Cart</span>
      </button>
      <button className="grid place-items-center">
        <User />
        <span> Account</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
