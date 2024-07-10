import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Heart, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Card className="group relative">
      <div className="flex justify-between items-center p-2">
        <span className="px-2 py-1 rounded-full text-xs bg-orange-500 text-white">
          -50%
        </span>
        {/* <span className="px-2 py-1 rounded-full text-xs bg-green-500 text-white">
          best selling
        </span> */}
      </div>
      <div className=" overflow-hidden">
        <Image
          src={"/img/1.webp"}
          width={180}
          height={180}
          alt={"title"}
          className="aspect-square h-fit w-full hover:scale-110 transition-all"
        />
      </div>
      <div className="p-4 flex items-center justify-center flex-col gap-3">
        <Link
          href={"/"}
          className="font-semibold truncate text-sm hover:text-blue-500 transition-all duration-300"
        >
          Product Title
        </Link>
        <div className="flex gap-2">
          <s className="text-muted-foreground">$200</s>
          <p className="text-orange-500">$100</p>
        </div>
      </div>
      <div className="group-hover:visible group-hover:opacity-100 group-hover:top-[65%] invisible opacity-0 transition-all duration-300 absolute left-1/2 top-[63%] -translate-x-1/2 flex items-center gap-2">
        <span className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-lime-500 transition-all duration-300 cursor-pointer">
          <Heart size={16} />
        </span>
        <span className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-lime-500 transition-all duration-300 cursor-pointer">
          <ShoppingBag size={16} />
        </span>
        <span className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-lime-500 transition-all duration-300 cursor-pointer">
          <Eye size={16} />
        </span>
      </div>
    </Card>
  );
};

export default ProductCard;
