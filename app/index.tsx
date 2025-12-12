import { useRouter } from 'expo-router';
import React, { useContext, useEffect } from 'react';
import { Image, View } from 'react-native';
import { ThemeContext } from '../hooks/useTheme';


const Index = () => {
  const router = useRouter();

  const context = useContext(ThemeContext)!; // ✅ Tell TS it will never be undefined
  const { theme, styles } = context;



  console.log("theme=>" + theme)


  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/acknowledgment'); // navigate to your second page
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={
          theme === 'light'
            ? require('../assets/images/smartsave-light.png')
            : require('../assets/images/smartsave-dark.png')
        }
        style={{ width: 250, height: 250, marginTop: 20 }}
      />
    </View>
  );
};



export default Index;
