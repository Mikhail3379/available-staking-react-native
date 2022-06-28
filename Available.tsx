import React, { memo, useEffect, useState } from "react";
import { Navigation } from "../types";
import { VictoryPie } from "victory-native";

import { View, Text, useWindowDimensions, Dimensions, StyleSheet } from "react-native";
import Button from "./Button";
import AppButton from "./AppButton";
const { width, height } = Dimensions.get('window');

type Props = {
  navigation: Navigation;
};

const graphicData = [
  { y: 25, x: '' },
  { y: 15, x: '' },
  { y: 10, x: '' },
  { y: 30, x: '' },
  { y: 20, x: '' },
]

const graphicColor = ['#965FD7', '#7EFBC1', '#268FFF', '#F09242', '#F9D208']



const Available = () => {
  const [myBalance, setMyBalance] = useState(1.236);
  
  return(
  <View style={{
    //position: 'absolute',
    top: 25,
    //backgroundColor:"red",
    alignItems: "center",
    //borderColor:'red',borderWidth:1 
    //left: '5%',
  }}>
    <VictoryPie
      // @ts-ignore
      data={graphicData}
      width={350}
      height={350}
      innerRadius={110}
      style={{
        labels: {
          fill: 'white', fontSize: 1, padding: 7,
        },
      }}
      colorScale={graphicColor}
      padAngle={0}
      endAngle={-120}
      startAngle={120}
    />
    <View style={{
    position: 'absolute',
    alignItems: "center",
    top:150
  
  }}>
    <Text style={{
      color: 'black',
      fontWeight: '400',
      fontSize: 18,
      fontStyle: "normal",
      lineHeight: 30
      
    }}> ${myBalance} </Text>
</View>
<View style={{
    position: 'absolute',
    alignItems: "center",
    top:height < 700 ? 300 :350,
    //backgroundColor:"red"
  
  }}>
    <Text style={{
      color: '#808080',
      fontWeight: '300',
      fontSize: 18,
      fontStyle: "normal",
      lineHeight: 30,
      textAlign:"center"
      
    }}> Add assets to your wallet to see this chart fill up with pretty colours! </Text>
</View>

    <Button
        color="whitesmoke"
        background-color="linear-gradient(91.87deg, #4500FF 0%, #38FFBD 100%)"
        style={{
          position: 'absolute',

          bottom: 0,
          left: 15,
        }}>Buy crypto</Button>
  </View>

);
      }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical:height < 800 ? 2 :20
        },
        cadreRow: {
        
        },
        textCondition: {
      
        },
        textWhy: {
         
        },
        
      });
export default memo(Available);
