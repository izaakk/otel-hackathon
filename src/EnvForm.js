import * as React from 'react';
import './EnvForm.css';
// import useState from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Title from './Title';
// import Form from '@mui/material/FormGroup'
// import { FormLabel } from 'react-bootstrap';
import { ListItemButton, ListItemText, TableBody, TableRow } from '@mui/material';

// Form for user to create new environment

// TODO - add backend to save new env data and create env
// after submitting, where does the data go/how does new env get created?

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function EnvForm() {

  return (
    <React.Fragment>
      <Title>New Environment Fields</Title>

      <Table size="small">
        <TableHead>
            <TableCell>Environment Info</TableCell>
            <TableCell>Telemetry Data</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <div class="env-form-container">
              <form>
                <label>
                  Name 
                  <input type="text" name="name" />
                </label> 
                <label>
                  <input type="checkbox" name="metrics" />
                  Metrics
                </label>
              </form>
            </div>
          </TableRow>
          <TableRow>
            <label>
              Description
              <input type="text" name="description" />
            </label>
            <label>
              <input type="checkbox" name="traces" />
              Traces
            </label>
          </TableRow>
          <TableRow>
            <label>
              Type
              <input type="text" name="type" />
            </label>
            <label>
                <input type="checkbox" name="logs" />
                Logs
            </label>
          </TableRow>
          <TableRow>
            <label>
                Region
                <input type="text" name="region" />
            </label>
          </TableRow>
        </TableBody>
      </Table>

      <form>
        {/* <input type="submit" value="Create Environment" /> */}
        <TableCell>
          <ListItemButton type="submit" sx={{ backgroundColor: '#3385ff'}} >
            <ListItemText primary="Create New Environment" style={{ color: '#ffffff' }}/>
          </ListItemButton>
        </TableCell>
      </form>   

    </React.Fragment>
  );
}
