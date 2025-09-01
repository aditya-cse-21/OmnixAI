import {neon} from '@neondatabase/serverless'

// Load environment variables if not already loaded
import dotenv from 'dotenv';
dotenv.config();

const sql = neon(`${process.env.DATABASE_URL}`);

export default sql;