import * as React from 'react';
import Title from './Title';

import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Tenant } from './models';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function ProfileForm({signOut, user}) {

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
              {user.attributes.name}
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
                Email Address
                </h3>
                <h4>
                {user.attributes.email}
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
                <button onClick={signOut}>Sign out</button>
            
    </React.Fragment>
    
  );
}


export default withAuthenticator(ProfileForm)