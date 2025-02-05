import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expireIn: "30d",
  });

  //set jwt as an http-only cookie
  res.cookies("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strick",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};


export default generateToken;