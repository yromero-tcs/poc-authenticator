/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: 'us-east-1_A5vobhiQK',
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: '21ragicmbbll6l1r65ijm5v437',
      // // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      // signUpVerificationMethod: 'code', // 'code' | 'link'
      loginWith: {
        // OPTIONAL - Hosted UI configuration
        // oauth: {
        //   domain: 'your_cognito_domain',
        //   scopes: [
        //     'phone',
        //     'email',
        //     'profile',
        //     'openid',
        //     'aws.cognito.signin.user.admin'
        //   ],
        //   redirectSignIn: ['http://localhost:3000/'],
        //   redirectSignOut: ['http://localhost:3000/'],
        //   responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        // }
      }
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>POC Authenticator</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}