export function signInUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: user.username,
      });
    }, 500);
  });
}

export function signOutUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}
