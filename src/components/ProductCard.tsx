import { IProduct } from "../interfaces";
import { txtSlicer } from "../Utils/function";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  console.log(product.id);
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md flex flex-col  p-2 space-y-3">
      <Image
        imageUrl={product.imageUrl}
        alt={product.title}
        className="rounded-md mb-2  w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold ">{product.title}</h3>
      <p className="text-xs text-gray-500 break-words">
        {txtSlicer(product.description)}
      </p>
      <div className=" flex items-center space-x-2 ">
        <span className="bg-indigo-600 w-5 h-5 cursor-pointer rounded-full" />
        <span className="bg-yellow-600 w-5 h-5 cursor-pointer rounded-full" />
        <span className="bg-red-600 w-5 h-5 cursor-pointer rounded-full" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">
          $ {product.price}
        </span>
        <Image
          imageUrl={product.imageUrl}
          alt={product.category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-indigo-700" width="w-full">
          Edit
        </Button>
        <Button className="bg-red-700" width="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
