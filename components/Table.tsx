// components/TransactionItem.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Table({ title, amount, date, theme } : { title: string; amount: number; date: string; theme: 'light' | 'dark' }) {
  const isPositive = amount > 0;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, backgroundColor: theme === 'light' ? '#fff' : '#0F1724', borderBottomWidth:2 }}>
      <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: theme === 'light' ? '#F3F4F6' : '#172033', alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 }}>
        <Ionicons name={isPositive ? 'arrow-up' : 'arrow-down'} size={18} color={isPositive ? '#10B981' : '#F87171'} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ color: theme === 'light' ? '#111827' : '#E6EEF8', fontWeight: '600' }}>{title}</Text>
        <Text style={{ color: theme === 'light' ? '#6B7280' : '#94A3B8', fontSize: 12 }}>{date}</Text>
      </View>

      <Text style={{ color: isPositive ? '#10B981' : '#F87171', fontWeight: '700', marginRight: 12 }}>
        {isPositive ? '₦' + Math.abs(amount).toFixed(2) : `-₦${Math.abs(amount).toFixed(2)}`}
      </Text>
    </View>
  );
}
