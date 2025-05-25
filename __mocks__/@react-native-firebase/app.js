export default {
  firebase: {
    app: jest.fn(() => ({
      name: 'mockApp',
      options: {},
    })),
  },
  apps: [],
  app: jest.fn(() => ({
    name: 'mockApp',
    options: {},
  })),
};
