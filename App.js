import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video  from 'react-native-video';
import Orientation from 'react-native-orientation';


export default function App() {
  Orientation.lockToLandscape()
  return (
    <View style={styles.container}>
        
        <Video source={{uri: "https://qebele.tv/live/stream/index.m3u8"}}   // Can be a URL or a local file.    
          //audioOnly={true} 
          //poster="https://baconmockup.com/300/200/" 
          rate={1.0}                           // Store reference
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onError={this.videoError}               // Callback when video cannot be loaded
          style={styles.video}
          resizeMode={"cover"}
          controls={true}
          preventsDisplaySleepDuringVideoPlayback={true}
          fullscreen={true}
           />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    //flex:1,
    width: 570,
    height: 320,
    alignSelf:'center',
    
    
  }
});
