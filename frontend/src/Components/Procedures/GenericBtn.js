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
  const loadProceduresDiseases = async () => {
    const idsQuery = diseasesValue
      .map((n, index) => `id[${index}]=${n}`)
      .join("&");
    const response = await axios.get(
      `http://localhost:4000/procedures/procedures_diseases?${idsQuery}`
    );
    setProcedures(response.data);
  };

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

  const loadProceduresSymptoms = async () => {
    const idsQuery = symptomsValue
      .map((n, index) => `id[${index}]=${n}`)
      .join("&");
    const response = await axios.get(
      `http://localhost:4000/procedures/procedures_symptoms?${idsQuery}`
    );
    setProcedures(response.data);
  };

  return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        loadProceduresDiseases(diseasesValue.id);
        loadProceduresTargets(targetsValue.id);
        loadProceduresSymptoms(symptomsValue.id);
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );

  /* return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
        loadProceduresTargets(targetsValue.id);
        // loadProceduresTargets();
      }}
      variant="contained"
    >
      Otsi
    </Button>
  ); */
};

export default GenericBtn;
