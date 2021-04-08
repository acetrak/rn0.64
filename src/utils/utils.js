import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e) {
  }
};

const getData = async (name = '') => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      return value;
    }
  } catch (e) {
  }
};

export {storeData, getData};
