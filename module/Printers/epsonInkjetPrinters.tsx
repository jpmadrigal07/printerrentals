import Description from "./Content/Description";
import Title from "./Content/Title";
import l120 from "@/common/assets/L120-150x150.png";
import l1300 from "@/common/assets/L1300-150x150.png";
import l3110 from "@/common/assets/L3110-150x150.png";
import l3150 from "@/common/assets/L3150-150x150.png";
import l5190 from "@/common/assets/L5190-150x150.png";
import l6170 from "@/common/assets/L6170-150x150.png";
import wf7711 from "@/common/assets/WF711-150x150.png";
import l1455 from "@/common/assets/L1455-150x150.png";
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
    id: "epson-l120-ink-tank-printer",
    model: "Epson L120 Ink Tank Printer",
    image: l120,
    pricePerMonth: "1,500.00 / Month",
    description:
      "The Epson L120 ink tank system printer brings speedy performance with low running costs to all your personal and work projects.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Superb Savings and Page Yield"
            className="mb-7"
          />
          <Description text="Epson’s proven original ink tank system delivers reliable printing, using Epson genuine inks that let you enjoy ultra high page yields at very low running costs. Each purchase of the Epson L120 comes bundled with a set of 40ml CMYK ink bottles, with additional 70ml ink bottles available at just US$5.50 per bottle." />
          <br />
          <Description
            text="*Based on ISO/IEC 24712 patterns with Epson’s own methodology and aftermarket 70ml inks."
            className="mb-12"
          />
          <Title variant="h1" text="Impressive Print Speed" className="mb-7" />
          <Description
            text="Constantly improving to meet the printing needs of small business owners, the Epson L120 features faster printing speeds of up to 8.5 ipm for black-and-white, and 4.5 ipm for colour to deliver better work productivity."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description
            text="Enjoy warranty coverage of 2 years or 20,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Hassle-free and Easy to Use"
            className="mb-7"
          />
          <Description
            text="The L120 allows for easy, mess-free refills. It is equipped with special tubes inside to ensure smooth and reliable ink flow at all times."
            className="mb-12"
          />
          <Title variant="h1" text="Space-saving Design" className="mb-7" />
          <Description
            text="Working with the limited office space of SOHO businesses, the L120 is compactly designed to take up lesser space than previous models. Its smaller footprint means you can now fit them comfortably anywhere in your home or office."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Quality That Shines. Value That Lasts."
            className="mb-7"
          />
          <Description text="Epson genuine ink bottles are formulated to deliver outstanding high-volume print quality with L-Series printers. Every bottle is individually sealed to ensure the purity of ink and comes with a smart tip designed for mess-free refills. Choose Epson genuine ink bottles to enjoy lasting quality with your L-Series printer and low printing costs." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "High-yield ink bottles",
            "Print speed up to 8.5ipm for black-and-white and 4.5ipm for color",
            "Compact Size",
          ]}
        />
      );
    },
    related: [
      "epson-ecotank-l3150-wi-fi-all-in-one-ink-tank-printer",
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
    ],
  },
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
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
      "epson-l5190-wi-fi-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-ecotank-l3110-all-in-one-ink-tank-printer",
    model: "Epson EcoTank L3110 All-in-One Ink Tank Printer",
    image: l3110,
    pricePerMonth: "2,000.00 / Month",
    description:
      "Save more with Epson’s economical and multifunctional printing solutions for business—the EcoTank L3110—built to bring down costs, and bring up productivity. The integrated ink tank enables spill-free, error-free refilling with individual bottles that have designated nozzles. Other features include borderless 4R printing and an ultra-high yield of 7,500 coloured and 4,500 black-and-white pages.",
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
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have a small footprint. Enjoy spill-free and error-free refilling with individual bottles which have unique key nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Savings & Page Yield"
            className="mb-7"
          />
          <Description
            text="Don’t compromise on cost as you print. With Epson’s EcoTank L3110, you’ll be able to save costs as each set of bottle inks has an ultra-high yield of 7,500 for colour and 4,500 pages for black."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Remarkable Quality and Speed"
            className="mb-7"
          />
          <Description
            text="The L3110 prints at a high printing resolution of 5760 dpi, delivering exceptionally high quality prints for all your needs. You will appreciate the fast print speeds of up to 10ipm for black and 5.0ipm for colour. In addition, the L3110 is capable of printing borderless photos up to 4R."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Borderless printing up to 4R",
          ]}
        />
      );
    },
    related: [
      "epson-l120-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-ecotank-l3150-wi-fi-all-in-one-ink-tank-printer",
    model: "Epson EcoTank L3150 Wi-Fi All-in-One Ink Tank Printer",
    image: l3150,
    pricePerMonth: "2,500.00 / Month",
    description:
      "Save more with Epson’s economical and multifunctional printing solutions for business—the EcoTank L3150—built to bring down costs, and bring up productivity. The integrated ink tank enables spill-free, error-free refilling with individual bottles that have designated nozzles. Other features include borderless 4R printing and an ultra-high yield of 7,500 coloured and 4,500 black-and-white pages. The EcoTank L3150 also delivers the convenience of wireless connectivity, allowing direct printing from smart devices.",
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
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have a small footprint. Enjoy spill-free and error-free refilling with individual bottles which have unique key nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Savings & Page Yield"
            className="mb-7"
          />
          <Description
            text="Don’t compromise on cost as you print. With Epson’s EcoTank L3150, you’ll be able to save costs as each set of bottle inks has an ultra-high yield of 7,500 for colour and 4,500 pages for black."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Wi-Fi and Wi-Fi Direct Connectivity"
            className="mb-7"
          />
          <Description
            text="Experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 4 devices to the printer without a router."
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
            text="Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver."
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-6" />
          <Description text="Google Cloud Print™" className="underline mb-1" />
          <Description
            text="Print directly from an Android™ smartphone, tablet or PC using your Google account."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Remarkable Quality and Speed"
            className="mb-7"
          />
          <Description
            text="The L3150 prints at a high printing resolution of 5760 dpi, delivering exceptionally high quality prints for all your needs. You will appreciate the fast print speeds of up to 10ipm for black and 5.0ipm for colour. In addition, the L3150 is capable of printing borderless photos up to 4R."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Wi-Fi, Wi-Fi Direct",
            "Epson Connect (Epson iPrint, Epson Email Print and Remote Print Driver)",
            "Borderless printing up to 4R",
          ]}
        />
      );
    },
    related: [
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l5190-wi-fi-all-in-one-ink-tank-printer-with-adf",
    model: "Epson L5190 Wi-Fi All-in-One Ink Tank Printer with ADF",
    image: l5190,
    pricePerMonth: "3,500.00 / Month",
    description:
      "Print, scan, copy, fax and connect with ease. The economical, multi-function EcoTank L5190 sports a variety of features that makes it the ideal printer for business. Save on printing with Epson’s affordable ink bottles, designed for spill- and error-free refilling via designated nozzles on the L5190’s integrated ink tanks. Enjoy a full suite of connectivity features such as Wi-Fi, Wi-Fi Direct and Ethernet. Choose the complete printing solution for business now.",
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
            text="Compact and sleek, the new tank design is integrated into the printer to allow the printer to have a small footprint. Enjoy spill-free and error-free refilling with individual bottles which have unique key nozzles that fit only into their respective tanks."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Superb Savings & Page Yield"
            className="mb-7"
          />
          <Description
            text="Don’t compromise on cost as you print. With Epson’s EcoTank L5190, you’ll be able to save costs as each set of bottle inks has an ultra-high yield of 7,500 for colour and 4,500 pages for black."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Wi-Fi and Wi-Fi Direct Connectivity"
            className="mb-7"
          />
          <Description
            text="Experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 8 devices to the printer without a router."
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
            text="Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver."
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-1" />
          <Description text="- Google Cloud Print™" className="mb-1" />
          <Description text="- Apple AirPrint" className="mb-1" />
          <Description text="- Mopria Print Service" className="mb-12" />
          <Title
            variant="h1"
            text="Remarkable Quality and Speed"
            className="mb-7"
          />
          <Description
            text="The L5190 prints at a high printing resolution of 5760 x 1400 dpi, delivering exceptionally high quality prints for all your needs. You will appreciate the fast print speeds of up to 10ipm for black and 5.0ipm for colour. In addition, the L5190 is capable of printing borderless photos up to 4R."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Automatic Document Feeder"
            className="mb-7"
          />
          <Description
            text="The L5190 is equipped with a 30-sheets ADF unit for convenient scanning and copying of multipage documents."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="100-Page Fax Storage Memory"
            className="mb-7"
          />
          <Description
            text="The L5190 Broadcast Fax and PC-fax functions allow you to send a fax digitally with your computer, complete with a 100-page storage memory that ensures your incoming faxes will be received if the printer is out of paper or ink."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Epson Warranty for Peace of Mind"
            className="mb-7"
          />
          <Description text="Enjoy warranty coverage of up to 2 years or 30,000 prints, whichever comes first, for maximum value from your printer and freedom from worries over its maintenance. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Compact integrated tank design",
            "High yield ink bottles",
            "Spill-free, error-free refilling",
            "Wi-Fi, Wi-Fi Direct",
            "Epson Connect",
            "Borderless printing up to 4R",
          ]}
        />
      );
    },
    related: [
      "epson-l120-ink-tank-printer",
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
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
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l120-ink-tank-printer",
    ],
  },
  {
    id: "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
    model: "Epson WorkForce WF-7711 A3 Wi-Fi Duplex All-in-One Inkjet Printer",
    image: wf7711,
    pricePerMonth: "5,500.00 / Month",
    description:
      "Change the way you print A3+ business documents with the Epson WorkForce WF-7711 printer. Designed for convenience, this smart printer is equipped with a suite of connectivity features, from USB and Ethernet to Wi-Fi Direct and NFC. With PrecisionCoreTM technology, fast printing speed consistently delivers success in every detail.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Enhanced Productivity" className="mb-7" />
          <Title variant="h3" text="High Speed Printing" className="mb-2" />
          <Description
            text="Enjoy default print speeds of up to 18ipm for black and 10ipm for colour, along with draft print speeds of up to 32ppm for black and 20ppm for colour with the Epson PrecisionCore printhead. The breakthrough PrecisionCore technology is equipped with versatile, high-speed solutions for commercial, industrial and office printing. Offering a vast improvement from the conventional piezo printheads, this technology delivers professional output quality at blazing speeds."
            className="mb-6"
          />
          <Title variant="h3" text="Print up to A3+" className="mb-2" />
          <Description
            text="WF-7711 supports borderless printing up to A3+ with special media."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Automatic Duplex Printing"
            className="mb-2"
          />
          <Description
            text="WF-7711 supports automatic duplex printing up to A3 size."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Duplex Automatic Document Feeder"
            className="mb-2"
          />
          <Description
            text="The WF-7711 is equipped with a 35-sheet duplex ADF unit for convenient scanning, copying and faxing of double-sided documents."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Affordable Laser-like Quality"
            className="mb-2"
          />
          <Description
            text="Epson DURABrite Ultra inks deliver brilliant, quick-drying, long-lasting prints on plain and photo paper that are water- and smudge-resistant. Achieve greater cost efficiency with high-yield cartridges that deliver high quality prints at lower running costs."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Network Connectivity and Standalone Capability"
            className="mb-2"
          />
          <Description
            text="Enjoy connectivity that’s perfect for your work environment. WF-7711 is equipped with Ethernet, Wi-Fi and Wi-Fi Direct, making it ideal for office and SOHO environments. The Wi-Fi Direct* connectivity acts like an access point and allows up to 4 devices to simultaneously connect directly to the printer."
            className="mb-7"
          />
          <Description
            text="*Wi-Fi and Wi-Fi Direct cannot be used simultaneously."
            className="mb-7 italic"
          />
          <Title variant="h3" text="Epson Connect Enabled" className="mb-2" />
          <Description
            text="With Epson Connect, there are many ways to wirelessly print your documents and photos from anywhere in the world:"
            className="mb-6"
          />
          <List
            lists={[
              "Epson iPrint - Print from and scan directly to your smart device or online cloud storage services.",
              "Epson Email Print - Print to any Email Print enabled Epson printer from any devices or PC with email access.",
              "Remote Print Driver - Print to a compatible Epson printer anywhere in the world via the Internet using a PC with Remote Print driver or from mobile devices via the Epson iPrint app.",
              "Scan to Cloud - Share your scans through email or store them online in cloud storage services.",
            ]}
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-6" />
          <List
            lists={[
              "Apple® AirPrintTM",
              "Google Cloud PrintTM",
              "MopriaTM Print Service",
            ]}
            className="mb-6"
          />
          <Typography variant="h2" className="mb-7">
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
          <Title variant="h3" text="NFC Enabled" className="mb-2" />
          <Description
            text="Near Field Communication (NFC) enables users to conveniently print or scan by touching a compatible device to the printer. The WorkForce WF-7711 supports the following NFC functions:"
            className="mb-6"
          />
          <List
            lists={[
              "Tap to Install: If Epson iPrint is not installed in your AndroidTM device, touching the device to the printer opens the Epson iPrint installation page in Google PlayTM Store.",
              "Touch to Launch: If Epson iPrint is already installed in your Android device, touching the device to the printer launches it.",
              "Touch to Print / Scan: Select the function within Epson iPrint on your Android device, then touch the printer to print the selected photo or scan a document placed on the scanner.",
            ]}
            className="mb-7"
          />
          <Title variant="h3" text="Ease of Use" className="mb-0.5" />
          <Title variant="h3" text="LCD Screen" className="mb-2" />
          <Description
            text="Experience easy setup and PC-less operation with a 4.3″ LCD Touch Panel."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Single Sheet Rear Feeder"
            className="mb-2"
          />
          <Description
            text="A single sheet feeder lets you set labels, thick paper, envelopes and special photo paper conveniently."
            className="mb-7"
          />
          <Title variant="h3" text="Printer Security" className="mb-0.5" />
          <Title variant="h3" text="Limited Access Function" className="mb-2" />
          <Description
            text="Reduce risk of information leaks by limiting the access to functions for up to 10 user accounts."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Secured Printing with PIN Release"
            className="mb-2"
          />
          <Description
            text="Print confidential documents by setting a PIN to a print job for release on the printer panel."
            className="mb-7"
          />
          <Title variant="h3" text="LDAP Address Book" className="mb-2" />
          <Description
            text="Prevent information leaks by using the address book registered in the LDAP server to accurately select recipient E-mail addresses."
            className="mb-7"
          />
          <Title variant="h3" text="Panel Admin Mode" className="mb-2" />
          <Description text="Set a password to access and change administrator settings for the printer. This prevents unauthorised users from changing the printer settings." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print speeds up to 18ipm for black and 10ipm for colour",
            "USB, Ethernet, Wi-Fi, Wi-Fi Direct and NFC",
            "Duplex printing up to A3 size",
            "Epson DURABrite TM  Ultra ink",
            "4.3” Colour LCD Touch Pane",
            "Print, Scan, Copy Fax with ADF",
          ]}
        />
      );
    },
    related: [
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
    ],
  },
  {
    id: "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
    model: "Epson L1455 A3 Wi-Fi Duplex All-in-One Ink Tank Printer",
    image: l1455,
    pricePerMonth: "10,000.00 / Month",
    description:
      "Fully featured to meet the demands of the office, the Epson L1455 all-in one ink tank system printer takes productivity bigger with the ability to print documents up to A3+ size at high speeds through Epson’s PrecisionCore™ printhead technology and automatic duplex printing. Deliver high-quality documents, which are framed economically with the ability to yield 6,000 pages for black and 6,500 pages for colour through affordable inks. The L1455 integrates into any office through its complete suite of connectivity features.",
    type: "Epson Inkjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Superb Quality and Cost-savings"
            className="mb-7"
          />
          <Description
            text="The L1455 prints black and white documents with razor sharp text that are water and smudge-resistant. You can also print lab-quality glossy photos on photo media paper at a high resolution output of 4800dpi. Each set of inks yields 6,000 pages for black and 6,500 pages for colour, offering the lowest cost of printing duplex on an A3 printer*."
            className="mb-6"
          />
          <Description
            text="* As of 1 May 2016, the Epson L1455 offers users the lowest cost of printing duplex (cost per two-pages), for any inkjet printer capable of auto-duplex, using genuine branded supplies from its own manufacturer. This is based on the MSRP listed on the manufacturers’ websites in 5 major ASEAN markets."
            className="mb-12 italic"
          />
          <Title variant="h1" text="Supersized Productivity" className="mb-7" />
          <Title variant="h3" text="Print up to A3+" className="mb-2" />
          <Description
            text="Print larger and clearer documents, spreadsheets, diagrams and charts to bring out maximum detail and clarity at A3+ size. The multi-function L1455 supports copying and faxing up to A3 size as well."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="High Speed Duplex Printing"
            className="mb-2"
          />
          <Description
            text="Enjoy print speeds of up to 18ipm for A4 & 10ipm for A3 sized documents with Epson PrecisionCore printheads. The breakthrough PrecisionCore technology is equipped with versatile, high-speed solutions for commercial, industrial and office printing. Offering a vast improvement from the conventional piezo printheads, this technology delivers professional output quality at blazing speeds. The L1455 also supports automatic duplex printing up to 8.7ipm for A4, reducing paper consumption."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Duplex Automatic Document Feeder"
            className="mb-2"
          />
          <Description
            text="The L1455 is equipped with a 35-sheet duplex ADF unit for convenient scanning and copying of double-sided documents, even up to A3 size."
            className="mb-12"
          />
          <Title variant="h1" text="Convenient Connectivity" className="mb-7" />
          <Title
            variant="h3"
            text="Network Connectivity and Standalone Capability"
            className="mb-2"
          />
          <Description
            text="Equipped with Ethernet, Wi-Fi, and Wi-Fi Direct*, the L1455 is perfect for office environments. Wi-Fi Direct acts as an access point, allowing up to four devices to connect directly to the printer at a time without a router."
            className="mb-6"
          />
          <Description
            text="*Wi-Fi and Wi-Fi Direct cannot be used simultaneously."
            className="mb-7 italic"
          />
          <Title variant="h3" text="Epson Connect Enabled" className="mb-2" />
          <Description
            text="Wirelessly print your documents from anywhere in the world with Epson Connect’s wide range of features:"
            className="mb-6"
          />
          <List
            lists={[
              "Epson iPrint",
              "Epson Email Print",
              "Remote Print Driver",
              "Scan to Cloud",
            ]}
            className="mb-6"
          />
          <Description text="Other mobile solutions:" className="mb-6" />
          <List lists={["Google Cloud PrintTM"]} className="mb-6" />
          <Typography variant="h2" className="mb-7">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              http://www.epson.com.sg/connect
            </Link>
            .
          </Typography>
          <Title
            variant="h3"
            text="Compatibility with Epson Device Admin"
            className="mb-2"
          />
          <Description
            text="With Epson Device Admin, you can now manage, monitor and configure your Epson device fleet easily. It is compatible with a large range of networked printers and scanners, and views all information via one smart, intuitive interface."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Epson Device Admin Functions"
            className="mb-2"
          />
          <List
            lists={[
              "Manage Epson devices in groups.",
              "Receive automatic alerts when the device runs out of consumables or faces an error for quick response.",
              "Generate reports automatically for cost-savings activities or implementing managed print services.",
              "Configure multiple devices efficiently with templates to simplify large deployments.",
            ]}
            className="mb-6"
          />
          <Typography variant="h2" className="mb-7">
            For more information please visit{" "}
            <Link
              href="http://www.epson.com.sg/connect"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              http://www.epson.com.sg/connect
            </Link>
            .
          </Typography>
          <Title variant="h1" text="Ease of Use" className="mb-7" />
          <Title variant="h3" text="LCD Screen" className="mb-2" />
          <Description
            text="Experience easy setup and PC-less operation with a 4.3″ touchscreen colour LCD."
            className="mb-7"
          />
          <Title variant="h3" text="Dual 250 Sheets Input" className="mb-2" />
          <Description
            text="The L1455 comes equipped with dual 250-sheets input trays, allowing you to set 2 different paper sizes in separate trays, saving your time and effort in printing documents of different sizes.” touchscreen colour LCD."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Single Sheet Rear Feeder"
            className="mb-2"
          />
          <Description
            text="A single sheet feeder lets you set labels, thick paper, envelopes and photo paper conveniently.” touchscreen colour LCD."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Card Slots/USB Host Function"
            className="mb-2"
          />
          <Description
            text="The L1455 comes with card slots (SD Card & Memory Stick) and USB port for printing, scanning and saving faxes directly with memory devices."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Epson Warranty for Peace of Mind"
            className="mb-2"
          />
          <Description
            text="Enjoy warranty coverage for up to two years or 80,000 prints, whichever comes first, for maximum value from your printer. Epson’s warranty includes coverage of printhead, which is most important for a printer designed for high volume printing."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Quality That Shines. Value That Lasts."
            className="mb-2"
          />
          <Description text="Epson genuine ink bottles are formulated to deliver outstanding high-volume print quality with L-series printers. Every bottle is individually sealed to ensure the purity of ink and comes with a smart tip designed for mess-free refills. Choose Epson genuine ink bottles to enjoy lasting quality with your L-series printer." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Scan, Copy up to A3 size",
            "Automatic Duplex",
            "Print speed up to 32ppm / 20ppm",
            "Fax and ADF capability",
            "Ethernet &amp; Wi-Fi Direct",
            "Dual input trays up to 250 sheets",
          ]}
        />
      );
    },
    related: [
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
      "epson-l1300-a3-ink-tank-printer",
      "epson-l6170-wi-fi-duplex-all-in-one-ink-tank-printer-with-adf",
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
      "epson-l120-ink-tank-printer",
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
      "epson-ecotank-l3110-all-in-one-ink-tank-printer",
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
      "epson-workforce-wf-7711-a3-wi-fi-duplex-all-in-one-inkjet-printer",
      "epson-l1455-a3-wi-fi-duplex-all-in-one-ink-tank-printer",
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
