import { supabase } from "../supabase";

type Props = {
  id: string;
  getProduct: () => void;
};

const ProductDelete = ({ id, getProduct }: Props) => {
  const handleDelete = () => {
    supabase
      .from("products")
      .delete()
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          alert(error.message);
          return;
        }
        getProduct();
      });
  };
  return (
    <button className="rounded bg-red-500 border-2 p-2" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default ProductDelete;
