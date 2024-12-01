
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    AlignmentType,
    WidthType,
  } from "docx";
  import { saveAs } from "file-saver";
  
  export const generateForm6Document = async (formsData) => {
    const {
      
      
        manufacturerName,
        manufacturerAddress,
        registrationNoR,
        applyingPeriod,
        quantityMarkWithStandardMark,
         startDate,
        endDate,
        manufacturerSignatoryName,
        manufacturerSignatoryDesignation,
        irSignatoryName,
        irSignatoryDesignation,
        irFirmName,
        irFirmAddress,
        irFirmPhoneNo,
        irFirmEmail,
        productName,
        isStandard,
        modelNo,
        brand,




    } = formsData;
  

    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Header with Highlighted Text
              new Paragraph({
                children: [
                  new TextRun({
                    text: "To be printed on Manufacturer Letter Head",
                    bold: true,
                    highlight: "yellow",
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
  
              // Form VI Title
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Form - VI",
                    bold: true,
                    break: 1,
                  }),
                  new TextRun({
                    text: "[Refer sub-paragraph (1) of paragraph 9 of Scheme II]\n",
                    break: 1,
                    bold : true,
                  }),
                  new TextRun({
                    text : "Application for Renewal of Licence",
                    bold : true,
                    break : 1,
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
  
              // Address Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "The Director General",
                    break: 1,
                  }),
                  new TextRun({
                    text : "Bureau of Indian Standards",
                    break : 1,
                
                  }),
                  new TextRun({
                    text : "New Delhi",
                    break : 1,
                  })
                ],
                spacing: { after: 300 },
              }),
  
              // Content Paragraphs
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Dear Sir ",
                    break: 1,
                  }),
                  new TextRun({
                    text : "I/We ",
                    break : 1,
                  }),
                  new TextRun({
                    text : manufacturerName,
                    bold : true,
                  }),
                  new TextRun({
                    text :" having office at ",
                  }),
                  new TextRun({
                    text : manufacturerAddress,
                    bold : true,
                  }),
                  new TextRun({
                    text : " and factory at ",
                  }),
                  new TextRun({
                    text : manufacturerAddress,
                    bold : true,
                  })
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "1. We are applying for renewal for a period of ",
                    break: 1,
                  }),
                  new TextRun({
                    text : applyingPeriod,
                    bold : true,
                  }),
                  new TextRun({
                    text :" years, of the licence number",
                  }),
                  new TextRun({
                    text : `R-${registrationNoR} `,
                    bold : true,
                  }),
                  new TextRun({
                    text : "granted to us under clause (b) of sub-section (2) of section 13 of the Act for use of Standard Mark on articles being manufactured by us conforming to this Indian Standard."
                  })
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "2. We shall abide by the provisions of the Act, rules and regulations framed thereunder as amended from time to time and all the terms and conditions continuing with the licence.",
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "3. The details and quantity of article covered under the licence are given overleaf, duly self-attested by the Chief Executive Officer/Authorised person of the manufacturing unit.",
                  }),
                ],
                spacing: { after: 200 },
              }),
  
              // Payment Details Table
              new Paragraph({
                children: [
                  new TextRun({
                    text: "4. Payment Details:",
                    
                    break: 1,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Table({
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph({ children: [new TextRun("Amount in Rs")] })],
                        shading: { fill: "D9D9D9" },
                      }),
                      new TableCell({
                        children: [new Paragraph({ children: [new TextRun("Payment Gateway receipt number")] })],
                        shading: { fill: "D9D9D9" },
                      }),
                      new TableCell({
                        children: [new Paragraph({ children: [new TextRun("Date of payment receipt")] })],
                        shading: { fill: "D9D9D9" },
                      }),
                      new TableCell({
                        children: [new Paragraph({ children: [new TextRun("Remarks")] })],
                        shading: { fill: "D9D9D9" },
                      }),
                    ],
                  }),
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [new Paragraph("To be filled")],
                      }),
                      new TableCell({
                        children: [new Paragraph("To be filled")],
                      }),
                      new TableCell({
                        children: [new Paragraph("To be filled")],
                      }),
                      new TableCell({
                        children: [new Paragraph("To be filled")],
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "5. Application date _____ day of ____________ two thousand twenty-four.",
                    break: 1,
                  }),
                ],
                spacing: { after: 300 },
              }),
  
              // Seal and Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Seal of office:",
                    break: 1,
                  }),
                  new TextRun({
                    text : "Signature (CEO/Authorised person of manufacturing unit):",
                    break : 2,
                  }),
                  new TextRun({
                    text: "Name: ",
                    
                    break: 1,
                  }),
                  new TextRun({
                    text : manufacturerSignatoryName,
                    bold : true,
                  }),
                  
                  new TextRun({
                    text: "Designation: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : manufacturerSignatoryDesignation,
                    bold : true,
                  })
                ],
                spacing: { after: 300 },
              }),
  
              // Counter Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Counter signed by the Indian Representative:",
                    break: 1,
                  }),
                  new TextRun({
                    text: "Name of Signatory: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irSignatoryName,
                    bold : true,
                  }),
                  
                  new TextRun({
                    text: "Designation: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irSignatoryDesignation,
                    bold : true,
                  }),
                  new TextRun({
                    text: "Firm's Name: ",
                    break: 1,
                  }),
                  new TextRun({
                    text :irFirmName,
                    bold : true,
                  }),
                
                  new TextRun({
                    text: "Address: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmAddress,
                    bold : true,
                  }),
                 
                  new TextRun({
                    text: "Email: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmEmail,
                    bold : true,
                  }),
                 
                  new TextRun({
                    text: "Mobile No.: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmPhoneNo,
                    bold : true,
                  })
                ],
              }),
  
              // Note
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Note: ",
                    bold : true,
                    
                  }),
                  new TextRun({
                    text : "Renewal application shall be submitted before three months of the expiry of the licence."
                  })
                ],
                alignment: AlignmentType.LEFT,
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "To be printed on Manufacturer Letter Head",
                    bold: true,
                    highlight: "yellow",
                    break : 3,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
  
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Production Report",
                    bold: true,
                    break: 1,
                  }),
                  new TextRun({
                    text: "(Attachment to Form VI)",
                    bold : true,
                    break: 1,
                  }),
                 new TextRun({
                    text : `(Reported for the period * ${startDate} to ${endDate})`,
                    bold : true,
                    break : 1,
                 })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 300 },
              }),
  
              // Instructions Paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: "[*i) from date of grant of licence to three months before validity date (for first renewal);",
                  }),
                  new TextRun({
                    text: " ii) for the period three months before the last validity date to three months before the current validity ",
                    break: 1,
                  }),
                  new TextRun({
                    text : "date (for subsequent renewals)]",
                    break : 1,

                  }),
                  new TextRun({
                    text  :"1. Name of Licensee: ",
                    break :2,
                  }),
                  new TextRun({
                    text :manufacturerName,
                    bold : true,
                  }),
                  new TextRun({
                    text : "2. Licence No. : ",
                    break: 1.5,
                
                  }),
                  new TextRun({
                    text : registrationNoR,
                    bold  :true,

                  }),
                  new TextRun({
                    text : "3. Name of Article (Product): ",
                    break : 1.5,
                  }),
                  new TextRun({
                    text : productName,
                    bold : true
                  }),
                  new TextRun({
                    text : "4. IS No. : ",
                    break :1.5,
                  }),
                  new TextRun({
                    text : isStandard,
                    bold : true,
                  }),
                  new  TextRun({
                    text : "5. Model Number and Brand Name of the article under scope of the licence: ",
                    break : 1.5,

                  }),
                  new TextRun({
                    text : modelNo,
                    bold : true,
                  }),
                  new TextRun({
                    text : " /Brand : ",

                  }),
                  new TextRun({
                    text : brand,
                    bold : true,
                  }),
                  new TextRun({
                    text : "6. Quantity marked (in numbers) with Standard Mark: ",
                    break : 1.5,
                  }),
                  new TextRun({
                    text : quantityMarkWithStandardMark,
                    bold : true,

                  }),
                  new TextRun({
                    text : "7. Names and addresses of major distributors/ dealers/purchasers of the article: ",
                    break : 1.5,

                  }),
                 

                 ]
              }),

              
  
              // Declaration Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Declaration",
                    bold : true,
                    break: 1,
                  }),
                  new TextRun({
                    text: "I/We further declare",
                    break: 1.5,
                  }),
                  new TextRun({
                    text : "(i) That the information given in this declaration are true to the best of my knowledge and belief.",
                    break: 1.5,
                  }),
                  new TextRun({
                    text : "(ii) If any misleading information has been found in this declaration, the application for renewal of licence shall be liable for rejection which may lead to expiry/cancellation of licence.",
                    break : 1,
                  }),
                  new TextRun({
                    text : "(iii) If the renewal of licence is granted on the basis of information given above, which is found to be incorrect later, the licence shall be liable for cancellation.",
                    break : 1,
                  })
                ],
                spacing: { after: 300 },
              }),
  
            
  
              // Seal and Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Seal of office:",
                        
                    break: 1,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Signature (CEO/Authorised person of manufacturing unit):",
                  }),
                  new TextRun({
                    text: "Name: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : manufacturerSignatoryName,
                    bold : true,
                  }),
                  
                  new TextRun({
                    text: "Designation: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : manufacturerSignatoryDesignation,
                    bold : true,
                  })
                ],
                spacing: { after: 300 },
              }),
  
              // Counter Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Counter signed by the Indian Representative:",
                    break: 1,
                  }),
                  new TextRun({
                    text: "Name of Signatory: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irSignatoryName,
                    bold : true,
                  }),
                 
                  new TextRun({
                    text: "Designation: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irSignatoryDesignation,
                    bold : true,
                  }),
                  new TextRun({
                    text: "Firm's Name: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmName,
                    bold  : true,

                  }),
                 
                  new TextRun({
                    text: "Address: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmAddress,
                    bold : true,
                  }),
                  new TextRun({
                    text: "Email: ",
                    break: 1,
                  }),
                  new TextRun({
                    text : irFirmEmail,
                    bold : true,
                  }),
                  new TextRun({
                    text: "Mobile No.: ",
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
      saveAs(blob, `FormVI_${new Date().toISOString().split("T")[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  


