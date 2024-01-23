/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

import React from 'react';
import { Amplify } from 'aws-amplify';
import { signIn, type SignInInput } from '@aws-amplify/auth';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import awsExports from '../src/aws-exports';

// Amplify.configure(awsExports);
/**
 * @description - The starting page.
 * @returns {jsx} The HomePage component.
 */
const HomePage = (): JSX.Element => {

  return (
    <Authenticator
      hideSignUp={true}>
      {({ signOut, user }) => (
        <main>
          {user ? <h1>Hello {user.username}</h1> : null}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};

export default HomePage;