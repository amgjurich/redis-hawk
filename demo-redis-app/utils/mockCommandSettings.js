/*
Set user-defined frequency for specified Redis commmands to be mocked.
All frequency times are in milliseconds, except for TTL (TIME_TO_LIVE) times which are in seconds.

Used by index.js and /utils/mock-commands.js
*/

module.exports = {
  STRING_SET_FREQUENCY: 300,
  STRING_GET_FREQUENCY: 200,
  STRING_DELETE_FREQUENCY: 1000,
  STRING_TIME_TO_LIVE: 30000,
  LIST_LPUSH_FREQUENCY: 500,
  LIST_LRANGE_FREQUENCY: 250,
  LIST_LPOP_FREQUENCY: 1000,
  LIST_TIME_TO_LIVE: 50000,
  SET_SADD_FREQUENCY: 500,
  SET_SMEMBERS_FREQUENCY: 250,
  SET_SPOP_FREQUENCY: 1000,
  SET_TIME_TO_LIVE: 50000,
  SORTEDSET_ZADD_FREQUENCY: 350,
  SORTEDSET_ZRANGE_FREQUENCY: 1000,
  SORTEDSET_ZPOPMIN_FREQUENCY: 2000,
  SORTEDSET_TIME_TO_LIVE: 30000,
  HASH_HMSET_FREQUENCY: 400,
  HASH_HGETALL_FREQUENCY: 500,
  HASH_DEL_FREQUENCY: 10000,
  HASH_TIME_TO_LIVE: 10000
}