import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
} from "docx";
import { saveAs } from "file-saver";

export const generateForm3B2Document = async (formsData) => {
  const {
    irSignatoryName,
    irSignatoryAge,
    irirFirmName,
    irFirmAddress,
    irSignatoryDesignation,
    isStandard,

    irFirmName,

    manufacturerAddress,
    manufacturerName,

    productName,
    brand,

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
                  text: "Form - III B",
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  text: "\n(Refer clause (f) of sub-paragraph (1) of paragraph 3 of Scheme II)\n\n",
                  break: 2,
                }),
              ],
              alignment: "center",
            }),

            // Subheader text
            new Paragraph({
              children: [
                new TextRun({
                  text:
                    "Model affidavit cum undertaking (to be furnished by the brand owner; or proprietor/ registered user/ subsidiary firm/ liaison office of brand/trademark; or any other entity located in India, before grant of licence)\n\n",

                }),
                new TextRun({
                  text: "(On rupees one hundred only non-judicial stamp paper, duly notarised)",
                  break: 2,
                })
              ],
              alignment: "center",
            }),

            // Declaration Paragraph
            new Paragraph({
              children: [
                new TextRun({
                  text: `I, `,
                }),
                new TextRun ({
                  text : irSignatoryName,
                  bold : true,
                }),
                new TextRun ({
                  text : ", aged about ",
                }),
                new TextRun ({
                  text : irSignatoryAge,
                  bold :true,
                }),
                new TextRun ({
                  text : " years, by occupation "
                }),
                new TextRun ({
                  text : irSignatoryDesignation,
                  bold : true,
                }),
                new TextRun ({
                  text : " of M/s ",
                }),
                new TextRun({
                  text : irFirmName,
                  bold : true,
                }),
                new TextRun ({
                  text : ", having its Registered Office/Head Office at ",
                }),
                new TextRun ({
                  text : irFirmAddress,
                  bold : true,
                }),
                new TextRun ({
                  text : ", do hereby solemnly affirm and declare as under:"
                })

              ],
              spacing: { before: 400, after: 400 },
            }),

            // Clause 1
            new Paragraph({
              children: [
                new TextRun({
                  text: "1. That M/s ",
                }),
                new TextRun({
                  text: `${manufacturerName}`,
                  bold: true,
                }),
                new TextRun({
                  text: ` having its factory/manufacturing address at `,
                }),
                new TextRun ({
                  text : manufacturerAddress,
                  bold : true,
                }),
                new TextRun ({
                  text : " has nominated M/s ",
                }),
                new TextRun ({
                  text :irFirmName,
                  bold : true,
      
                }),
                new TextRun ({
                  text : " as its authorised representative located in India for the purpose of grant of licence of its article: "
                }),
                new TextRun({
                  text: `${productName}`,
                  bold: true,
                }),
                new TextRun ({
                  text : ", Brand: ",
                }),
                new TextRun ({
                  text : brand +" "+ isStandard,
                  bold : true,
                }),
                new TextRun({
                  text: ` as applied under Application ID/ licence No.: `,
                }),
                new TextRun({
                  text: "__________",

                  highlight: "yellow",
                }),
                new TextRun({
                  text: " and compliance to subsection (6) and (7) of section 18 and section 31 of the Act.",
                }),
              ],
            }),

            // Clause 2
            new Paragraph({
              children: [
                new TextRun({
                  text:
                    "2. That I have been duly authorised to give this affidavit cum undertaking (authorisation appended herewith).",
                  break: 2,
                }),
              ],
            }),

            // Clause 3
            new Paragraph({
              children: [
                new TextRun({
                  text:
                    "3. **That I hereby declare that M/s ............................. (the nominated Company/Firm/Proprietorship in India) is the Brand Owner/Proprietor/Registered User/subsidiary office/liaison office of the Brand/Trademark appearing on said article.",
                  strike: true,
                  break: 2,
                }),
              ],
            }),

            // OR Clause 3 (alternative declaration)
            new Paragraph({
              children: [
                new TextRun({
                  text: "\nOR",
                  bold: true,
                  break: 2,
                }),
              ],
              alignment: "center",
            }),

            // Alternative Clause 3
            new Paragraph({
              children: [
                new TextRun({
                  text: " **That I hereby declare that ",
                }),
                new TextRun({
                  text: `${irFirmName}`,
                  bold: true,
                }),
                new TextRun({
                  text:
                    " is the major importer/distributor/ entity having marketing tie-up with the brand owner and /or the manufacturer of the said article.",
                }),
              ],
            }),

            // Clause 4
            new Paragraph({
              children: [
                new TextRun({
                  text: `4. That M/s `,
                  break: 2,
                }),
                new TextRun({
                  text: irFirmAddress,
                  bold: true,
                }),
                new TextRun({
                  text: " does hereby unconditionally accept the nomination and give consent to be responsible for compliance to the provisions of the Act, rules and regulations framed thereunder, on behalf of M/s ",
                }),
                new TextRun({
                  text: manufacturerName,
                  bold: true,
                }),
                new TextRun({
                  text: " for the purpose of Registration of the said article(s). M/s ",
                }),
                new TextRun({
                  text: irFirmName,
                  bold: true,
                }),
                new TextRun({
                  text: " further undertakes that this consent shall not be revoked during the operation of the licence without prior consent of the Bureau. ",

                })
              ],
            }),

            // Clause 5
            new Paragraph({
              children: [
                new TextRun({
                  text: `5. That without prejudice to the generality of the foregoing declaration, M/s `,
                  break: 2,
                }),
                new TextRun({
                  text: irFirmName,
                  bold: true,
                }),
                new TextRun({
                  text: " accepts and undertakes to be responsible for compliance of all terms and conditions of the Registration and to be liable to meet all outstanding financial dues to BIS that may arise at any stage in connection with the licence. ",

                })
              ],
            }),

            // Clause 6
            new Paragraph({
              children: [
                new TextRun({
                  text: `6. That M/s `,
                  break: 2,
                }),

                new TextRun({
                  text: irFirmName,
                  bold: true,
                }),

                new TextRun({
                  text: " accepts and undertakes full liability in case of violation of any provision of the Act, rules and regulations framed thereunder, arising out of any act or omission on the part of the foreign applicant.",


                })
              ],
            }),

            // Clause 7
            new Paragraph({
              children: [
                new TextRun({
                  text: `7. That I declare that M/s `,
                  break: 2,
                }),
                new TextRun({
                  text: irFirmName,
                  bold: true,
                }),
                new TextRun({
                  text: " has no commercial or business relationship with any laboratory affecting the interest of BIS and that it will not engage in any activity that is in conflict with the interest of BIS in. I fully understand that any violation of this may lead to cancellation of the licence, apart from other actions as per law.",

                })
              ],
            }),

            // Clause 8
            new Paragraph({
              children: [
                new TextRun({
                  text: `8. That M/s `,
                  break: 2,
                }),
                new TextRun({
                  text: irFirmName,
                  bold: true,
                }),
                new TextRun({
                  text: " as well as the undersigned i.e. deponent, undertake to fully indemnify the BIS from any loss arising out of the licence to be granted, jointly and severally, on behalf of the foreign applicant.",

                })
              ],
            }),

            // Signature Section
            new Paragraph({
              children: [
                new TextRun({
                  text: `In witness whereof, I do hereby sign and execute this affidavit cum undertaking on this the ........day of ..........., 20....`,
                  break: 3,
                }),

              ],
              spacing: { before: 400, after: 400 },
            }),

            // Signature Lines
            new Paragraph({
              children: [
                new TextRun({
                  text: "Signed, sealed and delivered by the above named",
                  bold: true,
                  break: 3,
                }),
                new TextRun({
                  text: irSignatoryName,
                  bold: true,
                  break: 2,
                }),
                new TextRun({
                  text: "\nDirector",
                  bold: true,
                  break: 1,
                }),
                new TextRun({
                  text: "\n(Signature with seal and stamp)",
                  bold: true,
                  break: 2,

                }),
                new TextRun({
                  text: "\n(Signature, stamp and seal of Notary Public)",
                  bold: true,
                  break: 1
                }),
              ],
              alignment: AlignmentType.RIGHT,
            }),

            // Footer Note
            new Paragraph({
              children: [
                new TextRun({
                  text: "** Strike off whichever is not applicable.",
                  bold: true,
                }),
              ],
              alignment: AlignmentType.RIGHT,
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Form_III_B_${new Date().toISOString().split('T')[0]}.docx`);
  } catch (error) {
    console.error("Error generating DOCX file:", error);
  }
};
