import NavBar from '@/components/clients/navBar';
import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import NavButton from '../../components/button/NavButton';
import RewardCard from '../../components/clients/RewardCard';
import TransactionItem from '../../components/Table';
import { ThemeContext } from '../../hooks/useTheme';

const transactions = [
  { id: '4', title: 'Deposit', amount: 6000.0, date: '17 Nov, 09:10 AM' },
  { id: '1', title: 'Fixed Save', amount: 2000.0, date: '18 Nov, 06:40 PM' },
  { id: '2', title: 'Flexiable Save', amount: -4000.0, date: '15 Nov, 09:10 AM' },
  { id: '3', title: 'Deposit', amount: 8000.0, date: '17 Nov, 09:10 AM' },
];



const Index = () => {

  const context = useContext(ThemeContext)!; 
  const { theme, styles } = context;



  const [userDetails, setUserDetails] = useState({
    name: 'Ugochukwu Micheal Ezea',
    accountNumber: '8108833188',
    balance: 8.04,
    reward: 10.0,
    referrals: 0.0,
    currency: 'USD',
    currencySymbol: '$',
  })
  console.log(userDetails.currencySymbol)





  return (
    <View style={styles.page}>

      <NavBar theme={theme} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.accountCard, { backgroundColor: '#1E293B' }]}>
          <Text style={styles.accountNumber}>{userDetails.accountNumber} | {userDetails.name}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[styles.balance, { color: 'white' }]}>₦8.04</Text>
            <TouchableOpacity>
              <Ionicons name="eye-off-outline" size={20} color={'#E6EEF8'} />
            </TouchableOpacity>
          </View>

          <Text style={styles.smallText}>Last updated just now</Text>

          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <NavButton title="+ Add Money" url="" theme={theme} />
            <NavButton title="History" url="" theme={theme} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Rewards</Text>
        <View style={styles.rewardsRow}>
          <RewardCard icon='trophy-outline' title="Reward" amount={`${userDetails.currencySymbol + '' + userDetails.reward}`} theme={theme} />
          <RewardCard icon='trophy-outline' title="Referrals" amount={`${userDetails.currencySymbol + '' + userDetails.referrals}`} theme={theme} />
        </View>
        <Text style={styles.sectionTitle}>Recent transactions</Text>
        <View style={styles.transactionList}>
          {transactions.map(t => (
            <TransactionItem key={t.id} title={t.title} amount={t.amount} date={t.date} theme={theme} />
          ))}
        </View>
        <View style={{ height: 100 }} />

      </ScrollView>

    </View>
  )
}

export default Index