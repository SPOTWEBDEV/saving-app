import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../hooks/useTheme';

const plans = [
  {
    id: 1,
    name: "education",
    matureDate: '15 Nov, 09:10 AM',
    details: {
      type: 'Fixed'
    },
    balance: '2000'
  },
  {
    id: 2,
    name: "school fee",
    matureDate: '10 Nov, 10:10 AM',
    details: {
      type: 'Fixed'
    },
    balance: '1000'
  },
  {
    id: 3,
    name: "evil day",
    details: {
      type: 'flexiable',
      everyDay: 'Monday',
      limit: 3000
    },
    balance: '8000'

  }
]

const save = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Ugochukwu Micheal Ezea',
    accountNumber: '8108833188',
    balance: 8.04,
    reward: 10.0,
    referrals: 0.0,
    currency: 'USD',
    currencySymbol: '$',
  })
  const context = useContext(ThemeContext)!;
  const { theme, styles } = context;
  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.accountCard, { backgroundColor: '#1E293B' }]}>
          <Text style={styles.smallText}>Your Saving Balance</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={[styles.balance, { color: 'white' }]}>₦8.04</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Active Plans</Text>
        {plans.map(plan => {
          return <View style={[styles.accountCard, { backgroundColor: '#1E293B' }]}>
            <View style={{ display: 'flex', gap: '10px', flexDirection:'row', justifyContent:'space-between',  borderBottomWidth:2, padding:10}}>
              <View style={{ display: 'flex', alignItems: 'center', gap: '10px', flexDirection:'row', columnGap:10}}>
                <Ionicons name='key-outline' style={{ color: 'white', fontSize: 20 }} />
                <Text style={[styles.smallText, {fontSize:20}]}>{plan.details.type}</Text>
              </View>
              {plan.details.type != 'fixed' && <View style={{ backgroundColor:'green', width:100 , alignItems: 'center', display:'flex', justifyContent:'center'}}>
                <Text style={[styles.smallText , {color:'#FBBF24'}]}>{plan.details.limit}</Text>
              </View>}

            </View>
            <Text style={[styles.smallText, { textTransform: "capitalize", marginTop:10 }]}>{plan.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={[styles.balance, { color: 'white' }]}>${plan.balance}</Text>
            </View>
          </View>
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default save