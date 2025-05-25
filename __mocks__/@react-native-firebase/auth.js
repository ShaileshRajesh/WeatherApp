export default () => ({
  currentUser: {
    uid: 'mock-uid',
    email: 'test@example.com',
  },
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  signOut: jest.fn(() => Promise.resolve()),
  onAuthStateChanged: jest.fn(() => jest.fn()),
});
