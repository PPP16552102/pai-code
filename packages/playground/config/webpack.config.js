import { merge } from 'webpack-merge';
import CommonConfig from './webpack.common.js';
import DevelopmentConfig from './webpack.dev.js';
import ProductionConfig from './webpack.prod.js';

export default (env) => {
  switch (true) {
    case env.development:
      return merge(CommonConfig, DevelopmentConfig)
    case env.production:
      return merge(CommonConfig, ProductionConfig)
    default:
      return CommonConfig
  }
}