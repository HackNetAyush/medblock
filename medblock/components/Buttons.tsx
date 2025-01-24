import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface objtype {
  name: string;
  process: () => void;
}

const btns = [
  {
    name: "Human",
    process: function () {
      alert("hello");
    },
  },
  {
    name: "Human",
    process: function () {
      alert("hello");
    },
  },
  {
    name: "Human",
    process: function () {
      alert("hello");
    },
  },
];

function Options({ obj }: { obj: objtype }) {
  return (
    <View>
      <TouchableOpacity onPress={obj.process}>
        <Text>{obj.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const Buttons = () => {
  return (
    <View className="w-full flex flex-row px-2 items-center ">
      {btns.map((item, i) => (
        <Options obj={item} key={i} />
      ))}
    </View>
  );
};

export default Buttons;
