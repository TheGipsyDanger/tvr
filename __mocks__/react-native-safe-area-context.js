jest.mock('react-native-safe-area-context', () => {
  return {
    useSafeAreaInsets: () => {
      return {
        top: 0,
        bottom: 0,
      };
    },
  };
});
