import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const index = () => {
  const [category,setCategory] = useState('tiny')
  const onDataChanged = (category: string) => {
    console.log('category')
  }
  return (
    <View>
     <Stack.Screen
     options={{
      header: () => <ExploreHeader onCategoryChanged={onDataChanged} /> 
     }
     }
     />
     <Listings  listing={[]} category={category}/>
    </View>
  )
}

export default index