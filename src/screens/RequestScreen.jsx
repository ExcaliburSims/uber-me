import React from 'react'
import { StyleSheet, Text, View, StatusBar, Pressable, Keyboard } from 'react-native';

function RequestScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="green" translucent />
      <Pressable onPress={Keyboard.dismiss}>
        <Text>RequestScreen</Text>
      </Pressable>
    </View>
  )
}

export default RequestScreen