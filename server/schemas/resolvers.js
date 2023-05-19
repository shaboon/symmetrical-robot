const { AuthenticationError, ApolloError } = require("apollo-server-express");
const { Profile } = require("../models");
const { Character } = require("../models");
const { WatchList } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    watchLists: async () => {
      return WatchList.find().sort({ createdAt: -1 });
    },

    watchList: async (parent, { watchListId }) => {
      return WatchList.findOne({ _id: watchListId });
    },

    characters: async () => {
      return Character.find();
    },

    watchList: async () => {
      return WatchList.find();
    },

    // watchLists: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return WatchList.find(params).sort({ createdAt: -1 });
    // }
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
        throw new AuthenticationError("No profile with this username found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addWatchList: async (parent, data, context) => {
      console.log(data);
      if (context.user) {
        try {
          const watchList = await WatchList.create({ ...data, title: [] });
          return watchList;
        } catch (error) {
          console.log(error);
          throw new ApolloError(error);
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addToWatchList: async (parent, { name, title }, context) => {
      if (context.user) {
        try {
          const updatedWatchList = await WatchList.findOneAndUpdate(
            { name: name },
            { $push: { title: title } },
            { new: false }
          );
          return updatedWatchList;
        } catch (error) {
          console.log(error);
          throw new ApolloError(error);
        }
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeWatchList: async (parent, { name }, context) => {
      if (context.user) {
        const watchList = await WatchList.findOneAndDelete({
          name: name,
        });
        return watchList;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeFromWatchList: async (parent, { name, title }, context) => {
      if (context.user) {
        const updatedWatchList = await WatchList.findOneAndUpdate(
          { name: name },
          { $pull: { title: title } },
          { new: true }
        );
        return updatedWatchList;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateWatchList: async (parent, { name, title }, context) => {
      if (context.user) {
        const updatedWatchList = await WatchList.findOneAndUpdate(
          { name: name, title: title },
          { movies },
          { new: true }
        );
        return updatedWatchList;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
