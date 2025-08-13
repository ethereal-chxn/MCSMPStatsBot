import dotenv from 'dotenv';

dotenv.config();

const {DISCORD_TOKEN, DISCORD_CLIENT_ID} = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error('environment variables missing!');
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID
};