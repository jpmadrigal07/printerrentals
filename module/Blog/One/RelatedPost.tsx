import { Typography } from "@/common/components/ui/Typography";
import BlogItemComponent from "../BlogItemPhotoDescription";
import { LucideClock, LucideFolderOpen, LucideTag } from "lucide-react";

const blogItem2 = {
  imageKey: "/hand-okay.png",
  title: "What are the Benefits of Renting a Printer? | Printer Rentals PH",
  link: "/2019/07/03/benefits-of-renting-a-printer",
  description:
    "Printers are a necessity in both personal and business setting so it is important to know the benefits of renting a printer. Printers come in a wide variety of choices. Some printers are for personal or home use which is utilized to print simple documents such as to-do lists, travel itineraries, and shopping lists. On the other hand, there are types of printers used for commercial settings. These are larger printers used to print a bigger batch of documents. Whether you need a digital press or work group laser printer, renting a unit can offer a wide variety of benefits for your business. Renting instead of investing for your own unit acts as a great method of improving cash flow and provide a device to maintain a competitive advantage over your direct competitors in the industry.",
  iconDescription: [
    {
      icon: <LucideClock size={20} />,
      description: "July 3, 2019",
    },
    {
      icon: <LucideFolderOpen size={20} />,
      description: {
        title: "Printer",
        link: "/category/printer",
      },
    },
    {
      icon: <LucideTag size={20} />,
      description: [
        { title: "Benefits", link: "/tag/benefits" },
        { title: "Printer Rental", link: "/tag/printer-rental" },
      ],
    },
  ],
};

const blogItem3 = {
  imageKey: "/paper-printer.jpeg",
  title: "How much does it cost to rent a printer? | Printer Rentals PH",
  link: "/2019/02/17/cost-rent-printer",
  description:
    "How much does it cost to rent a printer? We can help you with your question. Avoiding hassle is one of the major reasons why companies rent printers. So, Printer…",
  iconDescription: [
    {
      icon: <LucideClock size={20} />,
      description: "February 17, 2019",
    },
    {
      icon: <LucideFolderOpen size={20} />,
      description: {
        title: "Printer",
        link: "/category/printer",
      },
    },
    {
      icon: <LucideTag size={20} />,
      description: [
        { title: "Cost", link: "/tag/cost" },
        { title: "Printer Rental", link: "/tag/printer-rental" },
      ],
    },
  ],
};

const RelatedPost = () => {
  return (
    <div>
      <Typography className="text-[22px] md:text-2xl">Related Posts</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        <BlogItemComponent blogItem={blogItem3} />
        <BlogItemComponent blogItem={blogItem2} />
      </div>
    </div>
  );
};

export default RelatedPost;
