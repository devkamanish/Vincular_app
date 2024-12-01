import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    AlignmentType,
  } from "docx";
  
  import { saveAs } from "file-saver";
  
  export const generateAnnexure1Document = async (formsData, letterhead) => {
   
    const {
        manufacturerSignatoryName,
        manufacturerSignatoryDesignation,
        irSignatoryName,
        irSignatoryDesignation,
        irFirmName,
        irFirmAddress,
        irFirmPhoneNo,
        irFirmEmail

    } = formsData;
  
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Header
              new Paragraph({
                children: [
                  new TextRun({
                    text: "To be printed on Manufacturer Letter Head",
                    bold: true,
                    highlight: "yellow",
                  }),
                ],
                alignment: "center",
                spacing: {
                  after: 300,
                },
              }),
  
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Annexure-1",
                    bold: true,
                    size: 24,
                    break: 1,
                  }),
                ],
                alignment: "center",
              }),
  
              // Distributors List Table
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Distributors List:",
                    bold: true,
                    break: 1,
                  }),
                ],
                spacing: {
                  after: 200,
                },
              }),
              new Table({
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("Name of distributors/dealers/purchasers")],
                        shading: { fill: "FFFF00" },
                        bold : true,
                      }),
                      new TableCell({
                        children: [new Paragraph("Address")],
                        shading: { fill: "FFFF00" },
                        bold : true,
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("to be filled")],
                      }),
                      new TableCell({
                        children: [new Paragraph("to be filled")],
                      }),
                    ],
                  }),
                ],
                width: { size: 100, type: "pct" },
              }),
  
              // Signature Block for CEO
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Signature (CEO/Authorised person of manufacturing unit):",
                    break: 1,
                  }),
                  new TextRun({
                    text: `Name: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : manufacturerSignatoryName,
                    bold : true,
                    
                  }),
                  new TextRun({
                    text: `Designation: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : manufacturerSignatoryDesignation,
                    bold : true,

                  })
                ],
                spacing: {
                  after: 200,
                },
              }),
              
              // Counter Signatory Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Counter signed by the Indian Representative:",
                    
                    break: 1,
                  }),
                  new TextRun({
                    text: `Name of Signatory: `,
                    
                    break: 2,
                  }),
                  new TextRun({
                    text :irSignatoryName,
                    bold : true,
                  }),
                  new TextRun({
                    text: `Designation: ${irSignatoryDesignation}`,
                    break: 1,
                  }),
                  new TextRun({
                    text : irSignatoryDesignation,
                    bold : true,
                  }),
                  new TextRun({
                    text: `Firm's Name: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmName,
                    bold : true,
                  }),
                  new TextRun({
                    text: `Address: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmAddress,
                    bold : true,
                  }),
                  new TextRun({
                    text: `Email: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmEmail,
                    bold : true,
                  }),
                  new TextRun({
                    text: `Mobile No.: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmPhoneNo,
                    bold : true,
                  })
                ],
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Annexure-1_${new Date().toISOString().split("T")[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  