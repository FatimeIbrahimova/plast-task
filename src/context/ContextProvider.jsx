import { createContext, useState } from "react";
export const MainContext = createContext("");

function ContextProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedProductId2, setSelectedProductId2] = useState(null);
    const [selectedProductId3, setSelectedProductId3] = useState(null);

    const openModal = (id) => {
      setIsModalOpen(true);
      console.log(id);
      setSelectedProductId(id);
      setSelectedProductId2(id);
      setSelectedProductId3(id);
    };
    console.log(selectedProductId2);
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProductId(null);
      setSelectedProductId2(null);
      setSelectedProductId3(null);
    };
    console.log(selectedProductId);
	const values = {
		isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        selectedProductId,
        selectedProductId2,
        selectedProductId3,
	};

	return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
}
export default ContextProvider;