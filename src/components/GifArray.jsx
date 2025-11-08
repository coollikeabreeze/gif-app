import React from "react";

const GiffArray = () => {
  const importedGifs = import.meta.glob("../assets/gifs/*.gif", {
    eager: true,
  });
  const gifUrls = Object.values(importedGifs).map((mod) => mod.default);
  console.log(gifUrls);

  return (
    <div>
      {gifUrls.map((el, idx) => (
        <img src={el} key={idx} />
      ))}
    </div>
  );
};

export default GiffArray;
