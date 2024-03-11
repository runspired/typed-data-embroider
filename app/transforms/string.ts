import { StringTransform } from '@ember-data/serializer/transform';
import { TransformName } from '@warp-drive/core-types/symbols';

export default class extends StringTransform {
  [TransformName] = 'string' as const;
}
