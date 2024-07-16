import { useEffect, useState } from "react";
import { dice, pattern } from "./assets";

const App = () => {
  const [advice, setAdvice] = useState([]);

  const api = async () => {
    const apiFetch = await fetch(`https://api.adviceslip.com/advice`);
    const apiData = await apiFetch.json();
    setAdvice(apiData.slip);
  };
  return (
    <div className="w-[50%]  text-white m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 text-center bg-DarkBlue  p-5 rounded-xl max-sm:w-[95%]">
      <h6 className="text-NeonGreen text-sm tracking-[10px]">
        ADVICE #{advice.id}
      </h6>
      <p className="text-LightCyan text-xl">'{advice.advice}'</p>
      <img src={pattern} alt="pattern" className="m-auto" />
      <button
        onClick={() => api()}
        className="p-5  rounded-full bg-NeonGreen click"
      >
        <img src={dice} alt="" />
      </button>
    </div>
  );
};

export default App;
