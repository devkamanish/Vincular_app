"use client"

import { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [selectedForms, setSelectedForms] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState({
    checkboxes: {},
    radios: {},
    formsData :{},
  });

  const [extraFields, setExtraFields] = useState({
    factoryAuth	: false,
    irSignAuth: false,
  });
  
  
  const [formsData, setFormsData] = useState([]);
  

  const updateSelectedForms = (form) => {
    setSelectedForms((prevForms) => {
      // Check if the form is already selected, if so, remove it
      if (prevForms.includes(form)) {
        return prevForms.filter((f) => f !== form);
      }
      return [...prevForms, form];
    });
  };
 
  

  return (
    <FormContext.Provider value={{ selectedForms, setSelectedForms,selectedDocuments,setSelectedDocuments,formsData, setFormsData ,extraFields, setExtraFields}}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };


