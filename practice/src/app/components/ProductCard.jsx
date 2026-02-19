import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-black flex flex-col">
      
      <div className="relative w-full h-40 mb-4">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <h2 className="text-sm font-semibold mb-2 line-clamp-2  --font-WorkSans">
        {product.title}
      </h2>
      <p className='--font-Oswald'>${product.description}</p>

      <p className="text-gray-600 text-sm">${product.price}</p>
     <Link  className='bg-yellow-400 text-black p-2' href={`product/${product.id}`} >View</Link>

    </div>
  );
};

export default ProductCard;
