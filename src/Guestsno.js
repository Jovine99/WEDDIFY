import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Guestsno() {
  return (
    <View style={styles.container}>
        <Text style={styles.headline}>Guests</Text>
        <Text style={styles.title}>No of Guests</Text>
        <View style={styles.topview}>
            <TouchableOpacity style={styles.tableview}><Text style={{alignSelf:'center', paddingTop:8, fontSize:18, color:'#884EA0'}}>Tables</Text></TouchableOpacity>
            <TouchableOpacity style={styles.tableview}><Text style={{alignSelf:'center', paddingTop:8, fontSize:18, color:'#884EA0'}}>Menus</Text></TouchableOpacity>
        </View>
        <View style={styles.listview}>
            <Text style={styles.li}>Groom's Family</Text>
            <Text style={styles.li2}>Bride's Family</Text>
            <Text style={styles.li3}>Groom's Friends</Text>
            <Text style={styles.li}>Bride's Friends</Text>
            <Text style={styles.li}>Women</Text>
            <Text style={styles.li}>Men</Text>
            <Text style={styles.li}>Adults</Text>
            <Text style={styles.li}>Children</Text>
            <Text style={styles.li}>Groups</Text>
            <Text style={styles.li}>Bride Maids</Text>
        </View>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>Add Member+</Text></TouchableOpacity>
    </View>
     
  )
}
export default Guestsno
const styles = StyleSheet.create ({
    container:{
        flex:1
    },
    headline:{
        marginTop:40,
        fontSize:40,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#333311',
        color:'#884EA0',
    },
    title:{
       alignSelf:'center',
       fontSize:28,
       marginTop:10 
    },
    topview:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-evenly'
    },
    tableview:{
       borderWidth:1,
       width:100,
       height:40,
       borderRadius:10,
       borderColor:'#884EA0',
    },
    listview:{
        marginTop:30,
        marginHorizontal:30
    },
    li:{
        fontSize:22,
        paddingTop:20,
        borderBottomWidth:1,
        fontWeight:300,
        borderBottomColor:'#FBF9FC',
    },
    li2:{
      fontSize:22,
        paddingTop:20 ,
        fontWeight:300,
        borderBottomColor:'#FBF9FC',
    },
    li3:{
        fontSize:22,
        paddingTop:20,
        borderBottomWidth:1,
        fontWeight:300,
        borderBottomColor:'#FBF9FC', 
    },
    btn:{
        marginTop:40,
        alignSelf:'center',
        backgroundColor:'#884EA0',
        width:'40%',
        // height:'10%',
        height:50,
        borderRadius:10
      },
     btntext:{
        fontSize:20,
        color:'#fff',
        alignSelf:'center',
        paddingTop:10
      },
})
