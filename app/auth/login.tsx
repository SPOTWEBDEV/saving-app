import { ThemeContext } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPasscode = () => {
  const context = useContext(ThemeContext)!
  const { theme, styles } = context
  const route = useRouter()


  

  const passcode = ''; // later use state (length = 6)

  return (
    <SafeAreaView style={[styles.container, { padding: 10 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.loginPage}>

          {/* HEADER */}
          <View>
            <TouchableOpacity onPress={()=> route.push('/acknowledgment')} style={styles.backIcon}>
              <Ionicons name="arrow-back" size={22} color={styles.text.color} />
            </TouchableOpacity>
          </View>

          {/* PROFILE */}
          <View style={styles.profileWrapper}>

            <Image
              source={
                theme === 'light'
                  ? require('../../assets/images/smartsave-light.png')
                  : require('../../assets/images/smartsave-dark.png')
              }
              style={{ width: 150, height: 150 }}
            />



            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.subtitleText}>Enter your 6 digit passcode</Text>

            {/* PASSCODE BOXES */}
            <View style={styles.passcodeRow}>
              {[...Array(6)].map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.passcodeBox,
                    i === passcode.length && styles.passcodeActive,
                  ]}
                >
                  {i < passcode.length && <View style={styles.passcodeDot} />}
                </View>
              ))}
            </View>
          </View>

          {/* KEYPAD */}
          <View style={styles.keypadContainer}>
            {[
              ['1', '2', '3'],
              ['4', '5', '6'],
              ['7', '8', '9'],
              ['x', '0', 'ok'],
            ].map((row, idx) => (
              <View key={idx} style={styles.keypadRow}>
                {row.map(key => (
                  <TouchableOpacity key={key} style={styles.keypadKey}>
                    {key === 'x' ? (
                      <Ionicons name="close" size={22} color="#CBD5E1" />
                    ) : key === 'ok' ? (
                      <Ionicons name="arrow-forward" size={22} color="#CBD5E1" />
                    ) : (
                      <Text style={styles.keypadText}>{key}</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            ))}

            <Text style={styles.forgotText}>Forgot passcode?</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  );
};

export default LoginPasscode