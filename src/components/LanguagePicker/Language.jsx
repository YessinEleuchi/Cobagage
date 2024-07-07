import React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import Flag from 'react-world-flags';

const Language = () => {
  return (
    <div>
      <FormControl variant="standard" className="Language" style={{ minWidth: 160 }}>
        <Select
          defaultValue="fr"
          style={{ minWidth: 120 }}
          fullWidth
          variant="standard"
          className="Language"
        >
          <MenuItem value="fr">
            <Flag code="FR" style={{ width: 24, height: 16, marginRight: 8 }} /> Français
          </MenuItem>
          <MenuItem value="en">
            <Flag code="GB" style={{ width: 24, height: 16, marginRight: 8 }} /> Anglais
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default Language;
