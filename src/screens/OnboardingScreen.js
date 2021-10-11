import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      //  SkipButtonComponent={Skip}
      //  NextButtonComponent={Next}
      //  DoneButtonComponent={Done}
      //  DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          //     image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Kết nối với thế giới thú cưng',
          titleStyles: { color: 'orange' },
          subtitle:
            'Hãy đến với thế giới những người yêu động vật của chúng tôi',
          subTitleStyles: { paddingHorizontal: 10 },
        },
        {
          backgroundColor: '#fdeb93',
          paddingHorizontal: 20,
          //     image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Chia sẻ',
          titleStyles: { color: 'orange' },
          subtitle:
            'Hãy chia sẻ những khoảnh khắc đáng yêu của pet đến với mọi người.',
          subTitleStyles: { paddingHorizontal: 10 },
        },
        {
          backgroundColor: '#e9bcbe',
          //     image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Báo mất',
          titleStyles: { color: 'orange' },
          subtitle:
            'Pet bị thất lạc? Đừng lo, mọi người sẽ cũng tìm kiếm với bạn.',
          subTitleStyles: { paddingHorizontal: 10 },
        },
      ]}
    />
  );
}
