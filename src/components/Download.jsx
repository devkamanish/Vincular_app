'use client';
import { useContext } from "react";
import { FormContext } from "@/components/context/FormContext";
import GoToHome from "./GoToHome";
import { generateForm2Document} from "./forms-docx-sample/formTwo2";
import { generateForm3Document } from "./forms-docx-sample/form3C";
import {generateunRegTmDocument} from "./forms-docx-sample/unRegTm";
import { generatebrandAuthdocument } from "./forms-docx-sample/brandAuth";
import {generateFormIVFactoryDocument} from "./forms-docx-sample/form4Factory";
import { generateForm3B2Document } from "./forms-docx-sample/form3B2";
import {generateForm3B1Document} from "./forms-docx-sample/form3B1"
import {generateForm3ADocument} from "./forms-docx-sample/form3A";
import {generateForm4BrandDocument} from "./forms-docx-sample/form4Brand";
import { generateForm4ThirdPartyDocument } from "./forms-docx-sample/form4ThirdParty";
import  {generateNonexistenceDocument} from "./forms-docx-sample/Nonexistence";

const DownloadPage = () => {
  const { selectedDocuments,formsData} = useContext(FormContext);
  const { checkboxes, radios } = selectedDocuments;
 
  const combinedDocuments = [
    ...Object.entries(checkboxes).filter(([key, value]) => value).map(([key]) => ({ type: 'checkbox', name: key,letterhead : "IR firm",signStamp : "Balbir Singh Bora" })),
    ...Object.entries(radios).filter(([key, value]) => value).map(([key]) => ({ type: 'radio', name: key,letterhead:"NA", signStamp :"Balbir " })),
  ];
  
  // const generateDocx = () =>{
  //   generateDocxFile(formsData,combinedDocuments);
  // }

  // const generateDocx2 = ()=>{
  //   generateForm2Document(formsData,combinedDocuments);
    
  // }

  const generateDoxcform = ()=>{
    generateNonexistenceDocument(formsData);
  }
  
  return (
    <div className="flex justify-between items-start p-6 bg-white rounded-md shadow-md">
      {/* Left Side: Download Section */}
      <div className="w-1/4 mr-4">
        <div className="flex items-center mb-4">
          <GoToHome/>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mb-4 flex items-center" onClick={generateDoxcform}>
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
        <table className="min-w-full text-left text-sm">
          <tbody>
            {combinedDocuments.map(({ name }, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-2">{index + 1}.</td>
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
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">No.</th>
              <th className="border border-gray-300 p-2 text-left">Document</th>
              <th className="border border-gray-300 p-2 text-left">Letterhead</th>
              <th className="border border-gray-300 p-2 text-left">Sign-Stamp by</th>
            </tr>
          </thead>
          <tbody>
            {combinedDocuments.map((doc, index) => (
              <tr key={index} className="border-t">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{doc.name}</td>
                <td className="border border-gray-300 p-2">{doc.letterhead}</td>
                <td className="border border-gray-300 p-2">{doc.signStamp}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4">
          Once done, please share the scan with us for final confirmation. Accordingly, we will proceed with online submission in BIS.
        </p>
        <p className="mt-2">Thanks and Warm Regards!</p>
      </div>
    </div>
  );
};


export default DownloadPage;


