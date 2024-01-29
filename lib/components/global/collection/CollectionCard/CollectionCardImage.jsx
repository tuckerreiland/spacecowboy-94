import { cn } from "@/lib/utils";

const CollectionCardImage = ({title, src, style}) => {
  return (
    <img
        src={src}
        alt={title}
        className={cn(style)}
    >
    </img>
  )
};

export default CollectionCardImage
