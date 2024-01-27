import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import Link from "next/link";
import ProductMedia from "./ProductMedia";
import ProductCardDetails from "./ProductCardDetails";
import ProductCardActions from "./ProductCardActions";

const ProductCard = ({product, style}) => {
  return (
    <Link 
      className={cn(
        styles.productCard.style, style,
        'flex',
        'flex-col'
      )}
      href={`shop/${product.slug}`}
    >
    <ProductMedia
      product={product}
    />
    <ProductCardDetails
      product={product}
    />
    <ProductCardActions
      product={product}
    />
    </Link>
  )
};

export default ProductCard
