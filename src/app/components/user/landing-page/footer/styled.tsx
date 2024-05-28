"use client";
import { Box, ListItemText, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url("/footerimg.png")`,
    height:"80vh"
  }));
  export const FirstGridBox = styled(Box)(({ theme }) => ({
    padding: "0rem 3rem",
  }));
  export const ImageBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem 0rem",
  }));
  export const ListMainBox = styled(Box)(({ theme }) => ({
    padding: "0rem 4rem",
  }));
  export const ListBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));
  export const AddIconTextBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  }));
  export const CopywriteBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 4rem",
  }));
  export const PositionRelativeBox = styled(Box)(({ theme }) => ({
      position: 'relative',
      top: '-3rem',
      marginBottom: '-200px',
      marginTop: '8rem',
  }));
  export const FooterTextTypo = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "cursive",
    textAlign: "justify",
  }));
  export const LinkHeadTypo = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "cursive",
    borderBottom: "2px solid white",
  }));
  export const AddressIconTextTypo = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "cursive",
    marginLeft: "15px",
    fontSize: "1rem",
    marginBottom: "0px",
  }));
  export const CopyWriteTextTypo = styled(Typography)(({ theme }) => ({
    color: "white",
    fontFamily: "cursive",
    fontSize: "1rem",
    marginBottom: "0px",
  }));
  export const ListText = styled(ListItemText)(({ theme }) => ({
    color: "white",
    textTransform: "capitalize",
    fontFamily: "cursive",
    fontSize: "18px",
    marginLeft: "10px",
    cursor: "pointer",
  }));
  