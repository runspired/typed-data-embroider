import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from '../services/store';
import type Post from '../models/post';

export default class ApplicationRoute extends Route {
  @service declare store: Store;

  async model() {
    return await this.store.findAll<Post>('post');
  }
}
