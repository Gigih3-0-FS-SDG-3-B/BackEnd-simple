
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
