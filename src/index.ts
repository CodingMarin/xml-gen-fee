import { BoletaService } from "./services";

export function generateInvoice(ublVersion: string, document: JSON): String {
  const render = BoletaService.render(ublVersion, document);

  return render;
}
