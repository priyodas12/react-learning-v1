import React from 'react'
import { UserContext } from '../../App'

function CompF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => <div>Exported value:{user}</div>
        }
      </UserContext.Consumer>
    </div>
  )
}

export default CompF
