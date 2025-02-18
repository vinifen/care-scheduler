import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";

export async function generatePDF(appointment: any) {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([800, 600]);
    const { height } = page.getSize();

    const data = [
      `ID: ${appointment.id}`,
      `Paciente: ${appointment.patient.name}`,
      `CPF: ${appointment.patient.cpf}`,
      `Idade: ${appointment.patient.age}`,
      `Endereço: ${appointment.address.street}, ${appointment.address.houseNumber}, ${appointment.address.city}`,
      `Estado: ${appointment.address.state}`,
      `País: ${appointment.address.country}`,
      `Motivo: ${appointment.medicalInformation.reason}`,
      `Descrição: ${appointment.medicalInformation.description}`,
      `Médico: ${appointment.medicalInformation.doctorName}`,
      `Data: ${appointment.schedule.date}`,
      `Hora: ${appointment.schedule.time}`,
      `Local: ${appointment.schedule.location}`,
    ];

    page.drawText('Care Scheduler', {
      x: 60,
      y: height - 50,  
      size: 18,
      color: rgb(0.95, 0.1, 0.1),
    });

    let y = height - 100; 
    data.forEach((text, index) => {
      page.drawText(text, {
        x: 60,
        y: y - index * 20,
        size: 14,
        color: rgb(0, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const pdfNumber = Math.floor(Math.random() * 123);
    fs.writeFileSync(`appointment-${appointment.id}-${appointment.patient.name}-${pdfNumber}.pdf`, pdfBytes);
    console.log("PDF gerado com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    return false;
  }
}
