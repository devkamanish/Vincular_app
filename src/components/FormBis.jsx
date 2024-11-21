

"use client"
import { useContext } from "react";
import { FormContext } from "@/components/context/FormContext";
import Click1 from "./forms/Click1";
import Click2 from "./forms/Click2n3n4";
import Click4 from "./forms/Click5n6";
import Click7 from "./forms/Click7n8n9n10n11n12n13n14";

const FormPage = () => {
  const { selectedForms } = useContext(FormContext);
  console.log(selectedForms);
  
  return (
    <div>
      {selectedForms.map((formId) => (
        <div key={formId}>
          {/* Render the forms dynamically based on the formId */}
          {formId === "1" && <Click1 />}
          {formId === "2" && <Click2/>}
          {formId === "3" && <Click4/>}
          {formId === "4" && <Click7/>}
          {formId ===4}
          {/* Add other forms as needed */}
          
        </div>  
      ))} 
    </div>
  );
};

  


export default FormPage;






