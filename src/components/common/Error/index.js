import React from 'react';
import {Container} from '_styles/RootView';
import {ErrorText, ErrorContainer, ErrorImage} from '_styles/NetworkMessage';

const NetworkMessage = () => (
  <ErrorContainer>
    {/* <ErrorImage
      
      source={require('_assets/images/no-wifi.png')}
    /> */}
    <ErrorText>
      Please check your network connectivity and try again !
    </ErrorText>
  </ErrorContainer>
);

const Error = props => {
  return (
    <Container>
      {props.network ? (
        <NetworkMessage />
      ) : (
        <ErrorText>{props.error}</ErrorText>
      )}
    </Container>
  );
};

export default Error;
