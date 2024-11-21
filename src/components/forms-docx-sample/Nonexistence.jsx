import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    Table,
    TableRow,
    TableCell,
    WidthType,
    BorderStyle,
  } from "docx";
  import { saveAs } from "file-saver";
  
  export const generateNonexistenceDocument = async (data) => {
    const {
      crsNo,
      manufacturerName,
      brand,
      productName,
      brandOwnerSigName,
      brandOwnerSigDesignation,
      brandOwnerFirmAddress,
      irFirmName,
      companyLocation,
    } = data;
  
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Header Section
              new Paragraph({
                children: [
                  new TextRun({
                    text : "To,"
                  }),
                  new TextRun({
                    text : "The Bureau of Indian Standards",
                    break : 2,
                  }),
                  new TextRun({
                    text : "(Central Mark Department-3)",
                    break : 1,
                  }),
                  new TextRun({
                    text : "Room No. 557, 5th Floor,",
                    break : 1,
                  }),
                  new TextRun({
                    text : "Manakalaya Building,",
                    break : 1,
                  }),
                  new TextRun({
                    text : "9, Bahadur Shah Zafar Marg,",
                    break : 1,
                  }),
                  new TextRun({
                    text : "New Delhi-110002 (India)",
                    break : 1,
                  }),
                  
                ],
              }),
  
              // Subject Section
              new Paragraph({
                children: [
                  new TextRun({ text: "Sub: Declaration from Brand owner about non-existence of brand owner or proprietor/Registered user of brand in India", bold: true,break : 2, }),
                ],
              }),
              
              // Greeting
              new Paragraph({
                children: [
                    new TextRun({
                        text : "Dear Sir/Madam,",
                        break : 2,
                    })
                ],
              }),
  
              // Reference Text
              new Paragraph({
                children: [
                  new TextRun({
                    text : "With reference to the below mentioned detail,",
                    break : 2,
                  }),
                ],
                spacing: { after: 200 },
              }),
  
              // Table Section
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph({ text: "CRS No.", bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: crsNo || "", bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph({ text: "Applicant", bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: manufacturerName, bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph({ text: "Brand", bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: brand, bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph({ text: "Product", bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                      new TableCell({
                        children: [new Paragraph({ text: productName, bold: true })],
                        borders: { top: BorderStyle.SINGLE, bottom: BorderStyle.SINGLE, left: BorderStyle.SINGLE, right: BorderStyle.SINGLE },
                      }),
                    ],
                  }),
                ],
              }),
  
              // Declaration Text
              new Paragraph({
                children: [
                  new TextRun(`\nI `),
                  new TextRun({ text: brandOwnerSigName, bold: true }),
                  new TextRun(`, `),
                  new TextRun({ text: brandOwnerSigDesignation, bold: true }),
                  new TextRun(` hereby declare that owner of brand: `),
                  new TextRun({ text: brand, bold: true }),
                  new TextRun(` or proprietor/registered user of the brand: `),
                  new TextRun({ text: brand, bold: true }),
                  new TextRun(` appearing on the article is not located in India. We are therefore in favour of factory’s authorization to M/s `),
                  new TextRun({ text: `${irFirmName}`, bold: true }),
                  new TextRun(`, acting as Indian Representative for our application submitted at BIS.`),
                ],
                spacing: { before: 400, after: 400 },
              }),
  
              // Closing Section
              new Paragraph({
                children: [new TextRun("Thanks & Regards,")],
                spacing: { before: 400, after: 400 },
              }),
              new Paragraph({
                children: [new TextRun({ text: `Name: ${brandOwnerSigName}`, bold: true })],
                spacing: { after: 100 },
              }),
              new Paragraph({
                children: [new TextRun({ text: `Designation: ${brandOwnerSigDesignation}`, bold: true })],
                spacing: { after: 100 },
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: `Address: ${brandOwnerFirmAddress}`, bold: true }),   
                ],
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Nonexistence_Document_${new Date().toISOString().split("T")[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  

  