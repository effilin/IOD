import { Grid } from "@mui/material"
import './robot.css'


export function BodyArms() {

    return (
    <>
        <Grid container className="torso" spacing={0} direction='row' justifyContent='center' alignItems='center'>      

            <Grid item xs={1}>
                <h4 className="armR">---</h4>
            </Grid>

            <Grid item xs={1}>
                <h4 className="armR">---</h4>
            </Grid>

            <Grid item xs={4} className="verticalGrid" justifyContent='center' alignItems='center'>
                <div className="body"></div>
            </Grid>

            <Grid item xs={1}>
                <h4 className="armL">---</h4>
            </Grid>

            <Grid item xs={1}>
                <h4 className="armL">---</h4>
            </Grid>

        </Grid> 
    </>
    )
};