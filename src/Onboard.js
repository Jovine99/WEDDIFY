import React from 'react'
import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
    
 function Onboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.minitext}>InLove</Text>
        <View style={styles.imageview}>
            <Image style={styles.image} source={require('../assets/wedding.png')}/>
        </View>
        <View style={styles.miniview}>
          <Text style={styles.text}>Let's make your day special!</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btntext2}>Sign in</Text>
        </TouchableOpacity>
        </View>
        
    </View>
    
  )
}
export default Onboard
const styles = StyleSheet.create({
      container:{
        flex:1,
      },
      imageview:{
        width: 300,  // Adjust the width and height as per your requirement
        height: 300,
        // overflow: 'hidden',
        // position: 'relative',
        marginTop:40,
      },
     
      image: {
        width: '100%',
        height: '150%',
      },
      minitext:{
        marginTop:60,
        display:'flex',
        justifyContent:'center',
        alignSelf:'center',
        fontSize:40,
        fontWeight:500,
        color:'#884EA0',
       
      },
      miniview:{
        marginTop:120,

      },
      text:{
        fontSize:32,
        letterSpacing:1,
      },
      btn:{
        marginTop:40,
        display:'flex',
        alignSelf:'center',
        backgroundColor:'#884EA0',
        width:'100%',
        height:'15%',
        borderRadius:20
      },
      btn2:{
        marginTop:40,
        display:'flex',
        alignSelf:'center',
        borderWidth:0.5,
        borderColor:'#884EA0',
        width:'100%',
        height:'15%',
        borderRadius:20
      },
      btntext:{
        fontSize:22,
        color:'#fff',
        alignSelf:'center',
        paddingTop:10
      },
      btntext2:{
        fontSize:22,
        // color:'#884EA0',
        alignSelf:'center',
        paddingTop:10
      },
      
});
