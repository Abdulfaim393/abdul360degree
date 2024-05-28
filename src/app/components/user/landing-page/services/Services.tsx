"use client";
import { Box, Typography, styled, Container } from "@mui/material";
import React from "react";
import Slider from "./Slider";
import Link from "next/link";

const Typographyh5 = styled(Typography)(({ theme }) => ({
  backgroundColor: "#932889",
  color: "white",
  padding: "5px 0px",
  textAlign: "center",
  width: "300px",
  borderRadius: "25px",
  fontFamily: "cursive",
}));
const Typographyh3 = styled(Typography)(({ theme }) => ({
  fontFamily: "cursive",
}));
const Typographyh5Link = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: "1rem 0rem",
  fontSize: "1.2rem",
  fontFamily: "cursive",
}));
const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
}));
const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "-webkit-center" as any,
}));
const KnowMoreLink = styled(Link)(({ theme }) => ({
  textDecoration:"none",
  fontsize:"0.5rem"
}));

const Services = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <HeadingBox>
            <Typographyh5 variant="h5" color="initial" gutterBottom>
              Our Best Services
            </Typographyh5>
            <Typographyh3 variant="h3" color="initial" gutterBottom>
              We Provide Best Services
            </Typographyh3>
          </HeadingBox>
          <Slider />
          <Typographyh5Link variant="h5" color="initial">
            Want to See our Professional Services. <KnowMoreLink href="/viewmore">Click here to View More</KnowMoreLink>
          </Typographyh5Link>
        </Container>
      </MainBox>
    </>
  );
};

export default Services;
