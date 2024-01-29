/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

import { Authenticator } from '@aws-amplify/ui-react';
/**
 * @description - The starting page.
 * @returns {jsx} The HomePage component.
 */

const HomePage = () => {

return (
  <Authenticator
    loginMechanisms={['email']}
    hideSignUp={true}
    initialState="forgotPassword"
  >
    {({ signOut, user }) => (
      <main>
        {user ? <h1>Hello {user.signInDetails?.loginId}</h1> : null}
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
);

};

export default HomePage;