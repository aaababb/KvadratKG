import { Box, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PenModal from "./PenModal";

const ModalHouse = () => {
  const theme = useTheme();
  return (
    <ModalStyle>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "black",
          border: "2px solid gray",
          boxShadow: 66,
          outline: "none",
          borderRadius: "12px",
          padding: {xs:'10px', md:'15px', lg:'20px'},
          [theme.breakpoints.down("md")]: {
            width: "40%",
            height: "70%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "60%",
            height: "60%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
            height: "80%",
          },
        }}
      >
        <PenModal />
      </Box>
    </ModalStyle>
  );
};

export default ModalHouse;

const ModalStyle = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1110,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
