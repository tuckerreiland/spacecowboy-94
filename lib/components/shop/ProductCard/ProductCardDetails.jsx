import { styles } from "@/lib/styles";
import { cn, formatCurrency } from "@/lib/utils";

const ProductCardDetails = ({product}) => {
  return (
    <div>
       <h3 
        className={cn(styles.productCard.name)}
      >
        {product.name}
      </h3>
      <h4
        className={cn(styles.productCard.price)}
      >
        {formatCurrency('', '', product.price)}
      </h4>
    </div>
  )
};

export default ProductCardDetails
