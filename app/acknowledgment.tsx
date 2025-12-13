import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../hooks/useTheme';

export default function Acknowledgment() {
  const router = useRouter();
  const { theme, styles } = useContext(ThemeContext)!;

  return (
    <View style={styles.container}>
      <Image
        source={
          theme === 'light'
            ? require('../assets/images/smartsave-light.png')
            : require('../assets/images/smartsave-dark.png')
        }
        style={{ width: 180, height: 180, marginBottom: 20 }}
      />

      <Text style={styles.title}>Welcome to SmartSave</Text>

      <Text style={styles.text}>
        SmartSave is designed to help you save smarter, manage your finances,
        and grow your money effortlessly.
      </Text>

      <Text
        style={[styles.text, { color: '#FBBF24' }]}
        onPress={() => Linking.openURL('https://spotwebtech.com.ng')}
      >
        Powered by Spotweb Tech
      </Text>

      {/* ACTION BUTTONS */}
      <View style={{ width: '80%', marginTop: 30 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: '#FBBF24',
            },
          ]}
          onPress={() => router.push('/auth/register')}
        >
          <Text
            style={[
              styles.buttonText,
              { color:  '#FBBF24' },
            ]}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
