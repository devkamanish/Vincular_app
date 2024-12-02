import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    AlignmentType,
    VerticalAlign,
    BorderStyle,
  } from "docx";
  import { saveAs } from "file-saver";
  
  export const generateFactoryAuthDocument = async (formsData) => {
    const {
        manufacturerName,manufacturerAddress,manufacturerSignatoryName,manufacturerSignatoryDesignation,manufacturerHeadSig,manufacturerHeadSigDesignation,
    } = formsData;
    
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Letterhead
              new Paragraph({
                children: [
                  new TextRun({
                    text: "(PRINT ON FACTORY LETTERHEAD)",
                    bold: true,
                    highlight: "yellow",
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
  
              // Heading
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Head Authorization Letter",
                    bold: true,
                    size: 28, // 14pt
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
              }),
  
              // Date Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Date: _____________",
                    bold: true,
                    break : 2,
                  }),
                ],
                spacing: { after: 300 },
              }),
  
              // Address
              new Paragraph({
                children: [
                  new TextRun("To,"),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun("The Director"),
                  new TextRun({
                    text: "\nBureau of Indian Standards",
                    break : 1,
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
                    text : "Manakalaya Building, ",
                    break : 1,
                  }),
                  new TextRun({
                    text : "9, Bahadur Shah Zafar Marg",
                    break : 1,
                  }),
                  new TextRun({
                    text : "New Delhi - 110002, INDIA.",
                    break : 1,
                  })
                 
                ],
                spacing: { after: 300 },
              }),
  
              // Subject
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Subject: ",
                    
                  }),
                  new TextRun({
                    text : "Authorization for ",
                    
                  }),
                  new TextRun({
                    text : manufacturerSignatoryName,
                    bold : true,
                  }),
                  new TextRun({
                    text : " to sign all the documents.",
                    
                  })
                ],
                spacing: { after: 300 },
              }),
  
              // Body
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I/We the undersigned, hereby authorize `,
                  }),
                  new TextRun({
                    text: manufacturerSignatoryName,
                    bold: true,
                  }),
                  new TextRun(
                    ` to act on my/our behalf in all manners relating to `
                  ),
                  new TextRun({
                    text : "Bureau of Indian Standards (BIS) product Registration Scheme ",
                    bold : true,
                  }),
                  new TextRun({
                    text : "- Whereas Govt. Of India, Department of electronics and IT (DeitY) has issued the "
                  }),
                  new TextRun({
                    text : "“Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2012”",
                    bold : true,
                  }),
                  new TextRun({
                    text :", including signing of all documents relating to these matters. Any and all acts carried out by "
                  }),
                  new TextRun({
                    text : manufacturerSignatoryName,
                    bold : true,
                  }),
                    new TextRun({
                        text :" on my/our behalf, shall have the same effect as acts of my/our own."
                    
                    }),

               
                  new TextRun(
                    {text : "This authorization is valid until further written notice from: ",
                    break : 1.5,
                  }

                  ),
                  new TextRun({
                    text: manufacturerName ,
                    bold: true,
                  }),
                ],
                spacing: { after: 300 },
              }),
  
              // Signature Block
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Specimen Signature of Authority Holder(s):",
                    
                    break: 1,
                  }),
                  new TextRun({
                    text: `Name of Authority Holder: `,
                    break: 1.5,
                  }),
                  new TextRun({
                    text: manufacturerSignatoryName ,
                    bold: true,
                  }),
                  new TextRun({
                    text: `Designation: `,
                    break: 1.5,
                  }),
                  new TextRun({
                    text: manufacturerSignatoryDesignation ,
                    bold: true,
                  }),
                ],
                spacing: { after: 300 },
              }),
  
              // Table for Mailing Address
              new Table({
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("Mailing")],
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
                        children: [new Paragraph(manufacturerName)],
                        bold : true
                      
                      }),
                      new TableCell({
                        children: [new Paragraph(manufacturerAddress)],
                        bold : true,
                      }),
                    ],
                  }),
                ],
                width: { size: 100, type: "pct" },
              }),
              // Sincerely Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Sincerely,",
                    break: 2,
                  }),
                  new TextRun({
                    text: "(Signature with seal)",
                    break: 2,
                  }),
                  new TextRun({
                    text: `Individual's/Officer's Signature:`,
                    break: 1.5,
                  }),
                  new TextRun({
                    text : "Name of Individual/Officer: ",
                    break : 1.5,
                  }),

                  new TextRun({
                    text: manufacturerHeadSig ,
                    bold: true,
                    
                  }),
                  new TextRun({
                    text: `Designation: `,
                    break: 1.5,
                  }),
                  new TextRun({
                    text: manufacturerHeadSigDesignation ,
                    bold: true,
                  }),
                ],
                spacing: { after: 300 },
              }),
            ],
          },
        ],
      });
  
      // Generate and save the document
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Factory-Signatory-Authorization_${new Date().toISOString().split("T")[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  



  