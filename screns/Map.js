import React, { useState } from 'react';
import MapView, {Marker ,Circle,Polyline} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




export default function App() {
    const [region, setRegion] = useState({
        latitude: 32.29939,
        longitude: -9.23718,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={region}
      onRegionChangeComplete= {region => setRegion(region)} 
      
      >
        {/* <Circle
                    center={{
                        latitude: 32.29939,
                        longitude: -9.23718,
                    }}
                    radius={300}
                    fillColor="rgba(255, 0, 0, 0.2)" // Change the color of the circle
                /> */}
                <Polyline
                    coordinates={[
                        { latitude: 32.29939,
                          longitude: -9.23718,},
                         {   latitude:32.309126,
                          longitude: -9.238573,}
                    ]}
                    strokeColor="#000"
                    strokeColors={[

                    ]}
                    strokeWidth={2}
                />
                
        <Marker
        // style={{ width:1,height:1 }}
        coordinate={{ 
            latitude: 32.29939,
            longitude: -9.23718,
         }}
         title= "scooter"
         description= "Scooter"
         image={require("../icons/scooter2.png")} 
        //  style={{ width:2 ,height:3}}
         
         
        />
        <Marker
        // style={{ width:1,height:1 }}
        coordinate={{ 
            latitude:32.309630,
            longitude: -9.226800,
         }}
         title= "scooter"
         description= "Scooter"
         image={require("../icons/scooter2.png")} 
        //  style={{ width:2 ,height:3}}
         
         
        />
        <Marker
        // style={{ width:1,height:1 }}
        coordinate={{ 
            latitude:32.309126,
            longitude: -9.238573,
         }}
         title= "scooter"
         description= "Scooter"
         image={require("../icons/scooter2.png")} 
        //  style={{ width:2 ,height:3}}
         
         
        />
        {/* <Callout
        tooltip= 'true'
        /> */}
     {/* <Icon name="clockcircle" size={30} color="#900" /> */}
        </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});