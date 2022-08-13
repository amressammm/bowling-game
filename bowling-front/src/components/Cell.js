import React from 'react'
import classes from '../styles/cell.module.css'

export const Cell = (props) => {
  return (
    <div className={classes.cell}>
    <div className={classes.frame}>
    <p className={classes.fFrame}>{(props.first=== 'undefined')?("-"):(props.first)}</p>
    <p className={classes.sFrame}>{(props.second=== 'undefined')?("-"):(props.second)}</p>
    </div>
     <p className={classes.total}>{(props.total=== 'undefined')?("-"):(props.total)}</p>
     </div>
  )
}
export default Cell
