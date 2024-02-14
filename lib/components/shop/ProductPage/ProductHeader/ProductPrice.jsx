import { cn, formatCurrency } from "@/lib/utils";
const ProductPrice = ({product}) => {
  return (
    <p
    className={cn(
      'mb-3'
    )}
  >{formatCurrency(product.price)}</p>
  )
};

export default ProductPrice
