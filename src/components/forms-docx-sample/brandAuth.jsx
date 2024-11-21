import {
    Document,
    Packer,
    Paragraph,
    TextRun,
  } from "docx";
  import { saveAs } from "file-saver";
  
  export const generatebrandAuthdocument = async (formsData) => {
    const {
      manufacturerName,
      manufacturerAddress,
      productName,
      brand,
      brandOwnerFirmName,
      brandOwnerSigName,
      brandOwnerSigDesignation ,
      brandOwnerFirmAddress,
      
    } = formsData;
  
    try {
      const doc = new Document({
        sections: [
          {
            children: [
              // Title
              new Paragraph({
                children: [
                  new TextRun({
                    text: "BRAND AUTHORIZATION",
                    bold: true,
                    size: 24,
                    break: 1,
                  }),
                ],
                alignment: "center",
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "To Whomsoever It May Concern",
                    bold: true,
                    break: 2,
                  }),
                ],
                alignment: "center",
              }),
  
              // Authorization Paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I/We the undersigned, hereby authorize `,
                    break: 2,
                  }),
                  new TextRun ({
                    text : manufacturerName,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " loacted at "
                  }),
                  new TextRun ({
                    text :  manufacturerAddress,
                    bold : true,
                  }),
                  new TextRun ({
                    text :" to get registered as a applicant/manufacturer with Bureau of Indian Standards for my/our product "
                  }),
                  new TextRun ({
                    text : productName,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " for my/our brands ",
                  }),
                  new TextRun ({
                    text : brand,
                    bold : true,
                  }),
                  new TextRun ({
                    text : " where Brand owner is "
                  }),
                  new TextRun ({
                    text : brandOwnerFirmName,
                    bold : true,
                  })
                ],
              }),
  
              // Disclaimer Paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: `I/We understand that the above has been given only as information to Bureau of Indian Standards, that Bureau of Indian Standards has no role in permitting/approving of any Brand Name or Trade Mark, that this is not in any way be interpreted to mean that Bureau of Indian Standards has permitted/approved applicant to use the Brand Names and Trade Marks listed in Form I.`,
                    break: 2,
                  }),
                ],
              }),
  
              // Declaration Paragraph
              new Paragraph({
                children: [
                  new TextRun({
                    text: "The above information given in this declaration is true to the best of my knowledge and belief.",
                    break: 2,
                  }),
                ],
              }),
  
              // Closing
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Sincerely,",
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
                    text: `Name: `,
                    break: 1,
                  }), 
                  new TextRun ({
                    text : brandOwnerSigName,
                    bold : true,
                  })
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Designation: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : brandOwnerSigDesignation,
                    bold : true,
                  })
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Address: `,
                    break: 1,
                  }),
                  new TextRun({
                    text : brandOwnerFirmAddress,
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
  
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `Brand_Authorization_${new Date().toISOString().split('T')[0]}.docx`);
      return blob;
    } catch (error) {
      console.error("Error generating DOCX file:", error);
    }
  };
  