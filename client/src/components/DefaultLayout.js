/* eslint-disable no-undef */
import React from 'react'

function DefaultLayout() {
  return (
    <div>
        <div className="header">
            <div className="d-flex justify-content-between">

                <h1>De Ride</h1>

                <button>user</button>

            </div>
        </div>
        <div className="content">
             {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout