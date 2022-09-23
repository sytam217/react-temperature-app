import React, {useEffect, useState} from "react";

const App = () => {

  const [temperature, setTemperature] = useState(initialTemperature());
  const [color, setColor] = useState(initialColor());

  const increase = () => {
    let temp;
    setTemperature((prevState) => {
      return prevState += 1;
    });
    if(temperature + 1 >= 15){
      setColor("hot");
    }
  }

  const decrease = () => {
    setTemperature((prevState) => {
      return prevState -= 1;
    });
    if(temperature - 1 < 15){
      setColor("cold");
    }
  }

  useEffect(() => {
   let temp = JSON.stringify(temperature);
   localStorage.setItem("temperature", temp); 
  }, [temperature]);

  function initialTemperature() {
    let temp = JSON.parse(localStorage.getItem("temperature"));
    return temp || 20;
  }

  function initialColor() {
    let temp = JSON.parse(localStorage.getItem("temperature"));
    if(temp) {
      if(temp >= 15) {
        return "hot";
      } else return "cold";
    } else return "hot";
  }

  return (
    <div className="container">
      <div className={`degree ${color}`}>
        <p>{temperature}°C</p>
      </div>
      <div className="button-container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default App;