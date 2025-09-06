import { Timer } from "lucide-react";

const StartTime = () => {
  return (
    <div className="flex flex-col gap-1  pb-8 relative ">
      <span className="text-slate-400">Start Time</span>
      <input
        className="border-b-1 border-grey-500 text-2xl"
        type="text"
        placeholder="Task name"
        value="08.00 - 09.00"
      />
      <Timer className="absolute right-0 top-8 text-blue-900" />
    </div>
  );
};

export default StartTime;
