import Description from "./Content/Description";
import Title from "./Content/Title";
import j200 from "@/common/assets/brother-j200-600x600.jpeg";
import j2330 from "@/common/assets/brother-j2330-600x600.jpeg";
import j2730 from "@/common/assets/brother-j2730-600x600.jpeg";
import j3530 from "@/common/assets/brother-j3530.jpeg";
import j3930 from "@/common/assets/brother-j3930-600x600.jpeg";
import t520 from "@/common/assets/T520-600x600.png";
import t720 from "@/common/assets/T720-600x600.png";
import t820 from "@/common/assets/T820-600x600.png";
import t920 from "@/common/assets/T920-600x600.png";
import t4000 from "@/common/assets/T4000-600x600.png";
import t4500 from "@/common/assets/T4500-600x600.png";
import j2340 from "@/common/assets/J2340-600x600.png";
import j3540 from "@/common/assets/J3540-600x600.png";
import j3940 from "@/common/assets/J3940-600x600.png";
import List from "./Content/List";
import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";

export const brotherInkjetPrinters = [
  {
    id: "mfc-j200",
    model: "MFC J200",
    image: j200,
    pricePerMonth: "2,500.00 / Month",
    description:
      "Laminated Piezo Print Head provides reliability and optimises undisrupted high-volume printing. Save with low-cost super high yield InkBenefit cartridges, fax, automatic document feeder and wireless networking capability.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description text="Reliability with high print volume. When your company’s reputation is built on reliability, you need an All-in-One that is as dependable as you are. The Laminated Piezo Print Head provides reliability and optimises undisrupted high-volume printing. In addition, save more with low-cost, super high yield cartridges." />
          <br />
          <Description text="Featuring high print speeds of up to 27ppm mono and 10ppm colour, save time when there are large volume printing tasks. Furthermore, with paper input of up to 100 sheets, users avoid having to refill paper tray too frequently." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/PC-Fax up to legal size",
            "Prints up to 11/6 ppm mono/colored based on ISO",
            "Wireless LAN and Mobile print capabilities",
            "LCD screen",
            "Scan, Copy and Fax multiple pages withAutomatic Document Feeder",
          ]}
        />
      );
    },
    related: ["mfc-j2330dw"],
  },
  {
    id: "mfc-j2330dw",
    model: "MFC J2330DW",
    image: j2330,
    pricePerMonth: "3,000.00 / Month",
    description:
      "The MFC-J2330DW Business Smart Inkjet All-in-One prints up to A3 and copies, scans and faxes up to A4.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            className="mb-9"
            text="Print, Scan, Copy,  and Fax with this brand new all-in-one printer for the best of performance in the office. With the wireless feature, now you dont need to worry about all those hassle that comes with LAN connection."
          />
          <Title className="mb-5" variant="h3" text="Key Features" />
          <List
            lists={[
              "Engineered for business performance. Durable build quality and performance.",
              "Super high-yield. 3000 pages black and 1500 pages colour replacement ink catridges offer lower printing costs.",
              "New pigment-based ink formula bonds with the document surface which will deliver you sharp black texts and high impact colour documents.",
              "Print up to A3 size.",
              "Lessen waiting time for first print-outs. Approximately 6.0 and 6.5 seconds for black and white and colour printing respectively.",
              "Save paper with automatic 2-sided printing.",
              "A4 scan glass and automatic document feeder which can hold up to 50 sheets at a time.",
              "Stock up to 250 sheets of papers, which means, fewer rounds to refill.",
              "1 sheer manual feedslot for envelopes or speciality papers",
              "Wi-Fi Direct. Print and scan from almost anywhere without the need of a router.",
              "Scan to popular cloud services directly from the 2.7” Touchscreen display.",
            ]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono/20 ipm colored",
            "Auto 2 sided print and copy up to A4",
            "Print up to A3 size; Copy/Scan up to Legal size",
            "Wireless LAN and Mobile print capabilities",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray",
          ]}
        />
      );
    },
    related: ["mfc-j2730dw", "mfc-j200", "mfc-j3930dw"],
  },
  {
    id: "mfc-j2730dw",
    model: "MFC J2730DW",
    image: j2730,
    pricePerMonth: "4,000.00 / Month",
    description:
      "The MFC-J2730DW Business Smart Inkjet All-in-One prints up to A3 and copies, scans and faxes up to A4.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description text="Leave behind cramped spreadsheets, indistinct photos and overcrowded documents." />
          <br />
          <Description text="With A3 printing capabilities, you can expand, showcase and present your work without having to lose any details. Whether you’re printing large format documents or a small image, choose from a range of paper sizes to suit your needs." />
          <br />
          <Description text="With an impressive First Print Out Time (FPOT) of 6 seconds, 22ipm for black and 20ipm for colour, the new inkjet series ensures that you spend less time waiting for prints, and more time managing your business." />
          <br />
          <Description text="Keep printing costs low with Brother’s super high-yield InkBenefit cartridges. The InkBenefit cartridge yields up to 3,000** pages for black and 1,500** pages for colour, ensuring that you pay less, for more." />
          <br />
          <Description text="Your charts, figures and presentation decks will never be dull again. Our new fast-drying pigment-based ink delivers superior print quality with high black density and true-to-life colours. These detailed, high-quality prints are water and fade resistant, ensuring that your documents withstand the test of time." />
          <br />
          <Description text="Navigate print jobs and printer functions effortlessly with the 3.7″ colour LCDtouchscreen. The built-in Ethernet and wireless capabilities also allow you to connect all your devices to one machine for extra convenience. Printing has never been this easy." />
          <br />
          <Description text="Access innovative cloud-based applications directly from your Brother machine." />
          <br />
          <Description text="With the free iPrint&Scan app, you can now print directly from your iPhone, iPod Touch or iPad. Plus, you can scan documents from your MFC straight to your Apple gadgets." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono/20 ipm colored",
            "Auto 2 sided print and copy up to A4",
            "Print up to A3 size; Copy/Scan up to Legal size",
            "Wireless LAN and Mobile print capabilities",
            "LCD screen",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray; 250 sheets on lower tray; 100 sheets on MP tray",
          ]}
        />
      );
    },
    related: ["mfc-j2330dw", "mfc-j200"],
  },
  {
    id: "mfc-j3530dw",
    model: "MFC J3530DW",
    image: j3530,
    pricePerMonth: "6,000.00 / Month",
    description:
      "The MFC-J3530DW Business Smart Inkjet All-in-One prints, copies, scans and faxes in full A3.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description text="Brother MFC-J3530DW Multifunction Inkjet Printer" />
          <br />
          <List
            lists={[
              "TECHNOLOGY Inkjet",
              "MEMORY 128MB",
              "DISPLAY 2.7″ Touchscreen Colour LCD with Touch Sensitive Controls",
              "FUNCTION Up to A3 Print, Print, A3 Copy, Wired Networking , Fax, PC Fax, Wireless Networking, A3 Colour Scan, Direct Photo Print, Google Cloud Print, AirPrint, Automatic duplex (2-sided) print, WiFi Direct, Web Connection, Brother Apps – Outline&Scan/ Outline&Copy/ NoteScan",
              "INTERFACE USB 2.0 Hi-Speed , Ethernet 10/100 Base-TX, Wireless LAN IEEE802.11b/g/n",
              "PRINT SPEED Up to 35 (Monochrome) / 27 (Colour) ppm (Based on Fast Mode),Up to 22 (Monochrome) / 20 (Colour) ppm (Based on ISO/IEC 24734*)",
              "PRINT RESOLUTION Up to 1,200 x 4,800 dpi (Horizontal x Vertical)",
              "DUPLEX (2-SIDED) PRINT A3 Automatic Double-sided printing",
              "PAPER HANDLING SIZES A4, LTR, EXE, B5, A3, LGR, B4, LGL, Folio, A5, B6,A6, Photo(10x15cm/4×6″), Indexcard(13x20cm/5×8″), Photo-L(9x13cm/3.5×5″), Photo-2L(13x18cm/5×7″), C5, Com-10, DL Envelope, Monarch, Mexico Legal, India Legal (Standard Tray)",
            ]}
          />
          <br />
          <Description text="COPY" />
          <br />
          <List
            lists={[
              "MULTICOPY (STACK) Up to 99 copies",
              "COPY RESOLUTION Print up to 1200 x 2400 dpi",
              "COPY SPEED Up to 12 (Monochrome) / 9 (Colour) cpm (Based on ISO/IEC 24735)",
            ]}
          />
          <br />
          <Description text="FAX" />
          <br />
          <List
            lists={[
              "MODEM SPEED 33.6 kbps Super G3",
              "TRANSMISSION SPEED Approximately 3 seconds (ITU-T Test Chart #1, Std resolution, JBIG)",
            ]}
          />
          <br />
          <Description text="SCAN" />
          <br />
          <List
            lists={[
              "SCANNING CAPABILITY Colour & Monochrome",
              "OPTICAL SCANNING RESOLUTION Up to 1,200 x 2,400 dpi",
              "INTERPOLATED SCANNING RESOLUTION Up to 19,200 x 19,200 dpi",
            ]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono and 20 ipm colored",
            "Auto 2 sided Print/Scan/Copy up to A3 size",
            "Print/Scan/Copy up to A3 size",
            "Wireless LAN and Mobile print capabilities",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray",
          ]}
        />
      );
    },
    related: ["mfc-j3930dw", "mfc-j2730dw"],
  },
  {
    id: "mfc-j3930dw",
    model: "MFC J3930DW",
    image: j3930,
    pricePerMonth: "7,000.00 / Month",
    description:
      "The MFC-J3930DW Business Smart Inkjet All-in-One prints, copies, scans and faxes in full A3.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            className="mb-9"
            text="Brother’s MFCJ3930DW is a powerful business inkjet all-in-one featuring enhanced paper handling that makes it a valuable part of any working group."
          />
          <Title className="mb-5" variant="h3" text="Key Features" />
          <List
            lists={[
              "Full A3 high print volume printing, copying, scanning and faxing in one innovative machine.",
              "Moreover, users reduce paper and ink wastage with Brother’s duplex (two-sided) printing. Plus, easily produce 2-up and 4-up on a single sheet. This saves paper when viewing drafts or layouts.",
              "Beat the deadlines with the fast print speed in its class of up to 22/20ppm*.",
              "The A3 Automatic Document Feeder (ADF) allows unattended scanning, copying and faxing of multi-page documents quickly and easily.",
              "The PC Fax receiving function boasts a junk fax filter that eliminates the printing of unnecessary faxes by scanning documents directly to your computer instead of printing them out indiscruminately, thereby cutting down on paper and ink wastage.",
              "The direct print feature enables users to print files such as JPEG without even using computer.",
              "Print directly from a USB flash memory drive by simply connecting them to the MFC.",
            ]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy/Fax/Direct Photo print",
            "Prints up to 22 ipm mono and 20 ipm colored",
            "Auto 2 sided Print/Scan/Copy up to A3 size",
            "Print/Scan/Copy up to A3 size",
            "Wireless LAN and Mobile print capabilities",
            "Scan, Copy and Fax multiple pages with Automatic Document Feeder up to 50 sheets maximum",
            "Handle up to 250 sheets in standard tray; 250 sheets on lower tray; 100 sheets on MP tray",
          ]}
        />
      );
    },
    related: ["mfc-j2330dw", "mfc-j2730dw"],
  },
  {
    id: "dcp-t520w",
    model: "DCP T520W",
    image: t520,
    pricePerMonth: "2,500.00 / Month",
    description:
      "3-in-1 multifunction printer with wireless and mobile printing to work-on-the go.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            text="Introducing our ink tank printers, small and perfect for home or office with higher print volumes. Enjoy printing without worrying about costs and expand your print capabilities with professional quality that yields crisp, clear text and brilliant colour graphics and photos."
            className="mb-12"
          />
          <Title variant="h1" text="Print at Full Speed" className="mb-7" />
          <Description
            text="With a document print speed of up to 17/9.5 ipm*, Brother printers speed up your workflows so you can do more in less time. From printing professional reports to outstanding brochures, you can confidently create powerful business materials that will make the best impression."
            className="mb-6"
          />
          <Typography variant="h2" className="mb-12">
            *Based on ISO/IEC 24734. For more information, please refer to{" "}
            <Link
              href="http://www.brother.com/rd/printspeed"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              www.brother.com/rd/printspeed
            </Link>
            .
          </Typography>
          <Title
            variant="h1"
            text="Handle Tasks Efficiently"
            className="mb-7"
          />
          <Description
            text="Handle a variety of print jobs with a 150 sheets paper tray adjustable for different paper sizes and an additional single-sheet manual feed slot for various paper types."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Save More with Every Print"
            className="mb-7"
          />
          <Description
            text="Lower your cost per print with Brother’s Ultra High Yield Ink bottles. Print up to 7,500** pages in black and 5,000** pages in colour! Our affordable genuine ink ensures long-lasting machines and print heads, so you save more in the long run."
            className="mb-6"
          />
          <Description
            text="**Quoted approx. yields are extrapolated based on Brother original methodology using Test Pattern ISO/IEC 24712. Quoted approx. yields are not based on ISO/IEC 24711."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Refill Easily & Accurately"
            className="mb-7"
          />
          <Description
            text="Brother’s Refill Ink Tank printers features a transparent cover that allows for easy front access to the embedded ink tank. The user-friendly design is engineered to minimise the risk of mess and leakage."
            className="mb-12"
          />
          <Title variant="h1" text="Print from Anywhere" className="mb-7" />
          <Description
            text="With flexible connectivity options, our printers are designed to suit all work environments. Built-in Wi-Fi allows your entire workgroup to effortlessly share one device. Plus, Brother printers are equipped with direct mobile print for the convenience of printing wirelessly from your mobile devices."
            className="mb-12"
          />
          <Title variant="h1" text="Easy to use" className="mb-7" />
          <Description text="Brother Ink Tank Printers are plug and play. You can use them straight out of the box without any driver installation. The simple user interface also makes the printers a breeze to use." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy",
            "Printing Speed Up to 17/9.5 ipm (ISO) Mono/Color",
            "Wi-Fi Direct and Highspeed USB 2.0",
            "Print Resolution up to 1,200 x 6,000 dpi",
            "Paper input capacity 150 sheets",
            "1 Line LCD Display",
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["mfc-j2730dw"],
  },
  {
    id: "dcp-t720dw",
    model: "DCP T720DW",
    image: t720,
    pricePerMonth: "3,000.00 / Month",
    description:
      "Reliable multifunction printer with convenient 2-sided printing.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            text="Introducing our ink tank printers, small and perfect for home or office with higher print volumes. Enjoy printing without worrying about costs and expand your print capabilities with professional quality that yields crisp, clear text and brilliant colour graphics and photos."
            className="mb-12"
          />
          <Title variant="h1" text="Print at Full Speed" className="mb-7" />
          <Description
            text="With a document print speed of up to 17/16.5 ipm*, Brother printers speed up your workflows so you can do more in less time. From printing professional reports to outstanding brochures, you can confidently create powerful business materials that will make the best impression."
            className="mb-6"
          />
          <Typography variant="h2" className="mb-12">
            *Based on ISO/IEC 24734. For more information, please refer to{" "}
            <Link
              href="http://www.brother.com/rd/printspeed"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              www.brother.com/rd/printspeed
            </Link>
            .
          </Typography>
          <Title
            variant="h1"
            text="Handle Tasks Efficiently"
            className="mb-7"
          />
          <Description
            text="Handle a variety of print jobs with a 150 sheets paper tray adjustable for different paper sizes and an additional single-sheet manual feed slot for various paper types. Moreover, the 20 sheets Auto Document Feeder (ADF) allows for convenient scanning and copying multiple pages."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Save More with Every Print"
            className="mb-7"
          />
          <Description
            text="Lower your cost per print with Brother’s Ultra High Yield Ink bottles. Print up to 7,500** pages in black and 5,000** pages in colour! Our affordable genuine ink ensures long-lasting machines and print heads, so you save more in the long run."
            className="mb-6"
          />
          <Description
            text="**Quoted approx. yields are extrapolated based on Brother original methodology using Test Pattern ISO/IEC 24712. Quoted approx. yields are not based on ISO/IEC 24711."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Refill Easily & Accurately"
            className="mb-7"
          />
          <Description
            text="Brother’s Refill Ink Tank printers features a transparent cover that allows for easy front access to the embedded ink tank. The user-friendly design is engineered to minimise the risk of mess and leakage."
            className="mb-12"
          />
          <Title variant="h1" text="Print from Anywhere" className="mb-7" />
          <Description
            text="With flexible connectivity options, our printers are designed to suit all work environments. Built-in Wi-Fi allows your entire workgroup to effortlessly share one device. Plus, Brother printers are equipped with direct mobile print for the convenience of printing wirelessly from your mobile devices."
            className="mb-12"
          />
          <Title variant="h1" text="Easy to use" className="mb-7" />
          <Description text="Brother Ink Tank Printers are plug and play. You can use them straight out of the box without any driver installation. The simple user interface also makes the printers a breeze to use." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy",
            "Printing Speed Up to 17/16.5 ipm (ISO) Mono/Color",
            "Duplex Printing",
            "Wi-Fi Direct and Highspeed USB 2.0",
            "Print Resolution up to 1,200 x 6,000 dpi",
            "20-sheet Auto Document Feeder",
            "Paper input capacity 150 sheets",
            "1 Line LCD Display",
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["mfc-j2330dw", "mfc-j200"],
  },
  {
    id: "dcp-t820dw",
    model: "DCP T820DW",
    image: t820,
    pricePerMonth: "3,500.00 / Month",
    description:
      "Business savings with duplex, high-speed multifunction printer.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            text="Introducing our ink tank printers, small and perfect for home or office with higher print volumes. Enjoy printing without worrying about costs and expand your print capabilities with professional quality that yields crisp, clear text and brilliant colour graphics and photos."
            className="mb-12"
          />
          <Title variant="h1" text="Print at Full Speed" className="mb-7" />
          <Description
            text="With a document print speed of up to 17/16.5 ipm*, Brother printers speed up your workflows so you can do more in less time. From printing professional reports to outstanding brochures, you can confidently create powerful business materials that will make the best impression."
            className="mb-6"
          />
          <Typography variant="h2" className="mb-12">
            *Based on ISO/IEC 24734. For more information, please refer to{" "}
            <Link
              href="http://www.brother.com/rd/printspeed"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              www.brother.com/rd/printspeed
            </Link>
            .
          </Typography>
          <Title
            variant="h1"
            text="Handle Tasks Efficiently"
            className="mb-7"
          />
          <Description
            text="Handle a variety of print jobs with a 150 sheets paper tray adjustable for different paper sizes and an additional single-sheet manual feed slot for various paper types. Moreover, the 20 sheets Auto Document Feeder (ADF) allows for convenient scanning and copying multiple pages."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Save More with Every Print"
            className="mb-7"
          />
          <Description
            text="Lower your cost per print with Brother’s Ultra High Yield Ink bottles. Print up to 7,500** pages in black and 5,000** pages in colour! Our affordable genuine ink ensures long-lasting machines and print heads, so you save more in the long run."
            className="mb-6"
          />
          <Description
            text="**Quoted approx. yields are extrapolated based on Brother original methodology using Test Pattern ISO/IEC 24712. Quoted approx. yields are not based on ISO/IEC 24711."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Refill Easily & Accurately"
            className="mb-7"
          />
          <Description
            text="Brother’s Refill Ink Tank printers features a transparent cover that allows for easy front access to the embedded ink tank. The user-friendly design is engineered to minimise the risk of mess and leakage."
            className="mb-12"
          />
          <Title variant="h1" text="Print from Anywhere" className="mb-7" />
          <Description
            text="With flexible connectivity options, our printers are designed to suit all work environments. Built-in Wi-Fi allows your entire workgroup to effortlessly share one device. Plus, Brother printers are equipped with direct mobile print for the convenience of printing wirelessly from your mobile devices."
            className="mb-12"
          />
          <Title variant="h1" text="Easy to use" className="mb-7" />
          <Description text="Brother Ink Tank Printers are plug and play. You can use them straight out of the box without any driver installation. The simple user interface also makes the printers a breeze to use." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy",
            "Printing Speed Up to 17/16.5 ipm (ISO) Mono/Color",
            "Duplex Printing",
            "Wi-Fi Direct and Highspeed USB 2.0",
            "Print Resolution up to 1,200 x 6,000 dpi",
            "20-sheet Auto Document Feeder",
            "Paper input capacity 150 sheets",
            "Multipurpose Tray 80 sheets",
            "1 Line LCD Display",
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["dcp-t720dw", "mfc-j200"],
  },
  {
    id: "mfc-t920dw",
    model: "MFC T920DW",
    image: t920,
    pricePerMonth: "4,500.00 / Month",
    description:
      "The all-in-one printer with high volume printing at a low cost for businesses.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Description
            text="Introducing our ink tank printers, small and perfect for home or office with higher print volumes. Enjoy printing without worrying about costs and expand your print capabilities with professional quality that yields crisp, clear text and brilliant colour graphics and photos."
            className="mb-12"
          />
          <Title variant="h1" text="Print at Full Speed" className="mb-7" />
          <Description
            text="With a document print speed of up to 17/16.5 ipm*, Brother printers speed up your workflows so you can do more in less time. From printing professional reports to outstanding brochures, you can confidently create powerful business materials that will make the best impression."
            className="mb-6"
          />
          <Typography variant="h2" className="mb-12">
            *Based on ISO/IEC 24734. For more information, please refer to{" "}
            <Link
              href="http://www.brother.com/rd/printspeed"
              target="_blank"
              className="text-primary-800 hover:text-secondary-800"
            >
              www.brother.com/rd/printspeed
            </Link>
            .
          </Typography>
          <Title
            variant="h1"
            text="Handle Tasks Efficiently"
            className="mb-7"
          />
          <Description
            text="Handle a variety of print jobs with a 150 sheets paper tray adjustable for different paper sizes and an additional single-sheet manual feed slot for various paper types. Moreover, the 20 sheets Auto Document Feeder (ADF) allows for convenient scanning and copying multiple pages."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Save More with Every Print"
            className="mb-7"
          />
          <Description
            text="Lower your cost per print with Brother’s Ultra High Yield Ink bottles. Print up to 7,500** pages in black and 5,000** pages in colour! Our affordable genuine ink ensures long-lasting machines and print heads, so you save more in the long run."
            className="mb-6"
          />
          <Description
            text="**Quoted approx. yields are extrapolated based on Brother original methodology using Test Pattern ISO/IEC 24712. Quoted approx. yields are not based on ISO/IEC 24711."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Refill Easily & Accurately"
            className="mb-7"
          />
          <Description
            text="Brother’s Refill Ink Tank printers features a transparent cover that allows for easy front access to the embedded ink tank. The user-friendly design is engineered to minimise the risk of mess and leakage."
            className="mb-12"
          />
          <Title variant="h1" text="Print from Anywhere" className="mb-7" />
          <Description
            text="With flexible connectivity options, our printers are designed to suit all work environments. Built-in Wi-Fi allows your entire workgroup to effortlessly share one device. Plus, Brother printers are equipped with direct mobile print for the convenience of printing wirelessly from your mobile devices."
            className="mb-12"
          />
          <Title variant="h1" text="Easy to use" className="mb-7" />
          <Description text="Brother Ink Tank Printers are plug and play. You can use them straight out of the box without any driver installation. The simple user interface also makes the printers a breeze to use." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print/Scan/Copy",
            "Printing Speed Up to 17/16.5 ipm (ISO) Mono/Color",
            "Duplex Printing",
            "Wi-Fi Direct and Highspeed USB 2.0",
            "Print Resolution up to 1,200 x 6,000 dpi",
            "20-sheet Auto Document Feeder",
            "Paper input capacity 150 sheets",
            "Multipurpose Tray 80 sheets",
            "1.8” TFT Colour LCD",
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["mfc-j3930dw", "dcp-t820dw"],
  },
  {
    id: "hl-t4000dw",
    model: "HL T4000DW",
    image: t4000,
    pricePerMonth: "6,500.00 / Month",
    description:
      "Efficiency Engineered - A3 Refill Ink Tank Printer with Wireless & Ethernet Connectivity, Automatic 2-sided Color Print, Professionally Designed for Fast Print Speeds, Low Cost High Photo Quality with Ultra High Yield Ink Bottles, Wi-Fi Direct, Mobile & USB Print.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Low Cost, High Quality" className="mb-7" />
          <Title variant="h3" text="Cost Efficient" className="mb-2" />
          <Description
            text="Save more with Brother's ultra high-yield ink bottles, as well as automatic 2-sided printing."
            className="mb-6"
          />
          <Description
            text="6500 pages (black)* | 5000 pages (color)* | 50% cost savings."
            className="mb-7"
          />
          <Title variant="h3" text="Easy to Refill" className="mb-2" />
          <Description
            text="Enjoy quick, fuss-free refills and easy monitoring of your printer's ink levels with Brother Refill Tank System."
            className="mb-7"
          />
          <Title variant="h3" text="Quality Prints" className="mb-2" />
          <Description
            text="Create striking artwork and sleek reports with superior color vibrancy and high print resolution of 1200x4800 dpi."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Uncompromised Efficiency"
            className="mb-7"
          />
          <Title variant="h3" text="Larger Printing Options" className="mb-2" />
          <Description
            text="Think bigger and print larger with up to A3 capabilities."
            className="mb-7"
          />
          <Title variant="h3" text="Do More in Less Time" className="mb-2" />
          <Description
            text="Speed up your workflow with fast print speeds and quick first print out times."
            className="mb-6"
          />
          <Description
            text="22/20 images per minute^ | 35/27 pages per minute (fast mode) | 5.5/6 sec FPOT^^"
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Effortless Paper Handling"
            className="mb-2"
          />
          <Description
            text="Meet your every printing need on various paper sizes and types with multiple paper input options in a single machine."
            className="mb-6"
          />
          <Description
            text="250 sheet standard paper tray | 100 sheets multi-purpose tray."
            className="mb-12"
          />
          <Title variant="h1" text="Flexible Connectivity" className="mb-7" />
          <Title
            variant="h3"
            text="Wireless/Wired Connectivity"
            className="mb-2"
          />
          <Description
            text="Connect multiple users at once and enjoy convenient printing at home or in the office with both wireless and Ethernet networks."
            className="mb-7"
          />
          <Title variant="h3" text="Print on the Go" className="mb-2" />
          <Description
            text="Enjoy the freedom of mobile prints and scans, and direct access of innovative features on your Brother machine."
            className="mb-6"
          />
          <Description
            text="Brother Cloud Apps | Brother Webconnect"
            className="mb-7"
          />
          <Title variant="h3" text="USB Direct Print" className="mb-2" />
          <Description
            text="Photo printing from your USB flash drive becomes convenient via the front-access port."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="User-friendly and Secure"
            className="mb-7"
          />
          <Title variant="h3" text="Intuitive Interface" className="mb-2" />
          <Description
            text="Check notifications on printer and ink status, and solve any printer errors quickly."
            className="mb-6"
          />
          <Description text='2.7"" large LCD touchscreen' className="mb-7" />
          <Title
            variant="h3"
            text="Integrate into IT Security Infrastructure"
            className="mb-2"
          />
          <Description
            text="Easily manage printer access and login authentication through a central management system with Active Directory and User Authentication."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Limit Unauthorised Access"
            className="mb-2"
          />
          <Description
            text="Secure Function Lock gives you greater control over group or individual usage by allowing the administrator to limit print functions."
            className="mb-6"
          />
          <Description
            text="**Quoted approx. yields are extrapolated based on Brother original methodology using Test Pattern ISO/IEC 24712. Quoted approx. yields are not based on ISO/IEC 24711.
^Based on ISO/IEC 24734."
            className="mb-6"
          />
          <Description text="^^^ Based on ISO/IEC 17629." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "A3 Refill Tank System",
            "Automatic 2-sided print",
            "Print speed up to 22/20 ipm, up to 5.5 sec (Mono) / 6 sec (Colour) first print-out time",
            "Print resolution up to 1,200 x 4,800 dpi print quality",
            '2.7" colour LCD touchscreen',
            "250 sheets standard paper tray & 100 sheets multi-purpose paper tray",
            "Ultra high yield ink bottles of up to 6,500 pages (mono) / 5,000 pages (colour)",
            "Wireless and network connectivity",
            "Brother iPrint&Scan, Apple AirPrint, Mopria, Google Cloud Print",
            "USB Direct Printing",
          ]}
        />
      );
    },
    related: ["mfc-j2730dw", "mfc-j3930dw", "dcp-t720dw"],
  },
  {
    id: "mfc-t4500dw",
    model: "MFC T4500DW",
    image: t4500,
    pricePerMonth: "9,000.00 / Month",
    description:
      "Efficiency Engineered - A3 Refill Ink Tank Multi-Function Center with Wireless & Ethernet Connectivity, Automatic 2-sided Color Print, ADF - Scan/Copy/Fax. Professionally Designed for Fast Print Speeds, Low Cost High Resolution Photo Quality with Ultra High Yield Ink Bottles, Wi-Fi Direct, Mobile & USB Print.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Low Cost, High Quality" className="mb-7" />
          <Title variant="h3" text="Cost Efficient" className="mb-2" />
          <Description
            text="Save more with Brother's ultra high-yield ink bottles, as well as automatic 2-sided printing."
            className="mb-6"
          />
          <Description
            text="6500 pages (black)* | 5000 pages (color)* | 50% cost savings."
            className="mb-7"
          />
          <Title variant="h3" text="Easy to Refill" className="mb-2" />
          <Description
            text="Enjoy quick, fuss-free refills and easy monitoring of your printer's ink levels with Brother Refill Tank System."
            className="mb-7"
          />
          <Title variant="h3" text="Quality Prints" className="mb-2" />
          <Description
            text="Create striking artwork and sleek reports with superior color vibrancy and high print resolution of 1200x4800 dpi."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="Uncompromised Efficiency"
            className="mb-7"
          />
          <Title variant="h3" text="Larger Printing Options" className="mb-2" />
          <Description
            text="Think bigger and print larger with up to A3 capabilities."
            className="mb-7"
          />
          <Title variant="h3" text="Do More in Less Time" className="mb-2" />
          <Description
            text="Speed up your workflow with fast print speeds and quick first print out times."
            className="mb-6"
          />
          <Description
            text="22/20 images per minute^ | 35/27 pages per minute (fast mode) | 5.5/6 sec FPOT^^"
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Effortless Paper Handling"
            className="mb-2"
          />
          <Description
            text="Meet your every printing need on various paper sizes and types with multiple paper input options in a single machine."
            className="mb-6"
          />
          <Description
            text="250 sheet standard paper tray | 100 sheets multi-purpose tray. | 50 sheets Auto Document Feeder"
            className="mb-12"
          />
          <Title variant="h1" text="Flexible Connectivity" className="mb-7" />
          <Title
            variant="h3"
            text="Wireless/Wired Connectivity"
            className="mb-2"
          />
          <Description
            text="Connect multiple users at once and enjoy convenient printing at home or in the office with both wireless and Ethernet networks."
            className="mb-7"
          />
          <Title variant="h3" text="Print on the Go" className="mb-2" />
          <Description
            text="Enjoy the freedom of mobile prints and scans, and direct access of innovative features on your Brother machine."
            className="mb-6"
          />
          <Description
            text="Brother Cloud Apps | Brother Webconnect"
            className="mb-7"
          />
          <Title variant="h3" text="USB Direct Print" className="mb-2" />
          <Description
            text="Photo printing from your USB flash drive becomes convenient via the front-access port."
            className="mb-12"
          />
          <Title
            variant="h1"
            text="User-friendly and Secure"
            className="mb-7"
          />
          <Title variant="h3" text="Intuitive Interface" className="mb-2" />
          <Description
            text="Check notifications on printer and ink status, and solve any printer errors quickly."
            className="mb-6"
          />
          <Description text='2.7"" large LCD touchscreen' className="mb-7" />
          <Title
            variant="h3"
            text="Integrate into IT Security Infrastructure"
            className="mb-2"
          />
          <Description
            text="Easily manage printer access and login authentication through a central management system with Active Directory and User Authentication."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Limit Unauthorised Access"
            className="mb-2"
          />
          <Description
            text="Secure Function Lock gives you greater control over group or individual usage by allowing the administrator to limit print functions."
            className="mb-6"
          />
          <Description
            text="**Quoted approx. yields are extrapolated based on Brother original methodology using Test Pattern ISO/IEC 24712. Quoted approx. yields are not based on ISO/IEC 24711.
^Based on ISO/IEC 24734."
            className="mb-6"
          />
          <Description text="^^^ Based on ISO/IEC 17629." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "A3 Refill Tank System",
            "Automatic 2-sided print",
            "Print speed up to 22/20 ipm print speed, up to 5.5 sec (Mono) / 6 sec (Colour) first print-out time",
            "Print resolution up to 1,200 x 4,800 dpi print quality",
            '2.7" colour LCD touchscreen and full keypad',
            "250 sheets standard paper tray & 100 sheets multi-purpose paper tray",
            "Ultra high yield ink bottles of up to 6,500 pages (mono) / 5,000 pages (colour)",
            "Wireless and network connectivity",
            "Brother iPrint&Scan, Apple AirPrint, Mopria, Google Cloud Print",
            "USB Direct Printing",
          ]}
        />
      );
    },
    related: ["hl-t4000dw", "mfc-j3530dw", "mfc-j200"],
  },
  {
    id: "mfc-j2340dw",
    model: "MFC J2340DW",
    image: j2340,
    pricePerMonth: "4,000.00 / Month",
    description:
      "Fast Printing Ink Benefit Series Multifunction Center Printer.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Fast Printing" className="mb-7" />
          <Description
            text="With an impressive First Print Out Time (FPOT) of 4.4 seconds^^, 28ipm^ for black and 28ipm^ for color, you spend less time waiting for prints, and more time crafting your ideas."
            className="mb-6"
          />
          <Description text="^ Based on ISO/IEC 24734" className="mb-1" />
          <Description text="^^ Based on ISO/ICE 17629" className="mb-7" />
          <Title
            variant="h1"
            text="High Volume, Cost Efficient"
            className="mb-7"
          />
          <Description
            text="Experience the versatile print formats with volumes at an incredibly cost efficient yield. With Brother’s high-yield InkBenefit cartridges, get yields up to 3,000** pages for black and 1,500** pages for color. Cost has never been more efficient."
            className="mb-6"
          />
          <Description
            text="** Approximate cartridge yield is declared in accordance with ISO/IEC 24711"
            className="mb-7"
          />
          <Title
            variant="h1"
            text="Vivid Professional Prints"
            className="mb-7"
          />
          <Description text="Great ideas materialise with quality prints. The new fast-drying pigment-based ink delivers superior print quality with high black density and true-to-life colors, ensuring each copy stays crisp, sharp and vivid." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Copy, Scan, Fax",
            "A3 Print Speed Up to 28 ipm (ISO) mono/colour",
            "2-sided (duplex) print up to A4",
            "Scan and Copy up to A4",
            "Wired/Wireless Network and Wi-Fi Direct",
            "Print Resolution up to 1,200x4,800 dpi",
            "250-sheet paper input capacity",
            "50-sheet Automatic Document Feeder",
            "2.7-inch LCD Touchscreen Display",
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["mfc-j3540dw", "mfc-j3940dw", "mfc-j200"],
  },
  {
    id: "mfc-j3540dw",
    model: "MFC J3540DW",
    image: j3540,
    pricePerMonth: "5,500.00 / Month",
    description: "Fast print speed with 2.7” LCD Touch Panel Inkjet Printer.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Fast Printing" className="mb-7" />
          <Description
            text="With an impressive First Print Out Time (FPOT) of 4.4 seconds^^, 28ipm^ for black and 28ipm^ for color, you spend less time waiting for prints, and more time crafting your ideas."
            className="mb-6"
          />
          <Description text="^ Based on ISO/IEC 24734" className="mb-1" />
          <Description text="^^ Based on ISO/ICE 17629" className="mb-7" />
          <Title
            variant="h1"
            text="High Volume, Cost Efficient"
            className="mb-7"
          />
          <Description
            text="Experience the versatile print formats with volumes at an incredibly cost efficient yield. With Brother’s high-yield InkBenefit cartridges, get yields up to 3,000** pages for black and 1,500** pages for color. Cost has never been more efficient."
            className="mb-6"
          />
          <Description
            text="** Approximate cartridge yield is declared in accordance with ISO/IEC 24711"
            className="mb-7"
          />
          <Title
            variant="h1"
            text="Vivid Professional Prints"
            className="mb-7"
          />
          <Description text="Great ideas materialise with quality prints. The new fast-drying pigment-based ink delivers superior print quality with high black density and true-to-life colors, ensuring each copy stays crisp, sharp and vivid." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Copy, Scan, Fax",
            "A3 Print Speed Up to 28 ipm (ISO) mono/colour",
            "2-sided (duplex) print up to A3",
            "Scan and Copy up to A3",
            "Wired/Wireless Network and Wi-Fi Direct",
            "Print Resolution up to 1,200x4,800 dpi",
            "250-sheet paper input capacity",
            "50-sheet Automatic Document Feeder",
            "2.7-inch LCD Touchscreen Display",
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["mfc-j3930dw", "mfc-j2330dw", "mfc-j2340dw"],
  },
  {
    id: "mfc-j3940dw",
    model: "MFC J3940DW",
    image: j3940,
    pricePerMonth: "6,500.00 / Month",
    description: "Wired / Wireless network connectivity Inkjet Printer.",
    type: "Brother Inkjet",
    descriptions: () => {
      return (
        <>
          <Title variant="h1" text="Fast Printing" className="mb-7" />
          <Description
            text="With an impressive First Print Out Time (FPOT) of 4.4 seconds^^, 28ipm^ for black and 28ipm^ for color, you spend less time waiting for prints, and more time crafting your ideas."
            className="mb-6"
          />
          <Description text="^ Based on ISO/IEC 24734" className="mb-1" />
          <Description text="^^ Based on ISO/ICE 17629" className="mb-7" />
          <Title
            variant="h1"
            text="High Volume, Cost Efficient"
            className="mb-7"
          />
          <Description
            text="Experience the versatile print formats with volumes at an incredibly cost efficient yield. With Brother’s high-yield InkBenefit cartridges, get yields up to 3,000** pages for black and 1,500** pages for color. Cost has never been more efficient."
            className="mb-6"
          />
          <Description
            text="** Approximate cartridge yield is declared in accordance with ISO/IEC 24711"
            className="mb-7"
          />
          <Title
            variant="h1"
            text="Vivid Professional Prints"
            className="mb-7"
          />
          <Description
            text="Great ideas materialise with quality prints. The new fast-drying pigment-based ink delivers superior print quality with high black density and true-to-life colors, ensuring each copy stays crisp, sharp and vivid."
            className="mb-12"
          />
          <Title variant="h1" text="Functionality at a Tap" className="mb-7" />
          <Description
            text="Navigate print jobs and printer functions effortlessly with the 3.5” color LCD touchscreen. With built-in Ethernet and wireless capabilities, connect all your devices to one MFC for extra convenience."
            className="mb-12"
          />
          <Title variant="h1" text="High Capacity Trays" className="mb-7" />
          <Description text="Versatile paper handling increases productivity. Two paper trays with 500 sheets combined capacity help minimize refills. The trays accept up to A3 paper size to minimize switching between A4 and A3 papers. In addition, the multi-purpose tray holds up to and extra 100 sheets of multiple paper types, allowing printing on envelopes, cardstock and other media for diverse printing needs." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print, Copy, Scan, Fax",
            "A3 Print Speed Up to 28 ipm (ISO) mono/colour",
            "2-sided (duplex) print up to A3",
            "Scan and Copy up to A3",
            "Wired/Wireless Network and Wi-Fi Direct and NFC",
            "Print Resolution up to 1,200x4,800 dpi",
            "2x250-sheet paper input capacity",
            "50-sheet 2-sided Automatic Document Feeder A3",
            '3.5" Colour Touchscreen Display',
            "Mobile Print: Brother iPrint&Scan, AirPrint & Mopria",
          ]}
        />
      );
    },
    related: ["mfc-t4500dw", "mfc-j2340dw", "mfc-j3540dw"],
  },
];
