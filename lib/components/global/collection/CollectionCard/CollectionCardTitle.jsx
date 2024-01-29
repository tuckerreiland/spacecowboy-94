import Link from "next/link";

const CollectionCardTitle = ({title, slug}) => {
  return (
    <Link
        href={`collection/${slug}`}
    >
        <h2>{title}</h2>
    </Link>
  )
};

export default CollectionCardTitle
