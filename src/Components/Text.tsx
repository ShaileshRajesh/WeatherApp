import React, {ReactNode} from 'react';
import {Text as RNText} from 'react-native';

type TextProps = {
  label?: string;
  children?: ReactNode;
  textStyle?: object;
};

const Text = ({label, children, textStyle}: TextProps) => {
  return <RNText style={[textStyle]}>{label || children}</RNText>;
};

export default Text;
