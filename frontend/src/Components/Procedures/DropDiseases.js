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
function DropDiseases(props) {
  const { diseases, setDiseases, diseasesValue, setDiseasesValue } = props;

  // Fetch Diseases in dropdown on Page load
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://localhost:4000/diseases/all/et");
      setDiseases(response.data);
    };
    loadData();
  }, [setDiseases]);

  function handleSelectChange(event, newValues) {
    setDiseasesValue(newValues.map((disease) => disease.dis_id));
    console.log(diseasesValue);
  }

  return (
        <Autocomplete
          onChange={handleSelectChange}
          multiple={true}
          id="valueId"
          options={diseases}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.dis_title_et}`}
          // onChange={handleChange}
          renderOption={(props, option, { setDiseasesValue }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={setDiseasesValue}
              />
              {[option.dis_title_et]}
            </li>
          )}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Haigused"
              placeholder="Vali haigused"
            />
          )}
        />
      
    
  );
}
export default DropDiseases;
