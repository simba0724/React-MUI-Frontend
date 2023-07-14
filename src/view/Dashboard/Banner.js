import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Banner() {
  return (
    <>
    	<Grid container sx={{flexDirection: {md: "column-reverse", xl: "row"}, mt: {md: '73px', xs: '0'} }}>
  		  <Grid item md={12} xl={6}>
          <Box sx={{px: {md: '133px', xs: '48px'} }}>
            <Box
              component="img"
              src="/assets/Design/MainTitle.png"
              sx={{
                width: '100%',
                maxWidth: '640px'
              }}
            />
            <Box>
              <Box
                component="img"
                src="/assets/Design/VideoSample.png"
                sx={{
                  width: '100%',
                  display: {md: 'flex', xl: 'none'},
                  mt: 3
                }}
              />
            </Box>
          </Box>
          <Box sx={{px: {md: '133px', xs: '48px'} }}>
            <Typography
            	color="#FFCB44"
            	variant="h4" component="h4"
            	sx={{
            		mt: '38px',
                fontSize: {xs: '24px', md: '34px'},
                fontFamily: 'grilled-cheese-toasted'
            	}}
            >
            	10000 Bees swarming the Etherium Blockchain ! <br/> But what are they upto?
            </Typography>

            <Typography
            	color="#F8F5EF"
            	variant="h6" component="h6"
            	sx={{mt: '42px', fontFamily: 'grilled-cheese-toasted'}}
            >
            	The CryptoHive project has been founded solely for promoting one cause.. <br/> Saving their fellow beeople out there in the real world !
            </Typography>

            <Typography
            	color="#9F9EB3"
            	sx={{mt: '21px', fontSize: '15px', fontFamily: 'somatic-rounded'}}
            >
            	Novadays it is commonly known that many users benefit from "flipping" or simply owning NFT's troughout the digital market, therefore we encourage you to participate in our collection along with it's custom implemented SmartContract, which obliges each Bee from the CryptoHive to share a portion of its value towards a Crypto-friendly, non-profit charity organization. Don't worry, they do it with pleasure!
            </Typography>

            <Typography
            	color="#F8F5EF"
            	variant="h6" component="h6"
            	sx={{mt: '34px', fontFamily: 'grilled-cheese-toasted'}}
            >
            	These Bees won't mess around.. don't judge them by their look.
            </Typography>

            <Typography
            	color="#9F9EB3"
            	sx={{mt: '21px', fontSize: '15px', fontFamily: 'somatic-rounded'}}
            >
            	They will purposefully focus on building a better environment for the ones whom are affected by the change of <br/>climate and people's way of living. Why don't you scroll down a bit more and see what plans they got in-store ?
            </Typography>
          </Box>

  		  </Grid>
  		  <Grid container item md={12} xl={6} justifyContent="center" alignItems="center" sx={{px: {md: "68px", xs: '25px'}, pt: {md: "0", xs: '25px'} }}>
          <Box>
            <Box
              component="img"
              src="/assets/Design/VideoSample.png"
              sx={{
                width: '100%',
                maxWidth: '640px',
                display: {xs: 'none', xl: 'flex'}
              }}
            />
          </Box>
  		  </Grid>
        <Grid item md={12} xl={6}>
          <Stack alignItems="end" justifyContent="center" sx={{mt: 5, display: {xs: 'none', xl: 'flex'} }}>
            <Box
              component="img"
              src="/assets/Attributes/Attribute-page01.png"
            />
          </Stack>
        </Grid>
  		</Grid>
    </>
  );
}
