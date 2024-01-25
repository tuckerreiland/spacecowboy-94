import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import Link from "next/link";
import Image from "next/image";

const ProductCard = ({product, style}) => {
  console.log(styles.productCard.image)
  return (
    <Link 
      className={cn(styles.productCard.style, style)}
      href={`product/${product.slug}`}
    >
      <div 
        className={cn(styles.productCard.image)}
      >

        {/* <Image
          src={product.image?product.image:'https://placekitten.com/300/200'}
          // width={styles.productCard.imageWidth}
          // height={styles.productCard.imageHeight}
          fill
        /> */}
      </div>
      <h3 
        className={cn(styles.productCard.name)}
      >
        {product.name}
      </h3>
      <h4
        className={cn(styles.productCard.price)}
      >
        {product.price}
      </h4>
    </Link>
  )
};

export default ProductCard
