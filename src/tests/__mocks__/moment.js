// we need the real moment library so we can call it in our mocked version.
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};