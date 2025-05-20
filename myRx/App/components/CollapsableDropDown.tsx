import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CollapasableDropDown} from '../types/type';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem: React.FC<CollapasableDropDown> = ({
  title,
  icon,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  const rotateIcon = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        {icon}
        <Text style={styles.headerText}>{title}</Text>
        <Animated.View style={{transform: [{rotate: rotateIcon}]}}>
          <Icon name="keyboard-arrow-down" size={24} color="gray" />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.content,
          {
            height: heightInterpolation,
            opacity: animation,
          },
        ]}>
        <View
          style={styles.childrenContainer}
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            setContentHeight(height);
          }}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6200E0',
    marginLeft: 8,
    flex: 1,
  },
  content: {
    overflow: 'hidden',
  },
  childrenContainer: {
    padding: 12,
    position: 'absolute',
    width: '100%',
  },
});
