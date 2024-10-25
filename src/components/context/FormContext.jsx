"use client"

import { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [selectedForms, setSelectedForms] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState({
    checkboxes: {},
    radios: {},
  });

  const [formsData, setFormsData] = useState({});
  

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
    <FormContext.Provider value={{ selectedForms, setSelectedForms,selectedDocuments,setSelectedDocuments,formsData, setFormsData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };


