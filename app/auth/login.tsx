import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { createStyles } from '../../styles/theme';

export default function Login() {
  const router = useRouter();
  const theme = 'dark' as 'light' | 'dark'; // You can set this dynamically if needed
  const styles = createStyles(theme);



  return (
    <View style={styles.container}>
      <Image
        source={
          theme === 'light'
            ? require('../../assets/images/smartsave-light.png')
            : require('../../assets/images/smartsave-dark.png')
        }
        style={{ width: 200, height: 200 }}
      />


      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextInput style={styles.input} placeholder='Enter Password' />
      </View>


      <TouchableOpacity style={{width:"100%", backgroundColor:'red'}} onPress={() => router.push('/auth/login')} />
    </View>
  );
}


