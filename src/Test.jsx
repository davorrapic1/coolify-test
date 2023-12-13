import React, { useState } from "react";

export default function Test() {
  const [arr, setArr] = useState([0]);

  return (
    <div>
      {JSON.stringify(arr)}
      <button
        onClick={() =>
          setArr((prev) => {
            return [...prev, prev.at(-1) + 1];
          })
        }
      >
        Klik
      </button>
    </div>
  );
}
