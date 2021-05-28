import React from 'react';
import {View, Text} from 'react-native';
import NetworkConnection from '_utils/NetworkConnection';
import Error from '_components/common/Error';

const SavedScreen = () => {
  let network = NetworkConnection();

  if (network === false) {
    return <Error network={true} />;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Saved!</Text>
    </View>
  );
};

export default SavedScreen;
