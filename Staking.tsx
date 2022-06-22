import React, { memo, useEffect, useState } from "react";
import { Navigation } from "../types";
import { VictoryPie } from "victory-native";

import { View, Text , useWindowDimensions } from "react-native";
import Button from "./Button";

type Props = {
    navigation: Navigation;
  };

  const graphicData = [
    { y: 30, x: "" },
    { y: 50, x: ''},
    { y: 20, x: ''},
    
    ]

    const graphicColor = ['purple', 'blue', 'brown']

   

    const Staking = () => (
        <><View style={{
           position: 'absolute',
           top: 15,
           left: '5%',
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
             endAngle={-90}
             startAngle={90} />
         </View><Text
           style={{
             position: 'absolute',
             bottom: 85,
             left: '15%',
             color: 'black',
           }}
         ><View
           style={{
             backgroundColor: "blue",
             height: 20,
             width: 20,
             borderRadius: 10,
           }}
    
         ></View>  &nbsp; 285USDC &nbsp; &nbsp;&nbsp;&nbsp;
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             <View
               style={{
                 backgroundColor: "purple",
                 height: 20,
                 width: 20,
                 borderRadius: 10,
               }}
    
             ></View>&nbsp;21SOL &nbsp;  &nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             <View
               style={{
                 backgroundColor: "brown",
                 height: 20,
                 width: 20,
                 borderRadius: 10,
               }}
    
             ></View> 0.0004BTC </Text><Button
               color="whitesmoke"
               background-color="linear-gradient(91.87deg, #4500FF 0%, #38FFBD 100%)"
               style={{
                 position: 'absolute',
                 
                 bottom: 0,
                 left: 15,
               }}>Buy crypto</Button><Text style={{
                 position: 'absolute',
                 bottom: 195,
                 left: '45%',
                 color: 'black',
               }}> $397.61</Text></>
      );

        export default memo(Staking);