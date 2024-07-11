import { Grid } from "@mui/material";

export function Robot() {

    return (
        <div className="Robot_container" >
            <Grid container spacing={0} direction='column' justifyContent='center' alignItems='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginBottom:'0'}}>
                    <div style={{ width:'3vw', height:'3vw', marginTop:'10px',paddingBottom:'0', border:' 2px solid blue'}}>
                        <h4 style={{marginTop:'5px'}}>0   0</h4>
                    </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{paddingTop:'0'}}>
                <div style={{paddingTop:'0'}}>
                    <h4 style={{paddingTop:'0'}}>|</h4>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginBottom:'0'}}>
                    <div style={{ width:'2vw', height:'3vw', marginTop:'10px',paddingBottom:'0', border:' 2px solid blue'}}>
                        
                    </div>
              </Grid>
              

            </Grid>
        </div>


    )
}