import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
} from "react-native";
export default function App() {
  const [name, setName] = useState();
  const [count, setCount] = useState(0);
  const pressMe = () => setCount(count + 1);
  const pressme = () => setCount(count - 1);
  const [age, setAge] = useState();
  const [people, setPeople] = useState([
    { name: "sakthi", key: "1" },
    { name: "Faraz", key: "2" },
    { name: "Gowtham", key: "3" },
    { name: "Magesh", key: "4" },
    { name: "Harish", key: "5" },
    { name: "Alphanse", key: "6" },
    { name: "Charan", key: "7" },
    { name: "Karthick", key: "8" },
    { name: "kumar", key: "9" },
    { name: "saran", key: "10" },
    { name: "ajay", key: "11" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text style={styles.box}>{item.name}</Text>}
      />
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        }}
      />

      {/* <ScrollView>
      {data.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.box}>
              {item.name}
              {item.key}
            </Text>           
          </View>
        );      
      })
      }
      </ScrollView> */}
      <Text style={{ color: "white", fontSize: 20 }}>Count: {count}</Text>
      <TouchableOpacity onPress={pressMe} style={styles.touch}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressme} style={styles.touchs}>
        <Text >Decrease</Text>
      </TouchableOpacity>

      <Text>Enter your Name</Text>
      <TextInput
        multiline
        style={styles.Input}
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter yours Age </Text>
      <TextInput
        multiline
        style={styles.Input}
        keyboardType="numeric"
        onChangeText={(val) => setAge(val)}
      />
      <Text>
        Name: {name} || Age: {age}
      </Text>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f3237",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 350,
    height: 30,
    borderRadius: 10,
  },
  touch: {
    marginTop: 10,
    backgroundColor: "green",
    fontSize: 25,
    borderRadius: 100,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  touchs: {
    marginTop: 10,
    backgroundColor: "red",
    fontSize: 25,
    borderRadius: 100,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderColor: "black",
    width: 200,
    borderRadius: 10,
  },
  box: {
    marginTop: 10,
    paddingTop: 30,
    backgroundColor: "white",
    fontSize: 25,
    borderRadius: 20,
    width: 350,
  },
});
