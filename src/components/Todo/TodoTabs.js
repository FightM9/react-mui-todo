import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

export default function TodoTabs({ tab, setTab }) {
  const handleChange = (evt, newTabIndex) => {
    setTab(newTabIndex);
  };

  return (
    <Tabs
      value={tab}
      variant="fullWidth"
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      <Tab 
        icon={<AppsRoundedIcon />}
        iconPosition="start"
        label="All" />
      <Tab
        icon={<AccessTimeRoundedIcon />}
        iconPosition="start"
        label="Pending"
      />
      <Tab 
        icon={<CheckIcon />}
        iconPosition="start" 
        label="Completed" />
    </Tabs>
  );
}
