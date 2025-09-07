const TaskName = () => {
  return (
    <div className="flex flex-col gap-1 px-8 mt-4s">
      <span>Name</span>
      <input
        className="border-b-1 border-grey-500 text-2xl"
        type="text"
        placeholder="Task name"
      />
    </div>
  );
};

export default TaskName;
