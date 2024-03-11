import Model, {
  attr,
  belongsTo,
  hasMany,
  AsyncHasMany,
  AsyncBelongsTo,
} from '@ember-data/model';
import type Comment from './comment';
import { ResourceType } from '@warp-drive/core-types/symbols';
import type User from './user';

export default class Post extends Model {
  @attr('string') declare title: string;
  @attr('string') declare body: string;

  @belongsTo<User>('user', { async: true, inverse: 'posts' })
  declare author: AsyncBelongsTo<User>;

  @hasMany<Comment>('comment', { async: true, inverse: 'post' })
  declare comments: AsyncHasMany<Comment>;

  [ResourceType] = 'post' as const;
}
