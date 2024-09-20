// pages/tec.js
import React from 'react';
import GoToHome from './GoToHome';

const TecDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">TEC Docs</h1>
      
      <div className="flex w-full justify-center space-x-10">

        {/* Left Section - Profile Creation */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <GoToHome/>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Profile Creation</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-bold">Annexure-I</span>
              <p className="text-gray-600 text-sm ml-4">For authorization of an individual employee of Indian OEM/AIR for performing certification related activities</p>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-bold">Annexure-III</span>
              <p className="text-gray-600 text-sm ml-4">For authorization of an Indian company by Foreign OEM as its Authorized Indian representative</p>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-bold">Affidavit</span>
              <p className="text-gray-600 text-sm ml-4">From authorized Indian Signatory</p>
            </label>
          </div>
        </div>

        {/* Right Section - Certification Application */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Certification Application</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-bold">Exemption Letter</span>
              <p className="text-gray-600 text-sm ml-4">For authorization of an individual employee of Indian OEM/AIR for performing certification related activities</p>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-bold">Proforma for non-applicability of a parameter</span>
              <p className="text-gray-600 text-sm ml-4">To be uploaded against the parameter(s) for which non-applicability is sought</p>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button className="bg-blue-500 text-white px-8 py-2 rounded-lg  hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TecDashboard;
