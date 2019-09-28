import React from 'react';
import { makeStyles, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '300px',
    },
    tile: {
        color: 'white',
        top: 0,
        left: 0,
        paddingLeft: '0px',
        paddingRight: '5px',
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.15)',
        height: '100%',
        width: '100%'
    },
    tileInner: {
        zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.375) 0%, transparent 100%)',
    },
    text: {
        borderLeft: '1px solid #fff',
        paddingLeft: '10px',
        marginLeft: '10px',
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'capitalize',
        top: 0,
        left: 0,
        position: 'absolute',
        zIndex: 1,
        marginTop: '10px'
    }
}));

export const MovieItem = (props) => {
    const classes = useStyles();
    const { movieId, movieTitle, movieImageUrl, onGoToTrailerCLick } = props;
    return (
        <Link to={`/MovieTrailer/${movieId}`}>

            <div name={props.index}>
                <Card className={classes.card}>
                    <CardActionArea >
                        <img src={movieImageUrl} onClick={() => onGoToTrailerCLick(movieId)}></img>
                        <CardContent className={classes.tile}>
                            <div className={`${classes.tile} ${classes.tileInner}`}></div>

                        </CardContent>
                        <Typography className={classes.text} gutterBottom variant="h6" component="h3">
                            {movieTitle}
                        </Typography>
                    </CardActionArea>
                </Card>


            </div>
        </Link>
    );
}


