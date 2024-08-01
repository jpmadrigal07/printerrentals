import Cta from "@/common/components/Layout/Cta";
import { WidthWrapper } from "@/common/components/WidthWrapper";
import { APP_NAME } from "@/common/constants";
import Category from "@/module/Category";
import { Metadata } from "next";
import CategoryHeader from "../../../../module/Category/CategoryHeader";

export const metadata: Metadata = {
  title: `Printer Archives - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  openGraph: {
    title: `Printer Archives - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    url: "https://printerrentalsph.com/category/printer",
    siteName: `${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Printer Archives - ${APP_NAME} - Printer Rental, Printer Repair and Ink and Toner Refill`,
  },
};

const CategoryPage = () => {
  return (
    <div>
      <CategoryHeader />
      <WidthWrapper width="medium">
        <Category />
      </WidthWrapper>
      <Cta />
    </div>
  );
};

export default CategoryPage;
