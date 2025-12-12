import React, { useContext } from 'react';
import { View } from 'react-native';
import TransactionItem from '../../components/Table';
import { ThemeContext } from '../../hooks/useTheme';

const transactions = [
    { id: '4', title: 'Deposit', amount: 6000.0, date: '17 Nov, 09:10 AM' },
    { id: '1', title: 'Fixed Save', amount: 2000.0, date: '18 Nov, 06:40 PM' },
    { id: '2', title: 'Flexiable Save', amount: -4000.0, date: '15 Nov, 09:10 AM' },
    { id: '3', title: 'Deposit', amount: 8000.0, date: '17 Nov, 09:10 AM' },
];

const history = () => {
    const context = useContext(ThemeContext)!; // ✅ Tell TS it will never be undefined
    const { theme, styles } = context;
    return (
        <View style={{padding:20}}>
            <View style={styles.transactionList}>
                {transactions.map(t => (
                    <TransactionItem key={t.id} title={t.title} amount={t.amount} date={t.date} theme={theme} />
                ))}
            </View>
    </View>
    )
}

export default history