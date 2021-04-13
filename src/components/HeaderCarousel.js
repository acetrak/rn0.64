import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { connect } from 'react-redux';
import { privateContentAction } from '../store/actions';
import { get } from 'lodash';

const { width: screenWidth } = Dimensions.get('window');
const HEIGHT = (screenWidth - 60) / 3;
const GUTTER = 60;


class HeaderCarousel extends React.PureComponent {

  _carousel = React.createRef();

  componentDidMount() {
    this.props.dispatch(privateContentAction());
  }

  _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.picUrl }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    );
  };

  render() {
    const data = get(this.props, 'privateContent', []);
    return (
      <View style={{ height: HEIGHT, marginVertical: 15 }}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          autoplay
          data={data}
          renderItem={this._renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - GUTTER}
          hasParallaxImages
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    left: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 6,
  },
  item: {
    width: screenWidth - GUTTER,
    height: HEIGHT,
    position: 'relative',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: -1 }), // Prevent a random Android rendering issue
    borderRadius: 6,
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    // resizeMode: 'cover',

  },
});

export default connect(state => ({ privateContent: state.home.privateContent }))(HeaderCarousel);
