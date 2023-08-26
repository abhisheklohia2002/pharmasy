import React from "react";
import { Box } from "@chakra-ui/react";
import "./profile.css";
import GridExample from "./FormGrid"
import { useParams } from "react-router-dom";
export default function Profile() {
    const {id} = useParams();
    console.log(id)
  const arrow = ">";
  return (
    <>
      <Box>
        <Box className="header_profile">
          Home
          &nbsp;
          {arrow}
          &nbsp;
          Account
          &nbsp;
          {arrow}
          &nbsp;
          Profile
          &nbsp;
          {arrow}
          &nbsp;
          Edit
        </Box>

<Box className="Main_profile">
<GridExample email = {id}  />
</Box>

</Box>
    </>
  );
}
