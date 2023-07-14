import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Beethecure() {
  return (
    <Grid container textAlign="left" spacing={{xl: 1, xs: 0}} sx={{mt: {md: '195px', sm: '100px', xs: '50px'}, px: {md: 1, xs: 0} }}>
      <Grid item xs={12} md={6} sx={{px: {md: 1, xs: 0}}}>
        <Box backgroundColor="#C69730" position="relative" sx={{minHeight: {md: '950px', xs: '500px'}}} color="#FFF">
          <Box sx={{p: {xl: '135px', md: '100px 40px', xs: '50px 36px'} }}>
            <Stack direction="row">
              <Box
                component="img"
                src="/logo.png"
                sx={{ mr: 2, width: {md: '126px', xs: '70px'} }}
              />
              <Stack>
                <Typography
                  variant="h3" component="h3"
                  sx={{ fontSize: {xl: '40px', md: '30px', xs: '25px'}, zIndex: 30, fontFamily: 'grilled-cheese-toasted' }}
                >
                  Beethecure
                </Typography>
                <Typography
                  variant="h6" component="h6"
                  sx={{ fontSize: {md: '20px', xs: '16px'}, zIndex: 30, fontFamily: 'somatic-rounded' }}
                >
                  https://beethecure.com.au
                </Typography>
              </Stack>
            </Stack>

            <Typography
              variant="h6" component="h6"
              sx={{ mt: 5, fontSize: {md: '20px', xs: '16px'}, fontFamily: 'grilled-cheese-toasted' }}
            >
              The Problem Why are Global Bee Populations in Trouble?
            </Typography>

            <Typography
              sx={{fontSize: {md: '15px', xs: '12px'}, mt: 3, fontFamily: 'somatic-rounded', textAlign: 'justify'}}
            >
              The state of beekeeping around the world is in calamity and close to a state of disaster. Colony collapse disorder* and Varroa mite** have hit every continent in the world except for Australia. We are in a privileged position here and if anything, we ought have more stringent laws in terms of insecticide use and the transportation of bees and importation of honey and pollen. Australia is a major exporter of bees and by keeping our population healthy we have the potential to re-populate the world’s bees. <br/><br/>

              Wisdom and a holistic approach are required, where bees are honored and respected as in Egyptian times. Bees do not respond well to greed, moving them in massive long distances makes them more susceptible to disease. Logically, if Varroa mite where to arrive on Australian shores, it would be spread if it hit a large commercial operation that follows the blossom. Bees are more than honey and its associated profit. They are the sun lovers, pollen matchmakers and community driven workers. They are responsible for our food system and planet as we know it. If bees thrive, humanity thrives. 
              Both our native bees and European honeybees are threatened by similar sources. Collective action must be taken to save both.
            </Typography>
          </Box>
          <Box>
            <Box
              component="img"
              src="/assets/Design/HoneyDrip_Left.png"
              position="absolute"
              sx={{right: 0, top: 0, width: '60%', maxWidth: '543px'}}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{px: {md: 1, xs: 0}}}>
        <Box backgroundColor="#FFCB44" position="relative" sx={{minHeight: {md: '950px', xs: '500px'}}} color="#23212C">
          <Box sx={{p: {xl: '135px', md: '100px 40px', xs: '50px 36px'} }}>
            <Stack>
              <Typography
                variant="h3" component="h3"
                sx={{ fontSize: {xl: '40px', md: '30px', xs: '25px'}, height: '126px', zIndex: 30, fontFamily: 'grilled-cheese-toasted'}}
                color="#23212C"
              >
                How are your donations helping our cause?
              </Typography>

              <Typography
                sx={{fontSize: {md: '15px', xs: '12px'}, mt: {md: 5, xs: 0}, zIndex: 30, fontFamily: 'somatic-rounded', textAlign: 'justify'}}
              >
                Unlike other non for profits and charities where administration costs and salaries are high, costs are kept at a minimum because the bee loving community contributes to the cause passionately. Simon Mulvany, the founder of Save The Bees Australia, lives frugally in Blairgowrie on the Mornington Peninsula with his 9-year-old son.<br/><br/>

                Money raised has helped pay for bees to be saved from extermination, upkeep and data entry of the honey map, website, beethecure app, kindergarten and school visits, a bee sanctuary and admin costs.<br/><br/>

                Simon has sacrificed for the project which has affected the profits of major corporations. Simon has been constantly bullied by large corporations #CapilanoHoney #Woolworths and organisations associated with #Bayer/Monsanto #Australiancertifiedorganic.<br/><br/>

                It is crucial that we help protect native species and that we keep honeybees, respectfully and responsibly. We respect that both have their place, whether it is in industry or biodiversity- and that we simply cannot live without them. With your donation, big or small, we can continue our work in Saving the Bees.
              </Typography>
            </Stack>
          </Box>
          <Box
            component="img"
            src="/assets/Design/HoneyDrip_Right.png"
            position="absolute"
            sx={{right: '10px', top: {sm: '-20px', xs: '-15px'}, maxWidth: '130px', width: '20%'}}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
