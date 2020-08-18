import React from 'react'

const FormToggle = (props) => {
    let { on, toggle } = props
    return(
        <button onClick={toggle} className={`toggle ${on ? "on" : "off  "}`}>Create New Task</button>
    )
}

export default FormToggle