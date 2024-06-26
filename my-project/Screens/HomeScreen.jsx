import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, button } from 'react-native';
import HomeTransactions from '../Screens/HomeTransactions';
const HomeTransaction = [
    { id: '1', title: 'Apple Store', department: 'Entertainment', money: '-$5,99', image: require('../assets/apple.png') },
    { id: '2', title: 'Spotify', department: 'Music', money: '-$12,99', image: require('../assets/spotify.png')},
    { id: '3', title: 'Money Transfer', department: 'Transaction', money: '$300', image: require('../assets/moneyTransfer.png'), color: '#0000FF'},
    { id: '4', title: 'Grocery', department: 'Food Stuffs', money: '-$88', image: require('../assets/grocery.png')},
];

export default function HomeScreen() {
    const handlePress = (action) => {
        console.log(`${action} pressed`);
    };
return (
    <View style={styles.container}>
    <View style={styles.home}></View>
    <View>
    <Image source={require('../assets/profile.png')} style={styles.profile}/>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.name}>Eugenia Minnah</Text>
        <View style={styles.searchContainer}>
    <View style={styles.searchBorder}>
        <Image
        source={require('../assets/search.png')}
        style={styles.searchIcon}/>
    </View>
    </View>
    <View style={styles.Card}>
    <Image source={require('../assets/Card.png')} style={styles.Card}/>
    </View>

    <View style={styles.Options}>
        <Pressable style={styles.sendBorder} onPress={() => handlePress('Sent')}>
        <Image
            source={require('../assets/send.png')}
            style={styles.sendIcon}/>
            <Text style={styles.SendText}>Sent</Text>
        </Pressable>
        <Pressable style={styles.receiveBorder} onPress={() => handlePress('Receive')}>
        <Image
            source={require('../assets/receive.png')}
            style={styles.receiveIcon}/>
            <Text style={styles.ReceiveText}>Receive</Text>
        </Pressable>
        <Pressable style={styles.loanBorder} onPress={() => handlePress('Loan')}>
        <Image
            source={require('../assets/loan.png')}
            style={styles.loanIcon}/>
            <Text style={styles.loanText}>Loan</Text>
        </Pressable>
        <Pressable style={styles.topUpBorder} onPress={() => handlePress('TopUp')}>
        <Image
            source={require('../assets/topUp.png')}
            style={styles.topUpIcon}/>
            <Text style={styles.TopUpText}>TopUp</Text>
        </Pressable>
    </View>
    <View style={styles.Transaction}>
        <Text style={styles.TransactionText}>Transaction</Text>
        <Pressable onPress={() => handlePress('Sell All')}>
        <Text style={styles.view}>Sell All</Text>
        </Pressable>
    </View>
    </View>
    <FlatList
                data={HomeTransaction}
                renderItem={({ item }) =>
                    <HomeTransactions
                        Transaction={item}
                    />
                }
                keyExtractor={item => item.id}
            />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
},
home: {
    width: 50,
    height: 70,
},
name: {
    fontSize: 23,
    fontWeight: 40,
    top: -80,
    left: 90,
},
welcome: {
    fontSize: 18,
    color: 'grey',
    top: -85,
    left: 90,
},
profile: {
    top: -30,
    height: 60,
    width: 60,
    left: 10,
},
searchContainer: {
    left: 340,
},
searchBorder: {
    backgroundColor:'#F0F0F0',
    borderRadius:'60',
    height: 50,
    width: 50,
    top: -130,
},
searchIcon: {
    height: 25,
    width: 25,
    top: 15,
    left: 13,
},
Card: {
    height: 240,
    width: 390,
    borderRadius: '35',
    left: 5,
    top: -50,
},
Options: {
    top: -70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    right: 5,
},
sendBorder: {
    backgroundColor: '#F0F0F0',
    borderRadius: '70',
    height: 70,
    width: 70,
},
sendIcon: {
    left: 25,
    top: 20,
    height: 25,
    width: 20,
},
SendText: {
    top:50,
    left: 20,
    fontSize: 16,
},
receiveBorder: {
    backgroundColor: '#F0F0F0',
    borderRadius: '70',
    height: 70,
    width: 70,
},
receiveIcon: {
    left: 25,
    top: 20,
    height: 25,
    width: 20,
},
ReceiveText: {
    top:50,
    left: 5,
    fontSize: 16,
},
loanBorder: {
    backgroundColor: '#F0F0F0',
    borderRadius: '70',
    height: 70,
    width: 70,
    left: 10,
},
loanIcon: {
    left: 20,
    top: 20,
    height: 30,
    width: 30,
},
loanText: {
    top:50,
    left: 15,
    fontSize: 16,
},
topUpBorder:{
    backgroundColor: '#F0F0F0',
    borderRadius: '70',
    height: 70,
    width: 70,
    left: 10,
},
topUpIcon: {
    left: 20,
    top: 20,
    height: 30,
    width: 30,
},
TopUpText: {
    top:50,
    left: 5,
    fontSize: 16,
},
Transaction:{
    flexDirection: 'row',
    top: -20,
},
TransactionText:{
    fontSize: 25,
    fontWeight: 50,
    left: 15,
},
view: {
    left: 210,
    fontSize: 18,
    color: '#0000FF',
    top: 5,
},
BottomTabs: {
    flexDirection: 'row',
    margin: 15
},
HomeIcon: {
    left: 60,
    height: 20,
},
});
