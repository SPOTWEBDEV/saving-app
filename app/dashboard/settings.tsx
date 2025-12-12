import NavBar from '@/components/clients/navBar';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../hooks/useTheme';
const settings = () => {
  const context = useContext(ThemeContext)!; // ✅ Tell TS it will never be undefined
  const { theme, styles } = context;
  const [isBiometricOn, setIsBiometricOn] = useState(false);

  // compute these inline — NOT inside StyleSheet.create
  const trackColor = {
    false: theme === 'light' ? '#CBD5E1' : '#475569', // inactive track
    true: '#FBBF24',                             // active track (yellow)
  };
  const thumbColor = theme === 'light' ? '#FFFFFF' : '#F8FAFC';
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <View>
        <NavBar theme={theme} />

        {/* SECURITY SECTION */}
        <View style={styles.settingsSection}>
          <Text style={styles.settingsSectionTitle}>Security & Privacy</Text>

          <View style={styles.settingsCard}>

            {/* Item */}
            <View style={styles.settingsItem}>
              <View style={styles.settingsLeft}>
                <View style={styles.settingsIconWrapper}>
                  <Ionicons name="lock-closed" size={20} />
                </View>
                <View>
                  <Text style={styles.settingsTitle}>Change Passcode</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={18} />
            </View>
            <View style={styles.settingsItem}>
              <View style={styles.settingsLeft}>
                <View style={styles.settingsIconWrapper}>
                  <Ionicons name="lock-closed" size={20} />
                </View>
                <View>
                  <Text style={styles.settingsTitle}>Change Passcode</Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={18} />
            </View>
            <View style={styles.settingsItem}>
              <View style={styles.settingsLeft}>
                <View style={styles.settingsIconWrapper}>
                  <Ionicons name="finger-print" size={20} color='#FBBF24' />
                </View>

                <View>
                  <Text style={styles.settingsTitle}>Biometrics for transactions</Text>
                  <Text style={styles.settingsSubText}>Authenticate transactions with biometrics</Text>
                </View>
              </View>

              <Switch
                value={isBiometricOn}
                onValueChange={setIsBiometricOn}
                trackColor={trackColor}   // pass the object here
                thumbColor={thumbColor}   // pass string here
              />
            </View>
             <View style={styles.settingsItem}>
              <View style={styles.settingsLeft}>
                <View style={styles.settingsIconWrapper}>
                  <Ionicons name="eye" size={20} color='#FBBF24' />
                </View>

                <View>
                  <Text style={styles.settingsTitle}>Hidden Balance</Text>
                  
                </View>
              </View>

              <Switch
                value={isBiometricOn}
                onValueChange={setIsBiometricOn}
                trackColor={trackColor}   // pass the object here
                thumbColor={thumbColor}   // pass string here
              />
            </View>
             <View style={styles.settingsItem}>
              <View style={styles.settingsLeft}>
                <View style={styles.settingsIconWrapper}>
                  <Ionicons name="moon" size={20} color='#FBBF24' />
                </View>

                <View>
                  <Text style={styles.settingsTitle}>Dark Mode</Text>
                  <Text style={styles.settingsSubText}>Authenticate transactions with biometrics</Text>
                </View>
              </View>

              <Switch
                value={isBiometricOn}
                onValueChange={setIsBiometricOn}
                trackColor={trackColor}   // pass the object here
                thumbColor={thumbColor}   // pass string here
              />
            </View>
            

            {/* More items... */}
          </View>
        </View>

      </View>

    </SafeAreaView>


  )
}

export default settings