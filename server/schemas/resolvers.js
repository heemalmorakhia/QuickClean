const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utility/authentication');
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {

        user: async (parent, args, context) => {
            if (context.user) {
                return await User.findById(context.user._id);
            }

            throw new AuthenticationError('Not logged in');
        },

    },
    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        deleteUser: async (parent, { _id }) => {
            return await User.findByIdAndDelete(_id);
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {

                if (args.password) {
                    const hashedPassword = await bcrypt.hash(args.password, 10);
                    args.password = hashedPassword;
                }
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },

        updateUserPassword: async (parent, args, context) => {
            if (context.user) {

                if (args.password) {
                    const hashedPassword = await bcrypt.hash(args.password, 10);
                    args.password = hashedPassword;
                }
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;