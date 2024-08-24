import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";

type T_ItemContainer = {
  id: string;
  model: string;
  isRefurbished: boolean;
  image: any;
  pricePerMonth: string;
};

const ItemContainer = ({
  id,
  model,
  image,
  pricePerMonth,
  isRefurbished
}: T_ItemContainer) => {
  return (
    <Link href={"/printers/" + id}>
      <div className="flex flex-col items-center">
        {isRefurbished ?
          <div className="bg-slate-200 w-full p-1 z-40">
            <Typography className="text-xs text-gray-500 text-center">
              Refurbished
            </Typography>
          </div> :
          <div className="w-full p-1 z-40 h-6">
          </div>
        }
        <Image alt={model} src={image} width={350} height={350} className="z-30 -mt-6" />
        <div className="text-left w-full max-w-[350px] mt-2">
          <Typography
            variant="h2"
            fontWeight="bold"
            className="text-secondary-800"
          >
            {model}
          </Typography>
          <Typography variant="h2" fontWeight="semibold" className="mb-2">
            &#8369;{pricePerMonth}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default ItemContainer;
