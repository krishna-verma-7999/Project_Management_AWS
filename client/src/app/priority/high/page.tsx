import React from "react";
import { Priority } from "@/store/api";
import ReusablePriority from "../_components/ReusablePriority";

const Urgent = () => {
  return <ReusablePriority priority={Priority.HIGH} />;
};

export default Urgent;