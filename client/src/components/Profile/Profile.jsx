import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "./profile.css";
import GridExample from "./FormGrid"
import { useParams } from "react-router-dom";
import { AuthAdd, AuthRemove } from "../ReduxStore/authslice";
import { useDispatch, useSelector } from "react-redux";
export default function Profile() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state.Auth)
    console.log(selector);

if(selector.length <1){

  dispatch(AuthAdd())
}

    useEffect(()=>{

    },[id])
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
