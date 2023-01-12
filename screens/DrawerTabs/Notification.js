import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 80}}>Notification</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 120,
        height: '100%'
    }
})