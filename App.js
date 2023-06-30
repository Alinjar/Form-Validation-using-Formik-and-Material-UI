import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Select } from '@mui/material';
import {Button} from '@mui/material';
import {InputLabel} from '@mui/material'
import {FormHelperText} from '@mui/material'

const styles = {
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    width: '400px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
};
const validate = values=>{
  const errors={}
  if(values.name==="")
  errors.name="Required"
  if(values.address==="")
  errors.address="Required"
  if(values.country==="")
  errors.country="Required"
  if(values.gender==="")
  errors.gender="Required"
  if(values.hobbies.length === 0)
  errors.hobbies="Required"

  return errors;
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      country: "",
      gender: "",
      hobbies: [],
    },
    validate, // Use the defined validate function
    onSubmit: (values) => {
     
        // Check if there are any errors before submitting
        if(Object.keys(formik.errors).length !== 0)  {
          alert("Please fill in all the required fields.");
        } else {
          alert(JSON.stringify(values, null, 2));
        }
    },
  });

  return (
    <Box sx={styles.boxContainer}>
      <Card variant="outlined" sx={styles.card}>
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl style={{padding:"20px"}}>
        <TextField
              id="name"
              variant="standard"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            /></FormControl>
          <FormControl style={{padding:"20px"}}>
          <TextField
            id="address"
            multiline
            rows={4}
            label="Address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && formik.errors.address}
              helperText={formik.touched.address && formik.errors.address}
          /></FormControl>

          {/* Dropdown for Country */}
          
          <FormControl variant='standard' style={{paddingBottom:'20px', paddingInline:'20px'}} error={formik.touched.country && formik.errors.country}>
            <InputLabel id ='demo-simple-select-label' style={{paddingInline:'20px'}}>Country</InputLabel>
          <Select
          labelId ='demo-simple-select-label'
              id="country"
              name='country'
              label="Country"
              value={formik.values.country}
              onChange={formik.handleChange}
              variant="standard"
              
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
           
            </Select>
            <FormHelperText>{formik.touched.country && formik.errors.country}</FormHelperText>
          </FormControl>

          {/* Radio Button Group for Gender */}
          <FormControl component="fieldset" style={{padding:"20px"}} error={formik.touched.gender && formik.errors.gender}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
          </FormControl>

          <FormControl variant='standard' style={{paddingBottom:'20px', paddingInline:'20px'}} error={formik.touched.hobbies && formik.errors.hobbies}>
            <InputLabel id ='demo-simple-select-label' style={{paddingInline:'20px'}}>Hobbies</InputLabel>
          <Select
              labelId='demo-simple-select-label'
              id="hobbies"
              name='hobbies'
              label="Hobbies"
              multiple
              value={formik.values.hobbies}
              onChange={formik.handleChange}
              variant="standard"
            >
              <MenuItem value="Gymming">Gymming</MenuItem>
              <MenuItem value="Reading">Reading</MenuItem>
              <MenuItem value="Cycling">Cycling</MenuItem>
           
            </Select>
            <FormHelperText>{formik.touched.hobbies && formik.errors.hobbies}</FormHelperText>
          </FormControl>


          {/* Submit button */}
          <Button type="submit" variant='contained'>Submit</Button>
        </form>
      </Card>
    </Box>
  );
}

export default App;
