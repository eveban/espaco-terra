import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

import GallerySwiper from 'react-native-gallery-swiper';

import images from './images';
// import { Container } from './styles';

const Template = () => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <StatusBar
      barStyle="default"
      translucent
      backgroundColor="#000"
      networkActivityIndicatorVisible
      animated
    />
    <View style={{ flex: 2 }}>
      <GallerySwiper images={images} />
      {/* <GallerySwiper images={images} /> */}
    </View>
  </KeyboardAvoidingView>
);
export default Template;
