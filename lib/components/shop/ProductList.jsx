import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import ProductCard from "@/lib/components/shop/ProductCard/ProductCard"

const ProductList = ({products, style}) => {
  return (
    <div className={cn(
        styles.productList.style, style, 
        'grid', 
        'grid-cols-[repeat(2,1fr)]',
        'md:grid-cols-[repeat(3,1fr)]',
        'xl:grid-cols-[repeat(4,1fr)]',
        'gap-4',
    )}>
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
