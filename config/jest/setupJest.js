// setup file
const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

Object.defineProperty(window, 'location', {
  writable: true,
  value: {},
});

configure({ adapter: new Adapter() });
