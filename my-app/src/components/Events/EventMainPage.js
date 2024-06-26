import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Chip from '@mui/material/Chip';

const EventMainPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // getAPIData("business").then((data) => {
    //   console.log(data);
    //   setArticles(data.articles);
    // });
  }, []);

  console.log(articles);

  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {/* <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link> */}
        <Typography color="text.primary">Events</Typography>
      </Breadcrumbs>
      <br />
   <h1 style={{fontWeight:'800'}}>U.S. News Live</h1>
   {/* <br></br> */}
   <p>2021 Rankings</p>
   <p>U.S. News Live is the live events division of U.S. News & World Report, bringing together industry executives and forward-thinking leaders to exchange ideas and share solutions for health, education, equity and other fields. Past speakers include government officials, corporate executives, hospital and health leaders, nonprofit and foundation heads, advocates and other luminaries. Learn more about upcoming and past programs and <a href="">sign up for event updates</a>.</p>
   {/* <Divider orientation="vertical"flexItem />   */}
 
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "20%"}}> 
<b>ON THIS PAGE
</b>
</span> 

<br></br>
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "45%"}}>

   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "42%"}}> <Button style={{borderRadius:'25px'}} variant="outlined">Events</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "45%"}}> <Button style={{borderRadius:'25px'}}variant="outlined">Money</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "53%"}}> <Button style={{borderRadius:'25px'}}variant="outlined">Education</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "53%"}}> <Button style={{borderRadius:'25px'}}variant="outlined">Community</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "45%"}}> <Button style={{borderRadius:'25px'}} variant="outlined">Health</Button></span>

</span>
<br></br>
<Divider  flexItem />  
<br></br>
<b style={{fontSize:'20px'}}>Upcoming Events</b>
<br></br>
<br></br>
<Grid container spacing={3}>
  

<Grid item  sm={6} md={4}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Webinar: Taking a Population Health Approach to Combat Heart Disease - Sponsered by NOVARTIS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Mar 30, 2022
1:00 - 2:00 p.m. ET
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>


    <Grid item  sm={6} md={4}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdYwIhe3vJ6LpAOpW2WiGeaPqiGduoNiJMA&usqp=CAU"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Webinar: How Financial Wellness Benefits Can Help Attract and Retain Employees
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Apr 5, 2022
12:00 - 1:00 p.m. ET
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
    <Grid item  sm={6} md={4}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Webinar: How Children’s Hospitals Can Plan for the Future of Pediatric Care and COVID-19
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Apr 28, 2022
1:00 - 2:00 p.m. ET
        </Typography>
      </CardContent>
   
    </Card>
    </Grid>





  
    </Grid>
<br></br>
 
    <Divider>
        <Chip label="Load more" />
      </Divider>

 <br></br>
    </div>
  );
};

export default EventMainPage;
