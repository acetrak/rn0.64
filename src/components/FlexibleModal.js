import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';

const topOffset = 10;

const FlexibleModal = props => {

  const modalVisible = props.visible;
  const onClose = props.onClose || function () {
  };
  const theme = props.theme;

  const anim = useRef(new Animated.Value(0)).current;
  const windowHeight = Dimensions.get('window').height;

  let _panResponder = PanResponder.create({
    // 要求成为响应者：
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    // 使得监听下的事件可以被识别
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
      // console.log(gestureState)
      // gestureState.{x,y} 现在会被设置为0
    },
    onPanResponderMove: (evt, gestureState) => {
      // 最近一次的移动距离为gestureState.move{X,Y}

      const canMove = gestureState.dy > 0;

      if (canMove) {
        Animated.spring(
          anim, // 动画中的变量值
          {
            toValue: gestureState.dy, // 透明度最终变为1，即完全不透明
            useNativeDriver: false,
          },
        ).start();
      }

      // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {

      const hidden = gestureState.dy > windowHeight / 2 || gestureState.vy > 0.8;

      if (hidden) {
        onClose(!modalVisible);
        anim.setValue(topOffset);
      } else {
        Animated.spring(anim, {
          toValue: topOffset,
          useNativeDriver: false,
        }).start();
      }

      // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
      // 一般来说这意味着一个手势操作已经成功完成。
    },
    // onPanResponderTerminate: (evt, gestureState) => {
    //   // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
    // },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
      // 默认返回true。目前暂时只支持android。
      return true;
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        onClose(!modalVisible);
      }}
    >
      <Animated.View
        style={{ ...styles.modalBody, marginTop: anim }}
        {..._panResponder.panHandlers}
      >
        <View style={styles.modalTitle}>
          <Text style={theme.heading1}>搜索</Text>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={e => {
              e.preventDefault();
              onClose(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>关闭</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 14,
      height: 14,
    },
    shadowOpacity: 0.65,
    shadowRadius: 18.84,
    elevation: 5,
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 18,
    alignItems: 'center',
  },
  textStyle: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

FlexibleModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withTheme(FlexibleModal);
