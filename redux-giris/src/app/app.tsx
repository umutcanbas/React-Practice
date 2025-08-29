// rafce

import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import ItemsSection from "./ItemsSections";
import { useAppDispatch, useAppSelector } from "./store";
import { login, logOff } from "./userSlice";

const App = () => {
  const deger = useAppSelector((state) => state.counter.value);
  const email = useAppSelector((state) => state.user.email);
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByValue = (value: number) => {
    dispatch(incrementByAmount(value));
  };

  const handleLogin = (email: string) => {
    dispatch(login({ email: email }));
  };

  const handleLogOff = () => {
    dispatch(logOff());
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 px-4 py-2 text-white rounded"
        onClick={handleIncrement}
      >
        Arttır
      </button>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded"
        onClick={handleDecrement}
      >
        Azalt
      </button>
      <button
        className="bg-green-500 px-4 py-2 text-white rounded"
        onClick={handleReset}
      >
        Resetle
      </button>
      <button
        className="bg-gray-500 px-4 py-2 text-white rounded"
        onClick={() => handleIncrementByValue(5)}
      >
        5'er arttır
      </button>
      <button
        className="bg-pink-500 px-4 py-2 text-white rounded"
        onClick={() => handleIncrementByValue(15)}
      >
        15'er arttır
      </button>
      <br />

      <button
        className="bg-green-500 px-4 py-2 text-white rounded"
        onClick={() => handleLogin("test@gmail.com")}
      >
        Login
      </button>
      <button
        className="bg-red-500 px-4 py-2 text-white rounded"
        onClick={() => handleLogOff()}
      >
        Çıkış yap
      </button>
      <br />
      <h1 className="text-6xl">{deger}</h1>
      <h1 className="text-6xl">Email: {email}</h1>
      <h1 className="text-6xl">Token: {token}</h1>
      <ItemsSection />
    </div>
  );
};

export default App;
