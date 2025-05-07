// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//phone
test('true phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('true phone number with dash', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('false phone number, too little digits', () => {
  expect(isPhoneNumber('4567890')).toBe(false);
});

test('false phone number, too many digits', () => {
  expect(isPhoneNumber('12345678910')).toBe(false);
});

//email
test('true email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('true email underscore', () => {
  expect(isEmail('user@example_example.com')).toBe(true);
});

test('false email no @', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('false email long domain', () => {
  expect(isEmail('user@example.example')).toBe(false);
});

//good password
test('true strong password, starts with letter', () => {
  expect(isStrongPassword('Abcd123')).toBe(true);
});

test('true strong password, with underscore', () => {
  expect(isStrongPassword('A_1234')).toBe(true);
});

test('false password, too short', () => {
  expect(isStrongPassword('roy')).toBe(false);
});

test('false password, starts with digit', () => {
  expect(isStrongPassword('1Abcd')).toBe(false);
});

//date
test('true date, one digit month and day', () => {
  expect(isDate('1/5/2022')).toBe(true);
});

test('true date, two digits month and day', () => {
  expect(isDate('12/25/2020')).toBe(true);
});

test('false date, year too short', () => {
  expect(isDate('12/25/20')).toBe(false);
});

test('false date, wrong separator', () => {
  expect(isDate('12-25-2020')).toBe(false);
});

//color
test('true 3 digit hex without #', () => {
  expect(isHexColor('fff')).toBe(true);
});

test('true 6 digit hex with #', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('false hex wrong length', () => {
  expect(isHexColor('#abcd')).toBe(false);
});

test('false hex, invalid letter', () => {
  expect(isHexColor('#xyz123')).toBe(false);
});
