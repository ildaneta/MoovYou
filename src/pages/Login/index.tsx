import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';
import Header from '../../components/Header';
import Text from '../../components/Text';

import WelcomeSVG from '../../images/welcome-login.svg';
import theme from '../../theme';

import AppleSVG from '../../images/apple-icon.svg';
import GoogleSVG from '../../images/google-icon.svg';

import { styles } from './styles';
import { useAuthContext } from '../../context/AuthContext';
import Loader from '../../components/Loader';
import { AlignTypes } from '../../utils/enum';

const Login = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuthContext();

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Unable to connect with your Google account!');
      setIsLoading(false);
    }
  };

  const handleSignInWithApple = async () => {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Unable to connect with your Apple account!');
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImages}>
        <Header />
        <WelcomeSVG />
      </View>

      <View style={styles.containerLogin}>
        <Text
          fontFamily={theme.fonts.Regular}
          fontSize={theme.fontsSize.Intermediate16}
          color={theme.colors.neutral_gray}
          label={
            Platform.OS === 'ios'
              ? 'Login with one of the accounts below'
              : 'Login with Google account'
          }
          numberOfLines={2}
          style={styles.textButton}
          textAlign={AlignTypes.center}
        />

        <ButtonIcon
          label="Login with Google"
          icon={<GoogleSVG />}
          onPress={handleSignInWithGoogle}
        />

        {Platform.OS === 'ios' && (
          <ButtonIcon
            label="Login with Apple"
            icon={<AppleSVG />}
            onPress={handleSignInWithApple}
          />
        )}
      </View>

      {isLoading && <Loader size="small" />}
    </View>
  );
};

export default Login;
