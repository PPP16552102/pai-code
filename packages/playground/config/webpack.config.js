import { merge } from 'webpack-merge';
import CommonConfig from './webpack.common.js';
import DevelopmentConfig from './webpack.dev.js';

export default (env) => { 
  return merge(CommonConfig, DevelopmentConfig);
}