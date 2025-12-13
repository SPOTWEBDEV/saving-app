import { StyleSheet } from 'react-native';

export const lightColors = {
    buttonBackground: '#FBBF24',
    buttonText: '#FFFFFF',
    bg: "#fff",
    card: "#FFFFFF",
    text: "#0D0D0D",
    primary: "#FBBF24",
    muted: '#94A3B8',
    surface: '#FFFFFF'
};

export const darkColors = {
    text: '#F3F4F6',
    buttonBackground: '#2563EB',
    buttonText: '#FFFFFF',
    bg: "#0F172A", // navy background
    card: "#1E293B", // dark blue cards
    muted: '#94A3B8',   // secondary text
    primary: "#FBBF24", // yellow accent
    surface: '#0F1724', // top surfaces
};


// Helper function to generate screen styles
export const createStyles = (theme: 'light' | 'dark') => {
    const colors = theme === 'light' ? lightColors : darkColors;
    return StyleSheet.create({
        container: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.bg,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16,
            color: colors.text,
        },
        button: {
            backgroundColor: colors.buttonBackground,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
            marginTop: 20,
        },
        buttonText: {
            color: colors.buttonText,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        text: {
            fontSize: 16,
            color: colors.text,
            textAlign: 'center',
            marginBottom: 15,
        },
        input: {
            width: '80%',
            height: 50,
            borderColor: colors.text,
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 15,
            color: colors.text,
        },
        // DASHBOARD STYLES CAN BE ADDED HERE
        page: {
            flex: 1,
            backgroundColor: colors.bg,
            paddingHorizontal: 16,
            paddingTop: 12,
        },
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

        accountCard: {
            backgroundColor: colors.card,
            padding: 18,
            borderRadius: 16,
            marginTop: 16,
        },
        accountNumber: {
            color: colors.muted,
            fontSize: 13,
            marginBottom: 6,
        },
        balance: {
            color: colors.text,
            fontSize: 32,
            fontWeight: '700',
            marginVertical: 6,
        },
        smallText: {
            color: colors.muted,
            fontSize: 12,
        },

        sectionTitle: {
            color: colors.text,
            fontSize: 14,
            fontWeight: '600',
            marginTop: 18,
            marginBottom: 10,
        },

        serviceItem: {
            width: '23%',
            aspectRatio: 1,
            backgroundColor: colors.card,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
        },

        rewardsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
        },

        rewardCard: {
            flex: 1,
            backgroundColor: darkColors.card,
            padding: 14,
            borderRadius: 12,
            marginRight: 10,
        },

        transactionList: {
            marginTop: 12,
            marginBottom: 80, // room for bottom tab
        },

        bottomTabs: {
            height: 72,
            backgroundColor: colors.surface,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 18,
            justifyContent: 'center',
        },
        // --------------- SETTINGS PAGE STYLES ---------------
        settingsSection: {
            marginTop: 20,
            marginBottom: 10,
        },

        settingsSectionTitle: {
            color: colors.muted,
            fontSize: 13,
            fontWeight: '600',
            marginBottom: 8,
        },

        settingsCard: {
            backgroundColor: colors.card,
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderRadius: 18,
            marginBottom: 20,
        },

        settingsItem: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: theme === 'light' ? '#E5E7EB' : '#334155',
        },

        settingsItemLast: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
        },

        settingsLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },

        settingsIconWrapper: {
            width: 36,
            height: 36,
            borderRadius: 10,
            backgroundColor: theme === 'light'
                ? '#F1F5F9'
                : 'rgba(255,255,255,0.06)',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 14,
        },

        settingsTitle: {
            color: colors.text,
            fontSize: 15,
            fontWeight: '600',
        },

        settingsSubText: {
            color: colors.muted,
            fontSize: 12,
            marginTop: 2,
        },

        settingsArrow: {
            color: colors.primary,
        },

        warningBox: {
            backgroundColor: theme === 'light'
                ? 'rgba(251,191,36,0.15)'
                : 'rgba(251,191,36,0.12)',
            padding: 12,
            borderRadius: 12,
            marginTop: 6,
            flexDirection: 'row',
            alignItems: 'center',
        },

        warningText: {
            color: colors.text,
            flex: 1,
            fontSize: 13,
            marginLeft: 8,
        },
        // SETTINGS SWITCH
        switchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        /* =======================
   SAVINGS PAGE STYLES
======================= */

        savingsHeader: {
            alignItems: 'center',
            marginBottom: 16,
        },

        savingsBalanceCard: {
            backgroundColor: colors.card,
            borderRadius: 18,
            padding: 20,
            marginTop: 12,
        },

        savingsBalanceLabel: {
            color: colors.muted,
            fontSize: 13,
        },

        savingsBalanceAmount: {
            color: colors.text,
            fontSize: 34,
            fontWeight: '700',
            marginTop: 6,
        },

        /* ===== Active Plan Card ===== */

        planCard: {
            backgroundColor: colors.card,
            borderRadius: 18,
            padding: 16,
            marginTop: 12,
        },

        planHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
        },

        planTitleRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        planIcon: {
            width: 36,
            height: 36,
            borderRadius: 10,
            backgroundColor: colors.card,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 0,
        },

        planTitle: {
            color: colors.text,
            fontSize: 15,
            fontWeight: '600',
        },

        planBadge: {
            backgroundColor: colors.surface,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 12,
        },

        planBadgeText: {
            color: colors.muted,
            fontSize: 12,
        },

        planAmount: {
            color: colors.text,
            fontSize: 20,
            fontWeight: '700',
            marginTop: 6,
        },

        planInterest: {
            color: '#22C55E', // green interest
            fontSize: 13,
            marginTop: 4,
        },

        /* ===== Explore Plans ===== */

        exploreCard: {
            backgroundColor: colors.card,
            borderRadius: 18,
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 14,
        },

        exploreIcon: {
            width: 48,
            height: 48,
            borderRadius: 14,
            backgroundColor: colors.surface,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 14,
        },

        exploreTitle: {
            color: colors.text,
            fontSize: 15,
            fontWeight: '600',
        },

        exploreDescription: {
            color: colors.muted,
            fontSize: 13,
            marginTop: 4,
        },

        interestPill: {
            alignSelf: 'flex-start',
            backgroundColor: '#1E3A8A',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 999,
            marginTop: 8,
        },

        interestPillText: {
            color: '#60A5FA',
            fontSize: 12,
            fontWeight: '600',
        },

        /* =======================
   EXPLORE NEW PLANS
======================= */

        exploreSection: {
            marginTop: 18,
        },

        explorePlanCard: {
            backgroundColor: colors.card,
            borderRadius: 20,
            padding: 16,
            marginBottom: 14,
        },

        explorePlanRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        explorePlanIcon: {
            width: 52,
            height: 52,
            borderRadius: 16,
            backgroundColor: colors.surface,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 14,
        },

        explorePlanContent: {
            flex: 1,
        },

        explorePlanTitle: {
            color: colors.text,
            fontSize: 15,
            fontWeight: '600',
        },

        explorePlanDescription: {
            color: colors.muted,
            fontSize: 13,
            marginTop: 4,
            lineHeight: 18,
        },

        exploreInterestBadge: {
            alignSelf: 'flex-start',
            backgroundColor: theme === 'dark' ? '#0B2559' : '#E0E7FF',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 999,
            marginTop: 10,
        },

        exploreInterestText: {
            color: theme === 'dark' ? '#60A5FA' : '#1D4ED8',
            fontSize: 12,
            fontWeight: '600',
        },

        /* =======================
   LOGIN / PASSCODE SCREEN
======================= */

        loginPage: {
            height: '100%',
            flex: 1,
            backgroundColor: colors.bg,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
        },


        backIcon: {
            marginBottom: 10,
        },

        profileWrapper: {
            alignItems: 'center',
        },


        welcomeText: {
            color: colors.text,
            fontSize: 26,
            fontWeight: '700',
            textAlign: 'center',
        },

        subtitleText: {
            color: colors.muted,
            fontSize: 14,
            textAlign: 'center',
        },

        /* PASSCODE INPUT */

        passcodeRow: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            gap: 10
        },

        passcodeBox: {
            width: 44,
            height: 56,
            borderRadius: 10,
            backgroundColor: '#334155',
            alignItems: 'center',
            justifyContent: 'center',
        },

        passcodeActive: {
            borderWidth: 1,
            borderColor: colors.primary,
        },

        passcodeDot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#FFFFFF',
        },

        /* KEYPAD */

        keypadContainer: {
            marginTop: 30,
        },

        keypadRow: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
            gap: 20
        },

        keypadKey: {
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: '#1E293B',
            alignItems: 'center',
            justifyContent: 'center',
        },

        keypadText: {
            color: '#FFFFFF',
            fontSize: 22,
            fontWeight: '600',
        },

        forgotText: {
            color: colors.primary,
            textAlign: 'center',
            marginTop: 10,
            fontSize: 14,
            fontWeight: '500',
        },



        linkText: {
            color: colors.primary,
            fontSize: 14,
            marginTop: 8,
            fontWeight: '500',
        },

        /* =========================
           AUTH / REGISTER STYLES
        ========================= */

        authContainer: {
            flex: 1,
            backgroundColor: colors.bg,
            paddingHorizontal: 20,
            justifyContent: 'center',
        },

        authHeader: {
            marginBottom: 30,
        },

        authTitle: {
            fontSize: 28,
            fontWeight: '700',
            color: colors.text,
            marginBottom: 6,
        },

        authSubtitle: {
            fontSize: 14,
            color: colors.muted,
        },

        authInput: {
            width: '100%',
            height: 54,
            borderRadius: 12,
            backgroundColor: colors.card,
            paddingHorizontal: 16,
            color: colors.text,
            marginBottom: 14,
        },

        authButton: {
            backgroundColor: colors.primary,
            height: 54,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
        },

        authButtonText: {
            color: '#111827',
            fontSize: 16,
            fontWeight: '700',
        },

        authFooterText: {
            textAlign: 'center',
            color: colors.muted,
            marginTop: 18,
            fontSize: 14,
        },

        authLink: {
            color: colors.primary,
            fontWeight: '600',
        },






    });
}