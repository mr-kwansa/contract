import onboarding1 from '../../assets/images/image.png';
import onboarding2 from '../../assets/images/image1.png';
import onboarding3 from '../../assets/images/image3.png';

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  // getStarted,
  // signUpCar,
  // check,
  // noResult,
  // message,
};

// export const icons = {
//   arrowDown,
//   arrowUp,
//   backArrow,
//   chat,
//   checkmark,
//   close,
//   dollar,
//   email,
//   eyecross,
//   google,
//   home,
//   list,
//   lock,
//   map,
//   marker,
//   out,
//   person,
//   pin,
//   point,
//   profile,
//   search,
//   selectedMarker,
//   star,
//   target,
//   to,
// };

export const onBoarding = [
  {
    id: 1,
    title: 'Welcome to myRx',
    description:
      'Track medications, monitor your health, and stay connected with your pharmacy—all in one app.',
    image: images.onboarding1,
  },
  {
    id: 2,
    title: 'Stay on Top of Your Health',
    description:
      'Easily access your diagnostic tests, vital signs, and health trends from your last visits.',
    image: images.onboarding2,
  },
  {
    id: 3,
    title: 'Your Health History, Always with You',
    description:
      'Your medical journey is just a tap away, from pharmacy visits to prescriptions.',
    image: images.onboarding3,
  },
];

export const data = {
  onBoarding,
};
