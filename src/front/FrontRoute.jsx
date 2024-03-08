import React from 'react'
import Tracker from '../app/Tracker'

import Front from './Front.jsx'

function FrontRoute() {

    document.title = 'LockTrackers.com'

    return (
        <React.Fragment>

            <Front/>
            <Tracker feature='front'/>

        </React.Fragment>
    )
}

export default FrontRoute
