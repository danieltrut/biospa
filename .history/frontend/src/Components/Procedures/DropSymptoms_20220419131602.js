import React, { useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// For fetching data
import Grid from "@mui/material/Grid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

//////////////////////////////////////////////////////////////////////////////

//  TODO Extract list of diseases from db into dropdown list
function DropSymptoms(props) {
  const { symptoms, setSymptoms, symptomsValue, setSymptomsValue } = props;

  // Fetch Diseases in dropdown on Page load
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://localhost:4000/symptoms/all/et");
      setSymptoms(response.data);
    };
    loadData();
  }, [setSymptoms]);

  function handleSelectChange(event, newValues) {
    setSymptomsValue(newValues.map((symptom) => symptom.symp_id));
    console.log(symptomsValue);
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        {/* -------------------------------------------------------------------------------------------------- */}
        {/* Dropdown element */}
        <Autocomplete
          onChange={handleSelectChange}
          multiple={true}
          id="valueId"
          options={symptoms}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.symp_title_et}`}
          // onChange={handleChange}
          renderOption={(props, option, { setSymptomsValue }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={setSymptomsValue}
              />
              {[option.symp_title_et]}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Kaebused"
              placeholder="Vali kaebused"
            />
          )}
        />
      </Grid>

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* Fetching Procedures data from DataBase */}
    </Grid>
  );
}
export default DropSymptoms;
