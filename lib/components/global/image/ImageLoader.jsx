'use client';

import { useState } from "react";
import Logo from "../Logo";


const ImageLoader = ({hero, width, quality}) => {
  const [image, setImage] = useState()
  return (
    <div>
      <img src={'https://placedog.net/300/200'} alt='placeholder' />
    </div>
  )
};

export default ImageLoader
