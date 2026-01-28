const { query } = require("../index");

async function createUser({ email, passwordHash, selectedGrade }) {
    const sql = `
    INSERT INTO users (email, password_hash, selected_grade)
    VALUES ($1, $2, $3)
    RETURNING id, email, selected_grade, created_at
  `;

    const { rows } = await query(sql, [email, passwordHash, selectedGrade]);

    return rows[0];
}

async function getUserByEmail(email) {
    const sql = `
    SELECT id, email, password_hash, selected_grade, created_at
    FROM users
    WHERE email = $1
  `;

    const { rows } = await query(sql, [email]);
    return rows[0] || null;
}

async function getUserById(id) {
    const sql = `
    SELECT id, email, selected_grade, created_at
    FROM users
    WHERE id = $1
  `;

    const { rows } = await query(sql, [id]);
    return rows[0] || null;
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
};
