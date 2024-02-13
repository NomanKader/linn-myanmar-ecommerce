import { Paper } from '@mui/material'
import * as React from 'react'

import AppleLogin from 'react-apple-login'

export default function AppLoginComponent(){
    return(
        <Paper sx={{padding:0.5,backgroundColor:'#000',display:'flex',alignItems:'center',justifyContent:'center'}}>
<AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
        </Paper>
        
    )
}