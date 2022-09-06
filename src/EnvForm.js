import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Title from './Title';
import { ListItemButton, ListItemText, TableBody, TableRow } from '@mui/material';
import { DataStore } from '@aws-amplify/datastore';
import { ExperimentEnv } from './models';

// Form for user to create new environment

// TODO - add backend to save new env data and create env
// after submitting, where does the data go/how does new env get created?

// function preventDefault(event) {
//   event.preventDefault();
// }

async function newEnv(tenantID, name, desc, type, region, metrics, traces, logs) {
    await DataStore.save(
        new ExperimentEnv({
            "name": name,
            "description": desc,
            "type": type,
            "region": region,
            "metrics": metrics,
            "traces": traces,
            "log": logs,
            "tenantID": tenantID  // get user id in here
        })
    );
}

export default function EnvForm() {

  return (
    <React.Fragment>
      <Title>Environment Fields</Title>
      <Table size="small">
        <TableHead>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <label>
                Name <br/>
                <input type="text" name="name" placeholder="myNewEnv"/>
              </label>
              <br/>
              <br/>
              <label>
                Description <br/>
                <input type="text" name="description" placeholder="Describe the purpose of your environment"/>
              </label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <label>
                Type: <br/>
                <input type="radio" id="typeA" name="type" value="typeA" />
                <label for="typeA">  A</label><br/>
                <input type="radio" id="typeB" name="type" value="typeB" />
                <label for="typeB">  B</label><br/>
                <input type="radio" id="typeC" name="type" value="typeC" />
                <label for="typeC">  C</label>
              </label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <label>
                Region: <br/>
                <input type="radio" id="us-west-1" name="region" value="Oregon"/>
                <label for="Oregon">  Oregon</label><br/>
                <input type="radio" id="us-west-2" name="region" value="N. California"/>
                <label for="N. California">  N. California</label><br/>
                <input type="radio" id="us-east-1" name="region" value="N. Virginia"/>
                <label for="N. Virginia">  N. Virginia</label><br/>
                <input type="radio" id="us-east-2" name="region" value="Ohio"/>
                <label for="Ohio">  Ohio</label>
              </label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <label>
                Telemetry Options: <br/>
                <input type="checkbox" id="vehicle1" name="telemetry" value="metrics"/>
                <label for="metrics">  Metrics</label><br/>
                <input type="checkbox" id="vehicle2" name="telemetry" value="traces"/>
                <label for="traces">  Traces</label><br/>
                <input type="checkbox" id="vehicle3" name="telemetry" value="logs"/>
                <label for="logs">  Logs</label>
              </label>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableBody>
        <TableRow>
          <TableCell>

            {/* add event listener -> creates new model instance? */}
            <ListItemButton sx={{ backgroundColor: '#3385ff'}} >
              <ListItemText primary="Create" style={{ color: '#ffffff' }}/>
            </ListItemButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </React.Fragment>
  );
}