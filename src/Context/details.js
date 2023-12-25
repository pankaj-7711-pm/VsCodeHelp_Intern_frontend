import { useState, useEffect, useContext, createContext } from "react";
const DetailsContext = createContext();

const DetailsProvider = ({ children }) => {
  const [det, setDet] = useState({
    dateofapp: "",
    selectedTime: "",
    monthofapp: "",
  });
  return (
    <DetailsContext.Provider value={[det, setDet]}>
      {children}
    </DetailsContext.Provider>
  );
};

//custom hook
const useDetails = () => useContext(DetailsContext);

export { useDetails, DetailsProvider };
