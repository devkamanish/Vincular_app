// formToWhomItMayConcern.js
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
  
  export const generateunRegTmDocument  = async (formsData) => {
    const {
      productName,
      manufacturerName,
      manufacturerAddress,
      brand,
      brandOwnerSigName,
      brandOwnerSigDesignation,
      brandOwnerFirmAddress,
    } = formsData;
  
    try {
     
      const doc = new Document({
        sections: [
          {
            children: [
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "To Whom It May Concern",
                    bold: true,
                  }),
                ],
                alignment: "center",
                spacing: { after: 200 },
              }),
  
              // Declaration Content
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I the undersigned hereby declare that we are applying for BIS registration of Product `,
                  }),
                  new TextRun({
                    text:  productName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` manufactured by Factory `,
                  }),
                  new TextRun({
                    text: manufacturerName,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` Located at `,
                  }),
                  new TextRun({
                    text: manufacturerAddress,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` under Compulsory Registration Scheme and our Brand/Trademark `,
                  }),
                  new TextRun({
                    text: brand,
                    bold: true,
                  }),
                  new TextRun({
                    text: ` is not registered in India.`,
                    break: 2,
                  }),
                ],
              }),
  
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I understand that the above has been given only as information to Bureau of Indian Standards, that Bureau of Indian Standards has no role in permitting/approving of any Brand Name or Trade Mark.`,
                    break: 2,
                  }),
                ],
              }),
  
              new Paragraph({
                children: [
                  new TextRun({
                    text: `The above information given in this declaration is true to the best of my knowledge and belief.`,
                    break: 2,
                  }),
                ],
              }),
  
              // Signature Section
              new Paragraph({
                children: [
                  new TextRun({
                    text: "(Signature with seal)",
                    highlight: "yellow",
                    break: 2,
                  }),
                ],
              }),
  
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Name: ",
                    bold: true,
                  }),
                  new TextRun({
                    text: brandOwnerSigName,
                    bold : true
                  }),
                  new TextRun({
                    text: "\nDesignation: ",
                    bold: true,
                    break:1,
                  }),
                  new TextRun({
                    text: brandOwnerSigDesignation,
                    bold : true,
                  }),
                  new TextRun({
                    text: "\nAddress: ",
                    bold: true,
                    break : 1,
                  }),
                  new TextRun({
                    text: brandOwnerFirmAddress,
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Unregistered_trademark_declaration_${new Date().toISOString().split('T')[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  

  