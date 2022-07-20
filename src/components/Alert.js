import React from 'react'

export default function Alert(props) {
    return (
            props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
                <b>{props.alerts.type}</b>:{props.alerts.message}
            </div>
    )
}

