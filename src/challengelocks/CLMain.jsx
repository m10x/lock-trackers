import React from 'react'
import useWindowSize from '../util/useWindowSize.jsx'

function CLMain() {

    const {width} = useWindowSize()
    const smallWindow = width <= 560

    const divStyle = {
        width: '100%', padding: '0px', marginBottom: 12, alignItems: 'top',
        marginLeft: 'auto', marginRight: 'auto', justifyContent: 'top'
    }
    const divFlexStyle = !smallWindow ? {display: 'flex'} : {}
    const combinedDivStyle = {
        ...divStyle,
        ...divFlexStyle
    }
    const pagePadding = !smallWindow
        ? '24px 24px 32px 24px'
        : '8px 8px 32px 8px'

    return (
        <div style={{
            minWidth: '320px', maxWidth: 800, height: '100%',
            padding: pagePadding, backgroundColor: '#223',
            marginLeft: 'auto', marginRight: 'auto',
            fontSize: '1.5rem', lineHeight: 0.8, textAlign:'center'
        }}>

            <div style={{fontSize:'.9rem', width:'100%', textAlign:'center', marginTop:20}}>

                Challenge Lock Tracker - coming soonish
            </div>
        </div>
    )
}

export default CLMain
