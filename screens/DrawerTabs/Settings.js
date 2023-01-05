import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'

export default function Settings() {
  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageText}>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({})