import { Card, CardContent, Grid, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import top1 from "../../../../../../public/top1.png";
import top2 from "../../../../../../public/top2.png";
import top3 from "../../../../../../public/top3.png";
import bottom1 from "../../../../../../public/bottom1.png";
import bottom2 from "../../../../../../public/bottom2.png";
import bottom3 from "../../../../../../public/bottom3.png";
import Image from "next/image";

interface MainCardProps {
  gradient: string;
}

const MainCard = styled(Card)<MainCardProps>(({ gradient }) => ({
  background: gradient,
  height: "480px",
  minWidth: 275,
  maxWidth: 380,
}));
const MainGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
}));
const TitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  color: "white",
  fontFamily: "cursive",
  height: "5.3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const ParaTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: "white",
  fontFamily: "cursive",
  height: "9.3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (index: any) => {
    setCurrentIndex(index);
  };

  const onClickItem = (index: any) => {
    console.log(`Clicked item at index ${index}`);
  };

  const onClickThumb = (index: any) => {
    console.log(`Clicked thumb at index ${index}`);
  };

  const CardData = [
    {
      imageTop: top1,
      title: "Web Design & Development",
      para: "We build websites that adds value to the business. Our website designs made to convert the potential customers into prospect and then into real customers.",
      imageBottom: bottom1,
      gradient: "linear-gradient(270deg, #d015bbff 0%, #66075bff 100%)",
    },
    {
      imageTop: top2,
      title: "Mobile App Development(IOS and Android)",
      para: "Designs & graphics is the best medium to showcase the brand or company. We build brands form scratch starting from Logo designing to Advert designing and more.",
      imageBottom: bottom2,
      gradient: "linear-gradient(270deg, #5cefffff 0%, #048a99ff 100%)",
    },
    {
      imageTop: top3,
      title: "Digital Marketing & Strategy",
      para: "We are a performance-driven digital agency, we create and develop digital marketing strategies and campaigns that include various digital strategy and branding, social, e-commerce & more.",
      imageBottom: bottom3,
      gradient: "linear-gradient(270deg, #b959f5ff 0%, #791fb2ff 100%)",
    },
  ];

  // Group data into sets of three cards
  const groupedData = CardData.reduce((acc: any, current: any, index: any) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(current);
    return acc;
  }, []);

  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={false}
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showIndicators={false}
      interval={10000}
      transitionTime={3000}
    >
      {groupedData.map((group: any, groupIndex: any) => (
        <div key={groupIndex}>
          <Grid container spacing={1}>
            {group.map((item: any, index: any) => (
              <MainGrid key={index} item xs={12} sm={4} md={4} lg={4} xl={4}>
                <MainCard gradient={item.gradient}>
                  <CardContent>
                    <Image
                      src={item.imageTop}
                      alt={item.title}
                      style={{ height: "50px", width: "50px" }}
                    />
                    <TitleTypography variant="h3" gutterBottom>
                      {item.title}
                    </TitleTypography>
                    <ParaTypography variant="body2" gutterBottom>
                      {item.para}
                    </ParaTypography>
                    <Image
                      src={item.imageBottom}
                      alt={item.title}
                      style={{ height: "10rem", width: "10rem" }}
                    />
                  </CardContent>
                </MainCard>
              </MainGrid>
            ))}
          </Grid>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
