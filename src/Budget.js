import React from 'react'
import { ScrollView } from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Budget() {
  return (
    <View>
         <Text style={styles.headline}>Budget</Text>
         <View>
          <Text>Balance</Text>
          <Text>Paid</Text>
          <Text>Pending</Text>
         </View>
         <View>
         <ScrollView>
          <View></View>
          <View></View>
          <View></View>                                                                                                                                              
         </ScrollView>
         </View>
    </View>
  )
}
export default Budget
const styles= StyleSheet.create({

})
