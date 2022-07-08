const defaultType = async (type) => {
  return type;
};

const loginUser = async (data) => {
  return data.type;
};
const signinUser = async (data) => {
  return data.type;
};

const authService = {
  defaultType,
  loginUser,
  signinUser
};

export default authService;
