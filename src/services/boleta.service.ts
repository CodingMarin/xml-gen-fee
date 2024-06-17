import * as Mustache from "mustache";
import * as fs from "fs";
import * as path from "path";

export default class BoletaService {
  /**
   * Generates invoice
   * @param data
   * @returns invoice
   */
  static render = (ublVersion: String, data: JSON) => {
    const templatePath = path.join(
      __dirname,
      "templates",
      `boleta${ublVersion}.xml`
    );
    const template = fs.readFileSync(templatePath, "utf8");

    const rendered = Mustache.render(template, data);

    return rendered;
  };
}
