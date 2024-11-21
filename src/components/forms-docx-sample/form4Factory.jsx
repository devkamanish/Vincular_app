import {
    Document,
    Packer,
    Paragraph,
    TextRun,
  } from "docx";
  import { saveAs } from "file-saver";
  
  export const generateForm4FactoryDocument = async (formsData) => {
    const {
      manufacturerSignatoryName,
      manufacturerSignatoryDesignation,
      manufacturerName,
       manufacturerAddress,
      irFirmName,
      
      irFirmAddress,
      
      manufacturerSignatoryEmail,
      
    } = formsData;
  
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Title and header
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Form - IV",
                    bold: true,
                    size: 24,
                  }),
                  new TextRun({
                    text: "\n(Refer clause (g) of sub-paragraph (1) of paragraph 3 of Scheme-II)\nNomination of Authorised Indian Representative\n(To be issued on company letter head, in original)",
                    italics: true,
                    break: 2,
                  }),
                ],
                alignment: "center",
              }),   
  
              // First paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: `1. I, `,
                  }),
                  new TextRun({
                    text: manufacturerSignatoryName,
                    bold: true,
                  }),
                  new TextRun({
                    text: `,${manufacturerSignatoryDesignation} `,
                    bold:true,
                  }),
                  new TextRun({
                    text: manufacturerName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` having its manufacturing unit at `,
                  }),
                  new TextRun({
                    text:  manufacturerAddress,
                    bold: true,
                  }),
                  new TextRun({
                    text: `, hereby declare that`,
                    break: 2,
                  }),
                ],
              }),
  
              // Option (a)
              new Paragraph({
                children: [
                  new TextRun({
                    text: `* (a) M/s `,
                  }),
                  new TextRun({
                    text: manufacturerName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` have a liaison office / subsidiary firm / branch office M/s `,
                    strike: true,
                  }),
                  new TextRun({
                    text: irFirmName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` located at `,
                  }),
                  new TextRun({
                    text: irFirmAddress,
                    bold: true,
                  }),
                  new TextRun({
                    text: ".",
                    break: 2,
                  }),
                  new TextRun({
                    text : "OR",
                    break :1,
                  })
                ],
              }),
  
              // Option (b) 
              new Paragraph({
                children: [
                  new TextRun({
                    text: `* (b) M/s `,
                  }),
                  new TextRun({
                    text: "........................(foreign applicant)",
                    bold: true,
                  }),
                  new TextRun({
                    text: " do not have a liaison office / subsidiary firm / branch office located in India, but Proprietor/Registered user/subsidary firm/laison office of the Brand/Trademark appearing on the article is located in India by the name and Title M/s ........................",
                  }),
                 
                  new TextRun({
                    text: " at ........................ ",
                  }),
                  new TextRun({
                    text: "(complete address of the brand owner)"
                    
                  }),
                  new TextRun({
                    text: ".", 
                    break: 2,
                  }),
                  new TextRun({
                    text : "OR",
                    break :1,
                  })
                ],
              }),
  
              // Option (c)
              new Paragraph({
                children: [
                  new TextRun({
                    text: "* (c) M/s ",
                  }),
                  new TextRun({
                    text: "........................ (foreign applicant)",
                    bold: true,
                  }),
                  new TextRun({
                    text: " does not have a liaison office/subsidiary firm/ branch office located in India and there is no Proprietor / Registered User/subsidiary firm/branch office/ liaison office of the Brand/Trademark appearing on the article, located in India. Therefore, we nominate  M/s ........................ the major importer/distributor/ entity having marketing tie-up with the brand owner and /or the manufacturer, as our authorised Indian representative.",
                  }),
                  
                
                
                ],
              }),
  
              // Second paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: "2. Accordingly, M/s ",
                  }),
                  new TextRun({
                    text: irFirmName,
                    bold: true,
                  }),
                  new TextRun({
                    text: " will act as our authorised representative, and will sign Affidavit cum undertaking ",
                    
                  }),
                  new TextRun ({
                    text : "(Form–III A / Form–III B) ",
                    bold : true,
                  })
                ],
              }),
  
              // Signature section
              new Paragraph({
                children: [
                    new TextRun ({
                        text : "* Strike off whichever is not applicable.",
                        break: 2,
                    }),
                   new TextRun({
                    text: "Yours faithfully,\n\n",
                    break : 1,
                  }),
                ],
              }),
  
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Details of Authorized Indian Representative:\n",
                    break: 1,
                  }),
                  new TextRun({
                    text: "Signature of applicant: ",
                  }),
                
                  new TextRun({
                    text: "\nAddress: ",
                  }),
                  new TextRun({
                    text: irFirmAddress,
                    bold: true,
                  }),
                  new TextRun({
                    text: "\nPhone: ",
                  }),
                  new TextRun({
                    // text: authorizedRepPhone,
                    bold: true,
                  }),
                  new TextRun({
                    text: "\nEmail: ",
                  }),
                  new TextRun({
                    text: manufacturerSignatoryEmail,
                    bold: true,
                  }),
                ],
              }),
  
              // Application ID
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Application ID/License No.: `,
                    highlight: "yellow",
                  }),
                  new TextRun({
                    text : "Date:"
                  }),
                ],
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Form_IV_Factory${new Date().toISOString().split('T')[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  