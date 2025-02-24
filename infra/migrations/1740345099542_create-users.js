exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    // For reference, GitHub limits usernames to 39 characters.
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },

    // Why 254 in length?
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },

    // Why 72 in length?
    password: {
      type: "varchar(60)",
      notNull: true,
    },

    // Wry timestamp with timezone?
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },

    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("'timezone', now()"),
    },
  });
};

exports.down = false;
