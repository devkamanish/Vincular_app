import React from 'react'

const BisDashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 border-b-4 ">
    <h1 className="text-4xl font-bold mb-4 mt-0">BIS Docs</h1>

    
    <div className="flex space-x-10 w-full justify-center ">
      
      {/* Left  */}
      <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/Home_icon.png" 
            alt="Home" 
            className="w-12 h-12" 
          />
        </div>

        
        <div className="mb-4">
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Form-II Undertaking
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Brand Authorization
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Unregistered Trademark Declaration
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Nonexistence brand owner declaration
            </label>
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <h3 className="text-lg font-medium mb-2">Select Authorization:</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Factory Signatory Authorization
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
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
            <input type="radio" name="affidavit" className="mr-2" />
            Form-III A - Manufacturer's Branch Office/Liaison Office located in India
          </label>
          <label className="flex items-center">
            <input type="radio" name="affidavit" className="mr-2" />
            Form-III B - Brand Owner/Proprietor/Registered User/subsidiary office
          </label>
          <label className="flex items-center">
            <input type="radio" name="affidavit" className="mr-2" />
            Form-III B - Major importer/distributor/entity having marketing tie-up
          </label>
          <label className="flex items-center">
            <input type="radio" name="affidavit" className="mr-2" />
            Form-III C - Manufacturer located in India
          </label>
        </div>
      </div>

      {/* Right  */}
      <div className="w-1/3 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">AIR Nomination</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="air-nomination" className="mr-2" />
            Form-IV Nomination - Factory liaison office/subsidiary firm/branch office
          </label>
          <label className="flex items-center">
            <input type="radio" name="air-nomination" className="mr-2" />
            Form-IV Nomination - Proprietor/Registered User
          </label>
          <label className="flex items-center">
            <input type="radio" name="air-nomination" className="mr-2" />
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
    <input type="checkbox" className="h-5 w-5 border rounded" />
    <span className="text-gray-700">Form-VII-Application for Renewal of Licence & Production Plan Report</span>

  </label>

  <label className="flex items-center space-x-2">
    <input type="checkbox" className="h-5 w-5 border rounded" />
    <span className="text-gray-700">Annexure-1-Distributors List</span>

  </label>
</div>

{/* Submit */}
<button className="bg-blue-600 text-white px-4 py-2 rounded-md mb-8 w-5/6 hover:bg-blue-400">Submit</button>

<div className="text-center">
  <p className="text-gray-500">Scroll down for B&S docs tree chart</p>
  <p className="text-gray-500">(click on the applicable list to auto-select docs)</p>
</div> 


 </div>



{/* Scroll page */}
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    <h1>Hello world</h1>
  </div>
  </>
  
  )
}

export default BisDashboard 



