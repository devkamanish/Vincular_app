
"use client"
import { useState } from "react";
import GoToHome from "../GoToHome";
import { useRouter } from "next/navigation";

export default function Click2() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    manufacturerName: "",
    manufacturerAddress: "",
    manufacturerSignatoryName: "",
    manufacturerSignatoryDesignation: "",
    manufacturerSignatoryAge: "",
    brand: "",

    brandOwnerSigName: "",
    brandOwnerSigDesignation :"",
    brandOwnerFirmName :"",
    brandOwnerFirmAddress :"",
    
    productName: "",
    modelNo: "",
    isStandard: "",
    labName: "",
    reportNo: "",
    reportDate: "",
    irSignatoryName: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push('/download')
    // Handle form submission, e.g., send data to an API
  };  

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      
      <h1 className="text-3xl font-bold mb-6 text-center ">Please fill the form!</h1>
      <GoToHome/>
      <form onSubmit={handleSubmit}>
        {/* Manufacturer Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1 mt-4">Manufacturer Name</label>
          <input
            type="text"
            name="manufacturerName"
            value={formData.manufacturerName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
    
        {/* Manufacturer Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Manufacturer Address</label>
          <input
            type="text"
            name="manufacturerAddress"
            value={formData.manufacturerAddress}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Manufacturer Signatory Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Manufacturer Signatory Name</label>
          <input
            type="text"
            name="manufacturerSignatoryName"
            value={formData.manufacturerSignatoryName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Manufacturer Signatory Designation */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Manufacturer Signatory Designation</label>
          <input
            type="text"
            name="manufacturerSignatoryDesignation"
            value={formData.manufacturerSignatoryDesignation}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Manufacturer Signatory Age */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Manufacturer Signatory Age</label>
          <input
            type="number"
            name="manufacturerSignatoryAge"
            value={formData.manufacturerSignatoryAge}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Brand owner signatory name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Brand Owner Signatory Name</label>
          <input
            type="text"
            name="brandOwnerSigName" 
            value={formData.brandOwnerSigName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>


        {/* Brand Owner signatory designation */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Brand Owner Signatory Designation</label>
          <input
            type="text"
            name="brandOwnerSigDesignation"
            value={formData.brandOwnerSigDesignation}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Brand Owner Firm Name */} 
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Brand Owner Firm Name</label>
          <input
            type="text"
            name="brandOwnerFirmName"
            value={formData.brandOwnerFirmName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Brand Owner Firm Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Brand Owner Firm Address</label>
          <input
            type="text"
            name="brandOwnerFirmAddress"
            value={formData.brandOwnerFirmAddress}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Model No. */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Model No.</label>
          <input
            type="text"
            name="modelNo"
            value={formData.modelNo}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* IS Standard */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IS Standard</label>
          <input
            type="text"
            name="isStandard"
            value={formData.isStandard}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Lab Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Lab Name</label>
          <input
            type="text"
            name="labName"
            value={formData.labName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Report No. */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Report No.</label>
          <input
            type="text"
            name="reportNo"
            value={formData.reportNo}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Report Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Report Date</label>
          <input
            type="date"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* IR Signatory Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Signatory Name</label>
          <input
            type="text"
            name="irSignatoryName"
            value={formData.irSignatoryName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Docs!
        </button>
      </form>
    </div>
  );
}







