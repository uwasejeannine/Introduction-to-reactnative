import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world! I am really excited to build this project</Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/id/1/200/300"
        }} />
      <View style={{ width: 200, height: 70, backgroundColor: "blue" }}></View>
      <StatusBar style="auto" />
      <Button
        title='Click Me'
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))
        } />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'



  },
});
