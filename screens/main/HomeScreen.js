import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { FRUITS } from "../../data/fruits";
import { CATEGORIES } from "../../data/categories";
import ListProduct from "../../components/ListProduct";
import AppColor from "../../consts/colors";
import ListCatItem from "../../components/ListCatItem";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [chosenCat, setChosenCat] = useState("c0");

  let data;
  if (chosenCat == "c0") {
    data = FRUITS.filter((item) => item.rating === 5);
  } else if (!chosenCat) {
    data = FRUITS;
  } else if (chosenCat) {
    data = FRUITS.filter((item) => item.categoriId == chosenCat);
  }

  function selectCat(id) {
    setChosenCat(id);
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.headSection}>
        <Text style={styles.text2}>COLLECTION</Text>
      </View>
      <View style={styles.cat}>
        <Text style={[styles.textTitle, { marginLeft: 15 }]}>Categories: </Text>
        <ListCatItem
          data={CATEGORIES}
          selectCat={selectCat}
          chosenCat={chosenCat}
        />
      </View>
      <View style={styles.product}>
        <Text style={styles.textTitle}>
          {chosenCat == "c0" ? "Popular" : "Products"}
        </Text>
        {chosenCat === undefined ? (
          <></>
        ) : (
          <TouchableOpacity onPress={() => setChosenCat(undefined)}>
            <Text style={styles.textViewAll}>View All</Text>
          </TouchableOpacity>
        )}
      </View>
      <View >
        <ListProduct data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headSection: {
    marginTop: 30,
    marginLeft: 30,
  },
  text1: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.4)",
  },
  text2: {
    fontSize: 50,
    fontWeight: "500",
    color: AppColor.blue,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 15,
    marginLeft: 30,
  },
  cat: {
    marginTop: 25,
    marginHorizontal: 15,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 35,
  },
  textViewAll: {
    marginRight: 30,
    marginBottom: 15,
    color: "rgba(0,0,0,0.5)",
  },
});
