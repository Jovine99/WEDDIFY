import React from 'react';
import{Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'

 function Welcome() {
  return (
    <View style={styles.container}>
        <ScrollView style={{marginVertical:50,}}>
          <View style={styles.title}>
            <Text style={styles.greeting}>Hi, Mariam</Text>
            <Text style={styles.headline}>Inspiration for your wedding</Text>
        </View>
        <View style={styles.searchview}>
        <EvilIcons name="search" size={32} style={styles.search} />
        <TextInput style={styles.inputsearch}
        
        placeholder='Search here'
        />
        </View>
        <Text style={styles.tcategories}>Categories</Text>

        <View style={styles.catview}> 
        <ScrollView style={styles.sc} horizontal={true} showsHorizontalScrollIndicator =
        {false}>
            
           <View style={styles.categories}>

           <View style={styles.category1}>
            <Image style={styles.image} source={require('../assets/images/cermony.jpg')}/> 
            <Text style={styles.Txt}>Cermony</Text>
            </View>
            <View style={styles.category2}>
            <Image style={styles.image} source={require('../assets/images/att.jpg')}/>
            <Text style={styles.Txt}>Attires & accessories</Text> 
            </View>
            <View style={styles.category2}>
            <Image style={styles.image} source={require('../assets/images/invi.jpg')}/> 
            <Text style={styles.Txt}>Invitation</Text> 
            </View>
            <View style={styles.category2}>
            <Image style={styles.image} source={require('../assets/images/make.jpg')}/> 
            <Text style={styles.Txt}>Make-up</Text> 
            </View>
           </View>
           

        </ScrollView>
         </View>
         <Text style={styles.tcategories}>Recommended for you</Text>
         <Swiper style={{height:200}}>
         
         <View style={styles.offview}>
            <View style={styles.textbody}>
                <Text style={styles.t1}>Dec 16-Dec 31</Text>
                <Text style={styles.t2}>20% off</Text>
                <Text style={styles.t1}>Super discount</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Learn More</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.Img}>
            <Image style={styles.Image} source={require('../assets/images/bbde.jpg')}/> 
            </View>
         </View>
         <View style={styles.offview}>
            <View style={styles.textbody}>
                <Text style={styles.t1}>Dec 16-Dec 31</Text>
                <Text style={styles.t2}>20% off</Text>
                <Text style={styles.t1}>Super discount</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Learn More</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.Img}>
            <Image style={styles.Image} source={require('../assets/images/bbde.jpg')}/> 

            </View>
         </View>
         <View style={styles.offview}>
            <View style={styles.textbody}>
                <Text style={styles.t1}>Dec 16-Dec 31</Text>
                <Text style={styles.t2}>20% off</Text>
                <Text style={styles.t1}>Super discount</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Learn More</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.Img}>
            <Image style={styles.Image} source={require('../assets/images/bbde.jpg')}/> 

            </View>
         </View>
         </Swiper>

         <Text style={styles.ttrending}>Trending</Text>

        <ScrollView style={styles.sc} horizontal={true} showsHorizontalScrollIndicator =
        {false}>
            
           <View style={styles.trending}>

           <View style={styles.trend1}>
            <Image style={styles.timage} source={require('../assets/images/bouquet.jpg')}/> 
           
            </View>
           
            <View style={styles.trend2}>
            <Image style={styles.timage2} source={require('../assets/images/groom.jpg')}/> 
      
            </View>
            <View style={styles.trend2}>
            <Image style={styles.timage2} source={require('../assets/images/maids.jpg')}/> 
            
            </View>
           </View>
           

        </ScrollView>
        
        </ScrollView>
    </View>
  )
}
export default Welcome
const styles = StyleSheet.create({
 container:{
    flex:1,
   //  backgroundColor:'#f2f2f2'
 },
 title:{
    marginTop:50,
    marginHorizontal:20

 },
 greeting:{
    fontSize:28,
    color:'#884EA0',
    fontWeight:'bold'
 },
 headline:{
    fontSize:18,
    color:'#333311'

 },
 searchview:{
    marginTop:20,
    flexDirection:'row',
    marginHorizontal:20,
    backgroundColor:'#FBF9FC',
    height:50,
    borderRadius:10
    
 },
 search:{
    color:'#9F86A9',
    fontWeight:'bold',
    paddingHorizontal:20,
    alignSelf:'center'
 },
 inputsearch:{
    color:'#9F86A9',
    fontSize:18,
 },
 tcategories:{
    marginTop:10,
    marginHorizontal:20,
    fontSize:28,
    color:'#333311'
 },
 sc:{
    marginHorizontal:5, 
 },
 
 categories:{
    height:160,
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-between',
        marginLeft:20, 
 },
 image:{
    
    height:80,
    width:80,
   alignSelf:'center',
   marginTop:10,
   borderRadius:4
 },
 category1:{
    height:150,
    width:100,
    backgroundColor:'#f2f2f2',
    elevation:1,
    borderRadius:4
 },
 category2:{
    height:150,
    width:100,
    backgroundColor:'#f2f2f2',
    elevation:1,
    borderRadius:4,
    marginLeft:20
 },
 Txt:{
    paddingTop:20,
    fontSize:18,
    color:'#884EA0',
    alignSelf:'center'

 },
 
 offview:{
  
   marginHorizontal:20,
   flexDirection:'row',
   height:200
 },
 t1:{
   fontSize:18,
 
 },
 textbody :{
   paddingHorizontal:10
 },
 t2:{
   fontSize:28,
   color:'#884EA0',
 },
 btn:{
   marginTop:20,
   alignSelf:'center',
   backgroundColor:'#884EA0',
   width:'100%',
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
 Img:{
   marginHorizontal:50
 },
 Image:{
   height:200,
   width:200
 },
 ttrending:{
   marginTop:10,
    marginHorizontal:20,
    fontSize:28,
    color:'#333311'
 },
 trending:{
   marginTop:20,
   flexDirection:'row',
   marginBottom:20
 },
 trend1:{
   height:200,
   width:200,
   marginHorizontal:10
 },
 trend2:{
   height:200,
   width:200,
   marginHorizontal:10
 },
 timage:{
   height:200,
   width:200,
   borderRadius:30,
   //   marginLeft:2,
 },
 timage2:{
   height:200,
   width:200,
   borderRadius:30
 },


})
