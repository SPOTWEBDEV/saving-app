import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createStyles } from '../../styles/theme';

const NavBar = ({theme}: any) => {
    const styles = createStyles(theme);
    return (
        <View style={[styles.headerContainer, {paddingVertical:20}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/avatar.svg')} // put avatar.png in assets or replace
                    style={{ width: 40, height: 40 }}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginRight: 12 }}>
                    <Ionicons name="headset-outline" size={20} color={theme === 'light' ? '#111827' : '#E6EEF8'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={20} color={theme === 'light' ? '#111827' : '#E6EEF8'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar