import { brotherInkjetPrinters } from "./brotherInkjetPrinters";
import { brotherLaserPrinters } from "./brotherLaserPrinters";
import { epsonInkjetPrinters } from "./epsonInkjetPrinters";

export const printers = [
  ...brotherInkjetPrinters,
  ...brotherLaserPrinters,
  ...epsonInkjetPrinters,
];
