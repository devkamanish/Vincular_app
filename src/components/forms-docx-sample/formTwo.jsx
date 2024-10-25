import { 
    Document, 
    Packer, 
    Paragraph, 
    Table, 
    TableRow, 
    TableCell, 
    TextRun, 
    AlignmentType, 
    BorderStyle, 
    HeightRule,
    Header,
    Footer,
    PageBreak,
    LineRuleType,
    convertInchesToTwip,
    WidthType,
    ShadingType
  } from "docx";
  
  import { saveAs } from "file-saver";
  
  export const generateDocxFile = async (formsData, combinedDocuments) => {
    const {
      manufacturerName,
      manufacturerAddress,
      manufacturerSignatoryName,
      manufacturerSignatoryDesignation,
      manufacturerSignatoryAge,
      brand,
      productName,
      modelNo,
      isStandard,
      labName,
      reportNo,
      reportDate,
      irSignatoryName
    } = formsData;
    
    try {
      if (!combinedDocuments || combinedDocuments.length === 0) {
        console.error("No documents available to create a table.");
        return;
      }

      
      const doc = new Document({
        styles: {
          paragraphStyles: [
            {
              id: "heading",
              name: "Heading Style",
              basedOn: "Normal",
              run: {
                size: 32,
                bold: true,
                color: "2E5A88"
              },
              paragraph: {
                spacing: {
                  before: 240,
                  after: 240
                }
              }
            },
            {
              id: "normal",
              name: "Normal Style",
              run: {
                size: 24,
                color: "333333"
              }
            }
          ]
        },
        sections: [{
          properties: {
            page: {
              margin: {
                top: convertInchesToTwip(1),
                right: convertInchesToTwip(1),
                bottom: convertInchesToTwip(1),
                left: convertInchesToTwip(1),
              }
            }
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "CONFIDENTIAL ",
                      bold: true,
                      size: 20,
                      color: "808080"
                    })
                  ],
                  alignment: AlignmentType.RIGHT
                })
              ]
            })
          },
          
          children: [
            // Title Block
            new Paragraph({
              style: "heading",
              children: [
                new TextRun({
                  text: "Form - II",
                  bold: true,
                  size: 36,
                  color: "2E5A88"
                })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 300 },
              border: {
                bottom: {
                  color: "2E5A88",
                  size: 15,
                  style: BorderStyle.SINGLE,
                }
              }
            }),
            new Paragraph({
              style: "heading",
              children: [
                new TextRun({
                  text: "UNDERTAKING",
                  bold: true,
                  size: 32,
                  color: "2E5A88"
                })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 }
            }),
  
            // Manufacturer Details Block
            new Paragraph({
              children: [
                new TextRun({
                  text: "Manufacturer Details",
                  bold: true,
                  size: 28,
                  color: "2E5A88"
                })
              ],
              spacing: { after: 200 }
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: {
                all: { style: BorderStyle.SINGLE, size: 1, color: "88A9CF" }
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Name:", bold: true })]
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: manufacturerName || "" })] })]
                    })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Address:", bold: true })] 
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: manufacturerAddress || "" })] })]
                    })
                  ]
                })
              ]
            }),
  
            // Product Details
            new Paragraph({
              children: [
                new TextRun({
                  text: "\nProduct Information",
                  bold: true,
                  size: 28,
                  color: "2E5A88"
                })
              ],
              spacing: { before: 400, after: 200 }
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: {
                all: { style: BorderStyle.SINGLE, size: 1, color: "88A9CF" }
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Product Name:", bold: true })]
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: productName || "" })] })]
                    })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Brand:", bold: true })]
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: brand || "" })] })]
                    })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Model Number:", bold: true })]
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: modelNo || "" })] })]
                    })
                  ]
                })
              ]
            }),
  
            // Test Reports Table
            new Paragraph({
              children: [
                new TextRun({
                  text: "\nTest Report Details",
                  bold: true,
                  size: 28,
                  color: "2E5A88"
                })
              ],
              spacing: { before: 400, after: 200 }
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: {
                all: { style: BorderStyle.SINGLE, size: 1, color: "88A9CF" }
              },
              rows: [
                // Header Row
                new TableRow({
                  tableHeader: true,
                  height: { value: 400, rule: HeightRule.EXACT },
                  children: [
                    createHeaderCell("Product Type", 20),
                    createHeaderCell("Model Number", 20),
                    createHeaderCell("Test Laboratory", 20),
                    createHeaderCell("Report No.", 20),
                    createHeaderCell("Report Date", 20)
                  ]
                }),
                // Data Row
                ...combinedDocuments.map(doc => 
                  new TableRow({
                    height: { value: 300, rule: HeightRule.EXACT },
                    children: [
                      createDataCell(productName || ""),
                      createDataCell(modelNo || ""),
                      createDataCell(labName || ""),
                      createDataCell(reportNo || ""),
                      createDataCell(reportDate || "")
                    ]
                  })
                )
              ]
            }),
  
            // Signature Block
            new Paragraph({
              children: [
                new TextRun({
                  text: "\nAuthorization",
                  bold: true,
                  size: 28,
                  color: "2E5A88"
                })
              ],
              spacing: { before: 400, after: 200 }
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              borders: {
                all: { style: BorderStyle.SINGLE, size: 1, color: "88A9CF" }
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Signatory Name:", bold: true })]
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: manufacturerSignatoryName || "" })] })]
                    })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: 30, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ 
                        children: [new TextRun({ text: "Designation:", bold: true })]
                      })],
                      shading: { fill: "EDF2F7", type: ShadingType.CLEAR }
                    }),
                    new TableCell({
                      width: { size: 70, type: WidthType.PERCENTAGE },
                      children: [new Paragraph({ children: [new TextRun({ text: manufacturerSignatoryDesignation || "" })] })]
                    })
                  ]
                })
              ]
            }),
  
            // Footer Details
            new Paragraph({
              children: [
                new TextRun({
                  text: "\nDate: _________________",
                  size: 24
                })
              ],
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Place: _________________",
                  size: 24
                })
              ],
              spacing: { after: 200 }
            })
          ],
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Page ",
                      size: 20,
                      color: "808080"
                    }),
                    new TextRun({
                      children: ["PAGE", " of ", "NUMPAGES"],
                      size: 20,
                      color: "808080"
                    })
                  ],
                  alignment: AlignmentType.CENTER
                })
              ]
            })
          }
        }]
      });
  
      // Helper functions for creating table cells
      function createHeaderCell(text, width) {
        return new TableCell({
          width: { size: width, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: text,
                  bold: true,
                  size: 24,
                  color: "FFFFFF"
                })
              ]
            })
          ],
          shading: { fill: "2E5A88", type: ShadingType.CLEAR }
        });
      }
  
      function createDataCell(text) {
        return new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: text,
                  size: 24
                })
              ]
            })
          ]
        });
      }
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${productName || 'document'}_${new Date().toISOString().split('T')[0]}.docx`);
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
