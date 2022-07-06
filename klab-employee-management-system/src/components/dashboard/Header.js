import React from "react";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { employeesData } from "../../data/index";
import { CSVLink } from "react-csv";

function Header({ setIsAdding }) {
  const exportToPdfHandler = () => {
    const data = [];
    employeesData.forEach((element) => {
      data.push([
        element.id,
        element.firstName,
        element.lastName,
        element.email,
        element.position,
      ]);
    });
    const doc = new jsPDF();
    console.log(data);
    autoTable(doc, {
      head: [["ID.", "First Name", "Last Name", "Email", "Position"]],
      body: data, // Must be arrays instead of objects!! that's the reason for Foreach to structure all elements
    });

    doc.save("klabEmployees.pdf");
  };

  const fileHeaders = [
    { label: "ID", key: "id"},
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Position", key: "position" },
  ];

  const csvReport = {
    data: employeesData,
    headers: fileHeaders,
    filename: "Klab_employees_list.csv",
  };
  console.log(csvReport);


  let Navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    Navigate("/");
  };
  return (
    <header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Employee Management Software</h1>
        <Link to={"/"}>
          <button className="round-button" onClick={logoutHandler}>
            Logout
          </button>
        </Link>
      </div>
      <div
        style={{
          marginTop: "30px",
          marginBottom: "18px",
        }}
      >
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
        <button onClick={exportToPdfHandler} className="round-button">
          Export data to pdf
        </button>
        <CSVLink {...csvReport}>
          <button className="round-button">Export data to csv</button>
        </CSVLink>
        ;
      </div>
    </header>
  );
}

export default Header;
