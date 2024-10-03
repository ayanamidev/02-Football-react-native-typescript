import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type TabBarIconProps ={
  name:React.ComponentProps<typeof FontAwesome>['name'];
  color:string;
};

const TabBarIcon=(props:TabBarIconProps)=>(
  <FontAwesome size={28} style={{marginBottom:-3}}{... props}/>
);

const Tablayout=()=>(
<Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="teams"
        options={{
          title: 'Teams',
          tabBarIcon: ({color}) => <TabBarIcon name='shield' color={color}/>
        }}
      />
      <Tabs.Screen
        name="players"
        options={{
          title: 'players',
          tabBarIcon: ({ color}) => <TabBarIcon name='user' color ={color}/>
        }}
      />
    </Tabs>
);
export default Tablayout;

