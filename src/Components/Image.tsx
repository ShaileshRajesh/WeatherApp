import React, {ReactNode, useEffect, useState} from 'react';
import {
  Image as RNImage,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import {constructCdnUrl} from '../Utils/Icons';

type ImageProps = {
  source?: string;
  height?: number | string;
  width?: number | string;
  imgStyle?: ImageStyle;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  backgroungImgStyle?: ViewStyle;
  bgImgsource?: string;
  isBackgroundImage?: boolean;
  children?: ReactNode;
};

/**
 *
 * A flexible image component that supports both standard images and background images.
 * @component
 *
 * @param {Object} props - Component props.
 * @param {ImageSourcePropType} [props.source] - The source for the image.
 * @param {number|string} [props.height] - The height of the image.
 * @param {number|string} [props.width] - The width of the image.
 * @param {ImageStyle} [props.imgStyle] - Additional styles for the image.
 * @param {'cover' | 'contain' | 'stretch' | 'repeat' | 'center'} [props.resizeMode='cover'] - The resize mode for the image.
 * @param {ViewStyle} [props.backgroungImgStyle] - Styles for the background image.
 * @param {ImageSourcePropType} [props.bgImgsource] - The source for the background image.
 * @param {boolean} [props.isBackgroundImage=false] - Determines if the image should be used as a background.
 * @param {ReactNode} [props.children] - Children components to be rendered inside a background image.
 * @returns {JSX.Element} The Image component.
 *
 * @example
 * // Standard image usage
 * <Image source={require('./image.png')} imgStyle={{ width: 100, height: 100 }} />
 *
 * // Background image usage
 * <Image
 *   bgImgsource={require('./background.png')}
 *   isBackgroundImage
 *   backgroungImgStyle={{ flex: 1 }}
 * >
 *   <Text>Overlay Content</Text>
 * </Image>
 */

const Image = ({
  source,
  imgStyle = {},
  resizeMode = 'cover',
  bgImgsource,
  backgroungImgStyle = {},
  isBackgroundImage = false,
  children,
}: ImageProps) => {
  const fallbackUri = {
    uri: 'https://cloudinary-marketing-res.cloudinary.com/images/w_60,h_60,c_scale/v1699909962/fallback_image_header/fallback_image_header-png?_i=AA',
  };
  const [imgUri, setImgUri] = useState<ImageSourcePropType>(fallbackUri);

  useEffect(() => {
    const finalSource = source || bgImgsource;
    if (finalSource) {
      setImgUri({
        uri: constructCdnUrl(finalSource),
      });
    }
  }, [source, bgImgsource]);

  return (
    <>
      {!isBackgroundImage ? (
        <RNImage
          source={imgUri}
          style={imgStyle}
          resizeMode={resizeMode}
          onError={() => setImgUri(fallbackUri)}
        />
      ) : (
        <ImageBackground source={imgUri} style={backgroungImgStyle}>
          {children}
        </ImageBackground>
      )}
    </>
  );
};

export default Image;
