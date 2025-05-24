import React from 'react';
import {View, Modal as RNModal, StyleSheet} from 'react-native';
import Button from './Button';
import Image from './Image';
import {useUiStore} from '../Store';
import {AppColors} from '../Utils/Colors';
import {fontFamily} from '../Utils/Styling';
import Text from './Text';
import {ICONS} from '../Utils/Icons';

const Modal = () => {
  const {
    modal: {showModal, iconName, message, buttonInfo},
    hideModal,
  } = useUiStore();

  const getIcon = () => {
    switch (iconName) {
      case 'scuccess':
        return ICONS.SUCCESS;

      case 'warning':
        return ICONS.WARNING;

      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    hideModal();
  };

  return (
    <RNModal visible={showModal} animationType="slide" transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={getIcon()} imgStyle={styles.imgStyle} />
          {message ? (
            <Text
              textStyle={{fontSize: 18, textAlign: 'center', marginTop: 20}}>
              {message}
            </Text>
          ) : null}
          {buttonInfo?.primaryButtonName && (
            <Button
              label={buttonInfo.primaryButtonName}
              backgroundColor={buttonInfo?.primaryButtonColor}
              textStyle={styles.buttonStyle}
              buttonStyle={styles.buttonContainer}
              border={25}
              onClick={handleButtonClick}
            />
          )}
          {buttonInfo?.secondaryButtonName && (
            <Button
              label={buttonInfo.secondaryButtonName}
              backgroundColor={buttonInfo?.primaryButtonColor}
              textStyle={styles.buttonStyle}
              buttonStyle={styles.buttonContainer}
              onClick={handleButtonClick}
            />
          )}
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: AppColors.white,
    paddingVertical: 18,
  },
  imgStyle: {
    height: 44,
    width: 44,
  },
  buttonStyle: {
    color: AppColors.white,
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 25,
    paddingVertical: 8,
  },
});

export default Modal;
