import React from 'react';
import {View, Text} from 'react-native';
import NetworkConnection from '_utils/NetworkConnection';
import Error from '_components/common/Error';

const HistoryScreen = () => {
  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>History!</Text>
    </View>
  );
};

export default HistoryScreen;
