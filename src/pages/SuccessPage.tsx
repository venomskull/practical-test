import React from 'react'
import { withRouter } from 'react-router-dom'


const SuccessPage: React.FC<{}> = (props) => {
    return (
        <div className='successPage'>
            This is the success page
        </div>
    )
}

export default withRouter(SuccessPage)