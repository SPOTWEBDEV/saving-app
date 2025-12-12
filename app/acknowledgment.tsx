import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Button from '../components/button';
import { ThemeContext } from '../hooks/useTheme';

export default function Acknowledgment() {
  const router = useRouter();
  const context = useContext(ThemeContext)!; // ✅ Tell TS it will never be undefined
  const { theme, styles } = context;

  const handleVisitWebsite = () => {
    Linking.openURL('https://spotwebtech.com.ng/'); // Replace with your actual site
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          theme === 'light'
            ? require('../assets/images/smartsave-light.png')
            : require('../assets/images/smartsave-dark.png')
        }
        style={{ width: 200, height: 200 }}
      />

      <Text style={styles.title}>Acknowledgment</Text>
      <Text style={styles.text}>
        This app is developed and designed by Spotweb Tech.
        Spotweb Tech specializes in creating smart and intuitive apps for users.
        Visit our website for more information.
      </Text>

      <Text style={styles.text} onPress={handleVisitWebsite}>
        https://spotweb.com
      </Text>

      <Button title='Next' url='/dashboard' theme={theme} />
    </View>
  );
}


