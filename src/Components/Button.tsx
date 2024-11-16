import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  label?: string;
  onClick?: () => {};
  backdroundColor: string;
  buttonStyle?: Object;
  border?: number;
};
const Button = ({
  label,
  backdroundColor,
  border,
  buttonStyle,
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
      <Text style={styles.text}>{label}</Text>
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
  },
});
export default Button;
