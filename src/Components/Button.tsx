import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AppColors} from '../Utils/Colors';

type ButtonProps = {
  label?: string;
  onClick?: () => {};
  backdroundColor: string;
  buttonStyle?: Object;
  border?: number;
  textStyle?: object;
};
const Button = ({
  label,
  backdroundColor,
  border,
  buttonStyle,
  textStyle,
  onClick,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyle,
        {
          backgroundColor: backdroundColor,
          borderRadius: border,
        },
      ]}
      onPress={onClick}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: AppColors.white,
  },
});
export default Button;
