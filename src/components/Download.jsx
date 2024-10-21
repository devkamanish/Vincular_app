'use client';
import { useContext } from "react";
import { FormContext } from "@/components/context/FormContext";

const DownloadPage = () => {
  const { selectedDocuments } = useContext(FormContext);
  const { checkboxes, radios } = selectedDocuments;

  const combinedDocuments = [
    ...Object.entries(checkboxes).filter(([key, value]) => value).map(([key]) => ({ type: 'checkbox', name: key })),
    ...Object.entries(radios).filter(([key, value]) => value).map(([key]) => ({ type: 'radio', name: key })),
  ];
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Click to download!
          </button>
          <table>
            <tbody>
            {combinedDocuments.map(({ name }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side: Table */}
        <div>
          <p>Dear Client,</p>
          <p>PFA documents that require sign-stamp as mentioned in the below table:</p>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Document</th>
                <th>Letterhead</th>
                <th>Sign-Stamp by</th>
              </tr>
            </thead>
            <tbody>
              {combinedDocuments.map((doc, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{doc.name}</td>
                  <td>{doc.letterhead}</td>
                  <td>{doc.signStamp}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>Once done, please share the scan with us for final confirmation. Accordingly, we will proceed with online submission in BIS.</p>
          <p>Thanks and Warm Regards!</p>
        </div>
      </div>
    </div>
  );
};


export default DownloadPage;


