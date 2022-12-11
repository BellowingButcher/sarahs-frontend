import React from 'react'
import GraphItem from './GraphItem'

function GraphsList(props) {
  return (
    <>
    <div className="row list-group mx-auto py-2 w-auto">
      {/* {props.data.map((object) => (
        <GraphItem key={object.id} item={object} />
      ))} */}
      <GraphItem item={props.data} />
    </div>
  </>
  )
}

export default GraphsList