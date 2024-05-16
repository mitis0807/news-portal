import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
const Travel = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // getAPIData("business").then((data) => {
    //   console.log(data);
    //   setArticles(data.articles);
    // });
  }, []);

  console.log(articles);
  

  const handleClickOfNews= e => {
        e.preventDefault();
    //  alert('hello in handle click of news')
    navigate('/detailedNews');

       // do something here
      }
      const handleClickOfRanking= e => {
            e.preventDefault();
        //  alert('hello in handle click of news')
        navigate('/rankingList');
  
           // do something here
          }
  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
       
        <Typography color="text.primary">Travel</Typography>
      </Breadcrumbs>
      <br />
    
      <Grid container spacing={3}>
  <Grid item xs={12} md={12}>
    {/* <Card onClick={handleClickOfNews}>
       <CardActionArea>
         <CardMedia
          component="img"
          height="500"
          image="https://travel.usnews.com/static-atlas/assets/img/travel/HomepageFeatured_21001174_Q4_NYC_Philly_2021_Digital_Campaign_US_News_Header_1280x480_REVISED_2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BEST COUNTRIES
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
       <Paper
   
   sx={{
     height:'550px',
     position: 'relative',
     backgroundColor: 'grey.800',
     color: '#fff',
     mb: 4,
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundImage: `url("https://travel.usnews.com/static-atlas/assets/img/travel/HomepageFeatured_21001174_Q4_NYC_Philly_2021_Digital_Campaign_US_News_Header_1280x480_REVISED_2.jpg")`,
   }}
 >
   {/* Increase the priority of the hero background image */}
   {<img style={{ display: 'none' }} src="https://www.usnews.com/static/img/badge-best-gold.svg" alt=""/>}
   <Box
     sx={{
       position: 'absolute',
       top: 0,
       bottom: 0,
       right: 0,
       left: 0,
       backgroundColor: 'rgba(0,0,0,.3)',
     }}
   />
   <Grid container>
     <Grid item md={6}>
       <Box
         sx={{
           position: 'relative',
           p: { xs: 3, md: 6 },
           pr: { md: 0 },
         }}
       >
         
           <img src='https://health.usnews.com/static-atlas/assets/img/health/adult-hospitals.png' style={{
display:'block',marginLeft:'auto',
height:"150px",
width:"150px",marginLeft:'89%'}}/>
<br></br>
<br></br>


         <Typography component="h1" variant="h3" color="inherit" style={{fontWeight:'700',textAlign:'center'}}gutterBottom>
         Find Your Next Vacation
         </Typography>
         <br></br>
         <Typography style={{fontWeight:'600',textAlign:'center'}}variant="h9" color="inherit" style={{textAlign:'center'}}gutterBottom>
         Design your perfect vacation by choosing from the best ranked hotels, cruises and destinations.
         </Typography>
         {/* <Link style={{color:'white'}}variant="subtitle1" href="#">
         Schools and parents can work together to help kids recover from COVID-related instructional loss.

         </Link> */}
         <br></br>
<br></br>
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pick a destination"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
    </Paper>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
    
       </Box>
     </Grid>
   </Grid>
 </Paper>
    </Grid>
    
    
   
    
   
    
  

    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/013f768/2147483647/resize/300x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F57%2Fc3%2Fb670650d49fa8bba58fd38370768%2F180703travelhomepagevacations-stock.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Best Vacations
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Find the prefect vacation based on region and type
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/cd569ab/2147483647/thumbnail/303x202/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fc0%2Fbf%2F7a1a6db4481f9bbafb08b8bad61b%2F180629-cruiseship-stock.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Best Cruises
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Explore Cruises and find the one that's right for you
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/673f1aa/2147483647/thumbnail/303x202/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F6a%2F83%2Fa5e93edc4be38e97053f36076af1%2Fresizes%2F500%2F180629-hotelthecarlyle-submitted.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Best Hotels
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Browse more that 35,000 hotels across the world 
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/054f617/2147483647/resize/300x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Ff4%2F54%2Fe8123d7f414cadfe708146c995bc%2F180703travelhomepagerewards-stock.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Best Rewards
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Research the best hotel and online rewards programs
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
  </Grid>
    
    </div>
  );
};

export default Travel;
