const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

// const { watchList, profile } = require('../models');  variable for watchlist


const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // watchLists: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return watchList.find(params).sort({ createdAt: -1 })
    //   .populate('profile');
    // },
    // watchList: async (parent, { _id }) => {
    //   return watchList.findOne({ _id })
    //   .populate('profile');

  },

  Mutation: {
    addProfile: async (parent, { username, password }) => {

      const profile = await Profile.create({ username, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { username, password }) => {

      const profile = await Profile.findOne({ username });

      if (!profile) {
        throw new AuthenticationError('No profile with this username found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    // addWatchList: async (parent, args, context) => {
    //   if (context.user) {
    //     const watchList = await watchList.create({ ...args, username: context.user.username });
    //     await Profile.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { watchLists: watchList._id } },
    //       { new: true }
    //     );
    //     return watchList;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // removeWatchList: async (parent, { watchListId }, context) => {
    //   if (context.user) {
    //     const watchList = await watchList.findOneAndDelete({
    //       _id: watchListId,
    //       username: context.user.username,
    //     });
    //     await Profile.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { watchLists: watchList._id } },
    //       { new: true }
    //     );
    //     return watchList;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // updateWatchList: async (parent, { watchListId, rating }, context) => {
    //   if (context.user) {
    //     const updatedWatchList = await watchList.findOneAndUpdate(
    //       { _id: watchListId, username: context.user.username },
    //       { rating },
    //       { new: true }
    //     );
    //     return updatedWatchList;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // }
}};

module.exports = resolvers;
