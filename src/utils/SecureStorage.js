import * as SecureStore from 'expo-secure-store';

export async function storeValue(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    console.error('Unable to stored ' + key);
  }
}

export async function retriveValue(key) {
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value !== null) {
      return value;
    } else return undefined;
  } catch (e) {
    console.error(key + ' not  found!');
  }
}

export async function removeValue(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    // console.log('Successfully removed ' + key);
  }
}
