"use client";
import { Box, Grid, Typography, styled, Container, Card } from "@mui/material";
import React from "react";
import Image from "next/image";
import blog1 from "../../../../../../public/blog1.png";
import blog2 from "../../../../../../public/blog2.png";

const BlogImg = [blog1, blog2];
const BlogCard = [
  {
    sn: "01",
    month: "may",
    year: "2024",
    title: "How To Organize Files At A Design Digital Agency",
    text: "Store the Work in the Cloud. Pay Attention to File Naming Conventions Decide on Organizational Structure, Tagging.",
  },
  {
    sn: "02",
    month: "may",
    year: "2024",
    title: "Social Media Marketing Strategies To Small Business",
    text: "Store the Work in the Cloud. Pay Attention to File Naming Conventions Decide on Organizational Structure, Tagging.",
  },
];

const MainBox = styled(Box)(({ theme }) => ({
  padding: "1rem 0rem",
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "-webkit-center" as any,
}));

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

const CustomSnTypography = styled(({ index, ...other }: any) => (
  <Typography {...other} />
))(({ index }) => ({
  fontSize: "20px",
  fontWeight: 600,
  padding: "10px",
  color: index === 0 ? "white" : "#932889",
  borderRadius: "0px 0px 25px 25px",
  backgroundColor: index === 0 ? "#932889" : "white",
}));
const CustomMonthYearTypography = styled(({ index, ...other }: any) => (
  <Typography {...other} />
))(({ index }) => ({
  textTransform: "capitalize",
  fontWeight: 600,
  fontSize: "18px",
  marginBottom: "0px",
  color: index === 0 ? "black" : "white",
}));
const CustomTitleTypography = styled(({ index, ...other }: any) => (
  <Typography {...other} />
))(({ index }) => ({
  fontFamily: "cursive",
  fontWeight: 600,
  paddingLeft: "5rem",
  fontSize: "1.5rem",
  color: index === 0 ? "black" : "white",
}));
const CustomTextTypography = styled(({ index, ...other }: any) => (
  <Typography {...other} />
))(({ index }) => ({
  fontFamily: "cursive",
  paddingLeft: "5rem",
  color: index === 0 ? "black" : "white",
}));

const CustomBoxCrad = styled(({ index, ...other }: any) => <Card {...other} />)(
  ({ index }) => ({
    padding: "0rem 1.5rem",
    height: "200px",
    borderRadius: "5px",
    width: "500px",
    backgroundColor: index === 0 ? "white" : "#932889",
  })
);
const SndateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "15px",
}));
const BoxGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  position: "relative",
  bottom: "170px",
}));

const BlogNews = () => {
  return (
    <>
      <MainBox>
        <HeadingBox>
          <Typographyh5 variant="h5" color="initial" gutterBottom>
            Blog & News
          </Typographyh5>
          <Typographyh3 variant="h3" color="initial" gutterBottom>
            Get More Update For Blog & News
          </Typographyh3>
        </HeadingBox>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ height: "400px" }}>
            {BlogImg.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card sx={{ height: "300px", borderRadius: "15px" }}>
                  <Image
                    src={item}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
            ))}
            {BlogCard.map((item, index) => (
              <BoxGrid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <CustomBoxCrad index={index}>
                  <SndateBox>
                    <Box>
                      <CustomSnTypography
                        index={index}
                        variant="body1"
                        color="initial"
                        gutterBottom
                      >
                        {item.sn}
                      </CustomSnTypography>
                    </Box>
                    <Box>
                      <CustomMonthYearTypography
                        variant="body1"
                        color="initial"
                        gutterBottom
                        index={index}
                      >
                        {item.month}
                      </CustomMonthYearTypography>
                      <CustomMonthYearTypography
                        variant="body1"
                        color="initial"
                        gutterBottom
                        index={index}
                      >
                        {item.year}
                      </CustomMonthYearTypography>
                    </Box>
                  </SndateBox>
                  <CustomTitleTypography
                    variant="h4"
                    color="initial"
                    gutterBottom
                    index={index}
                  >
                    {item.title}
                  </CustomTitleTypography>
                  <CustomTextTypography
                    variant="body2"
                    color="initial"
                    gutterBottom
                    index={index}
                  >
                    {item.text}
                  </CustomTextTypography>
                </CustomBoxCrad>
              </BoxGrid>
            ))}
          </Grid>
        </Container>
      </MainBox>
    </>
  );
};

export default BlogNews;
