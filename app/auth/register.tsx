import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../hooks/useTheme';

export default function Register() {
  const router = useRouter();
  const { styles } = useContext(ThemeContext)!;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.authContainer}>
          <View style={styles.authHeader}>
            <Text style={styles.authTitle}>Create Account</Text>
            <Text style={styles.authSubtitle}>
              Open an account and start saving smarter
            </Text>
          </View>

          <TextInput
            placeholder="Full Name"
            placeholderTextColor={styles.authSubtitle.color}
            style={styles.authInput}
          />

          <TextInput
            placeholder="Email Address"
            placeholderTextColor={styles.authSubtitle.color}
            style={styles.authInput}
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={styles.authSubtitle.color}
            style={styles.authInput}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={styles.authSubtitle.color}
            style={styles.authInput}
            secureTextEntry
          />

          <TouchableOpacity style={styles.authButton}>
            <Text style={styles.authButtonText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.authFooterText}>
            Already have an account?{' '}
            <Text
              style={styles.authLink}
              onPress={() => router.push('/auth/login')}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
