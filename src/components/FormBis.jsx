

"use client"
import { useContext } from "react";
import { FormContext } from "@/components/context/FormContext";
import Click1 from "./forms/Click1";

const FormPage = () => {
  const { selectedForms } = useContext(FormContext);

  return (
    <div>
      <h1>Selected Forms</h1>
      {selectedForms.map((formId) => (
        <div key={formId}>
          {/* Render the forms dynamically based on the formId */}
          {formId === "form2" && <Click1/>}
          {formId === "form3C" && <Form3C />}
          {formId === "unregTmr" && <UnregTMR />}
          {/* Add other forms as needed */}
        </div>
      ))}
    </div>
  );
};
  
const Form2 = () => (
  <div>
    <h2>Form-II (Undertaking)</h2>
    {/* Form-II content */}
  </div>
);

const Form3C = () => (
  <div>
    <h2>Form-III C</h2>
    {/* Form-III C content */}
  </div>
);

const UnregTMR = () => (
  <div>
    <h2>Unregistered TMR Declaration</h2>
    {/* Unregistered TMR content */}
  </div>
);

export default FormPage;






