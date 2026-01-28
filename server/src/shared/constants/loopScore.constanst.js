const LAST_N_INTERVIEWS = 5;

const DIFFICULTY_FACTOR = {
    JUNIOR: 1.0,
    MIDDLE: 1.25,
    SENIOR: 1.5,
};

const WEIGHTS = {
    COMPLETENESS: 0.2,
    STABILITY: 0.5,
    CONSISTENCY: 0.3,
};

module.exports = {
    LAST_N_INTERVIEWS,
    DIFFICULTY_FACTOR,
    WEIGHTS,
};
