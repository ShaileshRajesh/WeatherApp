import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AppColors} from '../Utils/Colors';

/**
 *A customizable button component for React Native.
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label] - The text displayed on the button.
 * @param {string} [props.backgroundColor] - Background color of the button.
 * @param {Object} [props.buttonStyle] - Additional styles for the button container.
 * @param {number} [props.border] - Border radius of the button.
 * @param {Object} [props.textStyle] - Additional styles for the button text.
 * @returns {JSX.Element} The Button component.
 * @example
 * return (
 *   <Button
 *     label="Click Me"
 *     backgroundColor="blue"
 *     border={8}
 *     onClick={() => alert('Button Pressed!')}
 *     buttonStyle={{ padding: 10 }}
 *     textStyle={{ fontSize: 16 }}
 *   />
 * );
 */

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  backgroundColor?: string;
  buttonStyle?: Object;
  border?: number;
  textStyle?: object;
};
const Button = ({
  label,
  backgroundColor,
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
          backgroundColor: backgroundColor,
          borderRadius: border,
        },
      ]}
      onPress={onClick}
      activeOpacity={0.5}>
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
