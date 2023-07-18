import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Welcome';
import Register from './src/Register';
import Login from './src/Login';
import Onboard from './src/Onboard';
import Guestsno from './src/Guestsno';
import Tables from './src/Tables';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Onboard/> */}
   {/* <Welcome/> */}
   {/* <Register/> */}
   {/* <Login/> */}
    {/* <Guestsno/> */}
    <Tables/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
