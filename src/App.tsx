// React imports
import React, { useState } from 'react';

// Custom imports
import { Roles, Permissions } from './db';
import { SelectComp, RoleSelectedRow } from './components';

function App() {

  const [availableRoles, setAvailableRoles] = useState(Roles);
  const [selectedRoles, setSelectedRoles] = useState([""]);


  const roleSelected = (option: any) => {
    console.log(">>>>>>>>>>> roleSelected = ", option);
    setAvailableRoles(
      availableRoles.filter(function (role: any) {
        return role.label != option.label;
      })
    )

    setSelectedRoles([...selectedRoles, option.label])

  }

  const roleRemoved = (option: any) => {
    console.log(">>>>>>>>>>> roleRemoved = ", option);
    setSelectedRoles(
      selectedRoles.filter(function (role: any) {
        return role != option;
      })
    )

    setAvailableRoles([...availableRoles, { value: "d", label: option }])

  }

  const permissionSelected = (option: any) => {
    console.log(">>>>>>>>>>> permissionSelected = ", option);
  }

  return (
    <section>
      <SelectComp returnFunction={roleSelected}>{availableRoles}</SelectComp>
      <hr />
      <SelectComp returnFunction={permissionSelected} isMulti>{Permissions}</SelectComp>
      <hr />
      {selectedRoles.map((role, index) => (<RoleSelectedRow key={index} returnFunction={roleRemoved}>{role}</RoleSelectedRow>))}
    </section>
  );
}

export default App;
