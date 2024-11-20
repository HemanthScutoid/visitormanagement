import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [visitorCount, setVisitorCount] = useState(1);
  const navigate = useNavigate();

  const navigateToAddVisitor = () => {
    navigate("/addnewvisitor");
  };

  return (
    <div className="admin-page-container">
      <Typography variant="h3" gutterBottom>
        Welcome, Admin
      </Typography>
      <Typography variant="body1" gutterBottom>
        Number of visitors: {visitorCount}
      </Typography>
      <div className="visitor-details">
        <p>Name : John Doe</p>
        <p>Mobile Number : +91 1234567890</p>
        <p>Date : 20-11-2024</p>
        <p>Time : 5:00PM</p>
      </div>
      <div className="buttons-container">
        <button onClick={navigateToAddVisitor}>Add Visitor</button>
      </div>
    </div>
  );
}
