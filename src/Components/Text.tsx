import React, {ReactNode} from 'react';
import {Text as RNText} from 'react-native';

type TextProps = {
  label?: string;
  children?: ReactNode;
};

const Text = ({label, children}: TextProps) => {
  return <RNText>{label || children}</RNText>;
};

export default Text;
