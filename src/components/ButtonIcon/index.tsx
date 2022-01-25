import React, { ReactElement, SVGProps } from 'react';
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

interface IButtonIconProps extends TouchableOpacityProps {
  label: string;
  icon: ReactElement<SVGProps<SVGElement>>;
}

const ButtonIcon = ({
  label,
  icon,
  ...rest
}: IButtonIconProps): JSX.Element => {
  const { onPress } = { ...rest };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={styles.containerIcon}>{icon}</View>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
