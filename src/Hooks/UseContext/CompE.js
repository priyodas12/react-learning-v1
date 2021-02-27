import React, { useContext } from 'react'
import CompF from './CompF'
import { UserContext, MultipleContext } from '../../App'



function CompE() {

  const uc = useContext(UserContext);
  const mc = useContext(MultipleContext);
  return (
    <div>
      {uc}---{mc}
      {/*<CompF></CompF>*/}
    </div>
  )
}

export default CompE
