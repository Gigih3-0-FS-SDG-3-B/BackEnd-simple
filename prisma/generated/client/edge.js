
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Caregiver_educationScalarFieldEnum = {
  id: 'id',
  education_desc: 'education_desc'
};

exports.Prisma.CaregiversScalarFieldEnum = {
  caregiver_id: 'caregiver_id',
  created_at: 'created_at',
  education_id: 'education_id',
  year_experience: 'year_experience'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  caregiver_id: 'caregiver_id',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Order_journey_statusScalarFieldEnum = {
  journey_status_id: 'journey_status_id',
  journey_desc: 'journey_desc'
};

exports.Prisma.Order_journeysScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  journey_status: 'journey_status',
  created_at: 'created_at'
};

exports.Prisma.Order_statusScalarFieldEnum = {
  order_status: 'order_status',
  order_status_desc: 'order_status_desc'
};

exports.Prisma.Order_to_servicesScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  service_id: 'service_id'
};

exports.Prisma.OrdersScalarFieldEnum = {
  order_id: 'order_id',
  caregiver_id: 'caregiver_id',
  user_id: 'user_id',
  order_status: 'order_status',
  received_timestamp: 'received_timestamp',
  date_start: 'date_start',
  date_end: 'date_end',
  price: 'price',
  address: 'address'
};

exports.Prisma.ReviewsScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  review: 'review',
  review_rating: 'review_rating',
  created_at: 'created_at'
};

exports.Prisma.Service_ratesScalarFieldEnum = {
  id: 'id',
  service_id: 'service_id',
  service_price: 'service_price',
  created_at: 'created_at'
};

exports.Prisma.ServicesScalarFieldEnum = {
  service_id: 'service_id',
  service_desc: 'service_desc'
};

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  caregiver_id: 'caregiver_id',
  birth_date: 'birth_date',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  password: 'password',
  address: 'address',
  phone_number: 'phone_number',
  profile_picture_url: 'profile_picture_url',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  caregiver_education: 'caregiver_education',
  caregivers: 'caregivers',
  events: 'events',
  order_journey_status: 'order_journey_status',
  order_journeys: 'order_journeys',
  order_status: 'order_status',
  order_to_services: 'order_to_services',
  orders: 'orders',
  reviews: 'reviews',
  service_rates: 'service_rates',
  services: 'services',
  users: 'users'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Wimar Abdurrachman\\BackEnd-simple\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBjYXJlZ2l2ZXJfZWR1Y2F0aW9uIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgZWR1Y2F0aW9uX2Rlc2MgU3RyaW5nIEBkYi5WYXJDaGFyKDY0KQp9Cgptb2RlbCBjYXJlZ2l2ZXJzIHsKICBjYXJlZ2l2ZXJfaWQgICAgU3RyaW5nICAgQGlkIEBkYi5WYXJDaGFyKDM2KQogIGNyZWF0ZWRfYXQgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcCg2KQogIGVkdWNhdGlvbl9pZCAgICBJbnQ/CiAgeWVhcl9leHBlcmllbmNlIEludD8KICBldmVudHMgICAgICAgICAgZXZlbnRzW10KICBvcmRlcnMgICAgICAgICAgb3JkZXJzW10KICB1c2VycyAgICAgICAgICAgdXNlcnM/Cn0KCm1vZGVsIGV2ZW50cyB7CiAgaWQgICAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQGRiLlVuc2lnbmVkSW50CiAgY2FyZWdpdmVyX2lkIFN0cmluZyAgICAgQGRiLlZhckNoYXIoMzYpCiAgc3RhcnRfZGF0ZSAgIERhdGVUaW1lICAgQGRiLkRhdGVUaW1lKDApCiAgZW5kX2RhdGUgICAgIERhdGVUaW1lICAgQGRiLkRhdGVUaW1lKDApCiAgY3JlYXRlZF9hdCAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoMCkKICBkZWxldGVkX2F0ICAgRGF0ZVRpbWU/ICBAZGIuVGltZXN0YW1wKDApCiAgY2FyZWdpdmVycyAgIGNhcmVnaXZlcnMgQHJlbGF0aW9uKGZpZWxkczogW2NhcmVnaXZlcl9pZF0sIHJlZmVyZW5jZXM6IFtjYXJlZ2l2ZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZXZlbnRzX2NhcmVnaXZlcl9pZF9mayIpCgogIEBAaW5kZXgoW2NhcmVnaXZlcl9pZF0sIG1hcDogImV2ZW50c19jYXJlZ2l2ZXJfaWRfZmsiKQp9Cgptb2RlbCBvcmRlcl9qb3VybmV5X3N0YXR1cyB7CiAgam91cm5leV9zdGF0dXNfaWQgSW50ICAgICAgICAgICAgICBAaWQKICBqb3VybmV5X2Rlc2MgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIG9yZGVyX2pvdXJuZXlzICAgIG9yZGVyX2pvdXJuZXlzW10KfQoKbW9kZWwgb3JkZXJfam91cm5leXMgewogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgb3JkZXJfaWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzYpCiAgam91cm5leV9zdGF0dXMgICAgICAgSW50CiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoNikKICBvcmRlcnMgICAgICAgICAgICAgICBvcmRlcnMgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbb3JkZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiRktfb3JkZXJfaWQiKQogIG9yZGVyX2pvdXJuZXlfc3RhdHVzIG9yZGVyX2pvdXJuZXlfc3RhdHVzIEByZWxhdGlvbihmaWVsZHM6IFtqb3VybmV5X3N0YXR1c10sIHJlZmVyZW5jZXM6IFtqb3VybmV5X3N0YXR1c19pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJGa19qb3VybmV5X3N0YXR1cyIpCgogIEBAaW5kZXgoW29yZGVyX2lkXSwgbWFwOiAiRktfb3JkZXJfaWQiKQogIEBAaW5kZXgoW2pvdXJuZXlfc3RhdHVzXSwgbWFwOiAiRmtfam91cm5leV9zdGF0dXMiKQp9Cgptb2RlbCBvcmRlcl9zdGF0dXMgewogIG9yZGVyX3N0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgQGlkCiAgb3JkZXJfc3RhdHVzX2Rlc2MgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigzMCkKICBvcmRlcnNfb3JkZXJzX29yZGVyX3N0YXR1c1Rvb3JkZXJfc3RhdHVzIG9yZGVyc1tdIEByZWxhdGlvbigib3JkZXJzX29yZGVyX3N0YXR1c1Rvb3JkZXJfc3RhdHVzIikKfQoKbW9kZWwgb3JkZXJfdG9fc2VydmljZXMgewogIGlkICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBvcmRlcl9pZCAgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDM2KQogIHNlcnZpY2VfaWQgSW50ICAgICAgQGRiLlVuc2lnbmVkSW50CiAgb3JkZXJzICAgICBvcmRlcnMgICBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJfaWRdLCByZWZlcmVuY2VzOiBbb3JkZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiRktfb3JkZXJfaWRfdG9fc2VydmljZXNfb3JkZXJfaWQiKQogIHNlcnZpY2VzICAgc2VydmljZXMgQHJlbGF0aW9uKGZpZWxkczogW3NlcnZpY2VfaWRdLCByZWZlcmVuY2VzOiBbc2VydmljZV9pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJGS19vcmRlcl9pZF90b19zZXJ2aWNlc19zZXJ2aWNlc19pZCIpCgogIEBAaW5kZXgoW29yZGVyX2lkXSwgbWFwOiAiRktfb3JkZXJfaWRfdG9fc2VydmljZXNfb3JkZXJfaWQiKQogIEBAaW5kZXgoW3NlcnZpY2VfaWRdLCBtYXA6ICJGS19vcmRlcl9pZF90b19zZXJ2aWNlc19zZXJ2aWNlc19pZCIpCn0KCm1vZGVsIG9yZGVycyB7CiAgb3JkZXJfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZCBAZGIuVmFyQ2hhcigzNikKICBjYXJlZ2l2ZXJfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzYpCiAgdXNlcl9pZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDM2KQogIG9yZGVyX3N0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50CiAgcmVjZWl2ZWRfdGltZXN0YW1wICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wKDYpCiAgZGF0ZV9zdGFydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkYi5EYXRlCiAgZGF0ZV9lbmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkYi5EYXRlCiAgcHJpY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbG9hdCAgICAgICAgICAgICAgIEBkYi5GbG9hdAogIGFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig1MCkKICBvcmRlcl9qb3VybmV5cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX2pvdXJuZXlzW10KICBvcmRlcl90b19zZXJ2aWNlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyX3RvX3NlcnZpY2VzW10KICB1c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbdXNlcl9pZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJvcmRlcnNfaWJma18xIikKICBjYXJlZ2l2ZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmVnaXZlcnMgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NhcmVnaXZlcl9pZF0sIHJlZmVyZW5jZXM6IFtjYXJlZ2l2ZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAib3JkZXJzX2liZmtfMiIpCiAgb3JkZXJfc3RhdHVzX29yZGVyc19vcmRlcl9zdGF0dXNUb29yZGVyX3N0YXR1cyBvcmRlcl9zdGF0dXMgICAgICAgIEByZWxhdGlvbigib3JkZXJzX29yZGVyX3N0YXR1c1Rvb3JkZXJfc3RhdHVzIiwgZmllbGRzOiBbb3JkZXJfc3RhdHVzXSwgcmVmZXJlbmNlczogW29yZGVyX3N0YXR1c10sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uLCBtYXA6ICJvcmRlcnNfaWJma180IikKCiAgQEBpbmRleChbY2FyZWdpdmVyX2lkXSwgbWFwOiAiY2FyZWdpdmVyX2lkIikKICBAQGluZGV4KFtvcmRlcl9zdGF0dXNdLCBtYXA6ICJvcmRlcl9zdGF0dXMiKQogIEBAaW5kZXgoW3VzZXJfaWRdLCBtYXA6ICJ1c2VyX2lkIikKfQoKbW9kZWwgcmV2aWV3cyB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBvcmRlcl9pZCAgICAgIFN0cmluZyAgICBAdW5pcXVlKG1hcDogInVxX3Jldmlld3Nfb3JkZXJfaWQiKSBAZGIuVmFyQ2hhcigzNikKICByZXZpZXcgICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcig1MTIpCiAgcmV2aWV3X3JhdGluZyBGbG9hdCAgICAgQGRiLkZsb2F0CiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXAoMCkKfQoKbW9kZWwgc2VydmljZV9yYXRlcyB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHNlcnZpY2VfaWQgICAgSW50ICAgICAgQGRiLlVuc2lnbmVkSW50CiAgc2VydmljZV9wcmljZSBGbG9hdCAgICBAZGIuRmxvYXQKICBjcmVhdGVkX2F0ICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wKDYpCiAgc2VydmljZXMgICAgICBzZXJ2aWNlcyBAcmVsYXRpb24oZmllbGRzOiBbc2VydmljZV9pZF0sIHJlZmVyZW5jZXM6IFtzZXJ2aWNlX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogInNlcnZpY2VfcmF0ZXNfaWJma18xIikKCiAgQEBpbmRleChbc2VydmljZV9pZF0sIG1hcDogInNlcnZpY2VfaWQiKQp9Cgptb2RlbCBzZXJ2aWNlcyB7CiAgc2VydmljZV9pZCAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRiLlVuc2lnbmVkSW50CiAgc2VydmljZV9kZXNjICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgb3JkZXJfdG9fc2VydmljZXMgb3JkZXJfdG9fc2VydmljZXNbXQogIHNlcnZpY2VfcmF0ZXMgICAgIHNlcnZpY2VfcmF0ZXNbXQp9Cgptb2RlbCB1c2VycyB7CiAgdXNlcl9pZCAgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRiLlZhckNoYXIoMzYpCiAgY2FyZWdpdmVyX2lkICAgICAgICBTdHJpbmc/ICAgICBAdW5pcXVlKG1hcDogIlVDX2NhcmVnaXZlcl9pZCIpIEBkYi5WYXJDaGFyKDM2KQogIGJpcnRoX2RhdGUgICAgICAgICAgRGF0ZVRpbWU/ICAgQGRiLkRhdGUKICBmaXJzdF9uYW1lICAgICAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDI1NSkKICBsYXN0X25hbWUgICAgICAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDI1NSkKICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDQwKQogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nICAgICAgQGRiLlZhckNoYXIoMTUpCiAgYWRkcmVzcyAgICAgICAgICAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgcGhvbmVfbnVtYmVyICAgICAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcigxMikKICBwcm9maWxlX3BpY3R1cmVfdXJsIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDEwMCkKICBjcmVhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wKDYpCiAgb3JkZXJzICAgICAgICAgICAgICBvcmRlcnNbXQogIGNhcmVnaXZlcnMgICAgICAgICAgY2FyZWdpdmVycz8gQHJlbGF0aW9uKGZpZWxkczogW2NhcmVnaXZlcl9pZF0sIHJlZmVyZW5jZXM6IFtjYXJlZ2l2ZXJfaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbiwgbWFwOiAiZmtfdXNlcnNfY2FyZWdpdmVycyIpCn0K",
  "inlineSchemaHash": "57a5b568792f9e33146d06f574580974bcf425d74b98d0acf14fd2ce414a20e4",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"caregiver_education\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"education_desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"caregivers\":{\"dbName\":null,\"fields\":[{\"name\":\"caregiver_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"education_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year_experience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"events\",\"relationName\":\"caregiversToevents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"relationName\":\"caregiversToorders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"caregiversTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"events\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregiver_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregivers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"caregivers\",\"relationName\":\"caregiversToevents\",\"relationFromFields\":[\"caregiver_id\"],\"relationToFields\":[\"caregiver_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_journey_status\":{\"dbName\":null,\"fields\":[{\"name\":\"journey_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"journey_desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_journeys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_journeys\",\"relationName\":\"order_journey_statusToorder_journeys\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_journeys\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"journey_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"relationName\":\"order_journeysToorders\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_journey_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_journey_status\",\"relationName\":\"order_journey_statusToorder_journeys\",\"relationFromFields\":[\"journey_status\"],\"relationToFields\":[\"journey_status_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_status\":{\"dbName\":null,\"fields\":[{\"name\":\"order_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_status_desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders_orders_order_statusToorder_status\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"relationName\":\"orders_order_statusToorder_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_to_services\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"relationName\":\"order_to_servicesToorders\",\"relationFromFields\":[\"order_id\"],\"relationToFields\":[\"order_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"services\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"services\",\"relationName\":\"order_to_servicesToservices\",\"relationFromFields\":[\"service_id\"],\"relationToFields\":[\"service_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"orders\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregiver_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"received_timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_journeys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_journeys\",\"relationName\":\"order_journeysToorders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_to_services\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_to_services\",\"relationName\":\"order_to_servicesToorders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"ordersTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregivers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"caregivers\",\"relationName\":\"caregiversToorders\",\"relationFromFields\":[\"caregiver_id\"],\"relationToFields\":[\"caregiver_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_status_orders_order_statusToorder_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_status\",\"relationName\":\"orders_order_statusToorder_status\",\"relationFromFields\":[\"order_status\"],\"relationToFields\":[\"order_status\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reviews\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"review\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"review_rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"service_rates\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"services\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"services\",\"relationName\":\"service_ratesToservices\",\"relationFromFields\":[\"service_id\"],\"relationToFields\":[\"service_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"services\":{\"dbName\":null,\"fields\":[{\"name\":\"service_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_to_services\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_to_services\",\"relationName\":\"order_to_servicesToservices\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_rates\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"service_rates\",\"relationName\":\"service_ratesToservices\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregiver_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birth_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_picture_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"relationName\":\"ordersTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caregivers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"caregivers\",\"relationName\":\"caregiversTousers\",\"relationFromFields\":[\"caregiver_id\"],\"relationToFields\":[\"caregiver_id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

