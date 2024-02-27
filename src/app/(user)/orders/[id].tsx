import { View, Text, StyleSheet, FlatList } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@assets/data/orders";
import OrdersListItem from "@/components/OrdersListItem";
import OrderItemListItem from "@/components/OrderItemListItem";

const OrderDetailsScreen = () => {
  // Query params from URL (id)
  const { id } = useLocalSearchParams();

  // Data from Orders (json)
  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text> Order not found </Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}`}} />
      
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={() => <OrdersListItem order={order}/>}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    flex: 1
  },
});

export default OrderDetailsScreen;
