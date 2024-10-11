import { Link, router, Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
//npm install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";


type TabBarIconProps ={
  name:React.ComponentProps<typeof FontAwesome>['name'];
  color:string;
};

const TabBarIcon=(props:TabBarIconProps)=>(
  <FontAwesome size={28} style={{marginBottom:-3}}{... props}/>
);

const Tablayout= () =>{

  const [userEmail, setUserEmail] = useState<string | null> (null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const getUserEmail = async () => {
      setLoading(true);
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
      setLoading(false);
    };
    getUserEmail();

  }, []);



  const logout= () =>{
    Alert.alert("Logout","Are you sure you want to log out?", [
      {text: "Cancel"},
      {text: "Log out",
        onPress:async () => {
          await AsyncStorage.removeItem("userEmail")
          router.dismissAll();
          router.push("/");
      }},

    ])
  };

  if(loading){
    return(
    <View style={styles.container}>
      <Text style={styles.loading}>Loading ...</Text>
    </View>  
    )
  };
  
  if(!userEmail){
    return(
      <View style={styles.container}>
        <Text style={styles.error}>You have to log in to acces this content</Text>
        <Link style={styles.link} href="/">Go to home page
        </Link>
      </View>
    )
  }
  
  return(
    <Tabs>
          <Tabs.Screen
            name="teams"
            options={{
              title: "Teams",
              headerTitle: ()=> <Text style={styles.text}>Teams - {userEmail}</Text>,
              tabBarIcon: ({color}) => <TabBarIcon name='shield' color={color}/>,
              headerLeft:()=> (
                <Pressable onPress={logout}>
                  {({pressed})=> (
                    <FontAwesome 
                    name='sign-out' 
                    color="black" 
                    size={25} 
                    style={{
                      marginLeft:15,
                      opacity: pressed ? 0.5 : 1}} />
                  )}
                </Pressable>
              ),
            }}
          />
          <Tabs.Screen
            name="players"
            options={{
              title: "Players",
              headerTitle:()=> <Text style={styles.text}>Players - {userEmail}</Text>,
              tabBarIcon: ({ color}) => <TabBarIcon name='user' color ={color}/>,
              headerLeft:()=> (
                <Pressable onPress={logout}>
                  {({pressed})=> (
                    <FontAwesome 
                    name='sign-out' 
                    color="black" 
                    size={25} 
                    style={{
                      marginLeft:15,
                      opacity: pressed ? 0.5 : 1}} />
                  )}
                </Pressable>
              ),
            }}
          />
      </Tabs>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  error:{
    color: "red",
    fontSize: 20,

  },
  link:{
    color:"blue",
    fontSize:18,
  },
  loading:{
    fontSize:20,
  },
  text:{
    fontWeight:"bold",
  }
})
export default Tablayout;

