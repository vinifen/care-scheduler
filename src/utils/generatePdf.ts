import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";

export async function generatePDF(data: string[]) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();

  let y = height - 50; // Posição inicial

  data.forEach((text, index) => {
    page.drawText(text, {
      x: 50,
      y: y - index * 20, // Espaçamento entre linhas
      size: 14,
      color: rgb(0, 0, 0),
    });
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("output.pdf", pdfBytes);
}

// Exemplo de uso
const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
generatePDF(items);
