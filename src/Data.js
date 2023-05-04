import React from "react";
import { use } from "react";

export function Data({ type, hasError = false }) {
  const data = use(getDataFromType(type, hasError));
  return (
    <div>
      {type}: {data}
    </div>
  );
}

function getDataFromType(type, hasError) {}
