import { supabase } from "../supabase";

type Props = {
  sessionUserId: string | null;
};

const ProductAdd = ({ sessionUserId }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");

    if (sessionUserId === null) {
      alert("Need Login");
      return;
    }
    const { data, error } = await supabase
      .from("products")
      .insert({
        user_id: sessionUserId,
        name: name,
        price: Number(price) || 0,
      })
      .select()
      .single();
    if (error) {
      return alert(error.message);
    }
    console.log(data);
    alert(data.name + " Success");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-700">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        name="name"
        defaultValue={"Phone"}
      />
      <input
        type="number"
        placeholder="Product Price"
        name="price"
        defaultValue={"72000"}
      />
      <button>Add Product</button>
    </form>
  );
};

export default ProductAdd;
