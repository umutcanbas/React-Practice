const days = [
  {
    name: "S",
    value: "23",
    tasks: 3,
  },
  {
    name: "M",
    value: "24",
    tasks: 0,
  },
  {
    name: "T",
    value: "25",
    tasks: 3,
  },
  {
    name: "W",
    value: "26",
    tasks: 1,
  },
  {
    name: "T",
    value: "27",
    tasks: 3,
  },
  {
    name: "F",
    value: "28",
    tasks: 0,
  },
  {
    name: "S",
    value: "29",
    tasks: 3,
  },
];

const NavBarBody = () => {
  return (
    <div className="flex text-white gap-4">
      {days.map((day) => (
        <div className="flex flex-col items-center ">
          <span>{day.name}</span>
          <div className="bg-white/50 p-2 rounded flex flex-col items-center">
            <span>{day.value}</span>
            {!day.tasks && <span className="invisible">*</span>}
            <span>{Array.from({ length: day.tasks }).map(() => "*")}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBarBody;
