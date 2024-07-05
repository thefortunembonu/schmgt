"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ChildrenType {
  children: React.ReactNode;
}

function reduxProvider({ children }: ChildrenType) {
  return <Provider store={store}>{children}</Provider>;
}

export default reduxProvider;
