import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const UserSchema = new Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            index: true,
            unique: true,
            required: true
        },
        firstname: {
            type: String,
            trim: true,
            required: true
        },
        lastname: {
            type: String,
            trim: true,
            required: true
        }
    },
    { collection: 'users' }
);

UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);

export default mongoose.model('User', UserSchema);
