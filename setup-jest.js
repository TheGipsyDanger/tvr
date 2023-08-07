const mockFn = jest.fn();

jest.mock('axios', () => {
  return {
    AxiosReponse: {},
  };
});

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

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return mockFn;
    },
    useSelector: () => {
      return {};
    },
  };
});
