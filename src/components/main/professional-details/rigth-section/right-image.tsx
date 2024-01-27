import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import image from "../../../../assets/profilePic.jpg";
import { useSelector } from "react-redux";

const ProfilePicture = () => {
  const { profilePic } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  console.log("========== profilePic", profilePic);
  return (
    <Box>
      <Image
        width={350}
        height={100}
        src={profilePic || image}
        alt="Profile Pic"
      />
    </Box>
  );
};

export default ProfilePicture;
