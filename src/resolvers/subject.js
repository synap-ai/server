export default {
  Query: {
    subjects: async (parent, args, { models }) => {
      return await models.Subject.findAll();
    },
    subject: async (parent, { id }, { models }) => {
      return await models.Subject.findById(id);
    },
  },

  Mutation: {
    createSubject: async (
      parent,
      { first_name, last_name, email, gender, dob, dominant_hand },
      { models },
    ) => {
      
      const subject = await models.Subject.create({
        first_name,
        last_name,
        email,
        gender,
        dob,
        dominant_hand,
      });

      return subject;
    },

    updateSubject: async (
      parent,
      {
        id,
        first_name,
        last_name,
        email,
        gender,
        dob,
        dominant_hand,
      },
      { models },
    ) => {
      const subject = await models.Subject.findById(id);
      return await subject.update({
        first_name,
        last_name,
        email,
        gender,
        dob,
        dominant_hand,
      });
    },

    deleteSubject: async (parent, { id }, { models }) => {
      return await models.Subject.destroy({
        where: { id },
      });
    },
  },
};
