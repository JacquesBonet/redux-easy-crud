// Return the last action status
function statusFor() {

  return function status(state, action) {
    return action;
  }
}

module.exports = statusFor;
