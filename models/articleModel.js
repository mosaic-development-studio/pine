import { articleSchema } from '../schemas';
import { model } from 'mongoose';

export const ArticleModel = model('Article', articleSchema);