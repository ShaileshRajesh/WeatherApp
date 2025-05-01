export const STRINGS = {
  GET_STARTED: 'Get started',
  RAINDROPS: 'raindrops',
  DISCRIPTION1: 'Only grab your umbrella when',
  DISCRIPTION2: 'you really need it.',
  SINGN_UP: 'sign up',
  CREATE_ACCOUNT: 'Create Account',
  ENTER_EMAIL: 'Enter Email',
  ENTER_PASSWORD: 'Enter Password',
  EMAIL_ERROR: 'Enter a valid email address',
  PASSWORD_ERROR:
    'Password must be at least 8 characters & include a special character',
};

export const ROUTES: any = {
  LOGIN: 'loginScreen',
  SUCCESS: 'successScreen',
};

export const REGEX = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passwordRegex: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
};
