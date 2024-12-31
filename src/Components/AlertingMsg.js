import React from 'react'
import { Alert , AlertTitle  } from '@mui/material'

export default function AlertingMsg(props) {
  return (
    
    props.alert && <Alert severity={props.alert.type}>
        <AlertTitle>{props.alert.type}</AlertTitle>
        {props.alert.message}
      </Alert>
  )
}
