import { FlatList } from "react-native";
import orders from "@assets/data/orders";
import OrdersListItem from "@/components/OrdersListItem";

export default function OrdersScreen() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrdersListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
