import FadeInImage from "@/common/components/FadeInImage";
import { Typography } from "@/common/components/ui/Typography";
import React from "react";

const ClientsSection = () => {
  return (
    <div className="text-center mt-20 mx-6 md:mx-10 lg:mx-0">
      <Typography variant="h2" fontWeight="semibold">
        SOME OF OUR SATISFIED CLIENTS
      </Typography>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mt-20">
        <FadeInImage
          img="/banko-1.png"
          className="w-48 md:w-auto"
          alt="banko logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/avls.png"
          className="w-48 md:w-auto"
          alt="avls logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/oro-oxygen.png"
          className="w-48 md:w-auto"
          alt="oro oxygen corporation logo"
          width={300}
          height={300}
          variant="fade-up"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mt-8">
        <FadeInImage
          img="/shakeys.jpg"
          className="w-48 md:w-auto"
          alt="banko logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/hst.png"
          className="w-48 md:w-auto"
          alt="avls logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/indorama.jpeg"
          className="w-48 md:w-auto"
          alt="oro oxygen corporation logo"
          width={300}
          height={300}
          variant="fade-up"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mt-8">
        <FadeInImage
          img="/joliant.png"
          className="w-48 md:w-auto"
          alt="banko logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/mdc.png"
          className="w-48 md:w-auto"
          alt="avls logo"
          width={300}
          height={300}
          variant="fade-up"
        />
        <FadeInImage
          img="/phirst.png"
          className="w-48 md:w-auto"
          alt="oro oxygen corporation logo"
          width={300}
          height={300}
          variant="fade-up"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mt-16">
        <FadeInImage
          img="/advance-engineering.png"
          className="w-48 md:w-auto"
          alt="banko logo"
          width={200}
          height={200}
          variant="fade-up"
        />
      </div>
    </div>
  );
};

export default ClientsSection;
