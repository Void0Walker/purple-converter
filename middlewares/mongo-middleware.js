import nextConnect from "next-connect";
import database from "../utilities/database";

const middleware = nextConnect();

middleware.use(database);

export default middleware;
