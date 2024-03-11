import Model, { attr, belongsTo } from '@ember-data/model';
import type Post from './post';
import type StringTransform from '../transforms/string';
import { ResourceType } from '@warp-drive/core-types/symbols';

export default class Comment extends Model {
  @attr<StringTransform>('string') declare body: string;
  @belongsTo<Post>('post', { async: false, inverse: 'comments' })
  declare post: Post;

  [ResourceType] = 'comment' as const;
}
