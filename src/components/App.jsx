import React, { useState } from "react";
import Content from "./Content";

const App = () => {
  const [total, setTotal] = useState(10);
  const [data, setData] = useState([]);
  const times = 20;

  const log = (title, msg) => {
    // console.log(title, msg);
  };

  const handleTotalChange = event => {
    const _total = event.target.value;
    setTotal(_total);
  };

  const buildContent = () => {
    let _data = [];
    for (let i = 0; i < total; i++) {
      const x = { value: i, status: false };
      _data.push(x);
    }
    setData(_data);
  };

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const startRandom = () => {
    let count = 0;

    const original = data.map(i => ({ ...i }));

    const intervalId = setInterval(() => {
      let _data = original.map(i => ({ ...i }));
      log("original", original);

      let r = getRandomInt(total);
      log("--->r:", r);
      while (_data[r].status === true) {
        r = getRandomInt(total);
        log("***r:", r);
      }

      _data[r].status = true;
      setData(_data);
      log("data", _data);

      count++;
      if (count >= times) {
        clearInterval(intervalId);
      }
    }, 200);
  };

  return (
    <div>
      <div className="parent">
        <h1 className="title">
          ARISE CHURCH
          <br />
          Merry Christmas 2019
        </h1>
        <Content data={data}></Content>

        <div className="effect1 bottom">
          <input type="text" value={total} onChange={handleTotalChange}></input>
          <button onClick={buildContent}>build</button>
          <button onClick={startRandom}>start</button>
        </div>
      </div>
    </div>
  );
};

export default App;
