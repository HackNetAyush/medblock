import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OpenCard, { CardType } from "@/components/OpenCard";
import ClosedCard from "@/components/ClosedCard";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const data: CardType[] = [
    {
      id: "1",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "status",
    },
    {
      id: "2",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "status",
    },
    {
      id: "3",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "status",
    },
    {
      id: "4",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "status",
    },
    {
      id: "5",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "status",
    },
  ];

  function Buttons() {
    if (isOpen) {
      return (
        <View className="bg-[#272727] px-2 py-[9px] flex flex-row justify-evenly rounded-3xl w-5/6">
          <View className="w-[48%]">
            <TouchableOpacity className="w-full">
              <Text className="text-lg text-center rounded-3xl py-1 bg-[#aa7cf8] text-black ">
                Open
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[48%]">
            <TouchableOpacity
              className="w-full"
              onPress={() => setIsOpen(false)}
            >
              <Text className="text-lg py-1 text-center rounded-3xl text-slate-300 ">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View className="bg-[#272727] px-2 py-[9px] flex flex-row justify-evenly rounded-3xl w-5/6">
          <View className="w-[48%]">
            <TouchableOpacity
              className="w-full"
              onPress={() => setIsOpen(true)}
            >
              <Text className="text-lg text-center rounded-3xl py-1 text-slate-300  ">
                Open
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[48%]">
            <TouchableOpacity className="w-full">
              <Text className="text-lg py-1 text-center rounded-3xl bg-[#aa7cf8] text-black ">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const renderItem = ({ item }: { item: CardType }) => {
    if (isOpen) {
      return <OpenCard obj={item} />;
    } else {
      return <ClosedCard obj={item} />;
    }
  };

  return (
    <SafeAreaView>
      <Text className="text-slate-300 text-2xl text-center my-4">
        Dashboard
      </Text>
      <View className="w-full h-full">
        <View className="w-full mt-4 flex justify-center items-center">
          <Buttons />
        </View>
        <View className="w-full h-[76%] flex justify-center items-center">
          <View className="h-[90%] w-[91%] rounded-lg">
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
