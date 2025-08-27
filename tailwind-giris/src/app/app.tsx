type Props = {
  emoji?: string;
  title?: string;
  dec?: string;
};

const Card = ({ emoji, title, dec }: Props) => {
  return (
    <div className="m-4 shadow p-4 flex flex-col gap-4 round ">
      <span className="text-4xl">{emoji}</span>
      <span>{title}</span>
      <span className="text-gray-400">{dec}</span>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Card emoji="🍵" title="Çay" dec="Orta boy" />
      <Card emoji='☕️' title="Americano" dec="Büyük boy" />
      <Card emoji='🍰' title="Pasta" dec="Cikolatalı" />
    </>
  );
};

export default App;
