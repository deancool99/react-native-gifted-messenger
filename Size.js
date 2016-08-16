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
    return 25;
  } else if (isIphone6plus()) {
    return -250;
  } else { // iPhone6
    return -235;
  }
}
