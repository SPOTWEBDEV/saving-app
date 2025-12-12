// app/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';


export default function Layout() {
  return (
      
      <Tabs screenOptions={{
         headerShown:false
      }} >
         <Tabs.Screen  name='index' options={{ 
          title: 'Dashboard',
          tabBarIcon:({focused,size,color})=> <Ionicons name='home-outline' size={20} color={color} />
          }} />
          <Tabs.Screen  name='save' options={{ 
          title: 'Saving',
          tabBarIcon:({focused,size,color})=> <Ionicons name='lock-closed-outline' size={20} color={color} />
          }} />
         <Tabs.Screen  name='history' options={{ 
          title: 'History',
          tabBarIcon:({focused,size,color})=> <Ionicons name='list-outline' size={20} color={color} />
          }} />
          <Tabs.Screen  name='settings' options={{ 
          title: 'Setting',
          tabBarIcon:({focused,size,color})=> <Ionicons name='settings-outline' size={20} color={color} />
          }} />
      </Tabs>
  );
}
