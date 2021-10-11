import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import AppNavigator from '@/screens/AppNavigator';
import { default as mapping } from '../../mapping.json';

const themes = { light: eva.light, dark: eva.dark };

export default function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <ApplicationProvider {...eva} theme={themes[theme]} customMapping={mapping}>
      <AppNavigator toggleTheme={toggleTheme} />
    </ApplicationProvider>
  );
}
