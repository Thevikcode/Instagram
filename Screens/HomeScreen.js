import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={{
                marginHorizontal: 20, 
                marginTop: 10, 
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Ionicons name="logo-instagram" size={35} />
                <code style={{fontSize: 25, fontWeight: '600'}}>INSTAGRAM</code>
                <Ionicons name="md-chatbubble-outline" size={35} />
            </View>

            <View style={{width: '100%', height: 0.5, backgroundColor: '#dedede', marginTop: 10, marginBottom: 25}} />

            <View style={{ marginHorizontal: 20, marginBottom: 25 }}>
                <Image source={require('../assets/AppImages/image.jpg')} style={{
                    height: 225,
                    width: 370
                }} />
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Ionicons name="heart-outline" size={35} />
                    <Ionicons name="md-chatbubble-outline" size={35}/>
                    <Ionicons name="share-outline" size={35}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default HomeScreen;
