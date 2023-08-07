const mockFn = jest.fn();

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
