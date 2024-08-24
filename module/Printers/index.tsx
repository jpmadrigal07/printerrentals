import React from "react";
import { Typography } from "@/common/components/ui/Typography";
import { printers } from "./printersData";
import ItemContainer from "./ItemContainer";

const Printers = () => {
  const brotherInkjet = printers.filter(
    (printer) => printer.type === "Brother Inkjet"
  );

  const brotherLaserjet = printers.filter(
    (printer) => printer.type === "Brother Laserjet"
  );

  const epsonInkjet = printers.filter(
    (printer) => printer.type === "Epson Inkjet"
  );

  return (
    <div className="flex flex-col max-w-[1140px] mx-4 md:mx-10 2xl:mx-auto mt-20">
      <div>
        <Typography
          variant="h1"
          className="text-[28px] font-bold mb-1 uppercase"
          id="brother-inkjet"
        >
          Brother Inkjet
        </Typography>
        <div className="bg-yellow-500 w-36 pt-1 rounded-lg mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {brotherInkjet.map((printer) => (
            <ItemContainer
              id={printer.id}
              image={printer.image}
              model={printer.model}
              isRefurbished={printer.isRefurbished}
              pricePerMonth={printer.pricePerMonth}
              key={printer.model}
            />
          ))}
        </div>
      </div>
      <div id="brother-laserjet">
        <Typography
          variant="h1"
          className="text-[28px] font-bold mb-1 uppercase mt-28"
        >
          Brother Laserjet
        </Typography>
        <div className="bg-yellow-500 w-36 pt-1 rounded-lg mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {brotherLaserjet.map((printer) => (
            <ItemContainer
              id={printer.id}
              image={printer.image}
              model={printer.model}
              isRefurbished={printer.isRefurbished}
              pricePerMonth={printer.pricePerMonth}
              key={printer.model}
            />
          ))}
        </div>
      </div>
      <div id="epson-inkjet">
        <Typography
          variant="h1"
          className="text-[28px] font-bold mb-1 uppercase mt-28"
        >
          Epson Inkjet
        </Typography>
        <div className="bg-yellow-500 w-36 pt-1 rounded-lg mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {epsonInkjet.map((printer) => (
            <ItemContainer
              id={printer.id}
              image={printer.image}
              model={printer.model}
              isRefurbished={printer.isRefurbished}
              pricePerMonth={printer.pricePerMonth}
              key={printer.model}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Printers;
