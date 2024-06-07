import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DashboardModal({ show, handleClose, editMode, selectedRow }) {
  console.log(selectedRow);
  const [selectedLaptop, setSelectedLaptop] = useState({});
  const notRequiredInputs = ["_id", "__v"];
  const inputs = Object.keys(selectedRow).filter(
    (key) => !notRequiredInputs.includes(key)
  );

  console.log(inputs);
  useEffect(() => {
    setSelectedLaptop(selectedRow);
  }, [selectedRow]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedLaptop({ ...selectedLaptop, [name]: value });
  };

  const handleLaptopEdit = () => {
    console.log(selectedLaptop);
    axios
      .put(`http://localhost:5000/api/laptops/${selectedLaptop._id}`, {
        ...selectedLaptop,
      })
      .then((response) => {
        console.log(response.data);
        handleClose();
      });
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{editMode ? "Edit Laptop" : "Laptop Details"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {editMode ? (
          <div>
            <form>
              <div className="row">
                {inputs.map((input) => (
                  <div className="mb-3 col-md-6" key={input}>
                    <label className="form-label">{input}</label>
                    <input
                      type="text"
                      className="form-control"
                      name={input}
                      value={selectedLaptop[input]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </form>
          </div>
        ) : (
          <div>
            <img
              src={
                "https://source.unsplash.com/1600x900/?" + selectedLaptop.brand
              }
              height={400}
              width={"100%"}
              alt=""
            />
            <p>Brand: {selectedLaptop.brand}</p>
            <p>Model: {selectedLaptop.model}</p>
            <p>Processor: {selectedLaptop.processor}</p>
            <p>RAM: {selectedLaptop.ram}</p>
            <p>Storage: {selectedLaptop.storage}</p>
            <p>Screen Size: {selectedLaptop.screenSize}</p>
            <p>Operating System: {selectedLaptop.operatingSystem}</p>
            <p>Weight: {selectedLaptop.weight}</p>
            <p>Battery Life: {selectedLaptop.batteryLife}</p>
            <p>Price Per Day: {selectedLaptop.pricePerDay}</p>
            <p>Monthly Price: {selectedLaptop.monthlyPrice}</p>
            <p>Discount: {selectedLaptop.discount}</p>
            <p>Year: {selectedLaptop.year}</p>
            <p>
              Availability:{" "}
              {selectedLaptop.availability ? "Available" : "Not Available"}
            </p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} size="sm">
          Close
        </Button>
        {editMode && (
          <Button variant="primary" onClick={handleLaptopEdit} size="sm">
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default DashboardModal;
