import env from "react-dotenv";
const serverUrls = {
  backend: env.BACKEND_URL,
  storage: env.STORAGE_URL,
};
export default serverUrls;
