// Import
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const handleDownloadAll = (records) => {
  const doc = new jsPDF();

  records.forEach((record, index) => {
    const {
      patientName,
      age,
      gender,
      doctorName,
      diagnosis,
      vitals,
      labResults,
      prescriptions,
    } = record;

    let yPos = 20;

    // add new page for every record after the first
    if (index > 0) doc.addPage();

    // Title
    doc.setFontSize(16);
    doc.setTextColor(22, 160, 133);
    doc.text(`Medical Record #${index + 1}`, 14, yPos);
    yPos += 10;

    // Patient Info
    doc.setFontSize(12);
    doc.setTextColor(40, 40, 40);
    doc.text(`Patient Name: ${patientName || "N/A"}`, 14, yPos);
    yPos += 6;
    doc.text(`Age: ${age || "N/A"}`, 14, yPos);
    yPos += 6;
    doc.text(`Gender: ${gender || "N/A"}`, 14, yPos);
    yPos += 6;
    doc.text(`Doctor: ${doctorName || "N/A"}`, 14, yPos);
    yPos += 10;

    // Diagnosis
    doc.text("Diagnosis", 14, yPos);
    yPos += 6;
    doc.setFontSize(11);
    doc.text(diagnosis || "No diagnosis available", 14, yPos);
    yPos += 10;

    // Vitals
    if (vitals?.length > 0) {
      doc.setFontSize(12);
      doc.text("Vitals", 14, yPos);
      yPos += 6;

      const vitalsData = vitals.map((v, i) => [
        i + 1,
        v.type || "",
        v.value || "",
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["#", "Type", "Value"]],
        body: vitalsData,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [22, 160, 133] },
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }

    // Lab Results
    if (labResults?.length > 0) {
      doc.setFontSize(12);
      doc.text("Lab Results", 14, yPos);
      yPos += 6;

      const labData = labResults.map((lab, i) => [
        i + 1,
        lab.testName || "",
        lab.result || "",
        lab.normalRange || "",
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["#", "Test Name", "Result", "Normal Range"]],
        body: labData,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [22, 160, 133] },
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }

    // Prescriptions
    if (prescriptions?.length > 0) {
      doc.setFontSize(12);
      doc.text("Prescriptions", 14, yPos);
      yPos += 6;

      const prescriptionData = prescriptions.map((p, i) => [
        i + 1,
        p.medication || "",
        p.dosage || "",
        p.instructions || "",
      ]);
      autoTable(doc, {
        startY: yPos,
        head: [["#", "Medication", "Dosage", "Instructions"]],
        body: prescriptionData,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [22, 160, 133] },
      });
      yPos = doc.lastAutoTable.finalY + 10;
    }
  });

  doc.save("All_Medical_Records.pdf");
};
