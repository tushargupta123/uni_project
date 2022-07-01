const defaultType = async (type) => {
  return type;
};

const loginUser = async (data) => {
  return data.type;
};

const authService = {
  defaultType,
  loginUser,
};

export default authService;
