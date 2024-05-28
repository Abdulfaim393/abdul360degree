"use client";
import { Box, Typography, styled, Container, Grid, Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import TestBack from "../../../../../../public/testimonialBackground.png";
import Test1 from "../../../../../../public/test1.png";
import Test2 from "../../../../../../public/test2.png";
import Test3 from "../../../../../../public/test3.png";
import Test4 from "../../../../../../public/test4.png";

const CardData = [
  {
    image: Test1,
    text: "Their service is marked by efficiency and punctuality. Working with them has streamlined our processes and boosted productivity",
    name: "William",
  },
  {
    image: Test2,
    text: "Their service is marked by efficiency and punctuality. Working with them has streamlined our processes and boosted productivity",
    name: "Charlotte",
  },
  {
    image: Test3,
    text: "Their service is marked by efficiency and punctuality. Working with them has streamlined our processes and boosted productivity",
    name: "Alexander",
  },
  {
    image: Test4,
    text: "I was impressed by their commitment to going the extra mile. They've helped us stay ahead of the curve in our industry",
    name: "Brooklyn",
  },
];

const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/testimonialBackground.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  padding:"3rem 0rem",
  marginBottom:"2rem"
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "left" as any,
}));

const ImageTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  borderBottom: "1.5px solid black",
}));

const TestCard = styled(Card)(({ theme }) => ({
  padding: "1rem",
}));

const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#f6c460ff",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  borderRadius: "25px",
  fontFamily: "cursive",
  textTransform:"capitalize"
}));

const Typographyh3 = styled(Typography)(({ theme }) => ({
  fontFamily: "cursive",
  color: "white",
  textTransform:"capitalize"
}));

const Typographyh6 = styled(Typography)(({ theme }) => ({
  fontFamily: "cursive",
}));

const TextTypography = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontFamily: "cursive",
}));

const RatingStarIcon = styled(StarIcon)(({ theme }) => ({
  color: "#f6c460ff",
}));

const Testimonials = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
            Our Testimonials
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
            What Our Client Says
            </Typographyh3>
          </HeadingBox>
          <Box>
            <Grid container spacing={2}>
              {CardData.map((item, index) => (
                <Grid key={index} item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <TestCard>
                    <ImageTextBox>
                      <Image
                        src={item.image}
                        alt="image"
                        height={168}
                        width={123}
                      />
                      <Box>
                        <RatingStarIcon /> <RatingStarIcon /> <RatingStarIcon />{" "}
                        <RatingStarIcon /> <RatingStarIcon />
                        <TextTypography variant="body2" color="initial">
                          {item.text}
                        </TextTypography>
                      </Box>
                    </ImageTextBox>
                    <Typographyh6 variant="h6" color="initial">
                      {item.name}
                    </Typographyh6>
                  </TestCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </MainBox>
    </>
  );
};

export default Testimonials;
