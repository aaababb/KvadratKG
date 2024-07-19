import * as React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { GlobalStyles } from "@mui/material";

const globalStyles = (
  <GlobalStyles
    styles={{
      ".css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon": {
        color: "white !important",
      },
      ".css-btuwgh-MuiInputBase-root-MuiInput-root::before": {
        borderColor: "white !important",
      },
    }}
  />
);

const SelectUI = () => {
  return (
    <Box sx={{ minWidth: 120, color: "white !imporatant" }}>
      {globalStyles}
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          sx={{ color: "white" }}
        >
          <OptionStyle value={1}>На День</OptionStyle>
          <OptionStyle value={2}>На неделю</OptionStyle>
          <OptionStyle value={3}>На Месяц</OptionStyle>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default SelectUI;

const OptionStyle = styled("option")({
  backgroundColor: "#222224 !important",
  padding: "5px",
});
