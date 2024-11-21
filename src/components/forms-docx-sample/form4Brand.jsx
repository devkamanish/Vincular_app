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

export const generateForm4BrandDocument = async (formsData) => {
  const {
    irSignatoryName,
    manufacturerSignatoryName,
    manufacturerSignatoryDesignation,
    manufacturerSignatoryPhoneNo,
    manufacturerSignatoryEmail,
    manufacturerName,
    irFirmAddress,
    irFirmName,
    irFirmEmail,
    reportDate,
    irFirmPhoneNo,
    manufacturerAddress,
  } = formsData;

  try {
    const doc = new Document({
      sections: [
        {
          children: [
            // Header Title
            new Paragraph({
              children: [
                new TextRun({ text: "Form - IV", bold: true, size: 24 }),
                new TextRun({ text: "\n(Refer clause (g) of sub-paragraph (1) of paragraph 3 of Scheme-II)\n", bold: true, break: 2 }),
                new TextRun({ text: "Nomination of Authorised Indian Representative\n", bold: true, break: 1 }),
                new TextRun({ text: "(To be issued on company letter head, in original)", bold: true, break: 1 })
              ],
              alignment: AlignmentType.CENTER,
            }),

            // Main Declaration
            new Paragraph({
              children: [
                new TextRun({ text: `1. I, ` }),
                new TextRun({ text: manufacturerSignatoryName, bold: true }),
                new TextRun({ text: `, ${manufacturerSignatoryDesignation}`, bold: true }),
                new TextRun({ text: " of " }),
                new TextRun({ text: "M/s ", bold: true }),
                new TextRun({ text: manufacturerName, bold: true }),
                new TextRun({ text: ` having its manufacturing unit at ` }),
                new TextRun({ text: manufacturerAddress, bold: true }),
                new TextRun({ text: `, hereby declare that` }),
              ],
              spacing: { before: 400, after: 400 },
            }),

            // Clause (a)
            new Paragraph({
              children: [
                new TextRun({
                  text: "* (a) M/s ........................................ (foreign applicant) have a liaison office / subsidiary firm/ branch office M/s .......................... located at ................... (complete address in India).",
                  strike: true,
                })
              ],
            }),

            // OR Divider
            new Paragraph({
              children: [new TextRun({ text: "OR", bold: true })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),

            // Clause (b)
            new Paragraph({
              children: [
                new TextRun({ text: "* (b) M/s " }),
                new TextRun({ text: manufacturerName, bold: true }),
                new TextRun({
                  text: ` do not have a liaison office/ subsidiary firm/ branch office located in India, but Proprietor/Registered user/subsidiary firm/liaison office of the Brand/Trademark appearing on the article is located in India by the name and Title M/s `,
                }),
                new TextRun({ text: irFirmName, bold: true }),
                new TextRun({ text: " at " }),
                new TextRun({ text: irFirmAddress, bold: true }),
              ],
              spacing: { after: 200 },
            }),

            // OR Divider
            new Paragraph({
              children: [new TextRun({ text: "OR", bold: true })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 },
            }),

            // Clause (c)
            new Paragraph({
              children: [
                new TextRun({
                  text: "* (c) M/s ........................................ (foreign applicant) do not have a liaison office / subsidiary firm/ branch office located in India and there is no Proprietor / Registered User/subsidiary firm/branch office/ liaison office of the Brand/Trademark appearing on the article, located in India. Therefore, we nominate M/s .................................. the major importer/distributor/ entity having marketing tie up with the brand owner and/or the manufacturer, as our authorised Indian representative.",
                  strike: true,
                })
              ],
            }),

            // Clause 2
            new Paragraph({
              children: [
                new TextRun({ text: "\n2. Accordingly," }),
                new TextRun({ text: `M/s ${irFirmName}`, bold: true }),
                new TextRun({ text: " referred above, will act as our authorised representative, and will sign Affidavit cum undertaking " }),
                new TextRun({ text: "(Form–III A / Form–III B)", bold: true }),
                new TextRun({ text: " and other documents relating to registration." }),
                new TextRun({ text: "* Strike off whichever is not applicable.", break: 2 })
              ],
              spacing: { before: 400, after: 400 },
            }),

            // Yours Faithfully Section
            new Paragraph({
              children: [new TextRun({ text: "Yours faithfully," })],
              spacing: { after: 400 },
              alignment: AlignmentType.RIGHT,
            }),

            // Details Table
             new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `M/s ${irFirmName}`,
                              bold: true,
                            }),
                            new TextRun({
                              text: `\nAddress: ${irFirmAddress}\nPhone: ${irFirmPhoneNo}\nEmail: ${irFirmEmail}`,
                            }),
                          ],
                        }),
                      ],
                      columnSpan: 2,
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `Name: ${manufacturerSignatoryName}`,
                              bold: true,
                            }),
                            new TextRun({
                              text: `\nDesignation: ${manufacturerSignatoryDesignation}`,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `Address: ${manufacturerAddress}`,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Phone: ",
                            }),
                            new TextRun({
                              text: irFirmName,
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `Phone: ${manufacturerSignatoryPhoneNo}`,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Email: ",
                            }),
                            new TextRun({
                              text: irFirmEmail,
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `Email: ${manufacturerSignatoryEmail}`,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Date:",
                              highlight: "yellow",
                            }),
                            new TextRun({
                              text: ` ${reportDate || "________"}`,
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: "Date:",
                              highlight: "yellow",
                            }),
                            new TextRun({
                              text: ` ${reportDate || "________"}`,
                              bold: true,
                            }),
                          ],
                        }),
                      ],
                      borders: {
                        top: { style: BorderStyle.SINGLE, size: 1 },
                        bottom: { style: BorderStyle.SINGLE, size: 1 },
                        left: { style: BorderStyle.SINGLE, size: 1 },
                        right: { style: BorderStyle.SINGLE, size: 1 },
                      },
                    }),
                  ],
                }),
              ],
            }),

            // Footer - Application ID/License No.
            new Paragraph({
              children: [new TextRun({ text: "Application ID/License No.:" })],
              spacing: { before: 200 },
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Form_IV_Brand_${new Date().toISOString().split("T")[0]}.docx`);
    return blob;
  } catch (error) {
    console.error("Error generating DOCX file:", error);
  }
};
