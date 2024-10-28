

    import {
        Document,
        Packer,
        Paragraph,
        TextRun,
        Table,
        TableRow,
        TableCell,
  } from "docx";
  
  import { saveAs } from "file-saver";
  
  export const generateForm3Document = async (formsData) => {
    const {
        manufacturerName,
        manufacturerAddress,
        manufacturerSignatoryAge,
        manufacturerSignatoryName,

    } = formsData;
  
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              
              new Paragraph({

                children: [
                  new TextRun({
                    text: "Form-III C",
                    bold: true,
                    size: 24,
                    break: 1,
                  }),
                  new TextRun({
                    text: "Model affidavit cum undertaking",
                    bold: true,
                    break: 1,
                  }),
                  new TextRun({
                    text: "(To be furnished by Manufacturer located in India, before Grant of Licence)",
                    bold: true,
                    break: 1,
                  }),
                  new TextRun({
                    text: "(On Rs 100/- non-judicial stamp paper, duly notarised)",
                    bold: true,
                    break: 1,
                  }),
                ],
                alignment: "center",
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I, ${manufacturerSignatoryName}, aged about ${manufacturerSignatoryAge} years, by occupation Director of M/s ${manufacturerName}, having its Registered Office/Head Office at ${manufacturerAddress} and manufacturing unit located at ${manufacturerAddress}, do hereby solemnly affirm and declare as under:`,
                    break: 3,
                  }),
                ],
              }),
   
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "1. That I have been duly authorised to give this affidavit cum undertaking (authorisation appended herewith) for Application ID/licence No.: ",
                    break:2,
                  }),
                  
                  new TextRun({
                    text: "__________",
                    highlight: "yellow",
                    
                  }),
                ],
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "2. That M/s ",
                    break: 2,
                  }),
                  new TextRun({
                    text: `${manufacturerName}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: " does hereby undertake to meet all liabilities and obligations with respect to the sub-section (6) and (7) of section 18 and section 31 of Act, for the purpose of all licence granted / to be granted by BIS. M/s ",
                  }),
                  new TextRun({
                    text: `${manufacturerName}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: " further undertakes that this undertaking shall not be revoked during the operation of any of the Registrations without prior consent of the Bureau.",
                  }),
                ],
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "3. That without prejudice to the generality of the foregoing declaration, M/s ",
                    break: 2,
                  }),
                  new TextRun({
                    text: `${ manufacturerName}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: " accepts and undertakes to be responsible for compliance of all terms and conditions of the Registrations and to be liable to meet all outstanding financial dues to BIS that may arise at any stage in connection with any of the Registrations.",
                  }),
                ],
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "4. That M/s ",
                    break: 2,
                  }),
                  new TextRun({
                    text: `${ manufacturerName}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: " accepts and undertakes full liability in case of violation of any provision of the Act, rules and regulations framed thereunder, arising out of any act or omission.",
                  }),
                ],
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "5. That I declare that M/s ",
                    break: 2,
                  }),
                  new TextRun({
                    text: `${manufacturerName}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: " has no commercial or business relationship with any laboratory affecting the interest of BIS and that it will not engage in any activity that is in conflict with the interest of BIS in general and the Registration Scheme in particular. I fully understand that any violation of this may lead to cancellation of the Registrations, apart from other actions as per law.",
                  }),
                ],
              }),
  
              new Paragraph({
                children: [
                  new TextRun({
                    text: "6. That M/s ",
                    break: 2,
                  }),
                  new TextRun({
                    text: `${manufacturerName}`,
                    bold: true,
                  }),
                  new TextRun({
                    text: " as well as the undersigned i.e. deponent, undertake to fully indemnify BIS from any loss arising out of any of the Registrations granted / to be granted, jointly and severally.",
                  }),
                ],
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: `In witness whereof, I do hereby sign and execute this affidavit cum undertaking on this the ......... day of .........., 20...`,
                    break: 2,
                  }),
                ],
              }),
              
              new Paragraph({
                children:[
                  new TextRun({
                    text: "Signed, sealed and delivered by the abovenamed.",
                    break: 3,
                  })  
                ]
             
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Signed, sealed and delivered by the above named `,
                    break: 4,
                    bold : true,
                  }),
                  new TextRun({
                    text: `${manufacturerSignatoryName}`,
                    bold: true,
                    break :2,
                  }),
                  new TextRun({
                    text: "Director",
                    break:1,
                  }),
                  new TextRun({
                    text: "(Signature with seal and stamp)",
                    bold : true,
                    break:2,
                    alignment: "center",
                  }),
                  new TextRun({
                    text: "(Signature, stamp and seal of Notary Public)",
                    bold : true,
                    break :1,
                   
                    alignment: "center",
                  }),
                  new TextRun({
                    text: "** Strike off whichever is not applicable.",
                    bold : true,
                    break:1,
                    alignment: "center",
                  }),
                ],
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Form-III_C_${new Date().toISOString().split('T')[0]}.docx`);
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  
