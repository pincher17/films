import React from "react";
import { useAppSelector } from "../../hook";
import { AllBlurDiv } from "./AllBlur.styles";

const AllBlur: React.FC = () => {
  const mobileSearch = useAppSelector((state) => state.search.mobileSearch);


  return (
    <AllBlurDiv active={mobileSearch} />
  )
};

export default AllBlur;
