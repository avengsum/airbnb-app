import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'
import ExploreHeader from '@/components/ExploreHeader'

const index = () => {
  return (
    <View>
     <Stack.Screen
     options={{
      header: () => <ExploreHeader /> 
     }
     }
     />
    </View>
  )
}

export default index