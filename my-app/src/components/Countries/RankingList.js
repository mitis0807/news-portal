import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CountryCard from "./CountryCard";
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

const UniversityRanking = () => {
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
        <Typography color="text.primary">Best Countries</Typography>
      </Breadcrumbs>
      <br />
   <h1 style={{fontWeight:'800'}}>U.S. News Best Countries</h1>
   {/* <br></br> */}
   <p>2021 Rankings</p>
   <p>The overall ranking of Best Countries measure global performance on a variety of metrics. Canada is the best country in the world for 2021.</p>
   {/* <Divider orientation="vertical"flexItem />   */}
 
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "20%"}}> 

<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "15%"}}><FacebookIcon style={{color:'blue'}}/></span>
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "15%"}}><TwitterIcon style={{color:'lightblue'}}/></span>
  <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "15%"}}><MoreHorizIcon/></span>
</span> 

<br></br>
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "45%"}}>

   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "42%"}}> <Button style={{borderRadius:'25px'}} variant="outlined">Ranking</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "45%"}}> <Button style={{borderRadius:'25px'}}variant="outlined">Economy</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "53%"}}> <Button style={{borderRadius:'25px'}}variant="outlined">Geography</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "53%"}}> <Button style={{borderRadius:'25px'}}variant="outlined">Population</Button></span>
   <span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "45%"}}> <Button style={{borderRadius:'25px'}} variant="outlined">Sort</Button></span>

</span>
<br></br>
<Divider  flexItem />  
<br></br>
<p>78 Countries</p>
<Grid container spacing={3}>
  






<Grid item xs={12} md={8}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex',minWidth: 100 }}>
        <CardMedia
            component="img"
            sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
            image="data:image/jpeg;base64,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"
            alt=""
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <img style={{height:'25px',width:'25px'}}src="data:image/png;base64,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"/> Canada

            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            <StarIcon/> #1 in Best Countries Overall
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Canada takes up about two-fifths of the North American continent, making it the second-largest country in the world after Russia <a style={{color:'blue'}}>read more</a>

            </Typography>
         
          </CardContent>
     
        </Card>
      
      </CardActionArea>
   
    </Grid>
    <Grid item xs={12} md={4}></Grid>





    <Grid item xs={12} md={8}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex',minWidth: 100 }}>
        <CardMedia
            component="img"
            sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjpCAh-ZZAoDcJ7ZQj73UAwY1Ku-5pi6v0Q&usqp=CAU"
            alt=""
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <img style={{height:'25px',width:'25px'}}src="data:image/jpeg;base64,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"/> Japan

            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            <StarIcon/> #2 in Best Countries Overall
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Japan, one of the world’s most literate and technically advanced nations, is an East Asian country made up <a style={{color:'blue'}}>read more</a>

            </Typography>
         
          </CardContent>
     
        </Card>
      
      </CardActionArea>
   
    </Grid>
    <Grid item xs={12} md={4}></Grid>






    <Grid item xs={12} md={8}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex',minWidth: 100 }}>
        <CardMedia
            component="img"
            sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6W8OUo81xL_KpAKCFOb0fEhc_nRuNzQdLFA&usqp=CAU"
            alt=""
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            <img style={{height:'25px',width:'25px'}}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="/> Germany

            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            <StarIcon/> #3 in Best Countries Overall
            </Typography>
            <Typography variant="subtitle1" paragraph>
            Germany, the most populous nation in the European Union, possesses one of the largest economies in the world and has seen its role in the 

<a style={{color:'blue'}}> read more</a>

            </Typography>
         
          </CardContent>
     
        </Card>
      
      </CardActionArea>
   
    </Grid>
    <Grid item xs={12} md={4}></Grid>
    </Grid>
<br></br>
 
    <Divider>
        <Chip label="Load more" />
      </Divider>

 <br></br>
    </div>
  );
};

export default UniversityRanking;
