import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';


export default function TodoTabs({value, setValue}) {
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab icon={<AppsRoundedIcon />} iconPosition="start" label="All"/>
      <Tab icon={<AccessTimeRoundedIcon />} iconPosition="start" label="Pending" />
      <Tab icon={<CheckIcon />} iconPosition="start" label="Completed" />
    </Tabs>
  );
}

