import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Theme'

const AboutContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <Text>About this template</Text>
    </View>
  )
}
export default AboutContainer;
