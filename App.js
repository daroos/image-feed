import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import Avatar from './components/Avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar initials={'FL'} size={35} backgroundColor={'teal'} />
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
