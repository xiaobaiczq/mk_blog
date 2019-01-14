const Redis = require("ioredis");

class RedisStore{

    constructor() {
    }

    get(key, maxAge, { rolling }){

    }

    set(key, sess, maxAge, { rolling, changed }){

    }

    destroy(key){

    }
}

module.exports = RedisStore;