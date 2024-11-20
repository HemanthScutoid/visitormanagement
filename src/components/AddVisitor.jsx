import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddVisitor() {
  const [formData, setFormData] = useState({
    purpose: "",
    date: "",
    time: "",
    noOfVisitors: "",
    organization: "",
    requestedBy: "",
    name: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();
  const textFieldStyles = {
    color: "#b09b84",
    "& .MuiInputBase-input": {
      color: "#b09b84",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#b09b84",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b09b84", // Border color
      },
      "&:hover fieldset": {
        borderColor: "#b09b84", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b09b84", // Focused border color
      },
    },
    "& .MuiInputLabel-root": {
      color: "#b09b84", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#b09b84", // Label color when focused
    },
    "& .MuiSelect-icon": {
      color: "#b09b84", // Dropdown icon color
    },
    "& .MuiInputAdornment-root": {
      color: "#b09b84", // Icon color
    },
    "& .MuiInputAdornment-root .MuiIconButton-root": {
      color: "#b09b84", // Date icon color
    },
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddVisitor = () => {
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    if (allFieldsFilled) {
      alert(`Visitor Added:\n${JSON.stringify(formData, null, 2)}`);
      navigate("/");
    } else {
      alert("Please fill all the fields before submitting.");
    }
  };

  return (
    <Box p={3} className="form-container">
      <Typography variant="h4" gutterBottom>
        Add New Visitor
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleInputChange}
            sx={textFieldStyles}
          >
            <MenuItem value="Meeting">Meeting</MenuItem>
            <MenuItem value="Delivery">Delivery</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="No. of Visitors"
            type="number"
            name="noOfVisitors"
            value={formData.noOfVisitors}
            onChange={handleInputChange}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Visitor's Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mobile Number"
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>
      <button className="form-submit-button" onClick={handleAddVisitor}>
        Submit
      </button>
    </Box>
  );
}
