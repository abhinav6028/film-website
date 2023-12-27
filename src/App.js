import React from 'react';
import './App.css';
import { Box, Grid, Typography } from '@mui/material';
import Close from '../src/Assets/Icons/close.png'
import Banner from '../src/Assets/Banner/Banner.png'
import ImageOne from '../src/Assets/Images/imageOne.png'
import ImageTwo from '../src/Assets/Images/ImageTwo.png'
import ImageThree from '../src/Assets/Images/ImageThree.png'


function App() {

  return (
    <Grid container sx={{
      justifyContent: 'center', alignItems: 'center`',
      bgcolor: '#000000',
    }}>

      <Grid container>

        <Box
          component='img'
          src={Close}
          sx={{
            width: { xs: 25, sm: 25, md: 30, lg: 30 },
            height: { xs: 25, sm: 25, md: 30, lg: 30 },
            ml: 'auto', p: 1, cursor: "pointer",
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'rotate(90deg)'
            }

          }}
        />

      </Grid>

      <Grid container xs={11} sm={11} md={10} lg={10} sx={{
        bgcolor: "", justifyContent: 'center',
        mt: { xs: 1, sm: 1, md: 2, lg: 2 }, height: "fit-content"
      }}>

        <Typography sx={{
          fontSize: { xs: 18, sm: 27, md: 33, lg: 35 },
          textAlign: "center",
          width: { xs: "100%", sm: "90%", md: "95%", lg: '98%' },
          lineHeight: 1.2,
          color: "#FFF", fontWeight: '',
          fontFamily: 'Roboto'
        }}>
          Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
        </Typography>

        <Box
          component='img'
          src={Banner}
          sx={{
            width: "100%",
            height: { xs: 150, sm: 200, md: 400 },
            my: { xs: 3, sm: 1, md: 3, lg: 3 }
          }}

        />


        <Typography sx={{
          fontSize: { xs: 10, sm: 12, md: 15, lg: 16 },
          textAlign: "center",
          width: { xs: "100%", sm: "90%", md: "95%", lg: '90%' },
          lineHeight: 1.5,
          color: "#FFF", fontFamily: 'Poppins'
        }}>
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event,
          or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right
          for you and your friends. Find it all in Fortnite ... Drop In.
        </Typography>

      </Grid>



      <Grid container bgcolor="" sx={{
        justifyContent: 'center',
        alignItems: "center"
      }}>

        <Typography sx={{
          bgcolor: "#FFF",
          mt: 3,
          py: { xs: .7, sm: 0.7, md: 1, lg: 1 },
          px: { xs: 6, sm: 6, md: 8, lg: 10 },
          fontWeight: 'bold',
          cursor: 'pointer', fontFamily: 'Poppins',
          '&:hover': {
            bgcolor: "transparent",
            color: "#FFF",
            border: '1px solid #FFF'
          }
        }}>
          Visit Website
        </Typography>

      </Grid>

      <Grid xs={9} sm={9} md={9} lg={9} container sx={{
        bgcolor: '',
        mt: 15,
        justifyContent: "center", alignItems: 'center'
      }}>

        {
          [
            {
              url: ImageOne,
              txt: "Explore large, destructible environments where no two games are ever the same.",
            },
            {
              url: ImageTwo,
              txt: 'Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale',
            }, {
              url: ImageThree,
              txt: 'Discover even more ways to play across thousands of creator-made game genres',
            }
          ].map((data) =>

            <Grid container xs={0} sm={6} md={4} lg={4} sx={{ bgcolor: "", justifyContent: "center", alignItems: "center" }}>
              <Box
                component="img"
                src={data.url}
                sx={{
                  width: { xs: 200, sm: 200, md: 250, lg: 250 },
                  height: { xs: 200, sm: 200, md: 250, lg: 250 },
                  mt: 2
                }}
              />

              <Typography sx={{
                fontSize: { xs: 10, sm: 12, md: 15, lg: 14 },
                textAlign: "center",
                width: "60%",
                lineHeight: 1.3,
                color: "#FFF", fontWeight: '',
                my: 1.5, fontFamily: 'Poppins'
              }}>
                {data.txt}
              </Typography>

            </Grid>

          )}

      </Grid>

      <Grid xs={9} sm={9} md={9} lg={9} container sx={{
        justifyContent: 'center',
        alignItems: 'center', mt: 10
      }}>

        <Typography sx={{
          fontSize: { xs: 18, sm: 27, md: 33, lg: 35 },
          textAlign: "center",
          width: { xs: "100%", sm: "90%", md: "95%", lg: '98%' },
          lineHeight: 1.2,
          color: "#FFF", mt: { xs: 5, sm: 7, md: 8, lg: 10 }
        }}>
          Our Contribution
        </Typography>



        <Typography sx={{
          fontSize: { xs: 10, sm: 12, md: 15, lg: 18 },
          textAlign: "center",
          width: { xs: "100%", sm: "90%", md: "95%", lg: '90%' },
          lineHeight: 1.3,
          color: "#FFF", mt: { xs: 1, sm: 1, md: 2, lg: 2 }, fontFamily: 'Poppins'
        }}>
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community.
          Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing
          distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </Typography>

        <Grid container lg={9} sx={{ bgcolor: '', mt: 5, justifyContent: 'space-between', alignItems: 'center' }}>

          {
            [
              {
                number: "5M",
                text: "Daily User Engagements"
              },
              {
                number: "$500K",
                text: "Revenue Surge for an Platform"
              },
              {
                number: "10X",
                text: "ROAS on all our marketing campaigns"
              }
            ].map((data) =>

              <Grid container xs={3} sm={3} md={3} lg={3} sx={{ bgcolor: '', flexDirection: 'column', justifyContent: 'center', alignItems: 'center  ' }}>

                <Typography sx={{
                  color: '#FFF', textAlign: 'center',
                  fontSize: { xs: 25, sm: 30, md: 40, lg: 50 }, fontFamily: "Roboto"
                }}>{data.number}</Typography>

                <Typography sx={{ color: '#FFF', textAlign: 'center', width: "90%", fontFamily: "Roboto", fontSize: { xs: 10, md: 15, lg: 15 } }}>{data.text}</Typography>

              </Grid>

            )
          }

        </Grid>

      </Grid>

      <Grid xs={9} sm={9} md={9} lg={9} container sx={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Typography sx={{
          fontSize: { xs: 18, sm: 27, md: 33, lg: 35 },
          textAlign: "center",
          width: { xs: "100%", sm: "90%", md: "95%", lg: '98%' },
          lineHeight: 1.2,
          color: "#FFF", mt: { xs: 3, sm: 4, md: 5, lg: 18 }, fontFamily: "Roboto"
        }}>
          Interested in delving deeper into the project?
        </Typography>

        <Typography sx={{
          fontSize: { xs: 10, sm: 12, md: 15, lg: 18 },
          textAlign: "center",
          width: { xs: "100%", sm: "90%", md: "95%", lg: '90%' },
          lineHeight: 1.3,
          color: "#FFF", mt: { xs: 1.5, sm: 1.5, md: 2, lg: 3 }
        }}>
          If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect.
          You can reach out to us via email
          at hello@abc.com or give us a call at +91 480 20802730.
        </Typography>

        <Grid container lg={9} sx={{
          bgcolor: '',
          mt: 7
        }}>
          <Grid container lg={6} sx={{
            justifyContent: 'center', alignItems: "center"
          }}>
            <Typography sx={{
              bgcolor: "#FFF",
              py: { xs: .7, sm: 0.7, md: 1, lg: 1 },
              px: { xs: 6, sm: 6, md: 8, lg: 15 },
              fontWeight: 'bold', fontFamily: 'Poppins',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: "transparent",
                color: "#FFF",
                border: '1px solid #FFF'
              }
            }}>
              Ring us on Skype
            </Typography>
          </Grid>

          <Grid container lg={6} sx={{
            justifyContent: 'center', alignItems: "center"
          }}>
            <Typography sx={{
              bgcolor: "#FFF",
              py: { xs: .7, sm: 0.7, md: 1, lg: 1 },
              px: { xs: 6, sm: 6, md: 8, lg: 15 },
              fontWeight: 'bold', fontFamily: 'Poppins',
              cursor: 'pointer',
              mt: { xs: 1.5, sm: 1.5, md: 0, lg: 0 },
              '&:hover': {
                bgcolor: "transparent",
                color: "#FFF",
                border: '1px solid #FFF'
              }

            }}>
              Contact us
            </Typography>
          </Grid>
        </Grid>

      </Grid>

      <Grid container sx={{
        justifyContent: 'center', alignItems: 'center',
        fontSize: { xs: 10, sm: 12, md: 15, lg: 18 },
        color: '#FFF',
        mt: { xs: 5, sm: 5, md: 6, lg: 15 },
        py: 4, fontFamily: "Roboto"
      }}>
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </Grid>



    </Grid >
  );
}

export default App;
