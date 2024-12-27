import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (

    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ marginTop: 20, padding: 15, backgroundColor: 'green' }}>
          <Text>Search</Text>
        </View>

        <View style={{ flex: 1, padding: 15, backgroundColor: 'orange' }}>
          <Text>Items</Text>
        </View>
      </SafeAreaView >
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
