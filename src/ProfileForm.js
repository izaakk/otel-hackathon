import * as React from 'react';
// import useState from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
import Title from './Title';
// import Form from '@mui/material/FormGroup'
// import { FormLabel } from 'react-bootstrap';
import {TableBody, TableRow } from '@mui/material';


export default function ProfileForm() {

  return (
    <React.Fragment>
      <Title>Welcome to Your Profile</Title>

      <Table size="small">
        <TableBody>
          <TableRow>
            <div class="env-form-container">
              <form>
                <label>
                  Name 
                </label> 
              </form>
            </div>
          </TableRow>
          <TableRow>
            <label>
              Number of Active Environments
            </label>
          </TableRow>
          <TableRow>
            <label>
              Region
            </label>
          </TableRow>
          <TableRow>
            <label>
                Archived Experiments
            </label>
          </TableRow>
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
