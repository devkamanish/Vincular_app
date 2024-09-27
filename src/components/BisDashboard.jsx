
  "use client"
  import { useState } from "react"
  import GoToHome from "./GoToHome"
  import TreeComponent from "./TreeComponent"
  import DownArrow from "./DownArrow"
import Link from "next/link"

  const BisDashboard = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({
      form2: false,
      brandAuth: false,
      unregTMR: false,
      nonExistent: false,
      factorySignAuth: false,
      irSignAuth: false,
    });
  
    const [selectedRadios, setSelectedRadios] = useState({
      affidavit: "",
      airNomination: "",
    });
  
    // Update checkbox state
    const handleCheckboxChange = (event) => {
      const { id, checked } = event.target;
      setSelectedCheckboxes((prev) => ({ ...prev, [id]: checked }));
    };
  
    // Update radio button state
    const handleRadioChange = (event) => {
      const { id } = event.target;
      setSelectedRadios((prev) => ({ ...prev, affidavit: id }));
    };
  
    // Create a query string with selected values
    const queryString = `?checkboxes=${encodeURIComponent(
      JSON.stringify(selectedCheckboxes)
    )}&radios=${encodeURIComponent(JSON.stringify(selectedRadios))}`;
    
    return (  
      <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10  ">
      <h1 className="text-4xl font-bold mb-4 mt-0">BIS Docs</h1>

      
      <div className="flex space-x-10 w-full justify-center ">
        
        {/* Left  */}
        <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <GoToHome/>
          </div>
          

          
          <div className="mb-4">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" id = "form2"
                 checked={selectedCheckboxes.form2}
                 onChange={handleCheckboxChange}
                />
                Form-II Undertaking 
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" id = "brandAuth"
                checked={selectedCheckboxes.brandAuth}
                onChange={handleCheckboxChange}
                />
                Brand Authorization
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" id = "unregTmr"
                 checked={selectedCheckboxes.unregTmr}
                 onChange={handleCheckboxChange}
                />
                Unregistered Trademark Declaration
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" id="nonexistenceBrand"
                 checked={selectedCheckboxes.nonexistenceBrand}
                 onChange={handleCheckboxChange}
                />
                Nonexistence brand owner declaration
              </label>
            </div>
          </div>

          <hr className="my-4" />

          <div>
            <h3 className="text-lg font-medium mb-2">Select Authorization:</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" id = "factoryAuth"
                 checked={selectedCheckboxes.factoryAuth}
                 onChange={handleCheckboxChange}
                />
                Factory Signatory Authorization
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" id = "irAuth"
                 checked={selectedCheckboxes.irAuth}
                 onChange={handleCheckboxChange}
                />
                IR Signatory Authorization
              </label>
            </div>
          </div>
        </div>

        {/* Middle  */}
        <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Model Affidavit Cum Undertaking</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="affidavit" className="mr-2"  id = "form3A"
              checked={selectedRadios.affidavit === "form3C"}
              onChange={handleRadioChange}
              />
              Form-III A - Manufacturer's Branch Office/Liaison Office located in India
            </label>
            <label className="flex items-center">
              <input type="radio" name="affidavit" className="mr-2" id = "form3B1" 
              checked={selectedRadios.affidavit === "form3B1"}
              onChange={handleRadioChange}
              />
              Form-III B - Brand Owner/Proprietor/Registered User/subsidiary office
            </label>
            <label className="flex items-center">
              <input type="radio" name="affidavit" className="mr-2" id = "form3B2"
              checked={selectedRadios.affidavit === "form3B2"}
              onChange={handleRadioChange}
              />
              Form-III B - Major importer/distributor/entity having marketing tie-up
            </label>
            <label className="flex items-center">
              <input type="radio" name="affidavit" className="mr-2" id = "form3C"
              checked={selectedRadios.affidavit === "form3C"}
              onChange={handleRadioChange}
              />
              Form-III C - Manufacturer located in India
            </label>
          </div>
        </div>

        {/* Right  */}
        <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">AIR Nomination</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="air-nomination" className="mr-2" id = "form4A"/>
              Form-IV Nomination - Factory liaison office/subsidiary firm/branch office
            </label>
            <label className="flex items-center">
              <input type="radio" name="air-nomination" className="mr-2" id = "form4B" />
              Form-IV Nomination - Proprietor/Registered User
            </label>
            <label className="flex items-center">
              <input type="radio" name="air-nomination" className="mr-2" id = "form4C" />
              Form-IV Nomination - Major importer/distributor
            </label>
          </div>
        </div>

      
      </div>
      <hr className="w-full border-b border-gray-300 mb-4 mt-2"></hr>
      
    {/* Renewal of registration */}
  <h2 className="text-2xl font-bold mb-4">Renewal of Registration</h2>
  <div className="flex space-x-8 mb-4 gap-16 ">
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 border rounded" id = "form6"/>
      <span className="text-gray-700">Form-VI-Application for Renewal of Licence & Production Plan Report</span>

    </label>

    <label className="flex items-center space-x-2">
      <input type="checkbox" className="h-5 w-5 border rounded" id = "annexure1" />
      <span className="text-gray-700">Annexure-1-Distributors List</span>

    </label>
  </div>

  {/* Submit */}
  <Link href={`/formbis${queryString}`} passHref className ="bg-blue-500 text-white px-4 py-2 rounded-md mb-8 w-5/6 hover:bg-blue-600 text-center" >
  <button className="" >Submit</button>
  </Link>
  <div className="text-center">
    <p className="text-gray-500">Scroll down for BIS docs tree chart</p>
    <p className="text-gray-500">(click on the applicable list to auto select docs)</p>
  </div> 

      <div>
      <div className="">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <DownArrow />
        </div>
      </div>
      </div>
  </div>



  {/* Scroll page */}
      <div className="scroll-container w-full overflow-x-auto py-4  border-gray-100">
          <TreeComponent />
        </div>
    </>
    
    )
  }

  export default BisDashboard 





