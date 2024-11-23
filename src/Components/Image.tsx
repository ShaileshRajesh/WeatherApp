import React, {ReactNode} from 'react';
import {
  Image as RNImage,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from 'react-native';

type ImageProps = {
  source?: ImageSourcePropType;
  height?: number | string;
  width?: number | string;
  imgStyle?: ImageStyle;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  backgroungImgStyle?: ViewStyle;
  bgImgsource?: ImageSourcePropType;
  isBackgroundImage?: boolean;
  children?: ReactNode;
};

const Image = ({
  source,
  imgStyle = {},
  resizeMode = 'cover',
  bgImgsource,
  backgroungImgStyle = {},
  isBackgroundImage = false,
  children,
}: ImageProps) => {
  return (
    <>
      {!isBackgroundImage ? (
        <RNImage source={source} style={imgStyle} resizeMode={resizeMode} />
      ) : (
        <ImageBackground source={bgImgsource} style={backgroungImgStyle}>
          {children}
        </ImageBackground>
      )}
    </>
  );
};

export default Image;
