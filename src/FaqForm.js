import * as React from 'react';
// import useState from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import Title from './Title';
// import Form from '@mui/material/FormGroup'
// import { FormLabel } from 'react-bootstrap';
import {TableBody, TableRow } from '@mui/material';


export default function FaqForm() {

  return (
    <React.Fragment>

      <Table size="small">
        <TableBody>
          <TableRow>
            <div class="env-form-container">
              <form>
                <label>
                    <b>
                  How to Create a New Environment </b>
                </label> 
                <p>
                    lorem ipsum dolor. lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.
                </p>
              </form>
            </div>
          </TableRow>
          <TableRow>
            <label><b>
            How to Use API Key
            </b>
            </label>
            <p>
            lorem ipsum dolor. lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.
            </p>
          </TableRow>
          <TableRow>
            <label> <b>
            How to Access Archived Environments 
            </b>
            </label>
            <p>
            lorem ipsum dolor. lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.lorem ipsum dolor.
            </p>
          </TableRow>
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
