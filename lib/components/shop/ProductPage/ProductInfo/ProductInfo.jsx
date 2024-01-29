import ProductInfoSection from "./ProductInfoSection";

const ProductInfo = ({productInfo}) => {
  return (
    <div>
        {Object.keys(productInfo).map((infoSection, index)=>{
            return <ProductInfoSection key={index} infoSectionTitle={infoSection} infoSection={productInfo[infoSection]}/>
        })
        }
    </div>
  )
};

export default ProductInfo
