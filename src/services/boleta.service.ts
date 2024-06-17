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
    // Construct the absolute path to the template file
    const templatePath = path.join(
      __dirname,
      "..",
      "templates",
      `boleta${ublVersion}.xml`
    );

    // Read the template file content
    const template = fs.readFileSync(templatePath, "utf8");

    // Render the template with the provided data
    const rendered = Mustache.render(template, data);

    return rendered;
  };
}
