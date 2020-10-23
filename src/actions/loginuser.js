const fetchUser = (userDetails) => ({
  type: "TRY_LOGIN",
  payload: { userDetails },
});

export default fetchUser;
