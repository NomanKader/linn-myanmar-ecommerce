import {Login} from '@mui/icons-material'
import {Grid,Paper,Typography} from '@mui/material';
export default function SettingPaprtComponent({data,history}){
return(
    <Grid container spacing={2}>
        {data.map((item)=>(
            <Grid item xs={12} lg={6}>
      <Paper sx={{ml:1,mr:1,mt:3,borderRadius:5,height:50,flex:1,flexDirection:'row',display:'flex'}} elevation={3} onClick={()=>history.push('/login')}>
        {/* show icon of login from material */}
        <div style={{marginRight:30,flex:1,flexDirection:'row',display:'flex'}}>
        <Login color="primary" sx={{mr:3,ml:3,mt:1.5}}/>
        <Typography variant="h6" sx={{mt:1}}>{item.title}</Typography>
        </div>
      </Paper>
      </Grid>
        ))}
      
      
     </Grid>
)
}