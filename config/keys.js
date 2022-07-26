//Client ID
// 651264551485-v9k5jpv3t9aif72lgdmu6qhha6e005o3.apps.googleusercontent.com
//production
// 168796250739-ja8sth1lg9v0skvat1a0sm8im0bn76q0.apps.googleusercontent.com
//Client Secret Key
// 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
//production
// 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

//Atlas password
// NpyZm9N4pUjD2gQw
// mongodb+srv://anthonyaboukhalil:<password>@email.2izs1.mongodb.net/?retryWrites=true&w=majority

//production password 66uQHGrsnQm0rvSu
// mongodb+srv://anthonyaboukhalil:66uQHGrsnQm0rvSu@emaily-prod.clyl2.mongodb.net/?retryWrites=true&w=majority
if (process.env.NODE_ENV === "production") {
  //we are in production
  module.exports = require("./prod");
} else {
  //we are in development
  module.exports = require("./dev");
}
