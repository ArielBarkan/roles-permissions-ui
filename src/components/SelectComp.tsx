// React imports
import React, { useState } from "react";
import Select from 'react-select';
import { selectType } from "../types";


const SelectComp = (props: any) => {

  const options: selectType[] = props.children;
  const isMultiProp: boolean = props.isMulti
  const isLeaveOpenOnSelect: boolean = !props.leaveOpenOnSelect
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
      closeMenuOnSelect={isLeaveOpenOnSelect}
    />
  )
}

export { SelectComp }