"use client";
import { useState } from "react";
import GoToHome from "./GoToHome";
import TreeComponent from "./TreeComponent";
import DownArrow from "./DownArrow";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FormContext } from "./context/FormContext";

const BisDashboard = () => {
  const { selectedForms, setSelectedForms,setFormsData } = useContext(FormContext);
  const { selectedDocuments, setSelectedDocuments } = useContext(FormContext);
  const {extraFields, setExtraFields} = useContext(FormContext);
  const router = useRouter();

  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    form2: false,
    brandAuth: false,
    unregTmr: false,
    nonexistenceBrand: false,
    factoryAuth: false,
    irSignAuth: false,
    annexure1: false,
    form6: false,
  });




  const [selectedRadios, setSelectedRadios] = useState({
    form3A : false,
    form3B1 : false,
    form3B2: false,
    form3C : false,
    form4A : false,
    form4B : false,
    form4C : false,
  });


  const handleSubmit = () => {
    if (selectedForms.length > 0) {
      router.push("/formbis");
    } else {
      alert("Please select a form before submitting.");
    }

    setSelectedDocuments({
      checkboxes: selectedCheckboxes,
      radios: selectedRadios,
      factoryAuth : extraFields.factoryAuth,
      irSignAuth: extraFields.irSignAuth,
      annexure1:extraFields.annexure1,
      form6: extraFields.form6,
    });

    setFormsData((prev) => [
      ...(Array.isArray(prev) ? prev : []),

      {
        factoryAuth: extraFields.factoryAuth,
        irSignAuth: extraFields.irSignAuth,
        form6 : extraFields.form6,
        annexure1 : extraFields.annexure1
      },
    ]);

  };

  // const handleSubmit = () => {
  //   console.log("Selected Checkboxes:", selectedCheckboxes);
  //   console.log("Selected Radios:", selectedRadios);
  
  //   const hasSelectedCheckbox = Object.values(selectedCheckboxes).some((isChecked) => isChecked);
  //   const hasSelectedRadio = Object.values(selectedRadios).some((isChecked) => isChecked);
  
  //   if (hasSelectedCheckbox || hasSelectedRadio) {
  //     router.push("/formbis");
     
  //   } else {
  //     alert("Please select a form before submitting.");
  //   }
  //   setSelectedDocuments({
  //     checkboxes: selectedCheckboxes,
  //     radios: selectedRadios,
  //   });
  // };
  
  
  const handleTreeClick = (targetIds) => {

    const newCheckboxes = {
      form2: false,
      brandAuth: false,
      unregTmr: false,
      nonexistenceBrand: false,
      factoryAuth: false,
      irSignAuth: false,
      annexure1: false,
      form6: false,
    };


    const newRadios = {
      form3A : false,
      form3B1 : false,
      form3B2: false,
      form3C : false,
      form4A : false,
      form4B : false,
      form4C : false,

    } 

    targetIds.forEach((id) => {
      if (newCheckboxes.hasOwnProperty(id)) {
        newCheckboxes[id] = true;
      } else if (newRadios.hasOwnProperty(id)){
        newRadios[id] = true;
      }
    });

    setSelectedCheckboxes(newCheckboxes);
    setSelectedRadios(newRadios); 
    updateSelectedForms(newCheckboxes, newRadios);
  };

  const updateSelectedForms = (checkboxes, radios) => {
    const newForms = [];

    switch (true) {
      case radios.affidavit === "form3C" && checkboxes.brandAuth:
        newForms.push("2");
        break;

      case checkboxes.unregTmr && radios.affidavit === "form3A":
        newForms.push("4");
        break;

      case checkboxes.unregTmr && radios.airNomination === "form4C":
        newForms.push("4");
        break;

      case checkboxes.brandAuth && radios.airNomination === "form4A":
        newForms.push("4");
        break;

      case radios.affidavit === "form3B1":
        newForms.push("4");
        break;

      case checkboxes.nonexistenceBrand:
        newForms.push("4");
        break;

      case radios.airNomination === "form4A" || radios.affidavit === "form3B2":
        newForms.push("3");
        break;
      
      case checkboxes.unregTmr:
        newForms.push("2")
        break;

      case checkboxes.form2:
        newForms.push("1");
        break;

      default:
        break;

    }

    setSelectedForms(newForms);
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedCheckboxes((prev) => {
      if (checked) {
        return { ...prev, [id]: true }; 
      } else {
        const updated = { ...prev };
        delete updated[id]; 
        return updated;
      }
    });
      };
      
      
 //Affidavid
  const handleRadioChange = (event) => {
    const { id ,checked} = event.target;

    setSelectedRadios((prev) => {
      const updatedRadios = { ...prev };
      updatedRadios.form3A = false;
      updatedRadios.form3B1 = false;
      updatedRadios.form3B2 = false;
      updatedRadios.form3C = false;
      updatedRadios[id] = true;
      return updatedRadios;
    });

  };



  const handleRadioChangeAir = (event) => {
    const { id,checked } = event.target;
    setSelectedRadios((prev) => {
      const updatedRadios = { ...prev };
      updatedRadios.form4A = false;
      updatedRadios.form4B = false;
      updatedRadios.form4C = false;
      updatedRadios[id] = true; 
      return updatedRadios;
    });
  

  };


  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100 ">
        <h1 className="mt-0 mb-4 text-4xl font-bold">BIS Docs</h1>

        <div className="flex justify-center w-full space-x-10 ">
          {/* Left  */}
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <GoToHome />
            </div>

            <div className="mb-4">
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="form2"
                    checked={selectedCheckboxes.form2}
                    onChange={handleCheckboxChange}
                  />
                  Form-II Undertaking
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="brandAuth"
                    checked={selectedCheckboxes.brandAuth}
                    onChange={handleCheckboxChange}
                  />
                  Brand Authorization
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="unregTmr"
                    checked={selectedCheckboxes.unregTmr}
                    onChange={handleCheckboxChange}
                  />
                  Unregistered Trademark Declaration
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="nonexistenceBrand"
                    checked={selectedCheckboxes.nonexistenceBrand}
                    onChange={handleCheckboxChange}
                  />
                  Nonexistence brand owner declaration
                </label>
              </div>
            </div>

            <hr className="my-4" />

            <div>
              <h3 className="mb-2 text-lg font-medium">
                Select Authorization:
              </h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="factoryAuth"
                    checked={extraFields.factoryAuth}
                    onChange={(e) =>
                      setExtraFields({
                        ...extraFields,
                        factoryAuth : e.target.checked,
                      })
                    }
                  />

                  Factory Signatory Authorization
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    id="irSignAuth"
                    checked={extraFields.irSignAuth}
                    onChange={(e) =>
                      setExtraFields({
                        ...extraFields,
                        irSignAuth : e.target.checked,
                      })
                    }          
                     />
                  IR Signatory Authorization
                </label>
              </div>
            </div>
          </div>

          {/* Middle  */}
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-semibold">
              Model Affidavit Cum Undertaking
            </h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="affidavit"
                  className="mr-2"
                  id="form3A"
                  checked={selectedRadios.form3A}
                  onChange={handleRadioChange}
                />
                Form-III A - Manufacturer&apos;s Branch Office/Liaison Office located
                in India
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="affidavit"
                  className="mr-2"
                  id="form3B1"
                  checked={selectedRadios.form3B1}
                  onChange={handleRadioChange}
                />
                Form-III B - Brand Owner/Proprietor/Registered User/subsidiary
                office
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="affidavit"
                  className="mr-2"
                  id="form3B2"
                  checked={selectedRadios.form3B2}
                  onChange={handleRadioChange}
                />
                Form-III B - Major importer/distributor/entity having marketing
                tie-up
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="affidavit"
                  className="mr-2"
                  id="form3C"
                  checked={selectedRadios.form3C}
                  onChange={handleRadioChange}
                />
                Form-III C - Manufacturer located in India
              </label>
            </div>
          </div>

          {/* Right  */}
          <div className="w-1/3 p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-semibold">AIR Nomination</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="airNomination"
                  className="mr-2"
                  id="form4A"
                  checked={selectedRadios.form4A}
                  onChange={handleRadioChangeAir}


                />
                Form-IV Nomination - Factory liaison office/subsidiary
                firm/branch office
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="airNomination"
                  className="mr-2"
                  id="form4B"
                  checked={selectedRadios.form4B}
                  onChange={handleRadioChangeAir}

                />
                Form-IV Nomination - Proprietor/Registered User/subsidiary firm/liaison office of the Brand/Trademark
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="airNomination"
                  className="mr-2"
                  id="form4C"
                  checked={selectedRadios.form4C}
                  onChange={handleRadioChangeAir}
                />
                Form-IV Nomination - Major importer/distributor
              </label>
            </div>
          </div>
        </div>
        <hr className="w-full mt-2 mb-4 border-b border-gray-300"></hr>

        {/* Renewal of registration */}
        <h2 className="mb-4 text-2xl font-bold">Renewal of Registration</h2>
        <div className="flex gap-16 mb-4 space-x-8 ">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 border rounded"
              id="form6"
              name="form6"
              checked={extraFields.form6}
              onChange={(e) =>
                setExtraFields({
                  ...extraFields,
                  form6 : e.target.checked,
                })
              }
            />
            <span className="text-gray-700">
              Form-VI-Application for Renewal of Licence & Production Plan
              Report
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-5 h-5 border rounded"
              id="annexure1"
              name= "annexure1"
              checked={extraFields.annexure1}
              onChange={(e) =>
                setExtraFields({
                  ...extraFields,
                  annexure1 : e.target.checked,
                })
              }
            />
            <span className="text-gray-700">Annexure-1-Distributors List</span>
          </label>
        </div>

        {/* Submit */}

        <button
          onClick={handleSubmit}

          className="w-5/6 px-4 py-2 mb-8 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>

        <div className="text-center">
          <p className="text-gray-500">Scroll down for BIS docs tree chart</p>
          <p className="text-gray-500">
            (click on the applicable list to auto select docs)
          </p>
        </div>

        <div>
          <div className="">
            <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
              <DownArrow />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll page */}
      <div className="w-full py-4 overflow-x-auto border-gray-100 scroll-container">
        <TreeComponent onNodeClick={handleTreeClick} />
      </div>
    </>
  );
};

export default BisDashboard;


