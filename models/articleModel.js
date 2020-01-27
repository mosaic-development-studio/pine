import { articleSchema } from '../schemas/articleSchema';
import { model } from 'mongoose';

export const ArticleModel = model('Article', articleSchema);