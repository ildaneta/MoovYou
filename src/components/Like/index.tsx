import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import HeartSVG from '../../images/heart-icon.svg';
import HeartFilledSVG from '../../images/heart-filled-icon.svg';

interface ILikeProps extends TouchableOpacityProps {
  isLiked: boolean;
}

const Like = ({ isLiked }: ILikeProps): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      {isLiked ? <HeartFilledSVG /> : <HeartSVG />}
    </TouchableOpacity>
  );
};

export default Like;
