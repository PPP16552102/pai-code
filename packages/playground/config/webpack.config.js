import { merge } from 'webpack-merge';
import CommonConfig from './webpack.common';
import DevelopmentConfig from './webpack.dev';

export default (env) => { 
  return merge(CommonConfig, DevelopmentConfig);
}