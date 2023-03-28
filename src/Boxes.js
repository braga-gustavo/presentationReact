import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Boxes extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tittle}>Informações: </Text>
                        <Text style={styles.content}>23 anos</Text>
                        <Text style={styles.content}>Sistemas de Informação</Text>
                        <Text style={styles.content}>Nova Iguaçu</Text>
                        <Text style={styles.content}>Rio de Janeiro</Text>

                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tittle}>Hobbies: </Text>
                        <Text style={styles.content}>Ouvir música</Text>
                        <Text style={styles.content}>Ler</Text>
                        <Text style={styles.content}>Jogar video-game </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tittle}>Estudos: </Text>
                        <Text style={styles.content}>Java</Text>
                        <Text style={styles.content}>Spring Framework</Text>
                        <Text style={styles.content}>React Native </Text>
                        <Text style={styles.content}>Angular</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text style={styles.tittle}>Filmes: </Text>
                        <Text style={styles.content}>Senhor dos Aneis: Retorno do Rei</Text>
                        <Text style={styles.content}>Velozes e furiosos</Text>
                        <Text style={styles.content}>O Poderoso Chefão</Text>
                        <Text style={styles.content}>Interstellar</Text>
                        <Text style={styles.content}>Kill Bill </Text>
                    </View>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",

    },
    box: {
        width: '50%',
        height: '50%',
        overflow: "hidden",
        borderRadius: 25,
        padding: 5,

    },
    inner: {
        flex: 1,
        backgroundColor: "#D6EAF8",
        alignItems: 'center',

    },
    tittle: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 30,
    },

    content: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "normal",
        flexDirection: "column",
    },
});
