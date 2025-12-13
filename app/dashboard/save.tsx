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
        <View style={styles.savingsBalanceCard}>
          <Text style={styles.savingsBalanceLabel}>Your Savings Balance</Text>
          <Text style={styles.savingsBalanceAmount}>₦21.60</Text>
        </View>
        <View style={styles.planCard}>
          <View style={styles.planHeader}>
            <View style={styles.planTitleRow}>
              <View style={styles.planIcon} >
                <Ionicons name="hand-left-outline" size={20} color='#FBBF24' />
              </View>
              <Text style={styles.planTitle}>Flexible Savings</Text>
            </View>
          </View>

          <View style={{display:'flex',justifyContent:'space-between', flexDirection:"row", alignItems:'center'}}>
            <View>
              <Text style={styles.planAmount}>₦0.00</Text>
              <Text style={styles.planInterest}>Interest: ₦21.60</Text>
            </View>
            <View>
              <Text>Education</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Explore New Plans</Text>

        <View style={styles.exploreSection}>

          {/* Save As You Transact */}
          <View style={styles.explorePlanCard}>
            <View style={styles.explorePlanRow}>
              <View style={styles.explorePlanIcon}>
                <Ionicons name="hand-left-outline" size={24} color='#FBBF24' />
              </View>

              <View style={styles.explorePlanContent}>
                <Text style={styles.explorePlanTitle}>Save As You Transact</Text>
                <Text style={styles.explorePlanDescription}>
                  Effortlessly save a portion every time you make transactions
                </Text>
              </View>
            </View>
          </View>
          {/* Fixed Deposit */}
          <View style={styles.explorePlanCard}>
            <View style={styles.explorePlanRow}>
              <View style={styles.explorePlanIcon}>
                <Ionicons name="lock-closed-outline" size={24} color='#FBBF24' />
              </View>

              <View style={styles.explorePlanContent}>
                <Text style={styles.explorePlanTitle}>Fixed Deposit</Text>
                <Text style={styles.explorePlanDescription}>
                  Commit a lump sum for a period of time and receive upfront interest.
                </Text>

                <View style={styles.exploreInterestBadge}>
                  <Text style={styles.exploreInterestText}>9.5% – 17.5% Interest p.a</Text>
                </View>
              </View>
            </View>
          </View>

        </View>



      </ScrollView>
    </SafeAreaView>
  )
}

export default save