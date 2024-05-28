"use client";
import {
  Box,
  styled,
  Grid,
  Container,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CheckIcon from "../../../../../../public/whychooseus2.png";
import whyChooseUSImage from "../../../../../../public/whychooseus1.png";
import NumberCounter from "../../utils/NumberCounter";

const NumberArray = [
  { number: "12k", text: "project done" },
  { number: "35k", text: "team members" },
  { number: "15k", text: "happy clients" },
  { number: "12+", text: "awards" },
];

const PointsArray = [
  {
    icon: CheckIcon,
    title: "High Standard",
    text: "Standing on business is a slang term that means to take care of your responsibilities, follow through, or handle your own affairs It can also mean to be about your grind",
  },
  {
    icon: CheckIcon,
    title: "Focus On People",
    text: "Standing on business is a slang term that means to take care of your responsibilities, follow through, or handle your own affairs, It can also mean to be about your grind",
  },
  {
    icon: CheckIcon,
    title: "Different Thinking",
    text: "Standing on business is a slang term that means to take care of your responsibilities, follow through, or handle your own affairs, It can also mean to be about your grind",
  },
  {
    icon: CheckIcon,
    title: "Expert Team",
    text: "Standing on business is a slang term that means to take care of your responsibilities, follow through, or handle your own affairs, It can also mean to be about your grind",
  },
];

const TopBox = styled(Box)(({ theme }) => ({
  borderRadius: "84px 88px 0px 0px",
  background: "#970089ff",
  height: "15rem",
  marginTop: "1.5rem",
}));
const TypoH2 = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#ffffffa3",
  fontFamily: "sans-serif",
  display:"flex"
}));
const TypoH6 = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "cursive",
}));

const TypoWCUh5 = styled(Typography)(({ theme }) => ({
  background: "#f6c460ff",
  width: "230px",
  textAlign: "center",
  padding: "5px",
  borderRadius: "25px",
  fontFamily: "cursive",
  fontWeight: 500,
}));
const TypoWCUh3 = styled(Typography)(({ theme }) => ({
  padding: "1.5rem 0rem",
  fontFamily: "cursive",
  color: "white",
}));
const TypoWCUBody1 = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "cursive",
  fontSize: "1.2rem",
  paddingBottom: "1.5rem",
  textAlign: "justify",
  paddingRight: "3rem",
}));
const PointsBody2 = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily: "cursive",
  textAlign: "justify",
  marginBottom: "0.5rem",
  fontsize: "0.79rem",
}));
const PointsTitleTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  fontFamily: "cursive",
  fontSize: "1.8rem",
  padding: "0px",
  marginBottom: "0.7rem",
}));

const BottomBox = styled(Box)(({ theme }) => ({
  background: "#6907A8",
  paddingTop: "4rem",
  paddingBottom: "1rem",
  borderRadius: "84px 84px 0px 0px",
  position:"absolute",
  top:"119rem"
}));
const CheckIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "15px",
}));
const PoinIconBox = styled(Box)(({ theme }) => ({
  paddingTop: "5px",
}));
const ButtonWCU = styled(Button)(({ theme }) => ({
  color: "white",
  fontFamily: "cursive",
  textTransform: "capitalize",
  border: "1px solid #ffffff94",
  padding: "5px 25px",
  borderRadius: "25px",
  "&:hover": {
    border: "1px solid #ffffff94",
  },
}));

const WhyChooseUs = () => {
  return (
    <>
      <TopBox>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {NumberArray.map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <TypoH2 variant="h2" color="initial">
                    <NumberCounter number={Number(item.number.replace(/[^\d.-]/g, ''))} />{item.number.replace(/[0-9]/g, '')}
                  </TypoH2>
                  <TypoH6 variant="h6" color="initial">
                    {item.text}
                  </TypoH6>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </TopBox>
      <BottomBox>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Box sx={{ height: "460px" }}>
                <TypoWCUh5 variant="h5" color="initial">
                  Why Choose Us
                </TypoWCUh5>
                <TypoWCUh3 variant="h3" color="initial">
                  Unlock Revenue Growth For Your Business
                </TypoWCUh3>
                <TypoWCUBody1 variant="subtitle1" color="initial">
                  We are 100+ professional software engineers with mor than 10
                  years of experience in delivering sup erior pro Believe it
                  because you&apos;ve seen it.
                </TypoWCUBody1>
                <ButtonWCU variant="outlined">view all more</ButtonWCU>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Box sx={{ height: "460px", display: "flex", alignItems: "end" }}>
                <Image
                  src={whyChooseUSImage}
                  alt="image"
                  style={{ width: "100%", height: "80%", objectFit: "contain" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Box sx={{ height: "460px" }}>
                {PointsArray.map((item, index) => (
                  <CheckIconBox key={index}>
                    <PoinIconBox>
                      <Image
                        src={item.icon}
                        alt="image"
                        height={25}
                        width={25}
                      />
                    </PoinIconBox>
                    <Box>
                      <PointsTitleTypography variant="h4" color="initial">
                        {item.title}
                      </PointsTitleTypography>
                      <PointsBody2 variant="body2" color="initial">
                        {item.text}
                      </PointsBody2>
                    </Box>
                  </CheckIconBox>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BottomBox>
    </>
  );
};

export default WhyChooseUs;
