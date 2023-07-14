import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function RoadMap() {
  return (
    <Box sx={{my: {xl: '195px', xs: '50px'}}}>
      <Typography
        color="#FFCB44"
        variant="h1" component="h1"
        sx={{mx: '20px', mb: {md: '195px', sm: '100px', xs: '50px'}, fontSize: {xl: '96px', md: '72px', sm: '50px', xs: '34px'}, fontFamily: 'grilled-cheese-toasted' }}
        textAlign="center"
      >
        <span style={{color: '#FFF'}}>Project </span>Roadmap
      </Typography>
      <Grid container sx={{color: 'white', px: {xl: '405px', md: '180px', sm: '100px', xs: '30px'}, mt: '32px'}} spacing={2}>
        <Grid item md={4} xs={5} sx={{px: {xl: '50px', md: '40px', sm: '30px', xs: '20px'}}}>
          <Box
            sx={{backgroundImage: 'url(/assets/Attributes/roadmap.png)', backgroundSize: '100% 100%', height: '100%' }}
          />
        </Grid>
        <Grid item md={8} xs={7} sx={{px: {xl: '50px', md: '40px', sm: '30px', xs: '20px'}}}>
          <Stack sx={{mb: {xl: '125px', md: '80px', sm: '60px', xs: '30px'} }}>
            <Typography
              color="#FFCB44"
              variant="h4" component="h4"
              sx={{fontSize: {xl: '34px', md: '28px', sm: '24px', xs: '12px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              <span style={{color: '#FFF'}}>1 Decemmber | </span>Presale
            </Typography>
            <Typography
              sx={{fontSize: {md: '15px', xs: '8px'}, mt: 3, fontFamily: 'somatic-rounded'}}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
          <Stack sx={{mb: {xl: '125px', md: '80px', sm: '60px', xs: '30px'} }}>
            <Typography
              color="#FFCB44"
              variant="h4" component="h4"
              sx={{fontSize: {xl: '34px', md: '28px', sm: '24px', xs: '12px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              <span style={{color: '#FFF'}}>24 Decemmber | </span> Channel Invitations
            </Typography>
            <Typography
              sx={{fontSize: {md: '15px', xs: '8px'}, mt: 3, fontFamily: 'somatic-rounded'}}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
          <Stack sx={{mb: {xl: '125px', md: '80px', sm: '60px', xs: '30px'} }}>
            <Typography
              color="#FFCB44"
              variant="h4" component="h4"
              sx={{fontSize: {xl: '34px', md: '28px', sm: '24px', xs: '12px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              <span style={{color: '#FFF'}}>01 January | </span>Official Launch
            </Typography>
            <Typography
              sx={{fontSize: {md: '15px', xs: '8px'}, mt: 3, fontFamily: 'somatic-rounded'}}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
          <Stack>
            <Typography
              color="#FFCB44"
              variant="h4" component="h4"
              sx={{fontSize: {xl: '34px', md: '28px', sm: '24px', xs: '12px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              <span style={{color: '#FFF'}}>10 January  | </span>Interactive NFT
            </Typography>
            <Typography
              sx={{fontSize: {md: '15px', xs: '8px'}, mt: 3, fontFamily: 'somatic-rounded'}}
            >
              They will purposefully focus on building a better environment for the ones whom are affected by the change of climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Stack>
        </Grid>
      </Grid>
  	</Box>
  );
}
