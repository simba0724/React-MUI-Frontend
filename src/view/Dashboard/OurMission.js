import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function OurMission() {
  return (
    <Box sx={{mt:{md: '195px', sm: '150px', xs: '30px'}}}>
      <Stack justifyContent="center" direction="horizontal">
        <Box
          component="img"
          src="/assets/Attributes/Attribute-OurMission001.png"
          sx={{height: '140px', display: {xl: 'block', xs: 'none'} }}
        />
        <Typography
          color="#FFCB44"
          variant="h1" component="h1"
          sx={{mx: '20px', fontSize: {md: '96px', sm: '48px', xs: '34px'}, fontFamily: 'grilled-cheese-toasted' }}
        >
          <span style={{color: '#FFF'}}>Our</span> Mission
        </Typography>
        <Box
          component="img"
          src="/assets/Attributes/Attribute-OurMission002.png"
          sx={{height: '200px', display: {xl: 'block', xs: 'none'}}}
        />
      </Stack>
      <Stack justifyContent="center" direction="horizontal">
        <Box sx={{px: {md: '95px', xs: '48px'}, mt: {md: '73px', xs: '0'} }}>
          <Box
            component="img"
            src="/assets/Design/Mission_Sketch.png"
            sx={{mt: '30px', width: '100%'}}
          />
        </Box>
      </Stack>
      <Grid container textAlign="left" sx={{color: 'white', px: {md: '120px', xs: '15px'}, mt: '32px'}}>
        <Grid item xs={6} xl={3} sx={{px: {md: '50px', xs: '20px'}, mt: {xs: '20px'} }}>
          <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '34px', xs: '20px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              Ambeelance
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: {md: '76px', xs: '20px'}, fontFamily: 'somatic-rounded' }}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} xl={3} sx={{px: {md: '50px', xs: '20px'}, mt: {xs: '20px'} }}>
          <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '34px', xs: '20px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              Education Center
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: {md: '76px', xs: '20px'}, fontFamily: 'somatic-rounded' }}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ? 
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} xl={3} sx={{px: {md: '50px', xs: '20px'}, mt: {xs: '20px'} }}>
          <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '34px', xs: '20px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              Testing Grounds
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: {md: '76px', xs: '20px'}, fontFamily: 'somatic-rounded' }}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} xl={3} sx={{px: {md: '50px', xs: '20px'}, mt: {xs: '20px'} }}>
          <Stack>
            <Typography
              variant="h4" component="h4"
              sx={{fontSize: {md: '34px', xs: '20px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              Purification
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '10px'}, mt: {md: '76px', xs: '20px'}, fontFamily: 'somatic-rounded' }}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
        </Grid>
      </Grid>
  	</Box>
  );
}
