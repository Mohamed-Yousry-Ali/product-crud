import { useState } from "react";
import { productList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

const App = () => {
  //State
  const [isOpen, setIsOpen] = useState(false);

  //Handler
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //Render Product
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container">
      <Button
        width="w-full"
        className="bg-indigo-600 hover:bg-indigo-800"
        onClick={() => {
          openModal();
        }}
      >
        Add
      </Button>
      <div className=" m-5 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 rounded-md ">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a New Product">
        <div className="flex items-center space-x-3">
          <Button width="w-full" className="bg-indigo-600 hover:bg-indigo-800">
            Submit
          </Button>
          <Button width="w-full" className="bg-gray-400 hover:bg-gray-800">
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
