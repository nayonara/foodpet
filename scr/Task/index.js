import React, { useState, useEffect } from "react";
import firebase from  "../config/firebase"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useBackHandler } from '@react-native-community/hooks';



export default function Task({  navigation}) {

    const database = firebase.firestore();

}


