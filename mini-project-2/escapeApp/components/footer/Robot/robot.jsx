import { Grid, useThemeProps } from "@mui/material";
import { BodyArms } from "./bodyArms";
import { animated, useSpring } from '@react-spring/web';
import './robot.css';
import HeadNeck from "./headNeck";

export function Robot() {



    return (
        <div className="Robot_container" >
            <Grid container spacing={0} direction='column' justifyContent='end'>

                <Grid item xs={5} className="verticalGrid">
                   <HeadNeck />
                </Grid>

                <Grid item xs={1} className="verticalGrid"  >
                  
                    <h3 className="neck">|</h3>
                  
                </Grid>

            </Grid>
            <BodyArms />
            
        </div>

    )
}