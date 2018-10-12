const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db")
  // ^ use when just pushing and pulling data to db. custom logic (below) is not needed if you don't need checks/authentication
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
