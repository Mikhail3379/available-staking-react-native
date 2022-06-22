import React, { memo, useEffect, useState } from "react";
import {
  Background2 as Background,
  BackButton,
  Header,
  NumberKeyboard,
  Button,
  
} from "../components";
import { useStoreActions } from "../hooks/storeHooks";
import { Navigation } from "../types";
import { VictoryPie } from "victory-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import  Available from "../components/Available";
import { generateMnemonic, mnemonicToSeed, accountFromSeed } from "../utils";
import { View, Text , useWindowDimensions } from "react-native";
import Staking from "../components/Staking";
// import { FontAwesomeIcon} from "../package.json/free-solid-svg-icons";
import { BiHide } from 'react-icons/bi';
type Props = {
  navigation: Navigation;
};

  const renderTabBar = (props:any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ top: 50 , backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
    />
  );
  const renderScene = SceneMap({
    first: Available,
    second: Staking,
  });
const HomeScreen = ({ navigation }: Props) => {
    // const initialMessage = "Create PIN";
    // const confirmMessage = "Confirm PIN";
    // const [pinMessage, setPinMessage] = useState(initialMessage);

   

  // const addWallet = useStoreActions((actions) => actions.addWallet);
  // const addDefaultAccount = useStoreActions(
  //   (actions) => actions.addDefaultAccount
  // );

  // const addAccount = useStoreActions((actions) => actions.addAccount);

  
  
 
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Available' },
      { key: 'second', title: 'Staking' },
    ]);

  

 

     

  return (
    // <Background noMenu skipHeader>
    //   <BackButton goBack={() => navigation.navigate("Onboarding")} />
    //   <Header>{}</Header>

     
    // </Background>
    <Background>
      {/* <View> */}
        <Text
         style={{
          position: 'absolute',
          top: 40,
          left:'10%',
          color: 'black',
          }}
        >MY BALANCE</Text>
        {/* <Text style={{
          position: 'absolute',
          top: 40,
          left: '40%',
        }}><BiHide /></Text>
        </View> */}
         
          
        
        <BackButton goBack={() => navigation.navigate("Onboarding")} />
        <TabView
        // style={{
        //   position: 'absolute',
        //   top: '1%',
        // }}
      renderTabBar={renderTabBar} 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
       
    </Background>
    
  );
};

export default memo(HomeScreen);
