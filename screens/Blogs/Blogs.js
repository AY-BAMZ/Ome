import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { globalStyles } from "../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { useBlogContext } from "../../api/Blogs/BlogContext";
import Loading from "../Loadings/Loading";
import BlogCard from "./BlogCard";

export default function Blogs({navigation}) {
  const { ordering, setOrdering } = useBlogContext();
  const { search, setSearch } = useBlogContext();
  const { blogs, setBlogs } = useBlogContext();

  const { handleGetBlogs } = useBlogContext();
  const { isLoading } = useBlogContext();

  const updateInputVal = (val, prop) => {
    if (prop === "search") {
      setSearch(val);
    }
  };

  const searchBlogs = () => {
    if (search === "") {
      return null;
    } else {
      handleGetBlogs();
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={globalStyles.inputTwo}>
          <Ionicons name="search-outline" size={24} color="#ddd" />
          <TextInput
            placeholder="Search blogs"
            style={styles.input}
            returnKeyType="search"
            value={search}
            onChangeText={(val) => updateInputVal(val, "search")}
            onSubmitEditing={() => searchBlogs()}
          />
        </View>
        <Text style={globalStyles.textTwo}>Result for {search}</Text>
        <View>

        <FlatList
          style={styles.blogList}
          data={blogs}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              onPress={() => navigation.navigate("BlogPage", item)}
              >
                <BlogCard item={item} />
              </TouchableOpacity>
            );
          }}
          />
          </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
  },
  searchResult: {},
  //   blogList{
  //     ma
  //   }
});
