import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export function isIphone4s() {
  return window.width === 320 && window.height === 480;
}

export function isIphone5() {
  return window.width === 320 && window.height === 568;
}

export function isIphone6plus() {
  return window.width === 414 && window.height === 736;
}

export function nativeKeyboardMargin() {
  if (isIphone4s() || isIphone5()) {
    return 224;
  } else if (isIphone6plus()) {
    return 270;
  } else { // iPhone6
    return 235;
  }
}

export function nativeKeyboardHideMargin() {
  if (isIphone4s() || isIphone5()) {
    return 20;
  } else if (isIphone6plus()) {
    return 50;
  } else {
    return 40;
  }
}

export function nativeKeyboardShowMargin() {
  if (isIphone4s() || isIphone5()) {
    return 40;
  } else if (isIphone6plus()) {
    return 0;
  } else {
    return 40;
  }
}
