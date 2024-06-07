import React from "react";

function DashboardContextMenu({ handleView, handleEdit, contextMenuRef,handleDelete }) {
  return (
    <div className="context-menu shadow border" ref={contextMenuRef}>
      <ul>
        <li onClick={handleView}>View</li>
        <li onClick={handleEdit}>Edit</li>
        <li onClick={handleDelete}>Delete</li>
      </ul>
    </div>
  );
}

export default DashboardContextMenu;
