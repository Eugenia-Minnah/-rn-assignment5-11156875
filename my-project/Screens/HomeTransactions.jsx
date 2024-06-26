import { View, Text, StyleSheet,Image, Pressable} from 'react-native'
import React from 'react'

export default function HomeTransactions({Transaction}) {
const handlePress = () => {
console.log('Transaction pressed:', Transaction.title);
};
return (
<Pressable onPress={handlePress} style={styles.TransactionCard}>
    <View style={styles.TransactionImageBorder}>
    <Image source={Transaction.image} style={styles.TransactionCardIcon}/>
    </View>
    <View style={styles.subSection}>
    <Text style={styles.TransactionTitle}>{Transaction.title}</Text>
    <Text style={styles.department}>{Transaction.department}</Text>
    </View>
    <View style={styles.section}>
<Text style={[styles.money,{color: Transaction.color}]}>{Transaction.money}</Text>
</View>
</Pressable>
);
};
const styles = StyleSheet.create({
TransactionCard: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
},
TransactionImageBorder: {
    borderRadius: 50,
    left: 10,
    height: 60,
    width: 60,
    backgroundColor: '#F0F0F0',
    marginLeft: 5
},
TransactionCardIcon: {
top: 15,
left: 18,
height: 29,
width: 27,
},
subSection: {
marginRight: 80,
},
TransactionTitle: {
fontWeight: 'bold',
fontSize: 20,
},
department: {
color: 'grey',
fontSize: 20
},
section: {
    marginRight: 25,
},
money: {
    fontSize: 21,
},
});