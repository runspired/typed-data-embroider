import Model, { attr, hasMany, ManyArray } from '@ember-data/model';
import type Post from './post';
import type StringTransform from '../transforms/string';
import { ResourceType } from '@warp-drive/core-types/symbols';

export default class User extends Model {
  @attr<StringTransform>('string') declare name: string;

  @hasMany<Post>('post', { async: false, inverse: 'author' })
  declare posts: ManyArray<Post>;

  [ResourceType] = 'user' as const;
}
