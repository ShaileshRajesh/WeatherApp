import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import Image from './Image';

/**
 *  Loader Component
 *
 * A modal-based loader component that displays a GIF while an operation is in progress.
 * @returns {JSX.Element} A modal with a centered loader GIF.
 *
 *  * @example
 * return (
 *   <Loader />
 * )
 */

const Loader = () => {
  return (
    <Modal visible={true} transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../../assets/Icons/loader.gif')}
            imgStyle={styles.loaderImg}
          />
        </View>
      </View>
    </Modal>
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
    height: '30%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  loaderImg: {
    height: '80%',
    width: '90%',
  },
});

export default Loader;
