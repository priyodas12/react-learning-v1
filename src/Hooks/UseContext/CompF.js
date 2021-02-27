import React from 'react'
import { UserContext, MultipleContext } from '../../App'

function CompF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <MultipleContext.Consumer>
                {
                  mul => { return (<div>Exported value:{user},{mul}</div>) }
                }
              </MultipleContext.Consumer>)
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default CompF
