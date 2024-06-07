import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "./Dashboard.css";
import DashboardModal from "../../Components/DashboardModal";
import DashboardContextMenu from "../../Components/DashboardContextMenu";

function Dashboard() {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colDefs, setColDefs] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleClose = () => setShow(false);

  const contextMenuRef = useRef(null);
  const getLaptops = () => {
    axios.get("http://localhost:5000/api/laptops").then((response) => {
      console.log(response.data);
      setLaptops(response.data);

      const columnDefs = [
        {
          field: "brand",
          filter: true,
          sortable: true,
          lockPosition: true,
        },
        { field: "model", filter: true, lockPosition: true },
        { field: "processor", filter: true },
        { field: "ram", filter: true },
        { field: "storage", filter: true },
        { field: "screenSize", filter: true },
        { field: "operatingSystem", filter: true },
        { field: "weight", filter: true },
        { field: "batteryLife", filter: true },
        { field: "pricePerDay", filter: true },
        { field: "monthlyPrice", filter: true },
        { field: "discount", filter: true },
        { field: "year", filter: true },
        { field: "availability", filter: true },
      ];

      setColDefs(columnDefs);
      setLoading(false);
    });
  };
  useEffect(() => {
    getLaptops();

    document.addEventListener("click", (event) => {
      const element = contextMenuRef.current;
      if (element) {
        element.style.display = "none";
      }
    });
  }, []);

  const handleContextMenu = (event) => {
    const element = contextMenuRef.current;
    if (element) {
      element.style.display = "block";
      console.log(event);
      element.style.left = event.event.clientX + "px";
      element.style.top = event.event.clientY + "px";
      setSelectedRow(event.data);
    }
  };

  const handleView = () => {
    setEditMode(false);
    setShow(true);
  };

  const handleEdit = () => {
    setShow(true);
    setEditMode(true);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/laptops/${selectedRow._id}`)
      .then((response) => {
        console.log(response.data);
        getLaptops();
        handleClose();
      });
  };

  return (
    <div className="container">
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div
          onContextMenu={(event) => event.preventDefault()}
          className="ag-theme-quartz"
          style={{ height: 500 }}
        >
          <AgGridReact
            rowData={laptops}
            columnDefs={colDefs}
            rowSelection="multiple"
            pagination={true}
            paginationPageSize={10}
            onCellContextMenu={handleContextMenu}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
              editable: false,
              pivot: true,
            }}
          />
          <DashboardContextMenu
            handleView={handleView}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            contextMenuRef={contextMenuRef}
          />
        </div>
      )}
      <DashboardModal
        show={show}
        handleClose={handleClose}
        selectedRow={selectedRow}
        editMode={editMode}
      />
    </div>
  );
}

export default Dashboard;
