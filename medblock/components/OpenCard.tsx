import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface CardType {
  id: string;
  title: string;
  Author: string;
  Description: string;
  Status: string;
}

const OpenCard = ({ obj }: { obj: CardType }) => {
  return (
    <View className=" p-2 m-4 border border-slate-300 rounded-md">
      <Text className="text-[#ede59c] text-[17px]">{obj.title}</Text>
      <Text className="text-slate-300 text-md">
        {obj.Description.slice(0, 69)}...
      </Text>
      <Text> </Text>
      <View className="w-full flex flex-row justify-between">
        <Text className="text-[#aa7cf8]">{obj.Author}</Text>
        <View className="flex flex-row items-center justify-center">
          <Text className="text-green-500">
            <Ionicons name="radio-button-on-outline" />
          </Text>
          <Text className="text-green-500"> {obj.Status}</Text>
        </View>
      </View>
    </View>
  );
};

export default OpenCard;
