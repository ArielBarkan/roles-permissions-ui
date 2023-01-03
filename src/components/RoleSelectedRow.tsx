
import { RoleContainer } from "./RoleSelectedRowWrappers";

const RoleSelectedRow = (props: any) => {
  const role = props.children;
  const returnToParent = (selectedValue: any) => {

    props.returnFunction(selectedValue)

  }

  return (

    <RoleContainer>
      <span>{role}</span>
      <button onClick={() => returnToParent(role)} >X</button>
    </RoleContainer>
  )
}

export { RoleSelectedRow }