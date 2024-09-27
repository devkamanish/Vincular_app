"use client";

import { useState } from "react";
import GoToHome from "./GoToHome";

const FormBis = () => {
  const [formData, setFormData] = useState({
    manufacturerName: "",
    manufacturerAddress: "",
    brand: "",
    productName: "",
    modelNo: "",
    isStandard: "",
    labName: "",
    reportNo: "",
    reportDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      {/* Home Icon */}
      <div className="flex justify-center mb-4">
       
        <GoToHome/>
      </div>
    
      {/* Title */}
      <h1 className="text-xl font-semibold text-center mb-4">Please fill the form!</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg p-4"
      >
        {/* Manufacturer Name */}
        <div className="mb-4">
          <input
            id="manufacturerName"
            name="manufacturerName"
            type="text"
            value={formData.manufacturerName}
            onChange={handleChange}
            placeholder="Manufacturer Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Manufacturer Address */}
        <div className="mb-4">
          <input
            id="manufacturerAddress"
            name="manufacturerAddress"
            type="text"
            value={formData.manufacturerAddress}
            onChange={handleChange}
            placeholder="Manufacturer Address"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <input
            id="brand"
            name="brand"
            type="text"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <input
            id="productName"
            name="productName"
            type="text"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Model No. */}
        <div className="mb-4">
          <input
            id="modelNo"
            name="modelNo"
            type="text"
            value={formData.modelNo}
            onChange={handleChange}
            placeholder="Model No."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* IS Standard */}
        <div className="mb-4">
          <input
            id="isStandard"
            name="isStandard"
            type="text"
            value={formData.isStandard}
            onChange={handleChange}
            placeholder="IS Standard"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Lab Name */}
        <div className="mb-4">
          <input
            id="labName"
            name="labName"
            type="text"
            value={formData.labName}
            onChange={handleChange}
            placeholder="Lab Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Report No. & Report Date */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <input
              id="reportNo"
              name="reportNo"
              type="text"
              value={formData.reportNo}
              onChange={handleChange}
              placeholder="Report No."
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="w-1/2">
            <input
              id="reportDate"
              name="reportDate"
              type="date"
              value={formData.reportDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* IR Signatory Name */}
        <div className="mb-6">
          <input
            id="signatoryName"
            name="signatoryName"
            type="text"
            value="Balbir Singh Bora"
            readOnly
            className="w-full px-3 py-2 border border-green-500 rounded focus:outline-none bg-gray-50 text-green-600"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600"
          >
            Docs!
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBis;
