import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:Colors.primary,
    }}>
      <Tabs.Screen
      name="index"
      options={{
        tabBarLabel:"Explore",
        tabBarIcon: ({color,size}) => <Ionicons color={color} size={size} name="search" />
      }}
       />
      <Tabs.Screen
      name="wishlists"
      options={{
        tabBarLabel:"Wishlists",
        tabBarIcon: ({color,size}) => <Ionicons color={color} size={size} name="heart-outline" />
      }}
       />
      <Tabs.Screen
      name="trips"
      options={{
        tabBarLabel:"Trips",
        tabBarIcon: ({color,size}) => <FontAwesome5 color={color} size={size} name="airbnb" />
      }}
       />
      <Tabs.Screen
      name="inbox"
      options={{
        tabBarLabel:"Inbox",
        tabBarIcon: ({color,size}) => <MaterialCommunityIcons color={color} size={size} name="message-outline" />
      }}
       />
      <Tabs.Screen
      name="profile"
      options={{
        tabBarLabel:"Profile",
        tabBarIcon: ({color,size}) => <Ionicons color={color} size={size} name="person-circle-outline" />
      }}
       />
    </Tabs>
  )
}

export default _layout