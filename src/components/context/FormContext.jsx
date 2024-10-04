"use client"

import { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [selectedForms, setSelectedForms] = useState([]);

  return (
    <FormContext.Provider value={{ selectedForms, setSelectedForms }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };


