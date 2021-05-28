import Config from 'react-native-config';
import {ApolloClient, InMemoryCache} from '@apollo/client';

console.log(Config.API);
const client = new ApolloClient({
  uri: Config.API,
  cache: new InMemoryCache(),
});

export default client;
