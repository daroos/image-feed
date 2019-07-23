import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import AuthorRow from "./components/AuthorRow";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthorRow
          fullName={'First Last'}
          linkText={'Comments'}
          onPressLinkText={() => {
              console.log('Pressed link!');
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
