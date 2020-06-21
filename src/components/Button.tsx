import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../res/styles";

interface Props {
  children?: string;
  onPress?: () => void;
  type?: "solid" | "outlined";
}

class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    type: "solid",
  };

  render() {
    const { children, type, onPress } = this.props;

    if (type === "outlined")
      return (
        <TouchableOpacity style={styles.buttonOutlined} onPress={onPress}>
          <Text>{children}</Text>
        </TouchableOpacity>
      );
    else
      return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>{children}</Text>
        </TouchableOpacity>
      );
  }
}

export default Button;
