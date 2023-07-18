import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, } from 'react-native';
import { Zocial, Entypo, AntDesign } from '@expo/vector-icons';

function Register() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <View style={styles.logoview}>
            <Text style={styles.logotxt}>W</Text>
        </View>
       <Text style={styles.title}>Create an account here to get started</Text>
       </View>
       <View style={styles.inputfield}>
        <TextInput
        style={styles.textinput}
         placeholder={"Username"}

        />
        <TextInput
        style={styles.textinput2}
         placeholder={"Email"}
        />
         <TextInput
         style={styles.textinput2}
         placeholder={"Password"}
        />
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.miniview}>
        <Text style={styles.txt}>Already have an account?</Text>
        <TouchableOpacity style={styles.minitxt}><Text style={styles.txt1}>Login</Text></TouchableOpacity>
        </View>
        <Text style={styles.txt}>Or Sign up with</Text>

       </View>

       <View style={styles.socials}>
        <TouchableOpacity>
        <Zocial name="facebook" size={30} style={{color:"#884EA0"}} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:10}}>
        <Entypo name="twitter" size={28} style={{color:"#884EA0"}} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:10}}>
        <AntDesign name="google" size={26} style={{color:"#884EA0"}}  />
        </TouchableOpacity>
       </View>
    </View>
  )
}
export default Register
const styles = StyleSheet.create({
    container:{
        flex:1,
        color:'#f2f2f2'
    },
    header:{
        marginTop:50
    },

     title:{
        fontSize:40,
        alignSelf:'center',
        marginTop:20
     },
     logoview:{
        height:120,
        width:120,
        borderWidth:1,
        borderRadius:60,
        borderColor:'#884EA0',
        marginTop:40,
        alignSelf:'center',
     },
     logotxt:{
        fontSize:100,
        alignSelf:'center',
        color:'#884EA0'
     },
     inputfield:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-between',
     },
     textinput:{
        borderWidth:1,
        borderRadius:20,
        width:'150%',
        height:40,
        fontSize:18,
        paddingHorizontal:20,
        borderColor:'#777',
        backgroundColor:'#fff'
     },
     textinput2:{
        borderWidth:1,
        borderRadius:20,
        width:'150%',
        height:40,
        fontSize:18,
        paddingHorizontal:20,
        marginTop:20,
        borderColor:'#777'

     },
     btn:{
        marginTop:40,
        alignSelf:'center',
        backgroundColor:'#884EA0',
        width:'100%',
        // height:'10%',
        height:50,
        borderRadius:20
      },
     btntext:{
        fontSize:22,
        color:'#fff',
        alignSelf:'center',
        paddingTop:10
      },
      txt:{
        fontSize:18,
        marginTop:20,
      },
      miniview:{
        flexDirection:'row'
      },
      minitxt:{
        marginTop:10,

      },
      txt1:{
        marginTop:10,
        fontSize:16,
        color: '#A0D04E',
        paddingHorizontal:2

      },
      socials:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:40
      }
})
