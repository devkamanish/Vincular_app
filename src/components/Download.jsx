"use client";
import { useContext } from "react";
import { FormContext } from "@/components/context/FormContext";
import GoToHome from "./GoToHome";
import { generateForm2Document } from "./forms-docx-sample/formTwo2";
import {
  generateForm3CDocument,
} from "./forms-docx-sample/form3C";
import { generateunRegTmDocument } from "./forms-docx-sample/unRegTm";
import { generatebrandAuthdocument } from "./forms-docx-sample/brandAuth";
import { generateForm4FactoryDocument } from "./forms-docx-sample/form4Factory";
import { generateForm3B2Document } from "./forms-docx-sample/form3B2";
import { generateForm3B1Document } from "./forms-docx-sample/form3B1";
import { generateForm3ADocument } from "./forms-docx-sample/form3A";
import { generateForm4BrandDocument } from "./forms-docx-sample/form4Brand";
import { generateForm4ThirdPartyDocument } from "./forms-docx-sample/form4ThirdParty";
import { generateNonexistenceDocument } from "./forms-docx-sample/Nonexistence";
import { generateAnnexure1Document } from "./forms-docx-sample/annexure1";
import { generateForm6Document } from "./forms-docx-sample/form6";
import { generateFactoryAuthDocument } from "./forms-docx-sample/factoryAuth";
import { generateIrSignAuthDocument } from "./forms-docx-sample/irSignAuth";


import JSZip from "jszip";
import { saveAs } from "file-saver";

const DownloadPage = () => {
  const { selectedDocuments, formsData } = useContext(FormContext);
  const { checkboxes, radios, factoryAuth, irSignAuth ,form6, annexure1} = selectedDocuments;
  const { extraFields, setExtraFields } = useContext(FormContext);

  const getLetterhead = (docType) => {
    if (["form2"].includes(docType)) {
      return "IR Firm";
    } else if (
      ["brandAuth", "unregTmr", "nonexistenceBrand"].includes(docType)
    ) {
      return formsData.brandOwnerFirmName;
    } else if (["form3A", "form3B1", "form3B2", "form3C"].includes(docType)) {
      return "NA";
    } else if (["form4A", "form4B", "form4C"].includes(docType)) {
      return formsData.manufacturerName;
    } else if (["factoryAuth", "form6", "annexure1"].includes(docType)) {
      return formsData.manufacturerName;
    } else if (["irSignAuth"].includes(docType)) {
      return formsData.irFirmName;
    } else {
      return "";
    } 
  };
 

  const getSignStamp = (docType)=>{
    if(["form2"].includes(docType)){
      return "Balbir Singh Bora";
    }else if(["brandAuth", "unregTmr", "nonexistenceBrand"].includes(docType)){
      return formsData.brandOwnerSigName;
    } else if(["irSignAuth"].includes(docType)){
      return formsData.irSignatoryName +", "+ formsData.irSignatoryHeadName;
    } else if(["factoryAuth"].includes(docType)){
      return formsData.manufacturerHeadSig +", "+formsData.manufacturerSignatoryName;
    }else if(["form6","annexure1"].includes(docType)){
      return formsData.manufacturerSignatoryName + ", "+ formsData.irSignatoryName;

    } else if(["form3A","form3B1","form3B2"].includes(docType)){
      return formsData.irSignatoryName;
    } 
    else if(["form4A","form4B","form4C","form3C"].includes(docType)){
      return formsData.manufacturerSignatoryName;
    }
  }

  const handleDownloadZip = async () => {
    const zip = new JSZip();
    const folder = zip.folder("Selected_Documents");
  
  
    for (const doc of combinedDocuments) {
      const { name } = doc;

      let docBlob = null;
      switch (name) {
        case "form2":
          docBlob = await generateForm2Document(formsData, combinedDocuments);
          break;
        case "brandAuth":
          docBlob = await generatebrandAuthdocument(
            formsData,
            combinedDocuments
          );
          break;
        case "unregTmr":
          docBlob = await generateunRegTmDocument(formsData, combinedDocuments);
          break;

        case "nonexistenceBrand":
          docBlob = await generateNonexistenceDocument(
            formsData,
            combinedDocuments
          );
          break;

        case "form3A":
          docBlob = await generateForm3ADocument(formsData, combinedDocuments);
          break;

        case "form3B1":
          docBlob = await generateForm3B1Document(formsData, combinedDocuments);
          break;

        case "form3B2":
          docBlob = await generateForm3B2Document(formsData, combinedDocuments);
          break;

        case "form3C":
          docBlob = await generateForm3CDocument(formsData, combinedDocuments);
          break;

        case "form4A":
          docBlob = await generateForm4FactoryDocument(
            formsData,
            combinedDocuments
          );
          break;

        case "form4B":
          docBlob = await generateForm4BrandDocument(
            formsData,
            combinedDocuments
          );
          break;
        
        case "form4C":
          docBlob = await generateForm4ThirdPartyDocument(
            formsData,
            combinedDocuments
          );
          break;
        case "factoryAuth":
          docBlob = await generateFactoryAuthDocument(formsData,combinedDocuments);
          break;
        
        case "irSignAuth":
          docBlob = await generateIrSignAuthDocument(formsData,combinedDocuments);
          break ;
          
        case "annexure1":
          docBlob = await generateAnnexure1Document(
            formsData,
            combinedDocuments
          ) ;
          break; 
        
        case "form6":
          docBlob = await generateForm6Document(
            formsData,
            combinedDocuments
          );
          break;

        default:
          continue; 
      }
      
      if (docBlob) {
        folder.file(`${name}.docx`, docBlob);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });

    saveAs(zipBlob, "Selected_Documents.zip");
  };

  
  const combinedDocuments = [
    ...Object.entries(checkboxes)
      .filter(([key, value]) => value)
      .map(([key]) => ({
        type: "checkbox",
        name: key,
        letterhead: getLetterhead(key),
        signStamp: getSignStamp(key),
      })),
    ...Object.entries(radios)
      .filter(([key, value]) => value)
      .map(([key]) => ({
        type: "radio",
        name: key,
        letterhead: getLetterhead(key),
        signStamp: getSignStamp(),
      })),
    ...(factoryAuth
      ? [
          {
            type: "auth",
            name: "factoryAuth",
            letterhead: getLetterhead("factoryAuth"),
            signStamp: getSignStamp("factoryAuth"),
          },
        ]
      : []),

      ...(irSignAuth
      ? [
          {
            type: "auth",
            name: "irSignAuth",
            letterhead: getLetterhead("irSignAuth"),
            signStamp: getSignStamp("irSignAuth"),
          },
        ]
      : []),

      ...(form6 
        ?[
          {
            name:"form6",
            letterhead:getLetterhead("form6"),
            signStamp:getSignStamp("form6"),
          },
        ]
      :[]),

      ...(annexure1
        ?[
          {
            name:"annexure1",
            letterhead:getLetterhead("annexure1"),
            signStamp:getSignStamp("annexure1"),
            
          },
        ]
      :[]),
  ];

  
  console.log("uuuuu", combinedDocuments);
  console.log("qwertyu", selectedDocuments);
  console.log("fghjk", factoryAuth, irSignAuth);

  const downloadForm = (formName) => {
    console.log("Selected form: ", formName);
    switch (formName) {
      case "form2":
        generateForm2Document(formsData, combinedDocuments);
        console.log(formName);
        break;
      case "brandAuth":
        generatebrandAuthdocument(formsData, combinedDocuments);
        break;

      case "unregTmr":
        generateunRegTmDocument(formsData, combinedDocuments);
        break;

      case "nonexistenceBrand":
        generateNonexistenceDocument(formsData, combinedDocuments);
        break;

      case "form3A":
        generateForm3ADocument(formsData, combinedDocuments);
        break;

      case "form3B1":
        generateForm3B1Document(formsData, combinedDocuments);
        break;
      case "form3B2":
        generateForm3B2Document(formsData, combinedDocuments);
        break;
      case "form3C":
        generateForm3CDocument(formsData, combinedDocuments);
        break;

      case "form4A":
        generateForm4FactoryDocument(formsData, combinedDocuments);
        break;

      case "form4B":
        generateForm4BrandDocument(formsData, combinedDocuments);
        break;

      case "form4C":
        generateForm4ThirdPartyDocument(formsData, combinedDocuments);
        break;

      case "factoryAuth":
        generateFactoryAuthDocument(formsData,combinedDocuments);
        break;
       
      case "irSignAuth":
        generateIrSignAuthDocument(formsData,combinedDocuments);
        break;  
  
      case "annexure1":
        generateAnnexure1Document(formsData,combinedDocuments);
        break;

      case "form6":
        generateForm6Document(formsData,combinedDocuments);
        break;

      default:
        break;

    }
  };

  return (
    <div className="flex items-start justify-between p-6 bg-white rounded-md shadow-md">
      {/* Left Side: Download Section */}
      <div className="w-1/4 mr-4">
        <div className="flex items-center mb-4">
          <GoToHome />
        </div>
        <button
          onClick={handleDownloadZip}
          className="flex items-center px-4 py-2 mb-4 text-white bg-blue-600 rounded-md"
        >
          Click to download!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0l3-3m-3 3l-3-3m6 6H9"
            />
          </svg>
        </button>
        <table className="min-w-full text-sm text-left">
          <tbody>
            {combinedDocuments.map(({ name }, index) => (
              <tr
                key={index}
                className="border-t cursor-pointer"
                onClick={() => {
                  downloadForm(name);
                }}
              >
                <td className="px-2 py-2">{index + 1}.</td>
                <td className="py-2">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Side: Document Table */}
      <div className="w-3/4">
        <p className="mb-2">Dear Client,</p>
        <p className="mb-4">
          PFA documents that require sign-stamp as mentioned in the below table:
        </p>
        <table className="min-w-full text-sm border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left border border-gray-300">No.</th>
              <th className="p-2 text-left border border-gray-300">Document</th>
              <th className="p-2 text-left border border-gray-300">
                Letterhead
              </th>
              <th className="p-2 text-left border border-gray-300">
                Sign-Stamp by
              </th>
            </tr>
          </thead>
          <tbody>
            {combinedDocuments.map((doc, index, letterhead) => (
              <tr key={index} className="border-t">
                <td className="p-2 border border-gray-300">{index + 1}</td>
                <td className="p-2 border border-gray-300">{doc.name}</td>
                <td className="p-2 border border-gray-300">{doc.letterhead}</td>

                <td className="p-2 border border-gray-300">
                  {doc.signStamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4">
          Once done, please share the scan with us for final confirmation.
          Accordingly, we will proceed with online submission in BIS.
        </p>
        <p className="mt-2">Thanks and Warm Regards!</p>
      </div>
    </div>
  );
};

export default DownloadPage;
