import React, { useState, useEffect } from "react";

const usePokemonImage = async url => {
  const [image, setImage] = useState("");
  useEffect(() => {
    (async () => {
      const response = fetch(url);
      const data = response.json();
      setImage(data.sprites.front_default);
    })();
  });
  return image;
};

export default usePokemonImage;
