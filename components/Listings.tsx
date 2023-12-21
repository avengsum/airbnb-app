import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  listing: any[],
  category: string
}

const Listings = ({listing,category}:Props) => {
  return (
    <View>
      <Text>Listings</Text>
    </View>
  )
}

export default Listings