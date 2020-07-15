import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./Styles";

const ListEmpty = ({ itemsCount, isLoading }) => (
  <View style={styles.container}>
    {itemsCount === 0 && isLoading ? (
      <Text style={styles.text}>Loading content...</Text>
    ) : (
      <Text style={styles.text}>No items were found...</Text>
    )}
  </View>
);

ListEmpty.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ListEmpty;
