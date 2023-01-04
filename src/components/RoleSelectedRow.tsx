import { Permissions } from "../db";
import { RoleContainer } from "./RoleSelectedRowWrappers";
import { SelectComp } from "./SelectComp";

const RoleSelectedRow = (props: any) => {
  const role = props.children;
  
  const returnToParent = (selectedValue: any) => {
    props.returnFunction(selectedValue)
  }

  const permissionUpdate = (selectedValue: any) => {
   console.log(selectedValue)
  }

  return (

    <RoleContainer>
      <span>{role}</span>
      <span><SelectComp returnFunction={permissionUpdate} isMulti>{Permissions}</SelectComp></span>
      <button onClick={() => returnToParent(role)} >X</button>
    </RoleContainer>
  )
}

export { RoleSelectedRow }