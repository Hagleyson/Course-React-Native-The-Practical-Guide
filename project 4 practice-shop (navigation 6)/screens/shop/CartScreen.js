import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/orders";
import Card from "../../components/UI/Card";
import { ActivityIndicator } from "react-native-paper";

const CartScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItem = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();

  const sendOrderHander = async () => {
    setIsLoading(true);
    await dispatch(orderActions.addOrder(cartItem, cartTotalAmount));
    setIsLoading(false);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={Colors.primary} />
        ) : (
          <Button
            color={Colors.accent}
            title="Order Now"
            disabled={cartItem.length === 0}
            onPress={sendOrderHander}
          />
        )}
      </Card>
      <FlatList
        data={cartItem}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            deletable
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Your Cart",
};
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
export default CartScreen;
