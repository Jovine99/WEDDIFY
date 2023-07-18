import React,{useState, useEffect} from 'react';
import {Text, View,TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import Collapsible from 'react-native-collapsible';

const ExpandableListView = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleExpand = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const isExpanded = (index) => {
      return activeIndex === index;
    };
  
    return (
      <View>
        {/* View 1 */}
        <TouchableOpacity onPress={() => toggleExpand(1)} style={styles.Table1}>
          <Text>{isExpanded(1) ? 'Collapse View 1' : 'Table 1'}</Text>
        </TouchableOpacity>
       {/* <ScrollView vertical={true} style={{marginVertical:20}}> */}
       <Collapsible collapsed={!isExpanded(1)} style={styles.collapse}>
          <Text>Content of View 1</Text>
        </Collapsible>
  
       {/* </ScrollView> */}
        {/* View 2 */}
        <TouchableOpacity onPress={() => toggleExpand(2)} style={styles.Table2}>
          <Text>{isExpanded(2) ? 'Collapse View 2' : 'Table 2'}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={!isExpanded(2)} style={styles.collapse}>
          <Text>Content of View 2</Text>
        </Collapsible>
  
        {/* View 3 */}
        <TouchableOpacity onPress={() => toggleExpand(3)} style={styles.Table2}>
          <Text>{isExpanded(3) ? 'Collapse View 3' : 'Table 3'}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={!isExpanded(3)} style={styles.collapse}>
          <Text>Content of View 3</Text>
        </Collapsible>
        <TouchableOpacity onPress={() => toggleExpand(4 )} style={styles.Table2}>
          <Text>{isExpanded(3) ? 'Collapse View 4' : 'Table 4'}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={!isExpanded(4)} style={styles.collapse}>
          <Text>Content of View 4</Text>
        </Collapsible>
      </View>
    );
  };

function Tables() {
    
    
  return (
   <View style={styles.container}>
     <Text style={styles.headline}>Guests</Text>
        <View style={styles.topview}>
            <TouchableOpacity style={styles.tableview}><Text style={{alignSelf:'center', paddingTop:8, fontSize:18, color:'#884EA0'}}>Tables</Text></TouchableOpacity>
            <TouchableOpacity style={styles.tableview}><Text style={{alignSelf:'center', paddingTop:8, fontSize:18, color:'#884EA0'}}>Menus</Text></TouchableOpacity>
        </View>
        
     <View>
      <ExpandableListView />
    </View>
    <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Add Table</Text>
        </TouchableOpacity>
        
   </View>
  )
}
export default Tables
const styles = StyleSheet.create({
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
     Table1:{
        backgroundColor:'#884EA0',
        height:50,
        width:'90%',
        marginHorizontal:20,
        marginTop:40,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
     },
     collapse:{
        borderWidth:1,
        height:200,
        width:'80%',
        alignSelf:'center',
        marginTop:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        marginBottom:20
     },
     Table2:{
        borderColor:'#884EA0',
        height:50,
        width:'90%',
        marginHorizontal:20,
        marginTop:20,
        borderRadius:10,
        borderWidth:1
     },
     btn:{
      marginTop:40,
      alignSelf:'center',
      backgroundColor:'#884EA0',
      width:'40%',
      
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
})
