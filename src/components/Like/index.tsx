import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import HeartSVG from '../../images/heart-icon.svg';
import HeartFilledSVG from '../../images/heart-filled-icon.svg';

interface ILikeProps extends TouchableOpacityProps {
  isLiked: boolean;
}

const Like = ({ isLiked, ...rest }: ILikeProps): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      {isLiked ? <HeartFilledSVG /> : <HeartSVG />}
    </TouchableOpacity>
  );
};

export default Like;
