//import { v4 as uuidv4 } from 'uuid';
const redis = require('redis');
const {promisify} = require('util');
const client = redis.createClient();
//console.log(client);
var uuid = require('uuid').v4;

const promisified = ["set", "get", "hget", "sismember", "smembers", "exists", "sadd", "zrangebyscore", "hset", "expire", "hgetall", "hexists", "zrank", "zadd", "zscore", "zrange"];
for(let i = 0; i  < promisified.length; i++) {
  client["_" + promisified[i]] = client[promisified[i]];
  client[promisified[i]] = promisify(client["_" + promisified[i]]).bind(client);
}

client.on('connect', function() {
  console.log('Connected!');
});