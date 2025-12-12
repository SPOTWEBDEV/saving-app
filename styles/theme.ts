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
   return  StyleSheet.create({
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


    });
}