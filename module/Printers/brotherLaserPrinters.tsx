import Description from "./Content/Description";
import Title from "./Content/Title";
import l2365 from "@/common/assets/HLL2365DW-350x350.jpeg";
import l2540 from "@/common/assets/DCPL2540DW-600x600.jpeg";
import l2740 from "@/common/assets/DCPL2540DW-600x600.jpeg";
import l2460 from "@/common/assets/L2460-600x600.png";
import l2640 from "@/common/assets/L2640-600x600.png";
import l5100 from "@/common/assets/L5100-600x600.png";
import l8360 from "@/common/assets/L8360-600x600.png";
import l8900 from "@/common/assets/L8900-600x600.png";
import l3280 from "@/common/assets/L3280-600x600.png";
import l8340 from "@/common/assets/L8340-600x600.png";
import List from "./Content/List";

export const brotherLaserPrinters = [
  {
    id: "hl-l2365dw",
    model: "HL L2365DW",
    image: l2365,
    pricePerMonth: "3,000.00 / Month",
    description:
      "Boost your productivity with Brother’s HL-L2365DW monochrome laser printer. With high-speed printing of up to 30 pages per minute (ppm) and multiple valuable features, you will have a printing experience like no other. Plus, you will get a 2,600-page high yield toner that comes with your printer.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Description text="A professional mono laser printer for the small or home office with both wired and wireless network compatibility." />
          <br />
          <Description text="Speed up to 30ppm, 250 sheet paper tray and double-sided printing as standard. Optional cost-effective, high-yield toner cartridges available." />
          <br />
          <Description text="The HL-L2365DW combines professional mono laser print with versatile connectivity options, perfect for Small Offices." />
          <br />
          <Description text="Wired and wireless network-ready, prepare to print and scan from anywhere using the Brother iPrint&Scan app, Google Cloud Print, Apple AirPrint and Wi-Fi Direct. Wherever you are in the office, professional printing is only a press of a button away." />
          <br />
          <Description text="With speeds of up to 30ppm and a 250 sheet paper tray you can focus on the tasks that matter, safe in the knowledge that your print jobs will be professionally delivered quickly and efficiently, without the need to refill the paper tray in between jobs." />
          <br />
          <Description text="Added efficiency can be found in the inbox 1200 page toner, double-sided printing feature and optional cost-effective, high-yield toner cartridges to both reduce waste and running costs." />
        </>
      );
    },
    specifications: () => {
      return (
        <>
          <List
            lists={[
              "Single function (print only)",
              "Print with 30ppm high speed",
              "Print up to Legal size",
              "Automatic 2 sided print",
              "Wired and Wireless Lan",
              "Can print up to 2600 pages per cartridge",
            ]}
            className="mb-6"
          />
          <Title className="mb-5" variant="h3" text="INCLUSIONS:" />
          <List
            lists={["4 toners maximum refill", "Free maintenance"]}
            className="mb-6"
          />
        </>
      );
    },
    related: ["mfc-l2740dw", "dcp-l2540dw", "hl-l2460dw"],
  },
  {
    id: "dcp-l2540dw",
    model: "DCP L2540DW",
    image: l2540,
    pricePerMonth: "4,000.00 / Month",
    description:
      "Laser Multi-Function Copier with Wireless Networking and Duplex Printing.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <Description text="The Brother DCP-L2540DW is a reliable, affordable monochrome laser multi-function copier with an up to 35-page automatic document feeder for home or small office use. This desk-friendly, compact copier has an up to 250-sheet capacity tray, connects with ease via wireless networking or Ethernet, and prints and copies at up to 30ppm. Print from compatible mobile devices over your wireless network‡;. Scan documents to a variety of destinations‡;. Automatic duplex printing helps save paper. 1-year limited warranty plus free phone support for life of your product." />
      );
    },
    specifications: () => {
      return (
        <>
          <List
            lists={[
              "3-in-1 multi-function monochrome",
              "Print, Scan, & Copy up to Legal Size",
              "Print with 30ppm high speed",
              "Automatic 2 sided print/copy/scan",
              "Wired and Wireless Lan",
              "Can print up to 2600 pages per cartridge",
            ]}
            className="mb-6"
          />
          <Title className="mb-5" variant="h3" text="INCLUSIONS:" />
          <List
            lists={["4 toners maximum refill", "Free maintenance"]}
            className="mb-6"
          />
        </>
      );
    },
    related: ["hl-l2365dw", "mfc-l2740dw", "hl-l2460dw"],
  },
  {
    id: "mfc-l2740dw",
    model: "MFC L2740DW",
    image: l2740,
    pricePerMonth: "4,500.00 / Month",
    description:
      "Compact Laser All-in-One with Wireless Networking and Advanced Duplex.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <Description text="The Brother MFC-L2740DW is a reliable, affordable monochrome laser all-in-one with an up to 35-page automatic document feeder for home or small office use. This desk-friendly, compact all-in-one has an up to 250-sheet capacity tray, connects with ease via wireless networking or Ethernet, and prints and copies at up to 32ppm‡;. Automatic duplex printing, plus single-pass duplex scanning and copying. 2.7″ color TouchScreen Display for intuitive menu navigation. Print from compatible mobile devices over your wireless network‡;. Scan documents to a variety of destinations, including popular cloud services‡;. High-speed faxing. 1-year limited warranty plus free phone support for life of your product." />
      );
    },
    specifications: () => {
      return (
        <>
          <List
            lists={[
              "5-in-1 multi-function monochrome",
              "Print, Scan, Copy, Fax, & Internet fax up to Legal Size",
              "Print with 30ppm high speed",
              "Automatic 2 sided print/copy/scan",
              "Wired and Wireless Lan",
              "Can print up to 2600 pages per cartridge",
            ]}
            className="mb-6"
          />
          <Title className="mb-5" variant="h3" text="INCLUSIONS:" />
          <List
            lists={["4 toners maximum refill", "Free maintenance"]}
            className="mb-6"
          />
        </>
      );
    },
    related: ["dcp-l2540dw", "hl-l2365dw", "hl-l2460dw"],
  },
  {
    id: "hl-l2460dw",
    model: "HL L2460DW",
    image: l2460,
    pricePerMonth: "3,000.00 / Month",
    description: "Compact Mono Laser Printer with 5000-page in-box toner.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="BOOST YOUR PRODUCTIVITY with HL-L2460DW"
            className="mb-7"
          />
          <Description
            text="Enjoy top-class print speeds, enhanced mobile connectivity and cost-saving innovations with HL-L2460DW monochrome laser printer."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Double the print, half the paper"
            className="mb-2"
          />
          <Description
            text="Automatic duplex printing uses up to 50% less paper."
            className="mb-7"
          />
          <Title variant="h3" text="Quiet as a whisper" className="mb-2" />
          <Description
            text="Reduce noise and energy consumption with Quiet Mode."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Less reloads reduced waste"
            className="mb-2"
          />
          <Description
            text="Lower your usage by optimising the resolution for less toner reloads thus cutting down the amount of plastics used."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="A more efficient use of resources"
            className="mb-2"
          />
          <Description
            text="Maximise every sheet of paper with N-in-1 printing giving you up to 4 pages per side."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Streamlined connectivity"
            className="mb-2"
          />
          <Description
            text="Streamline your workflows with the Brother Mobile Connect app. Print, scan and copy even on the go*, through added integration with apps on Android and Apple devices."
            className="mb-6"
          />
          <Description
            text="Plus, enjoy cross-platform compatibility to various cloud services including OneDrive, Google Drive, SharePoint and OneNote."
            className="mb-7"
          />
          <List
            lists={["Brother Mobile Connect App", "Mopria® Print", "AirPrint®"]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Single Function",
            "Print up to 34/36 ppm (A4/Letter)",
            "Print Resolution 1200x1200 dpi",
            "Wired/wireless (2.4 GHz/5.0 GHz) Network",
            "1-Line LCD (16 characters)",
            "250-sheet paper tray capacity",
          ]}
        />
      );
    },
    related: ["dcp-l2640dw", "dcp-l2540dw", "hl-l2365dw"],
  },
  {
    id: "dcp-l2640dw",
    model: "DCP L2640DW",
    image: l2640,
    pricePerMonth: "3,500.00 / Month",
    description: "Compact Mono Laser Multi-Function Printer.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="BOOST YOUR PRODUCTIVITY with DCP-L2640DW"
            className="mb-7"
          />
          <Description
            text="Enjoy top-class print speeds, enhanced mobile connectivity and cost-saving innovations with DCP-L2640DW monochrome laser printers."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Double the print, half the paper"
            className="mb-2"
          />
          <Description
            text="Automatic duplex printing uses up to 50% less paper."
            className="mb-7"
          />
          <Title variant="h3" text="Quiet as a whisper" className="mb-2" />
          <Description
            text="Reduce noise and energy consumption with Quiet Mode."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Less reloads reduced waste"
            className="mb-2"
          />
          <Description
            text="Lower your usage by optimising the resolution for less toner reloads thus cutting down the amount of plastics used."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="A more efficient use of resources"
            className="mb-2"
          />
          <Description
            text="Maximise every sheet of paper with N-in-1 printing giving you up to 4 pages per side."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Streamlined connectivity"
            className="mb-2"
          />
          <Description
            text="Streamline your workflows with the Brother Mobile Connect app. Print, scan and copy even on the go*, through added integration with apps on Android and Apple devices."
            className="mb-6"
          />
          <Description
            text="Plus, enjoy cross-platform compatibility to various cloud services including OneDrive, Google Drive, SharePoint and OneNote."
            className="mb-7"
          />
          <List
            lists={["Brother Mobile Connect App", "Mopria® Print", "AirPrint®"]}
          />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Multi-function 3-IN-1",
            "Print up to 34/36 ppm (A4/Letter)",
            "Print Resolution 1200x1200 dpi",
            "Wired/wireless (2.4 GHz/5.0 GHz) Network",
            "2-Line LCD (16 characters)",
            "250-sheet paper tray capacity",
            "50-sheet Automatic Document Feeder",
            "1-sheet manual feed slot",
          ]}
        />
      );
    },
    related: ["mfc-l2740dw", "dcp-l2540dw", "hl-l5100dn"],
  },
  {
    id: "hl-l5100dn",
    model: "HL L5100DN",
    image: l5100,
    pricePerMonth: "4,500.00 / Month",
    description:
      "High Speed Monochrome Laser Printer with Automatic 2-sided Printing and Ethernet network connectivity.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Maximise Print efficiency, Minimise costs"
            className="mb-7"
          />
          <Description
            text="Every business needs a reliable business partner. The new mono laser series helps you maximise print efficiency and minimise costs so you can make the most of your investment."
            className="mb-7"
          />
          <Title variant="h3" text="Built for Productivity" className="mb-2" />
          <Description
            text="Keep productivity at its maximum with high print speed of up to 40ppm*. What’s more, the Ethernet connection allows easy sharing of printer within the workgroup."
            className="mb-6"
          />
          <Description
            text="Focus on your high volume print jobs and spend less time reloading paper with the default paper tray of up to 250 sheets capacity, 50 sheets multi-purpose tray, plus optional upgrades of two additional paper trays, bringing the total paper capacity up to 1,340 sheets."
            className="mb-6"
          />
          <Description
            text="*In accordance with ISO/IEC 11160-2:1996"
            className="mb-7"
          />
          <Title variant="h3" text="Built for Reliability" className="mb-2" />
          <Description
            text="Print as much as you need with a robust and dependable machine that has a monthly print cycle of up to 50,000 pages."
            className="mb-7"
          />
          <Title variant="h3" text="Built for Savings" className="mb-2" />
          <Description
            text="Minimise printing costs with 12,000* pages super high-yield toner. Choose from different toner settings to increase your savings per printout."
            className="mb-6"
          />
          <Description
            text="*Applicable to TN-3478 only, in accordance with ISO/IEC 19752"
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Simplify business operations and safeguard your documents"
            className="mb-2"
          />
          <Description
            text="Easily manage your Brother network-connected products from one central location using BRAdmin Professional Software."
            className="mb-6"
          />
          <Description
            text="This network management tool allows remote configurations, monitoring of useful information such as page count, toner and drum status. With the option of setting print quota of each user, you can better control printing cost. Instant notification of printer downtime also lets you attend to the problem before it impacts productivity. What’s more, this software features a suite of security solutions to assure you of your documents’ confidentiality."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Flexible workflow solutions customised for your business"
            className="mb-2"
          />
          <Description text="The Brother Special Solutions Customisation (SSC) enables Brother products to be modified depending on your needs. Through careful collaboration, we help you design the best solution that meets specific business challenges." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print speed up to 40/42 ppm",
            "Print resolution up to 1200 x 1200 dpi",
            "Automatic 2-sided printing",
            "250 sheets paper tray capacity (LT-5500) or 520 sheets (LT-6500) optional tray",
            "512MB Memory",
            "16 characters x 1 line",
            "Wired Network",
            "High Speed USB 2.0",
          ]}
        />
      );
    },
    related: ["mfc-l8900cdw", "hl-l8360cdw", "dcp-l2640dw"],
  },
  {
    id: "hl-l8360cdw",
    model: "HL L8360CDW",
    image: l8360,
    pricePerMonth: "8,000.00 / Month",
    description: "Brother HL-L8360CDW Color Laser + Duplex and Wireless.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Print and scan with greater speed and assurance!"
            className="mb-7"
          />
          <Description
            text="We know what makes a successful print infrastructure: it has to offer flexibility, reliability and affordability. Most of all, it should have a positive impact on everybody's productivity and efficiency."
            className="mb-6"
          />
          <Description
            text="Designed specially for high print volume users, the HL-L8360CDW gives you the confidence to print and scan with greater speed and assurance. It also offers lower cost thanks to super and ultra high-yield toners."
            className="mb-6"
          />
          <Description
            text="Backed by enhanced security, intelligent mobile connectivity and expandable paper trays, the HL-L8360CDW will satisfy your toughest office demands."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Delivering Reliability and Efficiency"
            className="mb-2"
          />
          <Description
            text="Brother's HL-L8360CDW has been designed with the needs of businesses at heart. Built with robust materials to withstand the most challenging office environments, our new range is the perfect partner for your business."
            className="mb-6"
          />
          <Description
            text="Using ultra high-yield cartridges means you spend less time changing toners which increase productivity."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Protect What Matters to Your Business"
            className="mb-2"
          />
          <Description
            text="Digital integrity is paramount to your business and the HL-L8360CDW's advance security capabilities give you full control and protection of your print infrastructure. Secure Function Lock 3.0 and Active Directory empowers administrators to authorise users and restrict the functions available on the device. An integrated NFC reader also allows quick access to the printer using an ID card."
            className="mb-6"
          />
          <Description
            text="Oversee and control your print infrastructure remotely with our BRAdmin Professional Software - from managing printing costs with print quotas for each user to instant notifications of any printer downtime for speedy attendance."
            className="mb-7"
          />
          <Title variant="h3" text="Personalised Solutions" className="mb-2" />
          <Description
            text="Every customer is unique, which is why the Brother Special Solutions Customisation (SSC) enables Brother products to be modified depending on your requirements. Supported by our field service engineers and business analysts, we collaborate with you to design the best solution to meet your business challenges."
            className="mb-7"
          />
          <Title variant="h3" text="Advanced Paper Handling" className="mb-2" />
          <Description
            text="As your business and its requirements grow, your HL-L8260CDN will grow to meet those demands. Conveniently feed thicker or odd-sized paper from the multi-purpose tray for special print jobs. You can also expand your paper input in two ways: with the tower tray that gives you up to 2,080 sheets for your high volume print jobs, or by adding optional paper trays that holds up to either 250 or 500 sheets each."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Cutting the Cost of Colour Printing"
            className="mb-2"
          />
          <Description
            text="Reduce your total cost of ownership (TCO) with our ultra high-yield cartridges that deliver up to 9,000 pages of printing for maximum output and value."
            className="mb-7"
          />
          <Title variant="h3" text="Mobility & Flexibility" className="mb-2" />
          <Description text="Experience true mobile integration by wirelessly printing from any device with Brother iPrint&Scan, Apple's AirPrint™, Mopria™ and Google Cloud Print™. Empower yourself with Brother Cloud Apps. This free suite of innovative applications allow you to create, edit and convert documents at selected Brother machines with an Internet connection." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print Speed (A4/LTR) 31/33ppm",
            "Automatic 2-sided printing",
            "Print resolution up to 600 x 2400 dpi",
            "Wired / Wireless LAN / Wi-Fi Direct & NFC",
            "250-sheet paper tray capacity & 50-sheet MP tray",
          ]}
        />
      );
    },
    related: ["mfc-l8900cdw", "hl-l5100dn", "hl-l3280cdw"],
  },
  {
    id: "mfc-l8900cdw",
    model: "MFC L8900CDW",
    image: l8900,
    pricePerMonth: "14,000.00 / Month",
    description:
      "Color Laser Multi-Function Center with Automatic 2-sided Features, Wireless Connectivity and NFC Card Reader.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Enchance your Productivity and Efficiency"
            className="mb-7"
          />
          <Description
            text="A successful print infrastructure delivers flexibility, reliability, affordability to positively enchance your productivity and efficiency."
            className="mb-6"
          />
          <Description
            text="Our new color laser MFC-L8900CDW lets you print and scan more with greater speed and assurance. It also offers lower cost thanks to super and ultra high-yield toners."
            className="mb-6"
          />
          <Description
            text="Backed by enhanced security, intelligent mobile connectivity and expandable paper trays, the MFC-L8900CDW will satisfy your toughest office demands."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Delivering Reliability and Efficiency"
            className="mb-2"
          />
          <Description
            text="Built with robust materials to withstand the most challenging office environments, Brother's new MFC-L8900CDW is the perfect partner for your business. A Dual CIS Automatic Document Feeder offers you a quick and simple way to scan up to 70 sheets directly to your preferred medium."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Cutting the Cost of Color Printing"
            className="mb-2"
          />
          <Description
            text="Reduce total cost of ownership with ultra high-yield cartridges that allow up to 9,000 pages of printing."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Protect What Matters to Your Business"
            className="mb-2"
          />
          <Description
            text="Get full control and protection of your print infrastructure with advanced security capabilities like Secure Function Lock 3.0 and Active Directory which authorises users and functions. An integrated NFC reader also allows quick access to the printer using an ID card."
            className="mb-6"
          />
          <Description
            text="Monitor your print infrastructure remotely with BRAdmin Professional Software - from setting print quotas for each user to instant notifications of any printer downtime."
            className="mb-7"
          />
          <Title variant="h3" text="Personalised Solutions" className="mb-2" />
          <Description
            text="Modify your MFC-L8900CDW to your requirements with Brother Special Solutions Customisation (SSC). Supported by our field service engineers and business analysts, we collaborate with you to design the best solution to meet your business challenges. Brother Solutions Interface (BSI), a web-based service platform, also lets software developers easily create customised solutions."
            className="mb-7"
          />
          <Title variant="h3" text="Advanced Paper Handling" className="mb-2" />
          <Description
            text="The MFC-L8900CDW grows to meet your growing business and new requirements. Expand your paper input in two ways: a tower tray for up to 2,080 sheets, or optional paper trays that hold up to either 250 or 500 sheets each. Conveniently feed thicker or odd-sized paper from the multi-purpose tray for special print jobs."
            className="mb-7"
          />
          <Title variant="h3" text="Mobility & Flexibility" className="mb-2" />
          <Description
            text="Wirelessly print from any device with Brother iPrint&Scan, Apple's AirPrint™, Mopria™ and Google Cloud Print™. You can also preview your copies and faxes, and save to Cloud."
            className="mb-7"
          />
          <Description text="With Brother CLoud Apps, a free suite of innovative applications, you can create, edit and convert documents when your machine is connected to the internet." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Print Speed (A4/LTR) 31/33ppm",
            "Print, Scan, and Copy upto Legal size",
            "Automatic 2-sided printing",
            "Print resolution up to 600 x 2400 dpi",
            "Wired / Wireless LAN / Wi-Fi Direct & NFC",
            "250-sheet paper tray capacity & 50-sheet MP tray",
            "70-sheet Automatic Document Feeder",
          ]}
        />
      );
    },
    related: ["hl-l8360cdw", "mfc-l2740dw", "hl-l2365dw"],
  },
  {
    id: "hl-l3280cdw",
    model: "HL L3280CDW",
    image: l3280,
    pricePerMonth: "5,000.00 / Month",
    description: "Compact Colour Laser LED Printer.",
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Colour Solution for Professional Printing"
            className="mb-7"
          />
          <Description
            text="Designed for the modern office and its workflow, our printer is crafted with rich utillites and productivity functions that enhance daily operations."
            className="mb-7"
          />
          <Title variant="h3" text="True to Life" className="mb-2" />
          <Description
            text="Professional printouts that are vibrantly accurate. Utilising Brother’s leading LED technology, colours produced by the HL-L3280CDW are crisp and sharp, with gradients being smooth and natural. Reduce the guesswork and excessive reprints as documents produced are as accurate as how you calibrate them on screen."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Meet High Volume Printing Needs"
            className="mb-2"
          />
          <Description
            text="Print so much more at a fraction of the cost for greater value overall. With Brother’s toners, the new HL-L3280CDW offers incredibly efficient print usage rates that reduce the need for frequent replacements. Print costs are averaged out over a longer period of time as well, keeping Total Cost of Ownership (TCO) low."
            className="mb-6"
          />
          <Description
            text="* Approximate cartridge yield is declared in accordance with ISO/IEC 19798."
            className="mb-7"
          />
          <Title variant="h3" text="Fast Prints on Demand" className="mb-2" />
          <Description
            text="Speed when you need it. Both colour and monochromatic documents print at impressive output speeds on various supported types of media, such as up to 26ppm for A4. Have documents ready in hand on time, as productivity is improved."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Cost & Resouce Saving Prints"
            className="mb-2"
          />
          <Description text="Up to 50% less paper waste is created while creating documents, thanks to automatic 2-sided printing, saving costs in the long run." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Single Function",
            "Print up to 26/27 ppm (A4/Letter)",
            "Print Resolution 600x2400 dpi",
            "Wired/wireless (2.4 GHz/5.0 GHz) Network",
            "2.7” TFT Color LCD Display",
            "250-sheet paper tray capacity",
            "1-sheet manual feed slot",
          ]}
        />
      );
    },
    related: ["hl-l5100dn", "mfc-l8340cdw", "hl-l2460dw"],
  },
  {
    id: "mfc-l8340cdw",
    model: "MFC L8340CDW",
    image: l8340,
    pricePerMonth: "8,000.00 / Month",
    description:
      'Vivid and precise color printing, come with 3.5" touch screen LCD',
    type: "Brother Laserjet",
    descriptions: () => {
      return (
        <>
          <Title
            variant="h1"
            text="Colour Solution for Professional Printing"
            className="mb-7"
          />
          <Description
            text="Designed for the modern office and its workflow, our printer is crafted with rich utillites and productivity functions that enhance daily operations."
            className="mb-7"
          />
          <Title variant="h3" text="True to Life" className="mb-2" />
          <Description
            text="Professional printouts that are vibrantly accurate. Utilising Brother’s leading LED technology, colours produced by the MFC-L8340CDW are crisp and sharp, with gradients being smooth and natural. Reduce the guesswork and excessive reprints as documents produced are as accurate as how you calibrate them on screen."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Meet High Volume Printing Needs"
            className="mb-2"
          />
          <Description
            text="Print so much more at a fraction of the cost for greater value overall. With Brother’s toners, the new MFC-L8340CDW offers incredibly efficient print usage rates that reduce the need for frequent replacements. Print costs are averaged out over a longer period of time as well, keeping Total Cost of Ownership (TCO) low."
            className="mb-6"
          />
          <Description
            text="* Approximate cartridge yield is declared in accordance with ISO/IEC 19798."
            className="mb-7"
          />
          <Title variant="h3" text="Fast Prints on Demand" className="mb-2" />
          <Description
            text="Speed when you need it. Both colour and monochromatic documents print at impressive output speeds on various supported types of media, such as up to 30ppm for A4. Have documents ready in hand on time, as productivity is improved."
            className="mb-7"
          />
          <Title
            variant="h3"
            text="Cost & Resouce Saving Prints"
            className="mb-2"
          />
          <Description text="Up to 50% less paper waste is created while creating documents, thanks to automatic 2-sided printing, saving costs in the long run." />
        </>
      );
    },
    specifications: () => {
      return (
        <List
          lists={[
            "Multi-Function Center 4-IN-1",
            "Print up to 30/31 ppm (A4/Letter)",
            "Print Resolution 600x2400 dpi",
            "Wired/wireless (2.4 GHz/5.0 GHz) Network",
            "3.5” TFT Color LCD Display",
            "50-sheet Automatic Document Feeder",
            "30-sheet Multi-Purpose Tray Capacity",
          ]}
        />
      );
    },
    related: ["hl-l5100dn", "hl-l3280cdw", "dcp-l2540dw"],
  },
];
