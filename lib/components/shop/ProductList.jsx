import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import ProductCard from "@/lib/components/shop/ProductCard"

const ProductList = ({products, style}) => {
  return (
    <div className={cn(styles.productList.style, style, "w-full grid-cols-2 sm:w-[640px] sm:grid-cols-3 md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]")}>
        {products.map((product)=>{
            return <ProductCard 
                key={product.id} 
                product={product}
                style={''}
            />
        })}
    </div>
  )
};

export default ProductList
