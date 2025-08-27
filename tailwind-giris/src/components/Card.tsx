export type Coffee = {
  id?: number;
  title?: string;
  description?: string;
  ingredients?: string | string[];
  image?: string;
};

const Card = ({ coffee }: { coffee: Coffee }) => {
  const ingredients =
    typeof coffee.ingredients === "string"
      ? coffee.ingredients.split(", ")
      : coffee.ingredients;

  return (
    <div className="flex flex-col m-4 shadow rounded-xl bg-white p-4 max-w-96">
      {/* Image */}
      <img className="rounded-t-xl" src={coffee.image} />
      {/* Body */}
      <div className="flex flex-col p-4">
        {/* Title */}
        <span className="text-xl font-bold">{coffee.title}</span>
        {/* Description */}
        <span className="text-base text-slate-500">{coffee.description}</span>
        {/* Ingredients */}
        <span className="flex flex-wrap gap-4">
          {ingredients?.map((x) => (
            <span className="text-orange-500 bg-orange-100 px-2 py-0 rounded border border-orange-500">
              {x}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Card;
