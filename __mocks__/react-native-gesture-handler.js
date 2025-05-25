jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({children}) => children,
    Swipeable: jest.fn(),
    DrawerLayout: jest.fn(),
    State: {},
    PanGestureHandler: ({children}) => children,
    TapGestureHandler: ({children}) => children,
    LongPressGestureHandler: jest.fn(),
    // any other mocks you need
  };
});
