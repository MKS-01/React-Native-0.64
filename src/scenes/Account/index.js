import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {AuthContext} from '_navigations';

const AccountScreen = () => {
  const {signOut} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default AccountScreen;
