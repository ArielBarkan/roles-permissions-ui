// React imports
import React, { useState } from "react";
import Select, { Options } from 'react-select';
import { selectType } from "../types";


const SelectComp = (props: any) => {

  const options: selectType[] = props.children;
  const isMultiProp: boolean = props.isMulti
  const [selectedOption, setSelectedOption] = useState();

  const returnToParent = (selectedValue: any) => {

    props.returnFunction(selectedValue)

  }

  return (
    <Select
      defaultValue={selectedOption}
      onChange={(selectedValue) => {
        returnToParent(selectedValue);
      }}
      options={options}
      isMulti={isMultiProp}
    />
  )
}

export { SelectComp }