import * as React from 'react';
import Title from './Title';

import { DataStore } from '@aws-amplify/datastore';
import { Tenant } from './models';

export default function ProfileForm() {

  return (
    <React.Fragment>
      <Title>Welcome to Your Profile</Title>
      <div style = {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'stretch',
                flexWrap: 'nowrap',
                alignItems: 'center',
                marginRight: 220, }}>
            <h3>
                Name 
            </h3> 
            <h4>
                Jerry
            </h4>
        </div>
        <div style = {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'stretch',
                flexWrap: 'nowrap',
                alignItems: 'center',
                marginRight: 220, }}>
                
                <h3>
                Number of Active Environments
                </h3>
                <h4>
                3
                </h4>
                </div>
            <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'stretch',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginRight: 220, }}>
            <h3>
              Region
            </h3>
            <h4>
                Ohio
            </h4>
            </div>
            <div style = {{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'stretch',
                flexWrap: 'nowrap',
                alignItems: 'center',
                marginRight: 220, }}>
            <h3>
            Archived Experiments
            </h3>
            <h4>
                9
            </h4>
                </div>
            
    </React.Fragment>
    
  );
}