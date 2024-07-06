import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CustomCard({title, children}) {
    return (
        <Card flower={{maxWidth:345}}>
            <CardActionArea>
                <CardMedia component='img' height='140' alt='Hibiscus'
                image='https://extension.umn.edu/sites/extension.umn.edu/files/hibiscus_7y0GBN.jpg' />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {children}
                    </Typography>

                </CardContent>
                 
            </CardActionArea>
        </Card>
    )
}