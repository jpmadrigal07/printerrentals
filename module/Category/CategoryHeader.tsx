import { Typography } from "@/common/components/ui/Typography";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CategoryHeader = () => {
  return (
    <div
      className="w-full  
            h-28
            md:h-36
            relative 
            overflow-hidden 
            block z-10 
            bg-[#F5F5F5]
            "
    >
      <div className="absolute inset-0 flex items-center justify-center sm:justify-between 2xl:max-w-[1140px] mx-4 md:mx-10 2xl:mx-auto">
        <Typography className="text-[36px]">Printers</Typography>
        <div className="flex items-center sm:space-x-2">
          <Link
            href="/"
            className="text-secondary-600 hover:text-primary-800 text-lg hidden sm:block"
          >
            Home
          </Link>
          <ChevronRight className="h-5 w-5 hidden sm:block" />
          <Typography variant="h3" className="hidden sm:block">
            Category: Printer
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
