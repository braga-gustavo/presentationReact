import React from 'react';
import { StyleSheet, View } from 'react-native';

import Boxes from './src/Boxes';
import Header from './src/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Boxes />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#21618C',
    backgroundColor: '#85C1E9',
  },
});
