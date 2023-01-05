import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'

export default function Profile() {
  return (
    <View style={globalStyles.page}>
      <Text style={globalStyles.pageText}>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})