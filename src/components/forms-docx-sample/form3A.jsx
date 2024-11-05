import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
  } from "docx";
  import { saveAs } from "file-saver";
  
  export const generateForm3ADocument = async (formsData) => {
    const {
        irSignatoryName,
      irSignatoryAge,
      irFirmName,
      irSignatoryDesignation,
      manufacturerName,
      irFirmAddress,
      manufacturerAddress
    } = formsData;
  
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Header Title
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Form – III A",
                    bold: true,
                    size: 24,
                  }),
                  new TextRun({
                    text: "\n(Refer clause (f) of sub-paragraph (1) of paragraph 3 of Scheme II)\n\n",
                    break: 2,
                  }),
                  new TextRun({
                    text:"Model Affidavit Cum Undertaking (To be furnished by",
                      break :2,

                  }),
                  new TextRun({
                    text : " Manufacturer’s Branch Office/Liaison Office located in India, ",
                    break :1,
                  }),
                  new TextRun({
                    text : "before Grant of Licence)",
                    break :1
                  }),

                  new TextRun({
                    text: "(On Rs 100/- non-judicial stamp paper, duly notarised)",
                    break: 2,
                  }),
                ],
                alignment: "center",
              }),
  
              // Declaration Paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I, `,
                    break : 3,
                  }),
                  new TextRun({
                    text: irSignatoryName,
                    bold: true,
                  }),
                  new TextRun({
                    text: `, aged about `,
                  }),
                  new TextRun({
                    text: irSignatoryAge,
                    bold: true,
                  }),
                  new TextRun({
                    text: " years, by occupation ",
                  }),
                  new TextRun({
                    text: irSignatoryDesignation,
                    bold: true,
                  }),
                  new TextRun({
                    text: " of M/s ",
                  }),
                  new TextRun({
                    text: irFirmName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ", having its Registered Office/Head Office at ",
                  }),
                  new TextRun({
                    text: irFirmAddress,
                    bold: true,
                  }),
                  new TextRun({
                    text: ", do hereby solemnly affirm and declare as under:",
                  }),
                ],
                // spacing: { before: 400, after: 400 },
              }),
  
              // Clause 1
              new Paragraph({
                children: [
                  new TextRun({
                    text: "1. That M/s ",
                    break :2,
                  }),
                  new TextRun({
                    text: irFirmName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` has been set up in India by M/s `,
                  }),
                  new TextRun ({
                    text : manufacturerName,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " having its factory/manufacturing address ",
                  }),
                  new TextRun ({
                    text : manufacturerAddress,
                    bold : true,
                  }),
                  new TextRun ({
                    text : "for the purpose of grant of licence applied under Application ID/licence No.: ",
                  }),

                  new TextRun({
                    text: "__________",
                    bold: true,
                    highlight: "yellow",
                  }),
                  new TextRun({
                    text: " and compliance to sub-section (6) and (7) of section 18 and section 31 of the Act.",
                  }),
                ],
              }),
  
              // Clause 2
              new Paragraph({
                children: [
                  new TextRun({
                    text: "2. That I have been duly authorised to give this affidavit cum undertaking (authorisation appended herewith).",
                    break: 2,
                  }),
                ],
              }),
  
              // Clause 3
              new Paragraph({
                children: [
                  new TextRun({
                    text:
                      "3. That ",
                    break: 2,
                  }),
                  new TextRun({
                    text : `M/s ${irFirmName}`,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " does hereby undertake to meet all liabilities and obligations with respect to the BIS Act, 2016, and the rules and regulations framed there under, on behalf of M/s "
                  }),
                  new TextRun ({
                    text : manufacturerName,
                    bold : true,
                  }),
                  new TextRun({
                    text : " for the purpose of all licence granted / to be granted by BIS. ",
                  }),
                  new TextRun ({
                    text : `M/s ${irFirmName}`,
                    bold : true,
                  }),
                  new TextRun({
                    text :" further undertakes that this undertaking shall not be revoked during the operation of any of the licence without prior consent of the Bureau. "
                  })
                ],
              }),
  
              // Clause 4
              new Paragraph({
                children: [
                  new TextRun({
                    text:
                      "4. That without prejudice to the generality of the foregoing declaration, ",
                    break: 2,
                  }),
                  new TextRun({
                    text :`M/s ${irFirmName}`,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " accepts and undertakes to be responsible for compliance of all terms and conditions of the licence and to be liable to meet all outstanding financial dues to BIS that may arise at any stage in connection with any of the licence.",
                  })
                ],
              }),
  
              // Clause 5
              new Paragraph({
                children: [
                  new TextRun({
                    text:"5. That ",
                    break: 2
                  }),
                  new TextRun ({
                    text : `M/s ${irFirmName}`,
                    bold : true,
                  }),
                  new TextRun({
                    text : " accepts and undertakes full liability in case of violation of any provision of the Act, rules and regulations framed thereunder, arising out of any act or omission on the part of the foreign applicant. "
                  })
                ],
              }),
  
              // Clause 6
              new Paragraph({
                children: [
                  new TextRun({
                    text:
                      "6. That I declare that ",
                       break: 2,
                  }),
                  new TextRun ({
                    text : `M/s ${irFirmName}`,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " has no commercial or business relationship with any laboratory affecting the interest of BIS and that it will not engage in any activity that is in conflict with the interest of BIS in general and I fully understand that any violation of this may lead to cancellation of the licences, apart from other actions as per law. "
                  })
                ],
              }),
  
              // Clause 7
              new Paragraph({
                children: [
                  new TextRun({
                    text:
                      "7. That ",
                    break: 2,
                  }),
                  new TextRun ({
                    text : `M/s ${irFirmName}`,
                    bold : true,
                  }),
                  new TextRun({
                    text : " as well as the undersigned i.e. deponent, undertake to fully indemnify BIS from any loss arising out of any of the licences granted / to be granted, jointly and severally, on behalf of the foreign applicant. "
                  })
                ],
              }),
  
              // Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "In witness whereof, I do hereby sign and execute this affidavit cum undertaking on this the ",
                    break: 3,
                  }),
                  new TextRun({
                    text : `........day of ..........., 20....`,
                    highlight: "yellow"
                  })
                ],
                spacing: { before: 400, after: 400 },
              }),
  
              // Signature Lines
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Signed, sealed and delivered by the above named.",
                    bold: true,
                    break: 3,
                  }),
                  new TextRun({
                    text: irSignatoryName,
                    bold: true,
                    break: 3,
                  }),
                  new TextRun({
                    text: irSignatoryDesignation,
                    break : 1,
                    bold: true,
                  }),
                  new TextRun({
                    text: "\n(Signature with seal and stamp)",
                    bold: true,
                    break: 1,
                  }),
                  new TextRun({
                    text: "\n(Signature, stamp and seal of Notary Public)",
                    bold: true,
                    break : 2,
                  }),
                ],
                alignment: AlignmentType.RIGHT,
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Form_III_A_${new Date().toISOString().split('T')[0]}.docx`);
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  