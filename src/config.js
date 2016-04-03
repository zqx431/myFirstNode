'use strict';

/**
 * pratice Node.js project
 *
 * @author edward <385125@qq.com>
 */

module.exports = function (set, get, has) {

  // 服务器监听端口
  set('web.port', 3000);

  // session secret
  set('web.session.secret', 'test');

  // session redis connection
  set('web.session.redis', {
    host: '127.0.0.1',
    port: 6379,
  });

};
