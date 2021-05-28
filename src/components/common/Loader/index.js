import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default Loader;
