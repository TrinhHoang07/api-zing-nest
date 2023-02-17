import * as bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(15);
export const passwordHashed = bcrypt.hashSync('hoangtrinh', salt);
