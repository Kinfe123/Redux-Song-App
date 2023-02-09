import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import  Button  from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { removeSong } from '../features/songs/songSlice';
import { useNavigate } from 'react-router-dom';
// import Box from '@material-ui/core/Box'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function SongItem(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleRemove = () => {
        

    }
    const handleEdit = () => {
        navigate('/edit/' + props.id)

    }
  return (
      <div className="av-songs">
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        color: 'white',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#645cff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {props.artist}
              </Typography>
       
              <Typography variant="body2" color="text.secondary">
                Song: {props.title}
              </Typography>
            </Grid>
            <Grid item>
                {/* <Box mt={10}> */}

                <Button variant="contained" onClick={handleEdit}>Edit</Button>
                {/* </Box> */}
             

              {/* <div className='spacer'></div> */}
              <Button variant="contained" onClick={()=>dispatch(removeSong(props.id))}>Remove</Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              New
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}