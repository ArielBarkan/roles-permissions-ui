// React imports
import React, { useState } from 'react';

// Custom imports
import { selectType } from './types';
import { Roles } from './db';
import { SelectComp, RoleSelectedRow } from './components';

function App() {

  const [availableRoles, setAvailableRoles] = useState<selectType[]>(Roles);
  const [selectedRoles, setSelectedRoles] = useState<string[] >([]);


  const roleSelected = (option: any) => {
    console.log(">>>>>>>>>>> roleSelected = ", option);
    setAvailableRoles(
      availableRoles.filter(function (role: any) {
        return role.label !== option.label;
      })
    )

    selectedRoles.length ?
      setSelectedRoles([...selectedRoles, option?.label]) :
      setSelectedRoles([option?.label])

  }

  const roleRemoved = (option: any) => {
    console.log(">>>>>>>>>>> roleRemoved = ", option);
    setSelectedRoles(
      selectedRoles.filter(function (role: any) {
        return role !== option;
      })
    )

    setAvailableRoles([...availableRoles, { value: "d", label: option }])

  }

  

  return (
    <section>
      <SelectComp returnFunction={roleSelected}>{availableRoles}</SelectComp>
      <hr />
   
      { 
      selectedRoles.map((role, index) => (<RoleSelectedRow key={index} returnFunction={roleRemoved}>{role}</RoleSelectedRow>))
      }
    </section>
  );
}

export default App;
