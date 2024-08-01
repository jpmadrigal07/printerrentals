import Description from "./Content/Description";
import Title from "./Content/Title";
import l1300 from "@/common/assets/L1300-150x150.png";
import l6170 from "@/common/assets/L6170-150x150.png";
import l121 from "@/common/assets/L121-600x600.png";
import l3210 from "@/common/assets/L3210-600x600.png";
import l3250 from "@/common/assets/L3250-600x600.png";
import l5290 from "@/common/assets/L5290-600x600.png";
import l6270 from "@/common/assets/L6270-600x600.png";
import l13002 from "@/common/assets/L1300-600x600.png";
import List from "./Content/List";
import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";

export const epsonInkjetPrinters = [
  {
    id: "epson-l1300-a3-ink-tank-printer",
    model: "Epson L1300 A3 Ink Tank Printer",
    image: l1300,
    pricePerMonth: "5,000.00 / Month",
    description:
      "The Epson L1300 is the worlds first 4-colour, A3+ original ink tank system printer, bringing ultra affordability to high quality A3 document printing in a big way.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Superb Savings and Page Yield"
            className="mb-7"
          />
          <Description text="High capacity integrated ink tanks and highly affordable genuine ink bottles at just US$5.50 each add up to greater savings. With a bundled starter kit of 5 bottles of Epson Ink, the L1300 yields up to 7,100 pages (black)*." />
          <br />
          <Description
            text="*Quoted yields are extrapolated based on Epson original methodology from the print simulation of Test Patterns provided in ISO/IEC 24712. Quoted yields are NOT based on ISO/IEC 24711. Actual yields may vary depending on manner of usage and print pattern. 7100 pages is based on yield from two black ink bottles."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Designed for High Productivity"
            className="mb-7"
          />
          <Description
            text="The L1300 features an advanced printhead to achieve fast print speeds of up to 15ipm (black)."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Super Reliability and Print Quality"
            className="mb-7"
          />
          <Description
            text="Designed for continuous printing performance, Epson’s renowned Micro Piezo™ printhead is not only highly reliable in operation, it also delivers an astoundingly high resolution of 5760dpi. When paired with genuine Epson formulated inks, the L1300 delivers exceptionally high quality prints for all your business and creative needs."
            className="mb-12"
          />
          <Title variant="h1" text="Media Flexibility" className="mb-7" />
          <Description
            text="The L1300 comes with a rear-feed tray that accepts a wide variety of printing media, including thick paper, photo paper, envelopes, labels and more that allows you to accomplish all manner of printing jobs with ease."
            className="mb-12"
          />
          <Title variant="h1" text="Space-saving Design" className="mb-7" />
          <Description
            text="Working with the limited office space of SOHO businesses, the L120 is compactly designed to take up lesser space than previous models. Its smaller footprint means you can now fit them comfortably anywhere in your home or office."
            className="mb-12"
          />
          <Title variant="h1" text="Hassle-free Operation." className="mb-7" />
          <Description
            text="Epson’s original ink tank system is designed for smooth, no-mess operation in corporate and SOHO environments."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description
            text="Epson genuine ink bottles are individually sealed to ensure the purity of its contents and formulated to deliver outstanding high-volume print quality with L-Series printers. Choose Epson genuine ink bottles to enjoy lasting quality with your L-Series printer and low printing costs."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description
            text="Epson genuine ink bottles are individually sealed to ensure the purity of its contents and formulated to deliver outstanding high-volume print quality with L-Series printers. Choose Epson genuine ink bottles to enjoy lasting quality with your L-Series printer and low printing costs."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="1-Year Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of one year or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from maintenance worries." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "High-yield ink bottles",
            "Print speed up to 15ipm",
            "Print resolution up to 5760 x 1440 dpi",
          ]}
        />
      );
    },
    related: [
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    model: "Epson L6170 Wi-Fi Duplex All-in-One Ink Tank Printer with ADF",
    image: l6170,
    pricePerMonth: "4,000.00 / Month",
    description:
      "Experience high printing speeds and borderless printing for up to A4 size with Epson L6170 ink tank printer. Armed with PrecisionCore™ printheads, print speeds are improved for increased efficiency. The new tank design is integrated into the printer to allow the printer to have the smallest footprint* amongst all brands of ink tank printers that use bottled ink refills. Together with a new set of low-cost ink bottles which guarantees spill-free ink refilling and the paper-saving auto-duplex function, enjoy one of the lowest printing cost solutions you can find in the market. Maximise connectivity with a suite of Epson Connect features which enables printing on the go over a network.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Space-saving Design, Spill-free Refilling"
            className="mb-7"
          />
          <Description
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have the smallest footprint* amongst all brands of ink tank printers that use bottled ink refills."
            className="mb-6"
          />
          <Description
            text="Enjoy spill-free refilling with individual bottles which have unique nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Quality and Cost-savings"
            className="mb-7"
          />
          <Description
            text="Be impressed by reliable quality afforded by a 4800 dpi high resolution output. The L6170 prints black and white documents with razor sharp text that are water and smudge-resistant. You can also print lab-quality glossy photos on photo media paper."
            className="mb-12"
          />
          <Title variant="h1" text="Convenient Connectivity" className="mb-1" />
          <Title
            variant="h1"
            text="Wi-Fi and Wi-Fi Direct Connectivity"
            className="mb-7"
          />
          <Description
            text="Experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 4 devices to the printer without a router. The L6170 also comes enabled with Ethernet, ensuring superb connectivity, allowing you to easily share your printer within your work group for better use of resources."
            className="mb-12"
          />
          <Title variant="h1" text="Epson Connect Enabled" className="mb-7" />
          <Description
            text="Wirelessly print your documents from anywhere in the world with Epson Connect’s wide range of features:"
            className="mb-6"
          />
          <Description text="Epson iPrint" className="underline mb-1" />
          <Description
            text="Print from and scan directly to your smart device or online cloud storage services."
            className="mb-6"
          />
          <Description text="Epson Email Print" className="underline mb-1" />
          <Description
            text="Print to any Email Print-enabled Epson printer from any device or PC with email access."
            className="mb-6"
          />
          <Description text="Remote Print Driver" className="underline mb-1" />
          <Description
            text="Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver or from mobile devices via the Epson iPrint app."
            className="mb-6"
          />
          <Description text="Scan to Cloud" className="underline mb-1" />
          <Description
            text="Share your scans through email or store them online in cloud storage services."
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-1" />
          <Description text="Apple® AirPrint" className="underline mb-1" />
          <Description
            text="Print directly from your Apple devices."
            className="mb-6"
          />
          <Description text="Google Cloud Print™" className="underline mb-1" />
          <Description
            text="Print directly from an Android™ smartphone, tablet or PC using your Google account."
            className="mb-6"
          />
          <Description
            text="Mopria™ Print Service"
            className="underline mb-1"
          />
          <Description
            text="Conveniently print across different brands of printers from mobile devices running Android OS 4.4 or later."
            className="mb-6"
          />
          <Typography variant="h2" className="mb-12">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              Epson Connect
            </Link>
            .
          </Typography>
          <Title variant="h1" text="Enhanced Productivity" className="mb-1" />
          <Title variant="h1" text="High Speed Printing" className="mb-7" />
          <Description
            text="Enjoy print speeds of up to 15ipm for standard print, along with draft print speeds of up to 33ppm with Epson’s PrecisionCoreTM printhead that offers versatile high-speed, high-quality solutions for commercial, industrial and office printing. The L6170 also supports automatic duplex printing up to 6.5ipm, helping you save up to 50% on paper costs."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Automatic Document Feeder"
            className="mb-7"
          />
          <Description
            text="The L6170 is equipped with a 30-sheets ADF unit for convenient scanning and copying of multipage documents."
            className="mb-12"
          />
          <Title variant="h1" text="LCD Screen" className="mb-7" />
          <Description
            text="Experience easy setup and PC-less operation with a 2.4” colour LCD panel."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description
            text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description text="Epson genuine ink bottles are formulated to deliver outstanding high-volume print quality with L-series printers. Every bottle is individually sealed to ensure the purity of ink and comes with a smart tip designed for mess-free refills. Choose Epson genuine ink to enjoy lasting quality with your L-series printer." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "Print speeds up to 15ipm for black and 8.0ipm for colour",
            "Auto-duplex printing",
            "ADF capability",
            "Ethernet &amp; Wi-Fi Direct",
            "Borderless Printing up to A4 size",
            "Spill-free ink refilling",
            "Red Dot Design Award 2018",
          ]}
        />
      );
    },
    related: [
      "epson-l1300-a3-ink-tank-printer",
    ],
  },
  {
    id: "epson-l121",
    model: "EPSON L121",
    image: l121,
    pricePerMonth: "2,000 / Month",
    description:
      "Expect great efficiency when printing with the EcoTank L121. Enjoy fast print performance and low cost per page, with high print yield of up to 4,500 pages for black-and-white, and 7,500 pages for colour. Sleek and compact, this is the perfect fit for offices with limited space.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Ultra-low-cost printing" className="mb-7" />
          <Description
            text="The L121 offers affordable printing and a low cost per print. Each set of ink bottles can print up to 4,500 pages in black and 7,500 pages in colour1, delivering an ultra-low cost per page for both black and colour printing."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Easy to use and reliable"
            className="mb-7"
          />
          <Description
            text="Increase productivity and reduce downtime with hassle-free set up and reliable printing. The purpose-built ink tank is fully integrated into the printer, so you can enjoy reliable colour printing without the mess or hassle often associated with non-genuine refills and third-party ink tank systems. Epson-genuine ink bottles make it easy to refill the ink tank with their clear labelling and drip-free nozzle. The L121 has 40ml ink tanks, giving it a smaller, more compact design that easily fits into home offices or student bedrooms. This printer comes with a 12 month (or 15,000 page) warranty, providing peace of mind and help should you need it."
            className="mb-12"
          />
          <Title variant="h1" text="Epson-quality printing" className="mb-7" />
          <Description text="The L121 utilises genuine Epson ink and Epson's Micro Piezo technology to produce consistent quality prints. An iSO print speed 9ppm in black and 4.8ppm in colour2 ensures you won't be waiting around for print jobs." />
        </>
      );
    },
    specifications: () => {
      return (
        <>
          <Title variant="h3" text="PRINT ONLY" />
          <br />
          <List
            lists={[
              "High-yield ink bottles",
              "Print speed of up to 9.0 ipm (black) and 4.8 ipm (colour)",
              "Compact  Size",
              "Connectivity  - USB",
              "Maximum Paper Size (8.5 x 44)",
              "Standard Paper Input Capacity up to 50 sheets",
            ]}
          />
        </>
      );
    },
    related: ["epson-l3210", "epson-l121", "epson-l5290"],
  },
  {
    id: "epson-l3210",
    model: "EPSON L3210",
    image: l3210,
    pricePerMonth: "2,500 / Month",
    description:
      "The multifunctional printing solutions - EcoTank L3210 is designed to improve business cost savings and print productivity. Expect a high print yield of up to 4,500 pages for black-and-white, and 7,500 pages for colour. You can even print borderless photos up to 4R size.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Say goodbye to cartridges"
            className="mb-7"
          />
          <Description
            text="Hassle-free home printing, scanning and copying - the ultra-high capacity ink tanks allow mess-free refills and the key-lock bottles are designed so only the correct colour can be inserted."
            className="mb-12"
          />
          <Title variant="h1" text="Keep on saving" className="mb-7" />
          <Description
            text="This EcoTank printer saves you up to 90% on printing costs and comes with up to 3 years' worth of ink included in the box. Print up to 8,100 pages in black and 6,500 in colour with the included ink, and a replacement set of ink bottles delivers the equivalent of up to 66 cartridges worth of ink."
            className="mb-12"
          />
          <Title variant="h1" text="Packed with features" className="mb-7" />
          <Description
            text="Featuring a 100-sheet rear paper tray, borderless photo printing (up to 10x15cm) and print speeds of up to 10 pages per minute, you can speed through a variety of tasks with ease."
            className="mb-12"
          />
          <Title variant="h1" text="Heat-Free Technology" className="mb-7" />
          <Description text="With Micro Piezo Heat-Free Technology you can enjoy reduced energy consumption. The printhead also comes pre-installed so setting up your printer is hassle-free." />
        </>
      );
    },
    specifications: () => {
      return (
        <>
          <Title variant="h3" text="Print, Scan & Copy" />
          <br />
          <List
            lists={[
              "Compact integrated tank design",
              "High yield ink bottles",
              "Spill-free, error-free refilling",
              "Borderless printing up to 4R",
              "Maximum copy size up to A4",
              "Print with 33ppm / 15ppm",
              "Connectivity - USB",
            ]}
          />
        </>
      );
    },
    related: [
      "epson-l121",
      "epson-l1300-a3-ink-tank-printer",
    ],
  },

  {
    id: "epson-l3250",
    model: "EPSON L3250",
    image: l3250,
    pricePerMonth: "3,000 / Month",
    description:
      "The multi-functional EcoTank L3250 is designed to improve business cost savings and print productivity. Expect a high print yield of up to 4,500 pages for black-and-white, and 7,500 pages for colour. You can even print borderless photos up to 4R size.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Say goodbye to cartridges"
            className="mb-7"
          />
          <Description
            text="Hassle-free home printing - the ultra-high capacity ink tanks allow mess-free refills and the key-lock bottles are designed so only the correct colour can be inserted."
            className="mb-12"
          />
          <Title variant="h1" text="Keep on saving" className="mb-7" />
          <Description
            text="This EcoTank printer saves you up to 90% on printing costs and comes with up to 3 years' worth of ink in the box. Print up to 8,100 pages in black and 6,500 in colour with the included ink, and a replacement set of ink bottles delivers the equivalent of up to 66 cartridges worth of ink."
            className="mb-12"
          />
          <Title variant="h1" text="Modern flexibility" className="mb-7" />
          <Description
            text="Easily integrate this printer with your existing home set-up and print from mobiles, tablets and laptops. Plus, with Epson Smart Panel app you can control your printer from your smart device. Print documents and photos, set up, monitor and troubleshoot, all from your phone or tablet."
            className="mb-12"
          />
          <Title variant="h1" text="Packed with features" className="mb-7" />
          <Description text="Featuring a 100-sheet rear paper tray, borderless photo printing (up to 10x15cm) and print speeds of up to 10 pages per minute, you can speed through a variety of tasks with ease." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Scan & Copy",
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Wi-Fi, Wi-Fi Direct",
            "Seamless setup via Epson Smart Panel",
            "Borderless printing up to 4R",
            "Maximum copy size up to A4",
            "Print with 33ppm / 15ppm",
          ]}
        />
      );
    },
    related: ["epson-l121", "epson-l5290", "epson-l6270"],
  },

  {
    id: "epson-l5290",
    model: "EPSON L5290",
    image: l5290,
    pricePerMonth: "4,000 / Month",
    description:
      "The economical, multifunction EcoTank L5290, lets you print, scan, copy and fax with ease. Ideal for businesses, this printer comes with a full suite of connectivity features including Wi-Fi Direct and Ethernet. Print wirelessly over network or directly from connected mobile devices.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Say goodbye to cartridges"
            className="mb-7"
          />
          <Description
            text="Hassle-free home printing - the ultra-high capacity ink tanks allow mess-free refills and the key-lock bottles are designed so only the correct colour can be inserted."
            className="mb-12"
          />
          <Title variant="h1" text="Keep on saving" className="mb-7" />
          <Description
            text="This EcoTank printer saves you up to 90% on printing costs1 and comes with up to 3 years' worth of ink in the box. Print up to 8,100 pages in black and 6,500 in colour with the included ink, and a replacement set of ink bottles delivers the equivalent of up to 66 cartridges worth of ink."
            className="mb-12"
          />
          <Title variant="h1" text="Modern flexibility" className="mb-7" />
          <Description
            text="Easily integrate this printer with your existing home set-up and print from mobiles, tablets and laptops. Plus, with Epson Smart Panel app you can control your printer from your smart device. Print documents and photos, set up, monitor and troubleshoot from your phone or tablet."
            className="mb-12"
          />
          <Title variant="h1" text="Packed with features" className="mb-7" />
          <Description text="Featuring a 3.7cm colour LCD screen, 30-page automatic document feeder and fax, 100-sheet rear paper tray and print speeds of up to 10 pages per minute, you can speed through a variety of tasks with ease." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, scan, copy, fax with ADF",
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Wi-Fi, Wi-Fi Direct",
            "Epson Connect",
            "Borderless printing up to 4R",
            "Maximum copy size up to Legal",
            "Print with 33ppm / 15ppm",
          ]}
        />
      );
    },
    related: [
      "epson-l6270",
      "epson-l1300",
    ],
  },

  {
    id: "epson-l6270",
    model: "EPSON L6270",
    image: l6270,
    pricePerMonth: "5,000 / Month",
    description:
      "The multifunction Epson EcoTank printers L6270 delivers fast printouts and borderless printing for up to A4 size. Equipped with integrated ink tank, these printers havesmall footprints to fit any office. The affordable ink bottles, fitted with designated nozzles, ensure spill-free refilling.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Say goodbye to cartridges"
            className="mb-7"
          />
          <Description
            text="Hassle-free home printing - the ultra-high capacity ink tanks allow mess-free refills and the key-lock bottles are designed so only the correct colour can be inserted."
            className="mb-12"
          />
          <Title variant="h1" text="Keep on saving" className="mb-7" />
          <Description
            text="This EcoTank printer saves you up to 90% on printing costs1 and comes with up to 3 years' worth of ink in the box. Print up to 14,000 pages in black and 5,200 in colour with the included ink, and a replacement set of ink bottles delivers the equivalent of up to 66 cartridges worth of ink."
            className="mb-12"
          />
          <Title variant="h1" text="Modern flexibility" className="mb-7" />
          <Description
            text="Easily integrate this printer with your existing home set-up and print from mobiles, tablets and laptops. Plus, with Epson Smart Panel app you can control your printer from your smart device. You can print documents and photos, set up, monitor and troubleshoot from your phone or tablet."
            className="mb-12"
          />
          <Title variant="h1" text="Packed with features" className="mb-7" />
          <Description text="Featuring a 6.1cm colour LCD screen, automatic double-sided printing and 30-page document feeder, 250-page front paper tray and print speeds of up to 15.5 pages per minute, you can speed through a variety of tasks with ease." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Scan & Copy w/ ADF",
            "Compact integrated tank design",
            "Print speeds up to 15.5ipm for black and 8.5ipm for colour",
            "Auto-duplex printing",
            "ADF capability",
            "Ethernet & Wi-Fi Direct",
            "Borderless Printing up to A4 size",
            "Spill-free ink refilling",
            "Red Dot Design Award 2018",
            "Maximum copy size up to Legal",
            "Print with 33ppm / 20ppm",
          ]}
        />
      );
    },
    related: [
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l1300",
    model: "EPSON L1300",
    image: l13002,
    pricePerMonth: "5,000 / Month",
    description:
      "An integrated ultra-high-capacity ink tank system makes the L1300 perfect for heavy use where achieving the lowest cost per page is all important. Ideal for small offices needing to produce lengthy reports, advertising materials or CAD drawings, the L1300 comes with five",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Ultra-low-cost printing" className="mb-7" />
          <Description
            text="An integrated ultra-high-capacity ink tank system makes the L1300 perfect for heavy use where achieving the lowest cost per page is all important. Ideal for small offices needing to produce lengthy reports, advertising materials or CAD drawings, the L1300 comes with five 70ml ink bottles."
            className="mb-12"
          />
          <Title variant="h1" text="Increase productivity" className="mb-7" />
          <Description
            text="Say hello to EcoTank’s integrated ink tank, and leave the hassle of cartridges behind you. Using the 70ml ink bottles included with purchase, you’ll be able to print up to 7,500 pages in black and 6,500 pages in colour before needing to refill. And when it’s finally time to refill, there’s no mess thanks to drip-free nozzles and intuitive ink top-up technology."
            className="mb-12"
          />
          <Title variant="h1" text="Fast business printing" className="mb-7" />
          <Description
            text="With Micro Piezo technology and genuine Epson ink, Epson EcoTanks deliver business quality printing, whatever size your business is. Enjoy print speeds of up to 17 pages per minute (ppm) in colour and 30 ppm in black, and ISO print speeds of 5.5 ppm in colour and 15 ppm in black."
            className="mb-12"
          />
          <Title variant="h1" text="Promotional warranty" className="mb-7" />
          <Description
            text="Every EcoTank printer comes with a one-year warranty, and up to three years with a promotional warranty, so you can enjoy peace of mind as well as quality printing."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Join 50m customers worldwide"
            className="mb-7"
          />
          <Description text="Since Epson started making EcoTanks in 2010, over 50m EcoTanks have been sold worldwide5, making Epson the no. 1 ink tank printer in the world6. 7 out of 10 ink tank printers sold in the Middle East and Africa are Epson." />
        </>
      );
    },
    specifications: () => {
      return (
        <>
          <Title variant="h3" text="PRINT ONLY up to A3 size" />
          <br />
          <List
            lists={[
              "Print, Scan & Copy w/ ADF",
              "Compact integrated tank design",
              "Print speeds up to 15.5ipm for black and 8.5ipm for colour",
              "Auto-duplex printing",
              "ADF capability",
              "Ethernet & Wi-Fi Direct",
              "Borderless Printing up to A4 size",
              "Spill-free ink refilling",
              "Red Dot Design Award 2018",
              "Maximum copy size up to Legal",
              "Print with 33ppm / 20ppm",
            ]}
          />
        </>
      );
    },
    related: ["epson-l3210", "epson-l121", "epson-l5290"],
  },
];
