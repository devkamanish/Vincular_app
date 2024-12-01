
"use client"
import { useState,useContext } from "react";
import GoToHome from "../GoToHome";
import { useRouter } from "next/navigation";
import { FormContext } from "../context/FormContext";


export default function Click4() {
  const { extraFields } = useContext(FormContext); 

  const router = useRouter();

  const [formData, setFormData] = useState({
    manufacturerName: "",
    manufacturerAddress: "",
    manufacturerSignatoryName: "",
    manufacturerSignatoryDesignation: "",

   

    manufacturerSignatoryPhoneNo:"",
    manufacturerSignatoryEmail:"",
    brand: "",
    productName: "",
    modelNo: "",
    isStandard: "",
    labName: "",
    reportNo: "",
    reportDate: "",
    irSignatoryName: "",
    irSignatoryDesignation :"",
    irSignatoryAge:"",
    irFirmName:"",
    irFirmAddress:"",
    irFirmPhoneNo:"",
    irFirmEmail:"",

    irSignatoryHeadName: "",
    irHeadSignatoryDesignation: "",
    manufacturerHeadSig:"",
    manufacturerHeadSigDesignation :"",
    
    
    registrationNoR:"",
    applyingPeriod:"",
    quantityMarkWithStandardMark:"",
    startDate:"",
    endDate:""
  });

 


  const { formsData,setFormsData } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,  
      [name]: value
    }));
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormsData(formData); 
    router.push('/download')
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

        {/* Manufacturer Signatory Phone no*/}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Manufacturer Signatory Phone No.</label>
          <input
            type="tel"
            name="manufacturerSignatoryPhoneNo"
            value={formData.manufacturerSignatoryPhoneNo}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

          {/* Manufacturer Signatory Email id*/}
          <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Manufacturer Signatory Email-id</label>
          <input
            type="email"
            name="manufacturerSignatoryEmail"
            value={formData.manufacturerSignatoryEmail}
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

         {/* IR Signatory Designation */}
         <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Signatory Designation</label>
          <input
            type="text"
            name="irSignatoryDesignation"
            value={formData.irSignatoryDesignation}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* IR Signatory age */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Signatory Age</label>
          <input
            type="number"
            name="irSignatoryAge"
            value={formData.irSignatoryAge}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* IR  Firm Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Firm Name</label>
          <input
            type="text"
            name="irFirmName"
            value={formData.irFirmName}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

         {/* IR Firm Address */}
         <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Firm Address</label>
          <input
            type="text"
            name="irFirmAddress"
            value={formData.irFirmAddress}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

         {/* IR  Firm Phone no */}
         <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Firm Phone No.</label>
          <input
            type="tel"
            name="irFirmPhoneNo"
            value={formData.irFirmPhoneNo}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>


       {/* IR firm Email id */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">IR Firm Email-Id</label>
          <input
            type="email"
            name="irFirmEmail"
            value={formData.irFirmEmail}
            onChange={handleChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {extraFields.irSignAuth && (
        <div>
          
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Signatory Designation</label>
            <input
             name ="irSignatoryDesignation" 
             value={formData.irSignatoryDesignation}
              onChange = {handleInputChange}  type="text"  className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Signatory Head Name</label>
            <input name = "irSignatoryHeadName" value={formData.irSignatoryHeadName} onChange={handleInputChange} type="text"  className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"  />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Head Signatory Designation</label>
            <input type="text" name = "irHeadSignatoryDesignation" value={formData.irHeadSignatoryDesignation} onChange={handleInputChange} className= "w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"  />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Firm Name</label>
            <input type="text" name = "irFirmName" value={formData.irFirmName} onChange={handleInputChange}  className= "w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          {/* <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Firm Address</label>
            <input type="text" name = "irFirmAddress" value = {formData.irFirmAddress} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div> */}

         
        </div>
      )}

      {extraFields.factoryAuth &&(
        <div>
           <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">Manufacturer Head Signatory</label>
            <input type="text" name = "manufacturerHeadSig" value={formData.manufacturerHeadSig} onChange={handleInputChange}
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700" >Manufacturer Head Signatory Designation</label>
            <input type="text" name="manufacturerHeadSigDesignation"  value={formData.manufacturerHeadSigDesignation} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
        </div>
      )}

{extraFields.form6 &&(
        <div>
         
         <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700" >Registration No. R-</label>
            <input type="number" name="registrationNoR"  value={formData.registrationNoR} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700" >Applying for period(in years)</label>
            <input type="number" name="applyingPeriod"  value={formData.applyingPeriod} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700" >Quantity marked with Standard Mark</label>
            <input type="text" name="quantityMarkWithStandardMark"  value={formData.quantityMarkWithStandardMark} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700" >Start Date</label>
            <input type="Date" name="startDate"  value={formData.startDate} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700" >End Date</label>
            <input type="date" name="endDate"  value={formData.endDate} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
        </div>
      )}

{extraFields.annexure1 &&(
        <div>
            {/* <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Signatory Designation</label>
            <input
             name ="irSignatoryDesignation" 
             value={formData.irSignatoryDesignation}
              onChange = {handleInputChange}  type="text"  className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Firm Name</label>
            <input type="text" name = "irFirmName" value={formData.irFirmName} onChange={handleInputChange}  className= "w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Firm Address</label>
            <input type="text" name = "irFirmAddress" value = {formData.irFirmAddress} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div> */}

            <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Firm Phone No.</label>
            <input type="tel" name = "irFirmPhoneNo" value = {formData.irFirmPhoneNo} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">IR Firm Email Id</label>
            <input type="email" name = "irFirmEmail" value = {formData.irFirmEmail} onChange={handleInputChange} className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

        </div>
      )}


        {/* Docs Button */}
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






