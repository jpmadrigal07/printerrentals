"use client";
import React from "react";
import { LucideClock, LucideFolderOpen, LucideTag } from "lucide-react";
import TagItem from "./TagItem";
import { usePathname } from "next/navigation";

const tagItems = [
  {
    imageKey: "/woman-question.jpeg",
    title:
      "Difference Between Leasing and Buying Printers | Printer Rentals PH",
    link: "/2019/07/03/difference-between-leasing-and-buying-printers",
    description:
      "Printers, in businesses small or large, are essential equipment. While companies tend to be digital, there will always be a need for printers. A small business will go through a…",
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
          { title: "Buying", link: "/tag/buying" },
          { title: "Leasing", link: "/tag/leasing" },
          { title: "Printer Rental", link: "/tag/printer-rental" },
        ],
      },
    ],
  },
  {
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
  },
  {
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
  },
];

const Tag = () => {
  const pathName = usePathname();

  let tags;

  if (pathName === "/tag/buying") {
    tags = [tagItems[0]];
  } else if (pathName === "/tag/leasing") {
    tags = [tagItems[0]];
  } else if (pathName === "/tag/printer-rental") {
    tags = [tagItems[0], tagItems[1], tagItems[2]];
  } else if (pathName === "/tag/benefits") {
    tags = [tagItems[1]];
  } else if (pathName === "/tag/cost") {
    tags = [tagItems[2]];
  } else {
    tags = tagItems;
  }

  return (
    <div className="2xl:max-w-[1140px] mx-2 md:mx-5 2xl:mx-auto mt-10 md:mt-14 lg:mt-20">
      {tags.map((index, key) => (
        <TagItem tagItem={index} key={key} />
      ))}
    </div>
  );
};

export default Tag;
