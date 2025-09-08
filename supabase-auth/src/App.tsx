import { useState } from "react";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import ProductAdd from "./components/ProductAdd";
import Register from "./components/Register";
import UserStatus from "./components/UserStatus";
import ProductList, { type Product } from "./components/ProductList";
import { supabase } from "./supabase";

const App = () => {
  const [sessionUserId, setSessionUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async (): Promise<Product[]> => {
    if (!sessionUserId) {
      setProducts([]);
      return [];
    }
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("user_id", sessionUserId)
      .order("created_at", { ascending: false });

    if (error || !data) {
      setProducts([]);
      return [];
    }
    setProducts(data);
    return data;
  };

  return (
    <div className="h-screen bg-slate-400">
      <LogIn />
      <Register />
      <LogOut />
      <UserStatus
        setSessionUserId={setSessionUserId}
        sessionUserId={sessionUserId}
      />
      <ProductAdd getProduct={getProducts} sessionUserId={sessionUserId} />
      <ProductList
        products={products}
        getProduct={getProducts}
        sessionUserId={sessionUserId}
      />
    </div>
  );
};

export default App;
