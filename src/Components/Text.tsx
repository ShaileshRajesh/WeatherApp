import React, {ReactNode} from 'react';
import {Text as RNText} from 'react-native';

/**
 * A customizable text component for React Native.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label] - The text content to display. If `children` is provided, it takes precedence over `label`.
 * @param {ReactNode} [props.children] - The content inside the text component (used instead of `label`).
 * @param {object} [props.textStyle] - Custom styles for the text component.
 * @returns {JSX.Element} The Text component.
 *
 * @example
 * // Using the `label` prop
 * <Text label="Hello, World!" textStyle={{ fontSize: 18, color: 'blue' }} />
 *
 * // Using `children` instead of `label`
 * <Text textStyle={{ fontWeight: 'bold' }}>Bold Text</Text>
 */

type TextProps = {
  label?: string;
  children?: ReactNode;
  textStyle?: object;
};

const Text = ({label, children, textStyle}: TextProps) => {
  return <RNText style={[textStyle]}>{label || children}</RNText>;
};

export default Text;
