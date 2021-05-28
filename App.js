import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApolloProvider} from '@apollo/client';
import Navigator from '_navigations';
import client from '_services/GraphQL';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'rgba(34,34,36,0.95)',
      }}>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
