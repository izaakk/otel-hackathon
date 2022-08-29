import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { ListItemButton, ListItemText } from '@mui/material';
import CreateEnv from './CreateEnv';

// Generate Environment Data

// TODO - alter createData 
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'Env1',
    'type',
    'desc',
    '123',
    '18 Aug 2022',
  ),
  createData(
    1,
    'Env2',
    'type',
    'desc',
    '456',
    '18 Aug 2022',
  ),
  createData(
    2, 
    'Env3', 
    'type', 
    'desc', 
    '789', 
    '18 Aug 2022',
  ),
  createData(
    3,
    'Env4',
    'type',
    'desc',
    '123',
    '18 Aug 2022',
  ),
  createData(
    4,
    'Env5',
    'type',
    'desc',
    '456',
    '18 Aug 2022',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Environments() {

  return (
    <React.Fragment>
      <Title>Active Environments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Env ID</TableCell>
            <TableCell align="right">Creation Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
              See more environments
            </Link>  
          </TableCell>
          <TableCell>
            {/* <Link align="right" color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
              Create New Environment
            </Link>  */}
            <ListItemButton sx={{ backgroundColor: '#3385ff'}} href="create-env" onClick={<CreateEnv />}>
              <ListItemText primary="Create New Environment" style={{ color: '#ffffff' }}/>
            </ListItemButton>
          </TableCell>
        </TableRow>
      </TableBody>
      
    </React.Fragment>
  );
}
