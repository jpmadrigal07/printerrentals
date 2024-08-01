import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import Tag from "@/module/Tag";
import TagHeader from "@/module/Tag/TagHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Buying Archives - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  openGraph: {
    title: `Buying Archives - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    url: "https://printerrentalsph.com/tag/buying",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Buying Archives - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  },
};

const BuyingTagPage = () => {
  return (
    <div>
      <TagHeader />
      <WidthWrapper width="medium">
        <Tag />
      </WidthWrapper>
      <Cta />
    </div>
  );
};

export default BuyingTagPage;
