import * as st from './storage';

test('storage sets an item as an object', () => {
  var testBed = { someniceProp: "hhee" };
  st.setItem("test1", testBed); //TODO: mock this
  var test = st.getItem("test1");
  expect(test).toMatchObject(testBed);
});

test('storage sets an string as a string', () => {
  var testBed = "i am string";
  st.setItem("test1", testBed); //TODO: mock this
  var test = st.getItem("test1");
  expect(test).toBe("i am string");
});

test('storage removes things', () => {
  var testBed = "i am string";
  st.setItem("test1", testBed); //TODO: mock this
  st.removeItem("test1");
  var test = st.getItem("test1");
  expect(test).toBe(null);
});
