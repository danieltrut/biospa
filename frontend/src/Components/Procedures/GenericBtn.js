import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const classes = {
  extractData: {
    marginTop: "0px",
  },
  icon: {
    color: "white",
  },
  searchBtn: {
    marginTop: "-3rem",
    marginBottom: "3rem",
  },
};

const GenericBtn = (props) => {
  const { targetsValue, diseasesValue, symptomsValue, setProcedures } = props;

  // Method fetches Procedures depending on diseases
  const loadProceduresTargets = async () => {
    const idsQuery = targetsValue
      .map((n, index) => `id[${index}]=${n}`)
      .join("&");
    const response = await axios.get(
      `http://localhost:4000/procedures/procedures_targets?${idsQuery}`
    );
    setProcedures(response.data);
  };

  return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        loadProceduresTargets(targetsValue.id);
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );

};

export default GenericBtn;
