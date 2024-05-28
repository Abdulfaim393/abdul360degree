import React from "react";
import NewsLetter from "../newsLetter/NewsLetter";
import { Box, Container, Grid, List, ListItem } from "@mui/material";
import Image from "next/image";
import {
  AddIconTextBox,
  AddressIconTextTypo,
  CopywriteBox,
  CopyWriteTextTypo,
  FirstGridBox,
  FooterTextTypo,
  ImageBox,
  LinkHeadTypo,
  ListBox,
  ListMainBox,
  ListText,
  MainBox,
} from "./styled";
import {
  Address,
  AddressIconText,
  CopyWriteText,
  FooterIcons,
  ListOne,
  ListTwo,
} from "./data";

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <MainBox>
        <Container maxWidth="xl">
          <Box
            sx={{
              borderBottom: "2px solid white",
              padding: "1rem 0rem",
              paddingTop: "14rem",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <FirstGridBox>
                  <FooterTextTypo variant="body1" color="initial" gutterBottom>
                    We are 100+ professional software engin with more than 10
                    years of experience in delivering superior products Believe
                    it be cause you&apos;ve seen it.
                  </FooterTextTypo>
                  <ImageBox>
                    {FooterIcons.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="image"
                        height={32}
                        width={32}
                      />
                    ))}
                  </ImageBox>
                </FirstGridBox>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ListMainBox>
                  <LinkHeadTypo variant="h6" color="initial" gutterBottom>
                    Links
                  </LinkHeadTypo>
                  <ListBox>
                    <List>
                      {ListOne.map((item, index) => (
                        <ListItem key={index} disablePadding>
                          <Image
                            src={item.icon}
                            alt="image"
                            height={22}
                            width={22}
                          />{" "}
                          <ListText primary={item.text} />
                        </ListItem>
                      ))}
                    </List>
                    <List>
                      {ListTwo.map((item, index) => (
                        <ListItem key={index} disablePadding>
                          <Image
                            src={item.icon}
                            alt="image"
                            height={22}
                            width={22}
                          />
                          <ListText primary={item.text} />
                        </ListItem>
                      ))}
                    </List>
                  </ListBox>
                </ListMainBox>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ListMainBox>
                  <LinkHeadTypo variant="h6" color="initial" gutterBottom>
                    Our Offices
                  </LinkHeadTypo>
                  {Address.map((item, index) => (
                    <FooterTextTypo
                      key={index}
                      variant="body1"
                      color="initial"
                      gutterBottom
                    >
                      {item}
                    </FooterTextTypo>
                  ))}
                  {AddressIconText.map((item, index) => (
                    <AddIconTextBox key={index}>
                      <Image
                        src={item.icon}
                        alt="image"
                        height={18}
                        width={16}
                      />
                      <AddressIconTextTypo
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        {item.text}
                      </AddressIconTextTypo>
                    </AddIconTextBox>
                  ))}
                </ListMainBox>
              </Grid>
            </Grid>
          </Box>
          <CopywriteBox>
            {CopyWriteText.map((item, index) => (
              <CopyWriteTextTypo
                key={index}
                variant="body2"
                color="initial"
                gutterBottom
              >
                {item}
              </CopyWriteTextTypo>
            ))}
          </CopywriteBox>
        </Container>
      </MainBox>
    </>
  );
};

export default Footer;
