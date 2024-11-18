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

export const generateForm2Document = async (formsData,letterhead) => {
  const {
    manufacturerName,
    manufacturerAddress,
    brand,
    productName,
    modelNo,
    isStandard,
    labName,
    applicationId,
    reportNo,
    reportDate,
    
    irSignatoryName
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
                  text: letterhead || "To be issued on IR Firm letter head",
                  bold: true,
                  // color: "008000", 
                  size: 26,
                  highlight : "yellow",
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
                  text: "Form – II",
                  bold: true,
                  size: 24,
                  break: 1,
                }),
                new TextRun({
                  text: "UNDERTAKING",
                  bold: true,
                  size: 24,
                  break: 2,
                }),
              ],
              alignment: "center",
            }),

            // Manufacturer Name and Address
            new Paragraph({
              children: [
                new TextRun({
                  text: `Name and Address of Manufacturer : ${manufacturerName}`,
                  bold: true,
                  break: 1,
                }),
                new TextRun({
                  text: manufacturerAddress,
                  bold: true,
                }),
              ],
              break: 1,
            }),
            
            // Product Details
            new Paragraph({
              children: [
                new TextRun({
                  text: `Product Name: ${productName}`,
                  break: 1,
                }),
                new TextRun({
                  text: `Trade/Brand Name: ${brand}`,
                  break: 1,
                }),
                new TextRun({
                  text: `For conformity to Indian Standard: ${isStandard}`,
                  bold: true,
                  break: 2,
                }),
                new TextRun({
                  text: `Application ID/Inclusion ID/CCL ID/SwitchOver ID: ${applicationId}`,
                  highlight: "yellow",
                }),
              ],
              break: 1,
            }),

            // Divider Line
            new Paragraph({
              children: [
                new TextRun({
                  text: "--------------------------------------------------------------------------------------",
                }),
              ],
            }),

            // Undertaking Statement
            new Paragraph({
              children: [
                new TextRun({
                  text: `We, ${manufacturerName}, have applied to BIS for a grant of licence for self-declaration of conformity on the above product(s). We, as the responsible party for regulatory compliance, declare under sole responsibility that the described product is in conformity with `,
                  break: 1,
                }),
                new TextRun({
                  text :`${isStandard}.`,
                  bold : true,
                }),
                new TextRun({
                  text: `Further the following submitted by us has been perused by us thoroughly clause by clause against ${isStandard} or each requirement.`,
                  break: 1,
                }),
              ],
            }),
            
            // Product Details Table
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Product Type")],
                    }),
                    new TableCell({
                      children: [new Paragraph("Model Number")],
                    }),
                    new TableCell({
                      children: [new Paragraph("Test Laboratory")],
                    }),
                    new TableCell({
                      children: [new Paragraph("Report No.")],
                    }),
                    new TableCell({
                      children: [new Paragraph("Report Date")],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph(productName)],
                    }),
                    new TableCell({
                      children: [new Paragraph(modelNo)],
                    }),
                    new TableCell({
                      children: [new Paragraph(labName)],
                    }),
                    new TableCell({
                      children: [new Paragraph(reportNo)],
                    }),
                    new TableCell({
                      children: [new Paragraph( reportDate)],
                    }),
                  ],
                }),
              ],
              width: { size: 100, type: "pct" },
            }),

            // Certification Statement
            new Paragraph({
              children: [
                new TextRun({
                  text: "We certify that:",
                  bold: true,
                  break: 1,
                }),
                new TextRun({
                  text: "i) The test report covers the test results/conformity assessment for all applicable requirements of the above Indian Standards.",
                  break: 1,
                }),
                new TextRun({
                  text: "ii) The test results for each requirement of the standard covered in each clause/sub-clause of the standard have been verified by us independently and found to be within the limits/meeting the requirements prescribed in the standard.",
                  break: 2,
                }),
              ],
            }),

            // Signature and Declaration Section
            new Paragraph({
              children: [
                new TextRun({
                  text: "We agree that if any anomaly is found in the Test Report submitted by us to BIS for licence at any time after grant of licence, then the licence so granted to us on the basis of the Test Report and this Undertaking would be liable to be cancelled by BIS.",
                  break: 2,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: "Signature & Seal:",
                  break: 1,
                }),
                new TextRun({
                  text: `Name: `,
                  break: 1,
                }),
                new TextRun({
                  text : irSignatoryName,
                  bold : true,
                }),
                new TextRun({
                  text: "(Applicant/Authorized representative of Indian entity filling application)",
                  break: 1,
                }),
                new TextRun({
                  text: "Date: ______________",
                  break: 1.3,
                  highlight: "yellow",
                }),
                new TextRun({
                  break :1.3,
                  text: "Place: ______________",
                  highlight: "yellow",
                }),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Form-II_${new Date().toISOString().split('T')[0]}.docx`);
  } catch (error) {
    console.error("Error generating DOCX file:", error);
  }
};


