const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { Character } = require("../models");
const { WatchListData } = require("../models");
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
      return WatchListData.find().sort({ createdAt: -1 });
    },
    
    watchList: async (parent, { watchListId }) => {
      return WatchListData.findOne({ _id: watchListId });
    },

    characters: async () => {
      return Character.find();
    },
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

    addWatchList: async (parent, { title, movies }, context) => {
      if (context.user) {
        const watchList = await WatchListData.create({ title, movies, username: context.user.username });
        await Profile.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { watchLists: watchList._id } },
          { new: true }
        );
        return watchList;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
