import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { OrderItem } from "@/types";
import { defaultPizzaImage } from "./ProductListItem";
import Colors from "@/constants/Colors";

type OrderItemListItemProps = {
  orderItem: OrderItem;
};

const OrderItemListItem = ({ orderItem }: OrderItemListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: orderItem.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.details}>
        <Text style={styles.name}>{orderItem.products.name}</Text>
        <View style={styles.productDetails}>
          <Text style={styles.price}>
            {orderItem.products.price * orderItem.quantity}€
          </Text>
          <Text>Size: {orderItem.size}</Text>
        </View>
      </View>

      <Text style={styles.quantity}>{orderItem.quantity}</Text>
    </View>
  );
};

export default OrderItemListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: 'center'
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '500'
  },
  productDetails: {
    gap: 10,
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
  },
  details: {
    flex: 1,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: 'center',
    marginRight: 10,
  },
});
