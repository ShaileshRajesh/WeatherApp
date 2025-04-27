import React from 'react';
import {
  View,
  TextInput,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import Image from './Image';
import {AppColors} from '../Utils/Colors';

/**
 * A reusable text input component with an icon.
 *
 * @param {ImageSourcePropType} imgSource - The source of the image to be displayed.
 * @param {ImageStyle} imageStyle - Custom styles for the image.
 * @param {(value: string) => void} onChangeText - Callback function when text changes.
 * @param {string} value - The current value of the input.
 * @param {string} placeHolderText - Placeholder text for the input field.
 * @param {string} maxLength - Limits the maximum number of characters that can be entered.
 * @returns {JSX.Element} The IconWithTextInput component.
 */

type IconWithTextInputProps = {
  imgSource?: ImageSourcePropType;
  imageStyle?: ImageStyle;
  onChangeText?: (value: any) => void;
  value?: any;
  placeHolderText?: string;
  maxLength?: number;
};

const IconWithTextInput = ({
  imgSource,
  imageStyle = {},
  value,
  placeHolderText = '',
  maxLength,
  onChangeText,
}: IconWithTextInputProps) => {
  const handleText = (value: any) => {
    onChangeText?.(value);
  };
  return (
    <View style={styles.container}>
      <Image source={imgSource} imgStyle={{...styles.image, ...imageStyle}} />
      <TextInput
        placeholder={placeHolderText}
        value={value}
        onChangeText={handleText}
        style={styles.input}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: AppColors.white,
    borderWidth: 2,
    borderColor: AppColors.lightBlue,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '2%',
    paddingLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    width: '90%',
  },
});

export default IconWithTextInput;
