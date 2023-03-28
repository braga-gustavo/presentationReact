import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Image } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>

                <Image style={styles.image} source={require('../assets/fotoSemFundo.png')} />
                <Text style={styles.text}>Gustavo Braga </Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#85C1E9',
        flexDirection: 'row',

    },
    image: {
        width: 100,
        height: 100,
        marginTop: 30,
        borderRadius: 100 / 2
    },
    text: {
        marginTop: 40,
        marginRight: 60,
        fontSize: 30,
        fontWeight: 'bold',
    }
});
