import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";

import ProductCard from "@/lib/components/shop/ProductCard/ProductCard"

const ProductList = ({products, style}) => {
  return (
    <div className={cn(
        styles.productList.style, style, 
        'grid', 
        'grid-cols-[repeat(2,1fr)]',
        'md:grid-cols-[repeat(6,1fr)]',
        'lg:grid-cols-[repeat(8,1fr)]',
        '2xl:grid-cols-[repeat(10,1fr)]',
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
