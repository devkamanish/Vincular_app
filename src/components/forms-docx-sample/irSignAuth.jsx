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
  
  export const generateIrSignAuthDocument = async (formsData) => {

 

  console.log("Generating document with:", formsData.irSignatoryName);


    const {
        irSignatoryName,
    irSignatoryDesignation,
    irFirmName,
    irFirmAddress,
    } = formsData;
    
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Letterhead Instruction
              new Paragraph({
                children: [
                  new TextRun({
                    text: "(PRINT ON FACTORY LETTERHEAD)",
                    bold: true,
                    highlight : "yellow",
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
  
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Head Authorization Letter",
                    bold: true,
                    size: 28, 
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
              

              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Date:",
                    bold: true,
                    break : 1.5,

                  }),
                ],
                spacing: { after: 300 },
              }),
  
              
              new Paragraph({
                children: [new TextRun("To,")],
              }),
              new Paragraph({
                children: [
                  new TextRun(
                    {
                        text  :"The Director",
                        break : 1,
                    }
                  ),
                  new TextRun({
                    text : "Bureau of Indian Standards",
                    break : 1,
                  }),
                  new TextRun({
                    text :"(Central Mark Department-3)",
                    break :1,
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
                    text :"New Delhi - 110002, INDIA.",
                    break :1,
                  }),

               
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
                    text : irSignatoryName,
                    bold : true,
                  }),
                  new TextRun({
                    text :" to sign all the documents.",
                  })
                ],
                spacing: { after: 300 },
              }),
  
              // Body Content
              new Paragraph({
                children: [
                  new TextRun("I/We the undersigned, hereby authorize "),
                  new TextRun({
                    text: irSignatoryName,
                    bold: true,
                  }),
                  new TextRun(
                    ` to act on my/our behalf in all manners relating to `
                  ),
                  new TextRun({
                    text : " Bureau of Indian Standards (BIS) product Registration Scheme ",
                    bold : true,
                  }),
                  new TextRun({
                    text :" – Whereas Govt. Of India, Department of electronics and IT (DeitY) has issued the ",

                  }),
                  new TextRun({
                    text :"“Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2012”",
                    bold : true,
                  }),
                  new TextRun({
                    text :", including signing of all documents relating to these matters. Any and all acts carried out by "
                  }),
                  new TextRun({
                    text: irSignatoryName,
                    bold: true,
                  }),
                  new TextRun(
                    ` on my/our behalf, shall have the same effect as acts of my/our own.`
                  ),
                  new TextRun({
                    text :"This authorization is valid until further written notice from: ",
                    break : 1.5,

                  }),
                  new TextRun({
                    text: irFirmName,
                    bold: true,
                  }),
                ],
                spacing: { after: 300 },
              }),

              // Specimen Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Specimen Signature of Authority Holder(s):",

                  }),
                ],
                
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text :"Name of Authority Holder: ",
                    break :1.5,
                  }),
                  new TextRun({
                    text: irSignatoryName,
                    bold: true,
                  }),
                  new TextRun({
                    text : "Designation ",
                    break :1.5,
                  }),
                  new TextRun({
                    text: irSignatoryDesignation,
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
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "Mailing Address:",
                                bold: true,
                              }),
                            ],
                          }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                        shading: { fill: "FFFF00" }, 
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: irFirmAddress,
                                bold: true,
                              }),
                            ],
                          }),
                        ],
                        verticalAlign: VerticalAlign.CENTER,
                        shading: { fill: "FFFF00" }, 
                      }),
                    ],
                  }),
                ],
                width: { size: 100, type: "pct" },
                borders: {
                  top: { style: BorderStyle.SINGLE, size: 2 },
                  bottom: { style: BorderStyle.SINGLE, size: 2 },
                  left: { style: BorderStyle.SINGLE, size: 2 },
                  right: { style: BorderStyle.SINGLE, size: 2 },
                },
              }),
  

              new Paragraph({
                children: [
                  new TextRun("Sincerely,"),
                ],
                spacing: { before: 300 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text : "(Signature with seal)",
                    break : 1.5
                  }),
                  new TextRun({
                    text: "Individual's/Officer's Signature: ",
                    break: 1.5,
                  }),
                 
                  new TextRun({
                    text :"Name of Individual/Officer: ",
                    break : 1.5
                  }),
                  new TextRun({
                    text: irSignatoryName,
                    bold: true,
                  }),
                  new TextRun({
                    text :"Designation: ",
                    break : 1.5,
                  }),
                  new TextRun({
                    text :irSignatoryDesignation,
                    bold  :true,
                  })
                ],

              }),
            ],
          },
        ],
      });
  
      // Save the document
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `IR-Signatory-Authorization_${new Date().toISOString().split("T")[0]}.docx`);
      console.log("Document created successfully");
    } catch (error) {
      console.error("Error creating the document:", error);
    }
  };
  