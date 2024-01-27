'use client';

import { clientFetch } from "@/lib/fetch/client-fetch";
import { useState } from "react";


const ImageLoader = ({src, width, quality}) => {
  const [image, setImage] = useState()
  return (
    <div>
      Image Loader
      <img src={image} alt='placeholder' />
    </div>
  )
};

export default ImageLoader
