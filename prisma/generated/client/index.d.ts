
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model caregiver_education
 * 
 */
export type caregiver_education = $Result.DefaultSelection<Prisma.$caregiver_educationPayload>
/**
 * Model caregivers
 * 
 */
export type caregivers = $Result.DefaultSelection<Prisma.$caregiversPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model order_journey_status
 * 
 */
export type order_journey_status = $Result.DefaultSelection<Prisma.$order_journey_statusPayload>
/**
 * Model order_journeys
 * 
 */
export type order_journeys = $Result.DefaultSelection<Prisma.$order_journeysPayload>
/**
 * Model order_status
 * 
 */
export type order_status = $Result.DefaultSelection<Prisma.$order_statusPayload>
/**
 * Model order_to_services
 * 
 */
export type order_to_services = $Result.DefaultSelection<Prisma.$order_to_servicesPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model service_rates
 * 
 */
export type service_rates = $Result.DefaultSelection<Prisma.$service_ratesPayload>
/**
 * Model services
 * 
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caregiver_educations
 * const caregiver_educations = await prisma.caregiver_education.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Caregiver_educations
   * const caregiver_educations = await prisma.caregiver_education.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.caregiver_education`: Exposes CRUD operations for the **caregiver_education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caregiver_educations
    * const caregiver_educations = await prisma.caregiver_education.findMany()
    * ```
    */
  get caregiver_education(): Prisma.caregiver_educationDelegate<ExtArgs>;

  /**
   * `prisma.caregivers`: Exposes CRUD operations for the **caregivers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caregivers
    * const caregivers = await prisma.caregivers.findMany()
    * ```
    */
  get caregivers(): Prisma.caregiversDelegate<ExtArgs>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs>;

  /**
   * `prisma.order_journey_status`: Exposes CRUD operations for the **order_journey_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_journey_statuses
    * const order_journey_statuses = await prisma.order_journey_status.findMany()
    * ```
    */
  get order_journey_status(): Prisma.order_journey_statusDelegate<ExtArgs>;

  /**
   * `prisma.order_journeys`: Exposes CRUD operations for the **order_journeys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_journeys
    * const order_journeys = await prisma.order_journeys.findMany()
    * ```
    */
  get order_journeys(): Prisma.order_journeysDelegate<ExtArgs>;

  /**
   * `prisma.order_status`: Exposes CRUD operations for the **order_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_statuses
    * const order_statuses = await prisma.order_status.findMany()
    * ```
    */
  get order_status(): Prisma.order_statusDelegate<ExtArgs>;

  /**
   * `prisma.order_to_services`: Exposes CRUD operations for the **order_to_services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_to_services
    * const order_to_services = await prisma.order_to_services.findMany()
    * ```
    */
  get order_to_services(): Prisma.order_to_servicesDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs>;

  /**
   * `prisma.service_rates`: Exposes CRUD operations for the **service_rates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Service_rates
    * const service_rates = await prisma.service_rates.findMany()
    * ```
    */
  get service_rates(): Prisma.service_ratesDelegate<ExtArgs>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'caregiver_education' | 'caregivers' | 'events' | 'order_journey_status' | 'order_journeys' | 'order_status' | 'order_to_services' | 'orders' | 'reviews' | 'service_rates' | 'services' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      caregiver_education: {
        payload: Prisma.$caregiver_educationPayload<ExtArgs>
        fields: Prisma.caregiver_educationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.caregiver_educationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.caregiver_educationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>
          }
          findFirst: {
            args: Prisma.caregiver_educationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.caregiver_educationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>
          }
          findMany: {
            args: Prisma.caregiver_educationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>[]
          }
          create: {
            args: Prisma.caregiver_educationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>
          }
          createMany: {
            args: Prisma.caregiver_educationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.caregiver_educationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>
          }
          update: {
            args: Prisma.caregiver_educationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>
          }
          deleteMany: {
            args: Prisma.caregiver_educationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.caregiver_educationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.caregiver_educationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiver_educationPayload>
          }
          aggregate: {
            args: Prisma.Caregiver_educationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCaregiver_education>
          }
          groupBy: {
            args: Prisma.caregiver_educationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Caregiver_educationGroupByOutputType>[]
          }
          count: {
            args: Prisma.caregiver_educationCountArgs<ExtArgs>,
            result: $Utils.Optional<Caregiver_educationCountAggregateOutputType> | number
          }
        }
      }
      caregivers: {
        payload: Prisma.$caregiversPayload<ExtArgs>
        fields: Prisma.caregiversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.caregiversFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.caregiversFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>
          }
          findFirst: {
            args: Prisma.caregiversFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.caregiversFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>
          }
          findMany: {
            args: Prisma.caregiversFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>[]
          }
          create: {
            args: Prisma.caregiversCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>
          }
          createMany: {
            args: Prisma.caregiversCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.caregiversDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>
          }
          update: {
            args: Prisma.caregiversUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>
          }
          deleteMany: {
            args: Prisma.caregiversDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.caregiversUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.caregiversUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$caregiversPayload>
          }
          aggregate: {
            args: Prisma.CaregiversAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCaregivers>
          }
          groupBy: {
            args: Prisma.caregiversGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CaregiversGroupByOutputType>[]
          }
          count: {
            args: Prisma.caregiversCountArgs<ExtArgs>,
            result: $Utils.Optional<CaregiversCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>,
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      order_journey_status: {
        payload: Prisma.$order_journey_statusPayload<ExtArgs>
        fields: Prisma.order_journey_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_journey_statusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_journey_statusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>
          }
          findFirst: {
            args: Prisma.order_journey_statusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_journey_statusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>
          }
          findMany: {
            args: Prisma.order_journey_statusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>[]
          }
          create: {
            args: Prisma.order_journey_statusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>
          }
          createMany: {
            args: Prisma.order_journey_statusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_journey_statusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>
          }
          update: {
            args: Prisma.order_journey_statusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>
          }
          deleteMany: {
            args: Prisma.order_journey_statusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_journey_statusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_journey_statusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journey_statusPayload>
          }
          aggregate: {
            args: Prisma.Order_journey_statusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_journey_status>
          }
          groupBy: {
            args: Prisma.order_journey_statusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_journey_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_journey_statusCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_journey_statusCountAggregateOutputType> | number
          }
        }
      }
      order_journeys: {
        payload: Prisma.$order_journeysPayload<ExtArgs>
        fields: Prisma.order_journeysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_journeysFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_journeysFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>
          }
          findFirst: {
            args: Prisma.order_journeysFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_journeysFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>
          }
          findMany: {
            args: Prisma.order_journeysFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>[]
          }
          create: {
            args: Prisma.order_journeysCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>
          }
          createMany: {
            args: Prisma.order_journeysCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_journeysDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>
          }
          update: {
            args: Prisma.order_journeysUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>
          }
          deleteMany: {
            args: Prisma.order_journeysDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_journeysUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_journeysUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_journeysPayload>
          }
          aggregate: {
            args: Prisma.Order_journeysAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_journeys>
          }
          groupBy: {
            args: Prisma.order_journeysGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_journeysGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_journeysCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_journeysCountAggregateOutputType> | number
          }
        }
      }
      order_status: {
        payload: Prisma.$order_statusPayload<ExtArgs>
        fields: Prisma.order_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_statusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_statusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>
          }
          findFirst: {
            args: Prisma.order_statusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_statusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>
          }
          findMany: {
            args: Prisma.order_statusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>[]
          }
          create: {
            args: Prisma.order_statusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>
          }
          createMany: {
            args: Prisma.order_statusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_statusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>
          }
          update: {
            args: Prisma.order_statusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>
          }
          deleteMany: {
            args: Prisma.order_statusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_statusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_statusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_statusPayload>
          }
          aggregate: {
            args: Prisma.Order_statusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_status>
          }
          groupBy: {
            args: Prisma.order_statusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_statusCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_statusCountAggregateOutputType> | number
          }
        }
      }
      order_to_services: {
        payload: Prisma.$order_to_servicesPayload<ExtArgs>
        fields: Prisma.order_to_servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_to_servicesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_to_servicesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>
          }
          findFirst: {
            args: Prisma.order_to_servicesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_to_servicesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>
          }
          findMany: {
            args: Prisma.order_to_servicesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>[]
          }
          create: {
            args: Prisma.order_to_servicesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>
          }
          createMany: {
            args: Prisma.order_to_servicesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_to_servicesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>
          }
          update: {
            args: Prisma.order_to_servicesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>
          }
          deleteMany: {
            args: Prisma.order_to_servicesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_to_servicesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_to_servicesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_to_servicesPayload>
          }
          aggregate: {
            args: Prisma.Order_to_servicesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_to_services>
          }
          groupBy: {
            args: Prisma.order_to_servicesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_to_servicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_to_servicesCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_to_servicesCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      service_rates: {
        payload: Prisma.$service_ratesPayload<ExtArgs>
        fields: Prisma.service_ratesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.service_ratesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.service_ratesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>
          }
          findFirst: {
            args: Prisma.service_ratesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.service_ratesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>
          }
          findMany: {
            args: Prisma.service_ratesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>[]
          }
          create: {
            args: Prisma.service_ratesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>
          }
          createMany: {
            args: Prisma.service_ratesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.service_ratesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>
          }
          update: {
            args: Prisma.service_ratesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>
          }
          deleteMany: {
            args: Prisma.service_ratesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.service_ratesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.service_ratesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$service_ratesPayload>
          }
          aggregate: {
            args: Prisma.Service_ratesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateService_rates>
          }
          groupBy: {
            args: Prisma.service_ratesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Service_ratesGroupByOutputType>[]
          }
          count: {
            args: Prisma.service_ratesCountArgs<ExtArgs>,
            result: $Utils.Optional<Service_ratesCountAggregateOutputType> | number
          }
        }
      }
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>,
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CaregiversCountOutputType
   */

  export type CaregiversCountOutputType = {
    events: number
    orders: number
  }

  export type CaregiversCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CaregiversCountOutputTypeCountEventsArgs
    orders?: boolean | CaregiversCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * CaregiversCountOutputType without action
   */
  export type CaregiversCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiversCountOutputType
     */
    select?: CaregiversCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CaregiversCountOutputType without action
   */
  export type CaregiversCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }


  /**
   * CaregiversCountOutputType without action
   */
  export type CaregiversCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }



  /**
   * Count Type Order_journey_statusCountOutputType
   */

  export type Order_journey_statusCountOutputType = {
    order_journeys: number
  }

  export type Order_journey_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_journeys?: boolean | Order_journey_statusCountOutputTypeCountOrder_journeysArgs
  }

  // Custom InputTypes

  /**
   * Order_journey_statusCountOutputType without action
   */
  export type Order_journey_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_journey_statusCountOutputType
     */
    select?: Order_journey_statusCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Order_journey_statusCountOutputType without action
   */
  export type Order_journey_statusCountOutputTypeCountOrder_journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_journeysWhereInput
  }



  /**
   * Count Type Order_statusCountOutputType
   */

  export type Order_statusCountOutputType = {
    orders_orders_order_statusToorder_status: number
  }

  export type Order_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders_orders_order_statusToorder_status?: boolean | Order_statusCountOutputTypeCountOrders_orders_order_statusToorder_statusArgs
  }

  // Custom InputTypes

  /**
   * Order_statusCountOutputType without action
   */
  export type Order_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_statusCountOutputType
     */
    select?: Order_statusCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Order_statusCountOutputType without action
   */
  export type Order_statusCountOutputTypeCountOrders_orders_order_statusToorder_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }



  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_journeys: number
    order_to_services: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_journeys?: boolean | OrdersCountOutputTypeCountOrder_journeysArgs
    order_to_services?: boolean | OrdersCountOutputTypeCountOrder_to_servicesArgs
  }

  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_journeysWhereInput
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_to_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_to_servicesWhereInput
  }



  /**
   * Count Type ServicesCountOutputType
   */

  export type ServicesCountOutputType = {
    order_to_services: number
    service_rates: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_to_services?: boolean | ServicesCountOutputTypeCountOrder_to_servicesArgs
    service_rates?: boolean | ServicesCountOutputTypeCountService_ratesArgs
  }

  // Custom InputTypes

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesCountOutputType
     */
    select?: ServicesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountOrder_to_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_to_servicesWhereInput
  }


  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountService_ratesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: service_ratesWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }



  /**
   * Models
   */

  /**
   * Model caregiver_education
   */

  export type AggregateCaregiver_education = {
    _count: Caregiver_educationCountAggregateOutputType | null
    _avg: Caregiver_educationAvgAggregateOutputType | null
    _sum: Caregiver_educationSumAggregateOutputType | null
    _min: Caregiver_educationMinAggregateOutputType | null
    _max: Caregiver_educationMaxAggregateOutputType | null
  }

  export type Caregiver_educationAvgAggregateOutputType = {
    id: number | null
  }

  export type Caregiver_educationSumAggregateOutputType = {
    id: number | null
  }

  export type Caregiver_educationMinAggregateOutputType = {
    id: number | null
    education_desc: string | null
  }

  export type Caregiver_educationMaxAggregateOutputType = {
    id: number | null
    education_desc: string | null
  }

  export type Caregiver_educationCountAggregateOutputType = {
    id: number
    education_desc: number
    _all: number
  }


  export type Caregiver_educationAvgAggregateInputType = {
    id?: true
  }

  export type Caregiver_educationSumAggregateInputType = {
    id?: true
  }

  export type Caregiver_educationMinAggregateInputType = {
    id?: true
    education_desc?: true
  }

  export type Caregiver_educationMaxAggregateInputType = {
    id?: true
    education_desc?: true
  }

  export type Caregiver_educationCountAggregateInputType = {
    id?: true
    education_desc?: true
    _all?: true
  }

  export type Caregiver_educationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caregiver_education to aggregate.
     */
    where?: caregiver_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregiver_educations to fetch.
     */
    orderBy?: caregiver_educationOrderByWithRelationInput | caregiver_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: caregiver_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregiver_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregiver_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caregiver_educations
    **/
    _count?: true | Caregiver_educationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Caregiver_educationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Caregiver_educationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Caregiver_educationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Caregiver_educationMaxAggregateInputType
  }

  export type GetCaregiver_educationAggregateType<T extends Caregiver_educationAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiver_education]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiver_education[P]>
      : GetScalarType<T[P], AggregateCaregiver_education[P]>
  }




  export type caregiver_educationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caregiver_educationWhereInput
    orderBy?: caregiver_educationOrderByWithAggregationInput | caregiver_educationOrderByWithAggregationInput[]
    by: Caregiver_educationScalarFieldEnum[] | Caregiver_educationScalarFieldEnum
    having?: caregiver_educationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Caregiver_educationCountAggregateInputType | true
    _avg?: Caregiver_educationAvgAggregateInputType
    _sum?: Caregiver_educationSumAggregateInputType
    _min?: Caregiver_educationMinAggregateInputType
    _max?: Caregiver_educationMaxAggregateInputType
  }

  export type Caregiver_educationGroupByOutputType = {
    id: number
    education_desc: string
    _count: Caregiver_educationCountAggregateOutputType | null
    _avg: Caregiver_educationAvgAggregateOutputType | null
    _sum: Caregiver_educationSumAggregateOutputType | null
    _min: Caregiver_educationMinAggregateOutputType | null
    _max: Caregiver_educationMaxAggregateOutputType | null
  }

  type GetCaregiver_educationGroupByPayload<T extends caregiver_educationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Caregiver_educationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Caregiver_educationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Caregiver_educationGroupByOutputType[P]>
            : GetScalarType<T[P], Caregiver_educationGroupByOutputType[P]>
        }
      >
    >


  export type caregiver_educationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    education_desc?: boolean
  }, ExtArgs["result"]["caregiver_education"]>

  export type caregiver_educationSelectScalar = {
    id?: boolean
    education_desc?: boolean
  }


  export type $caregiver_educationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caregiver_education"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      education_desc: string
    }, ExtArgs["result"]["caregiver_education"]>
    composites: {}
  }


  type caregiver_educationGetPayload<S extends boolean | null | undefined | caregiver_educationDefaultArgs> = $Result.GetResult<Prisma.$caregiver_educationPayload, S>

  type caregiver_educationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<caregiver_educationFindManyArgs, 'select' | 'include'> & {
      select?: Caregiver_educationCountAggregateInputType | true
    }

  export interface caregiver_educationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caregiver_education'], meta: { name: 'caregiver_education' } }
    /**
     * Find zero or one Caregiver_education that matches the filter.
     * @param {caregiver_educationFindUniqueArgs} args - Arguments to find a Caregiver_education
     * @example
     * // Get one Caregiver_education
     * const caregiver_education = await prisma.caregiver_education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends caregiver_educationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, caregiver_educationFindUniqueArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Caregiver_education that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {caregiver_educationFindUniqueOrThrowArgs} args - Arguments to find a Caregiver_education
     * @example
     * // Get one Caregiver_education
     * const caregiver_education = await prisma.caregiver_education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends caregiver_educationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiver_educationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Caregiver_education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiver_educationFindFirstArgs} args - Arguments to find a Caregiver_education
     * @example
     * // Get one Caregiver_education
     * const caregiver_education = await prisma.caregiver_education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends caregiver_educationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiver_educationFindFirstArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Caregiver_education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiver_educationFindFirstOrThrowArgs} args - Arguments to find a Caregiver_education
     * @example
     * // Get one Caregiver_education
     * const caregiver_education = await prisma.caregiver_education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends caregiver_educationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiver_educationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Caregiver_educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiver_educationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caregiver_educations
     * const caregiver_educations = await prisma.caregiver_education.findMany()
     * 
     * // Get first 10 Caregiver_educations
     * const caregiver_educations = await prisma.caregiver_education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caregiver_educationWithIdOnly = await prisma.caregiver_education.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends caregiver_educationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiver_educationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Caregiver_education.
     * @param {caregiver_educationCreateArgs} args - Arguments to create a Caregiver_education.
     * @example
     * // Create one Caregiver_education
     * const Caregiver_education = await prisma.caregiver_education.create({
     *   data: {
     *     // ... data to create a Caregiver_education
     *   }
     * })
     * 
    **/
    create<T extends caregiver_educationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, caregiver_educationCreateArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Caregiver_educations.
     *     @param {caregiver_educationCreateManyArgs} args - Arguments to create many Caregiver_educations.
     *     @example
     *     // Create many Caregiver_educations
     *     const caregiver_education = await prisma.caregiver_education.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends caregiver_educationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiver_educationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caregiver_education.
     * @param {caregiver_educationDeleteArgs} args - Arguments to delete one Caregiver_education.
     * @example
     * // Delete one Caregiver_education
     * const Caregiver_education = await prisma.caregiver_education.delete({
     *   where: {
     *     // ... filter to delete one Caregiver_education
     *   }
     * })
     * 
    **/
    delete<T extends caregiver_educationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, caregiver_educationDeleteArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Caregiver_education.
     * @param {caregiver_educationUpdateArgs} args - Arguments to update one Caregiver_education.
     * @example
     * // Update one Caregiver_education
     * const caregiver_education = await prisma.caregiver_education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends caregiver_educationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, caregiver_educationUpdateArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Caregiver_educations.
     * @param {caregiver_educationDeleteManyArgs} args - Arguments to filter Caregiver_educations to delete.
     * @example
     * // Delete a few Caregiver_educations
     * const { count } = await prisma.caregiver_education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends caregiver_educationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiver_educationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregiver_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiver_educationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caregiver_educations
     * const caregiver_education = await prisma.caregiver_education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends caregiver_educationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, caregiver_educationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caregiver_education.
     * @param {caregiver_educationUpsertArgs} args - Arguments to update or create a Caregiver_education.
     * @example
     * // Update or create a Caregiver_education
     * const caregiver_education = await prisma.caregiver_education.upsert({
     *   create: {
     *     // ... data to create a Caregiver_education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caregiver_education we want to update
     *   }
     * })
    **/
    upsert<T extends caregiver_educationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, caregiver_educationUpsertArgs<ExtArgs>>
    ): Prisma__caregiver_educationClient<$Result.GetResult<Prisma.$caregiver_educationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Caregiver_educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiver_educationCountArgs} args - Arguments to filter Caregiver_educations to count.
     * @example
     * // Count the number of Caregiver_educations
     * const count = await prisma.caregiver_education.count({
     *   where: {
     *     // ... the filter for the Caregiver_educations we want to count
     *   }
     * })
    **/
    count<T extends caregiver_educationCountArgs>(
      args?: Subset<T, caregiver_educationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Caregiver_educationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caregiver_education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Caregiver_educationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Caregiver_educationAggregateArgs>(args: Subset<T, Caregiver_educationAggregateArgs>): Prisma.PrismaPromise<GetCaregiver_educationAggregateType<T>>

    /**
     * Group by Caregiver_education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiver_educationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends caregiver_educationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: caregiver_educationGroupByArgs['orderBy'] }
        : { orderBy?: caregiver_educationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, caregiver_educationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiver_educationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caregiver_education model
   */
  readonly fields: caregiver_educationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caregiver_education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__caregiver_educationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the caregiver_education model
   */ 
  interface caregiver_educationFieldRefs {
    readonly id: FieldRef<"caregiver_education", 'Int'>
    readonly education_desc: FieldRef<"caregiver_education", 'String'>
  }
    

  // Custom InputTypes

  /**
   * caregiver_education findUnique
   */
  export type caregiver_educationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * Filter, which caregiver_education to fetch.
     */
    where: caregiver_educationWhereUniqueInput
  }


  /**
   * caregiver_education findUniqueOrThrow
   */
  export type caregiver_educationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * Filter, which caregiver_education to fetch.
     */
    where: caregiver_educationWhereUniqueInput
  }


  /**
   * caregiver_education findFirst
   */
  export type caregiver_educationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * Filter, which caregiver_education to fetch.
     */
    where?: caregiver_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregiver_educations to fetch.
     */
    orderBy?: caregiver_educationOrderByWithRelationInput | caregiver_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caregiver_educations.
     */
    cursor?: caregiver_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregiver_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregiver_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caregiver_educations.
     */
    distinct?: Caregiver_educationScalarFieldEnum | Caregiver_educationScalarFieldEnum[]
  }


  /**
   * caregiver_education findFirstOrThrow
   */
  export type caregiver_educationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * Filter, which caregiver_education to fetch.
     */
    where?: caregiver_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregiver_educations to fetch.
     */
    orderBy?: caregiver_educationOrderByWithRelationInput | caregiver_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caregiver_educations.
     */
    cursor?: caregiver_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregiver_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregiver_educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caregiver_educations.
     */
    distinct?: Caregiver_educationScalarFieldEnum | Caregiver_educationScalarFieldEnum[]
  }


  /**
   * caregiver_education findMany
   */
  export type caregiver_educationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * Filter, which caregiver_educations to fetch.
     */
    where?: caregiver_educationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregiver_educations to fetch.
     */
    orderBy?: caregiver_educationOrderByWithRelationInput | caregiver_educationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caregiver_educations.
     */
    cursor?: caregiver_educationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregiver_educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregiver_educations.
     */
    skip?: number
    distinct?: Caregiver_educationScalarFieldEnum | Caregiver_educationScalarFieldEnum[]
  }


  /**
   * caregiver_education create
   */
  export type caregiver_educationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * The data needed to create a caregiver_education.
     */
    data: XOR<caregiver_educationCreateInput, caregiver_educationUncheckedCreateInput>
  }


  /**
   * caregiver_education createMany
   */
  export type caregiver_educationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caregiver_educations.
     */
    data: caregiver_educationCreateManyInput | caregiver_educationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * caregiver_education update
   */
  export type caregiver_educationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * The data needed to update a caregiver_education.
     */
    data: XOR<caregiver_educationUpdateInput, caregiver_educationUncheckedUpdateInput>
    /**
     * Choose, which caregiver_education to update.
     */
    where: caregiver_educationWhereUniqueInput
  }


  /**
   * caregiver_education updateMany
   */
  export type caregiver_educationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caregiver_educations.
     */
    data: XOR<caregiver_educationUpdateManyMutationInput, caregiver_educationUncheckedUpdateManyInput>
    /**
     * Filter which caregiver_educations to update
     */
    where?: caregiver_educationWhereInput
  }


  /**
   * caregiver_education upsert
   */
  export type caregiver_educationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * The filter to search for the caregiver_education to update in case it exists.
     */
    where: caregiver_educationWhereUniqueInput
    /**
     * In case the caregiver_education found by the `where` argument doesn't exist, create a new caregiver_education with this data.
     */
    create: XOR<caregiver_educationCreateInput, caregiver_educationUncheckedCreateInput>
    /**
     * In case the caregiver_education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<caregiver_educationUpdateInput, caregiver_educationUncheckedUpdateInput>
  }


  /**
   * caregiver_education delete
   */
  export type caregiver_educationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
    /**
     * Filter which caregiver_education to delete.
     */
    where: caregiver_educationWhereUniqueInput
  }


  /**
   * caregiver_education deleteMany
   */
  export type caregiver_educationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caregiver_educations to delete
     */
    where?: caregiver_educationWhereInput
  }


  /**
   * caregiver_education without action
   */
  export type caregiver_educationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregiver_education
     */
    select?: caregiver_educationSelect<ExtArgs> | null
  }



  /**
   * Model caregivers
   */

  export type AggregateCaregivers = {
    _count: CaregiversCountAggregateOutputType | null
    _avg: CaregiversAvgAggregateOutputType | null
    _sum: CaregiversSumAggregateOutputType | null
    _min: CaregiversMinAggregateOutputType | null
    _max: CaregiversMaxAggregateOutputType | null
  }

  export type CaregiversAvgAggregateOutputType = {
    education_id: number | null
    year_experience: number | null
  }

  export type CaregiversSumAggregateOutputType = {
    education_id: number | null
    year_experience: number | null
  }

  export type CaregiversMinAggregateOutputType = {
    caregiver_id: string | null
    created_at: Date | null
    education_id: number | null
    year_experience: number | null
  }

  export type CaregiversMaxAggregateOutputType = {
    caregiver_id: string | null
    created_at: Date | null
    education_id: number | null
    year_experience: number | null
  }

  export type CaregiversCountAggregateOutputType = {
    caregiver_id: number
    created_at: number
    education_id: number
    year_experience: number
    _all: number
  }


  export type CaregiversAvgAggregateInputType = {
    education_id?: true
    year_experience?: true
  }

  export type CaregiversSumAggregateInputType = {
    education_id?: true
    year_experience?: true
  }

  export type CaregiversMinAggregateInputType = {
    caregiver_id?: true
    created_at?: true
    education_id?: true
    year_experience?: true
  }

  export type CaregiversMaxAggregateInputType = {
    caregiver_id?: true
    created_at?: true
    education_id?: true
    year_experience?: true
  }

  export type CaregiversCountAggregateInputType = {
    caregiver_id?: true
    created_at?: true
    education_id?: true
    year_experience?: true
    _all?: true
  }

  export type CaregiversAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caregivers to aggregate.
     */
    where?: caregiversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregivers to fetch.
     */
    orderBy?: caregiversOrderByWithRelationInput | caregiversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: caregiversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caregivers
    **/
    _count?: true | CaregiversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaregiversAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaregiversSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiversMaxAggregateInputType
  }

  export type GetCaregiversAggregateType<T extends CaregiversAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregivers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregivers[P]>
      : GetScalarType<T[P], AggregateCaregivers[P]>
  }




  export type caregiversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caregiversWhereInput
    orderBy?: caregiversOrderByWithAggregationInput | caregiversOrderByWithAggregationInput[]
    by: CaregiversScalarFieldEnum[] | CaregiversScalarFieldEnum
    having?: caregiversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiversCountAggregateInputType | true
    _avg?: CaregiversAvgAggregateInputType
    _sum?: CaregiversSumAggregateInputType
    _min?: CaregiversMinAggregateInputType
    _max?: CaregiversMaxAggregateInputType
  }

  export type CaregiversGroupByOutputType = {
    caregiver_id: string
    created_at: Date
    education_id: number | null
    year_experience: number | null
    _count: CaregiversCountAggregateOutputType | null
    _avg: CaregiversAvgAggregateOutputType | null
    _sum: CaregiversSumAggregateOutputType | null
    _min: CaregiversMinAggregateOutputType | null
    _max: CaregiversMaxAggregateOutputType | null
  }

  type GetCaregiversGroupByPayload<T extends caregiversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaregiversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiversGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiversGroupByOutputType[P]>
        }
      >
    >


  export type caregiversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    caregiver_id?: boolean
    created_at?: boolean
    education_id?: boolean
    year_experience?: boolean
    events?: boolean | caregivers$eventsArgs<ExtArgs>
    orders?: boolean | caregivers$ordersArgs<ExtArgs>
    users?: boolean | caregivers$usersArgs<ExtArgs>
    _count?: boolean | CaregiversCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregivers"]>

  export type caregiversSelectScalar = {
    caregiver_id?: boolean
    created_at?: boolean
    education_id?: boolean
    year_experience?: boolean
  }

  export type caregiversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | caregivers$eventsArgs<ExtArgs>
    orders?: boolean | caregivers$ordersArgs<ExtArgs>
    users?: boolean | caregivers$usersArgs<ExtArgs>
    _count?: boolean | CaregiversCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $caregiversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caregivers"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      caregiver_id: string
      created_at: Date
      education_id: number | null
      year_experience: number | null
    }, ExtArgs["result"]["caregivers"]>
    composites: {}
  }


  type caregiversGetPayload<S extends boolean | null | undefined | caregiversDefaultArgs> = $Result.GetResult<Prisma.$caregiversPayload, S>

  type caregiversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<caregiversFindManyArgs, 'select' | 'include'> & {
      select?: CaregiversCountAggregateInputType | true
    }

  export interface caregiversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caregivers'], meta: { name: 'caregivers' } }
    /**
     * Find zero or one Caregivers that matches the filter.
     * @param {caregiversFindUniqueArgs} args - Arguments to find a Caregivers
     * @example
     * // Get one Caregivers
     * const caregivers = await prisma.caregivers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends caregiversFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, caregiversFindUniqueArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Caregivers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {caregiversFindUniqueOrThrowArgs} args - Arguments to find a Caregivers
     * @example
     * // Get one Caregivers
     * const caregivers = await prisma.caregivers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends caregiversFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiversFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Caregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiversFindFirstArgs} args - Arguments to find a Caregivers
     * @example
     * // Get one Caregivers
     * const caregivers = await prisma.caregivers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends caregiversFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiversFindFirstArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Caregivers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiversFindFirstOrThrowArgs} args - Arguments to find a Caregivers
     * @example
     * // Get one Caregivers
     * const caregivers = await prisma.caregivers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends caregiversFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiversFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Caregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiversFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caregivers
     * const caregivers = await prisma.caregivers.findMany()
     * 
     * // Get first 10 Caregivers
     * const caregivers = await prisma.caregivers.findMany({ take: 10 })
     * 
     * // Only select the `caregiver_id`
     * const caregiversWithCaregiver_idOnly = await prisma.caregivers.findMany({ select: { caregiver_id: true } })
     * 
    **/
    findMany<T extends caregiversFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiversFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Caregivers.
     * @param {caregiversCreateArgs} args - Arguments to create a Caregivers.
     * @example
     * // Create one Caregivers
     * const Caregivers = await prisma.caregivers.create({
     *   data: {
     *     // ... data to create a Caregivers
     *   }
     * })
     * 
    **/
    create<T extends caregiversCreateArgs<ExtArgs>>(
      args: SelectSubset<T, caregiversCreateArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Caregivers.
     *     @param {caregiversCreateManyArgs} args - Arguments to create many Caregivers.
     *     @example
     *     // Create many Caregivers
     *     const caregivers = await prisma.caregivers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends caregiversCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiversCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caregivers.
     * @param {caregiversDeleteArgs} args - Arguments to delete one Caregivers.
     * @example
     * // Delete one Caregivers
     * const Caregivers = await prisma.caregivers.delete({
     *   where: {
     *     // ... filter to delete one Caregivers
     *   }
     * })
     * 
    **/
    delete<T extends caregiversDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, caregiversDeleteArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Caregivers.
     * @param {caregiversUpdateArgs} args - Arguments to update one Caregivers.
     * @example
     * // Update one Caregivers
     * const caregivers = await prisma.caregivers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends caregiversUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, caregiversUpdateArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Caregivers.
     * @param {caregiversDeleteManyArgs} args - Arguments to filter Caregivers to delete.
     * @example
     * // Delete a few Caregivers
     * const { count } = await prisma.caregivers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends caregiversDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, caregiversDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caregivers
     * const caregivers = await prisma.caregivers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends caregiversUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, caregiversUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caregivers.
     * @param {caregiversUpsertArgs} args - Arguments to update or create a Caregivers.
     * @example
     * // Update or create a Caregivers
     * const caregivers = await prisma.caregivers.upsert({
     *   create: {
     *     // ... data to create a Caregivers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caregivers we want to update
     *   }
     * })
    **/
    upsert<T extends caregiversUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, caregiversUpsertArgs<ExtArgs>>
    ): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiversCountArgs} args - Arguments to filter Caregivers to count.
     * @example
     * // Count the number of Caregivers
     * const count = await prisma.caregivers.count({
     *   where: {
     *     // ... the filter for the Caregivers we want to count
     *   }
     * })
    **/
    count<T extends caregiversCountArgs>(
      args?: Subset<T, caregiversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaregiversAggregateArgs>(args: Subset<T, CaregiversAggregateArgs>): Prisma.PrismaPromise<GetCaregiversAggregateType<T>>

    /**
     * Group by Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caregiversGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends caregiversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: caregiversGroupByArgs['orderBy'] }
        : { orderBy?: caregiversGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, caregiversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiversGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caregivers model
   */
  readonly fields: caregiversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caregivers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__caregiversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    events<T extends caregivers$eventsArgs<ExtArgs> = {}>(args?: Subset<T, caregivers$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends caregivers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, caregivers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends caregivers$usersArgs<ExtArgs> = {}>(args?: Subset<T, caregivers$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the caregivers model
   */ 
  interface caregiversFieldRefs {
    readonly caregiver_id: FieldRef<"caregivers", 'String'>
    readonly created_at: FieldRef<"caregivers", 'DateTime'>
    readonly education_id: FieldRef<"caregivers", 'Int'>
    readonly year_experience: FieldRef<"caregivers", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * caregivers findUnique
   */
  export type caregiversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * Filter, which caregivers to fetch.
     */
    where: caregiversWhereUniqueInput
  }


  /**
   * caregivers findUniqueOrThrow
   */
  export type caregiversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * Filter, which caregivers to fetch.
     */
    where: caregiversWhereUniqueInput
  }


  /**
   * caregivers findFirst
   */
  export type caregiversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * Filter, which caregivers to fetch.
     */
    where?: caregiversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregivers to fetch.
     */
    orderBy?: caregiversOrderByWithRelationInput | caregiversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caregivers.
     */
    cursor?: caregiversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caregivers.
     */
    distinct?: CaregiversScalarFieldEnum | CaregiversScalarFieldEnum[]
  }


  /**
   * caregivers findFirstOrThrow
   */
  export type caregiversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * Filter, which caregivers to fetch.
     */
    where?: caregiversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregivers to fetch.
     */
    orderBy?: caregiversOrderByWithRelationInput | caregiversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caregivers.
     */
    cursor?: caregiversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caregivers.
     */
    distinct?: CaregiversScalarFieldEnum | CaregiversScalarFieldEnum[]
  }


  /**
   * caregivers findMany
   */
  export type caregiversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * Filter, which caregivers to fetch.
     */
    where?: caregiversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caregivers to fetch.
     */
    orderBy?: caregiversOrderByWithRelationInput | caregiversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caregivers.
     */
    cursor?: caregiversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caregivers.
     */
    skip?: number
    distinct?: CaregiversScalarFieldEnum | CaregiversScalarFieldEnum[]
  }


  /**
   * caregivers create
   */
  export type caregiversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * The data needed to create a caregivers.
     */
    data: XOR<caregiversCreateInput, caregiversUncheckedCreateInput>
  }


  /**
   * caregivers createMany
   */
  export type caregiversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caregivers.
     */
    data: caregiversCreateManyInput | caregiversCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * caregivers update
   */
  export type caregiversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * The data needed to update a caregivers.
     */
    data: XOR<caregiversUpdateInput, caregiversUncheckedUpdateInput>
    /**
     * Choose, which caregivers to update.
     */
    where: caregiversWhereUniqueInput
  }


  /**
   * caregivers updateMany
   */
  export type caregiversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caregivers.
     */
    data: XOR<caregiversUpdateManyMutationInput, caregiversUncheckedUpdateManyInput>
    /**
     * Filter which caregivers to update
     */
    where?: caregiversWhereInput
  }


  /**
   * caregivers upsert
   */
  export type caregiversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * The filter to search for the caregivers to update in case it exists.
     */
    where: caregiversWhereUniqueInput
    /**
     * In case the caregivers found by the `where` argument doesn't exist, create a new caregivers with this data.
     */
    create: XOR<caregiversCreateInput, caregiversUncheckedCreateInput>
    /**
     * In case the caregivers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<caregiversUpdateInput, caregiversUncheckedUpdateInput>
  }


  /**
   * caregivers delete
   */
  export type caregiversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    /**
     * Filter which caregivers to delete.
     */
    where: caregiversWhereUniqueInput
  }


  /**
   * caregivers deleteMany
   */
  export type caregiversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caregivers to delete
     */
    where?: caregiversWhereInput
  }


  /**
   * caregivers.events
   */
  export type caregivers$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * caregivers.orders
   */
  export type caregivers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * caregivers.users
   */
  export type caregivers$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * caregivers without action
   */
  export type caregiversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
  }



  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    caregiver_id: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    caregiver_id: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    caregiver_id: number
    start_date: number
    end_date: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    caregiver_id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    deleted_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    caregiver_id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    deleted_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    caregiver_id?: true
    start_date?: true
    end_date?: true
    created_at?: true
    deleted_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    caregiver_id: string
    start_date: Date
    end_date: Date
    created_at: Date
    deleted_at: Date | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiver_id?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    deleted_at?: boolean
    caregivers?: boolean | caregiversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    caregiver_id?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }

  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregivers?: boolean | caregiversDefaultArgs<ExtArgs>
  }


  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      caregivers: Prisma.$caregiversPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caregiver_id: string
      start_date: Date
      end_date: Date
      created_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }


  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<eventsFindManyArgs, 'select' | 'include'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends eventsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends eventsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends eventsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends eventsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, eventsCreateArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Events.
     *     @param {eventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends eventsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends eventsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends eventsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends eventsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends eventsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends eventsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>
    ): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    caregivers<T extends caregiversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, caregiversDefaultArgs<ExtArgs>>): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the events model
   */ 
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly caregiver_id: FieldRef<"events", 'String'>
    readonly start_date: FieldRef<"events", 'DateTime'>
    readonly end_date: FieldRef<"events", 'DateTime'>
    readonly created_at: FieldRef<"events", 'DateTime'>
    readonly deleted_at: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }


  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }


  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
  }


  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }


  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }


  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
  }


  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: eventsInclude<ExtArgs> | null
  }



  /**
   * Model order_journey_status
   */

  export type AggregateOrder_journey_status = {
    _count: Order_journey_statusCountAggregateOutputType | null
    _avg: Order_journey_statusAvgAggregateOutputType | null
    _sum: Order_journey_statusSumAggregateOutputType | null
    _min: Order_journey_statusMinAggregateOutputType | null
    _max: Order_journey_statusMaxAggregateOutputType | null
  }

  export type Order_journey_statusAvgAggregateOutputType = {
    journey_status_id: number | null
  }

  export type Order_journey_statusSumAggregateOutputType = {
    journey_status_id: number | null
  }

  export type Order_journey_statusMinAggregateOutputType = {
    journey_status_id: number | null
    journey_desc: string | null
  }

  export type Order_journey_statusMaxAggregateOutputType = {
    journey_status_id: number | null
    journey_desc: string | null
  }

  export type Order_journey_statusCountAggregateOutputType = {
    journey_status_id: number
    journey_desc: number
    _all: number
  }


  export type Order_journey_statusAvgAggregateInputType = {
    journey_status_id?: true
  }

  export type Order_journey_statusSumAggregateInputType = {
    journey_status_id?: true
  }

  export type Order_journey_statusMinAggregateInputType = {
    journey_status_id?: true
    journey_desc?: true
  }

  export type Order_journey_statusMaxAggregateInputType = {
    journey_status_id?: true
    journey_desc?: true
  }

  export type Order_journey_statusCountAggregateInputType = {
    journey_status_id?: true
    journey_desc?: true
    _all?: true
  }

  export type Order_journey_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_journey_status to aggregate.
     */
    where?: order_journey_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journey_statuses to fetch.
     */
    orderBy?: order_journey_statusOrderByWithRelationInput | order_journey_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_journey_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journey_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journey_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_journey_statuses
    **/
    _count?: true | Order_journey_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_journey_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_journey_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_journey_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_journey_statusMaxAggregateInputType
  }

  export type GetOrder_journey_statusAggregateType<T extends Order_journey_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_journey_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_journey_status[P]>
      : GetScalarType<T[P], AggregateOrder_journey_status[P]>
  }




  export type order_journey_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_journey_statusWhereInput
    orderBy?: order_journey_statusOrderByWithAggregationInput | order_journey_statusOrderByWithAggregationInput[]
    by: Order_journey_statusScalarFieldEnum[] | Order_journey_statusScalarFieldEnum
    having?: order_journey_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_journey_statusCountAggregateInputType | true
    _avg?: Order_journey_statusAvgAggregateInputType
    _sum?: Order_journey_statusSumAggregateInputType
    _min?: Order_journey_statusMinAggregateInputType
    _max?: Order_journey_statusMaxAggregateInputType
  }

  export type Order_journey_statusGroupByOutputType = {
    journey_status_id: number
    journey_desc: string
    _count: Order_journey_statusCountAggregateOutputType | null
    _avg: Order_journey_statusAvgAggregateOutputType | null
    _sum: Order_journey_statusSumAggregateOutputType | null
    _min: Order_journey_statusMinAggregateOutputType | null
    _max: Order_journey_statusMaxAggregateOutputType | null
  }

  type GetOrder_journey_statusGroupByPayload<T extends order_journey_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_journey_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_journey_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_journey_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Order_journey_statusGroupByOutputType[P]>
        }
      >
    >


  export type order_journey_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    journey_status_id?: boolean
    journey_desc?: boolean
    order_journeys?: boolean | order_journey_status$order_journeysArgs<ExtArgs>
    _count?: boolean | Order_journey_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_journey_status"]>

  export type order_journey_statusSelectScalar = {
    journey_status_id?: boolean
    journey_desc?: boolean
  }

  export type order_journey_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_journeys?: boolean | order_journey_status$order_journeysArgs<ExtArgs>
    _count?: boolean | Order_journey_statusCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $order_journey_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_journey_status"
    objects: {
      order_journeys: Prisma.$order_journeysPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      journey_status_id: number
      journey_desc: string
    }, ExtArgs["result"]["order_journey_status"]>
    composites: {}
  }


  type order_journey_statusGetPayload<S extends boolean | null | undefined | order_journey_statusDefaultArgs> = $Result.GetResult<Prisma.$order_journey_statusPayload, S>

  type order_journey_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_journey_statusFindManyArgs, 'select' | 'include'> & {
      select?: Order_journey_statusCountAggregateInputType | true
    }

  export interface order_journey_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_journey_status'], meta: { name: 'order_journey_status' } }
    /**
     * Find zero or one Order_journey_status that matches the filter.
     * @param {order_journey_statusFindUniqueArgs} args - Arguments to find a Order_journey_status
     * @example
     * // Get one Order_journey_status
     * const order_journey_status = await prisma.order_journey_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_journey_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_journey_statusFindUniqueArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_journey_status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_journey_statusFindUniqueOrThrowArgs} args - Arguments to find a Order_journey_status
     * @example
     * // Get one Order_journey_status
     * const order_journey_status = await prisma.order_journey_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_journey_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journey_statusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_journey_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journey_statusFindFirstArgs} args - Arguments to find a Order_journey_status
     * @example
     * // Get one Order_journey_status
     * const order_journey_status = await prisma.order_journey_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_journey_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journey_statusFindFirstArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_journey_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journey_statusFindFirstOrThrowArgs} args - Arguments to find a Order_journey_status
     * @example
     * // Get one Order_journey_status
     * const order_journey_status = await prisma.order_journey_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_journey_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journey_statusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_journey_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journey_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_journey_statuses
     * const order_journey_statuses = await prisma.order_journey_status.findMany()
     * 
     * // Get first 10 Order_journey_statuses
     * const order_journey_statuses = await prisma.order_journey_status.findMany({ take: 10 })
     * 
     * // Only select the `journey_status_id`
     * const order_journey_statusWithJourney_status_idOnly = await prisma.order_journey_status.findMany({ select: { journey_status_id: true } })
     * 
    **/
    findMany<T extends order_journey_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journey_statusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_journey_status.
     * @param {order_journey_statusCreateArgs} args - Arguments to create a Order_journey_status.
     * @example
     * // Create one Order_journey_status
     * const Order_journey_status = await prisma.order_journey_status.create({
     *   data: {
     *     // ... data to create a Order_journey_status
     *   }
     * })
     * 
    **/
    create<T extends order_journey_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_journey_statusCreateArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_journey_statuses.
     *     @param {order_journey_statusCreateManyArgs} args - Arguments to create many Order_journey_statuses.
     *     @example
     *     // Create many Order_journey_statuses
     *     const order_journey_status = await prisma.order_journey_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_journey_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journey_statusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_journey_status.
     * @param {order_journey_statusDeleteArgs} args - Arguments to delete one Order_journey_status.
     * @example
     * // Delete one Order_journey_status
     * const Order_journey_status = await prisma.order_journey_status.delete({
     *   where: {
     *     // ... filter to delete one Order_journey_status
     *   }
     * })
     * 
    **/
    delete<T extends order_journey_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_journey_statusDeleteArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_journey_status.
     * @param {order_journey_statusUpdateArgs} args - Arguments to update one Order_journey_status.
     * @example
     * // Update one Order_journey_status
     * const order_journey_status = await prisma.order_journey_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_journey_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_journey_statusUpdateArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_journey_statuses.
     * @param {order_journey_statusDeleteManyArgs} args - Arguments to filter Order_journey_statuses to delete.
     * @example
     * // Delete a few Order_journey_statuses
     * const { count } = await prisma.order_journey_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_journey_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journey_statusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_journey_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journey_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_journey_statuses
     * const order_journey_status = await prisma.order_journey_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_journey_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_journey_statusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_journey_status.
     * @param {order_journey_statusUpsertArgs} args - Arguments to update or create a Order_journey_status.
     * @example
     * // Update or create a Order_journey_status
     * const order_journey_status = await prisma.order_journey_status.upsert({
     *   create: {
     *     // ... data to create a Order_journey_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_journey_status we want to update
     *   }
     * })
    **/
    upsert<T extends order_journey_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_journey_statusUpsertArgs<ExtArgs>>
    ): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_journey_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journey_statusCountArgs} args - Arguments to filter Order_journey_statuses to count.
     * @example
     * // Count the number of Order_journey_statuses
     * const count = await prisma.order_journey_status.count({
     *   where: {
     *     // ... the filter for the Order_journey_statuses we want to count
     *   }
     * })
    **/
    count<T extends order_journey_statusCountArgs>(
      args?: Subset<T, order_journey_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_journey_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_journey_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_journey_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_journey_statusAggregateArgs>(args: Subset<T, Order_journey_statusAggregateArgs>): Prisma.PrismaPromise<GetOrder_journey_statusAggregateType<T>>

    /**
     * Group by Order_journey_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journey_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_journey_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_journey_statusGroupByArgs['orderBy'] }
        : { orderBy?: order_journey_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_journey_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_journey_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_journey_status model
   */
  readonly fields: order_journey_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_journey_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_journey_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order_journeys<T extends order_journey_status$order_journeysArgs<ExtArgs> = {}>(args?: Subset<T, order_journey_status$order_journeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_journey_status model
   */ 
  interface order_journey_statusFieldRefs {
    readonly journey_status_id: FieldRef<"order_journey_status", 'Int'>
    readonly journey_desc: FieldRef<"order_journey_status", 'String'>
  }
    

  // Custom InputTypes

  /**
   * order_journey_status findUnique
   */
  export type order_journey_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_journey_status to fetch.
     */
    where: order_journey_statusWhereUniqueInput
  }


  /**
   * order_journey_status findUniqueOrThrow
   */
  export type order_journey_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_journey_status to fetch.
     */
    where: order_journey_statusWhereUniqueInput
  }


  /**
   * order_journey_status findFirst
   */
  export type order_journey_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_journey_status to fetch.
     */
    where?: order_journey_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journey_statuses to fetch.
     */
    orderBy?: order_journey_statusOrderByWithRelationInput | order_journey_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_journey_statuses.
     */
    cursor?: order_journey_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journey_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journey_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_journey_statuses.
     */
    distinct?: Order_journey_statusScalarFieldEnum | Order_journey_statusScalarFieldEnum[]
  }


  /**
   * order_journey_status findFirstOrThrow
   */
  export type order_journey_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_journey_status to fetch.
     */
    where?: order_journey_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journey_statuses to fetch.
     */
    orderBy?: order_journey_statusOrderByWithRelationInput | order_journey_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_journey_statuses.
     */
    cursor?: order_journey_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journey_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journey_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_journey_statuses.
     */
    distinct?: Order_journey_statusScalarFieldEnum | Order_journey_statusScalarFieldEnum[]
  }


  /**
   * order_journey_status findMany
   */
  export type order_journey_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_journey_statuses to fetch.
     */
    where?: order_journey_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journey_statuses to fetch.
     */
    orderBy?: order_journey_statusOrderByWithRelationInput | order_journey_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_journey_statuses.
     */
    cursor?: order_journey_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journey_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journey_statuses.
     */
    skip?: number
    distinct?: Order_journey_statusScalarFieldEnum | Order_journey_statusScalarFieldEnum[]
  }


  /**
   * order_journey_status create
   */
  export type order_journey_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a order_journey_status.
     */
    data: XOR<order_journey_statusCreateInput, order_journey_statusUncheckedCreateInput>
  }


  /**
   * order_journey_status createMany
   */
  export type order_journey_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_journey_statuses.
     */
    data: order_journey_statusCreateManyInput | order_journey_statusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_journey_status update
   */
  export type order_journey_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a order_journey_status.
     */
    data: XOR<order_journey_statusUpdateInput, order_journey_statusUncheckedUpdateInput>
    /**
     * Choose, which order_journey_status to update.
     */
    where: order_journey_statusWhereUniqueInput
  }


  /**
   * order_journey_status updateMany
   */
  export type order_journey_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_journey_statuses.
     */
    data: XOR<order_journey_statusUpdateManyMutationInput, order_journey_statusUncheckedUpdateManyInput>
    /**
     * Filter which order_journey_statuses to update
     */
    where?: order_journey_statusWhereInput
  }


  /**
   * order_journey_status upsert
   */
  export type order_journey_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the order_journey_status to update in case it exists.
     */
    where: order_journey_statusWhereUniqueInput
    /**
     * In case the order_journey_status found by the `where` argument doesn't exist, create a new order_journey_status with this data.
     */
    create: XOR<order_journey_statusCreateInput, order_journey_statusUncheckedCreateInput>
    /**
     * In case the order_journey_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_journey_statusUpdateInput, order_journey_statusUncheckedUpdateInput>
  }


  /**
   * order_journey_status delete
   */
  export type order_journey_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
    /**
     * Filter which order_journey_status to delete.
     */
    where: order_journey_statusWhereUniqueInput
  }


  /**
   * order_journey_status deleteMany
   */
  export type order_journey_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_journey_statuses to delete
     */
    where?: order_journey_statusWhereInput
  }


  /**
   * order_journey_status.order_journeys
   */
  export type order_journey_status$order_journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    where?: order_journeysWhereInput
    orderBy?: order_journeysOrderByWithRelationInput | order_journeysOrderByWithRelationInput[]
    cursor?: order_journeysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_journeysScalarFieldEnum | Order_journeysScalarFieldEnum[]
  }


  /**
   * order_journey_status without action
   */
  export type order_journey_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journey_status
     */
    select?: order_journey_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journey_statusInclude<ExtArgs> | null
  }



  /**
   * Model order_journeys
   */

  export type AggregateOrder_journeys = {
    _count: Order_journeysCountAggregateOutputType | null
    _avg: Order_journeysAvgAggregateOutputType | null
    _sum: Order_journeysSumAggregateOutputType | null
    _min: Order_journeysMinAggregateOutputType | null
    _max: Order_journeysMaxAggregateOutputType | null
  }

  export type Order_journeysAvgAggregateOutputType = {
    id: number | null
    journey_status: number | null
  }

  export type Order_journeysSumAggregateOutputType = {
    id: number | null
    journey_status: number | null
  }

  export type Order_journeysMinAggregateOutputType = {
    id: number | null
    order_id: string | null
    journey_status: number | null
    created_at: Date | null
  }

  export type Order_journeysMaxAggregateOutputType = {
    id: number | null
    order_id: string | null
    journey_status: number | null
    created_at: Date | null
  }

  export type Order_journeysCountAggregateOutputType = {
    id: number
    order_id: number
    journey_status: number
    created_at: number
    _all: number
  }


  export type Order_journeysAvgAggregateInputType = {
    id?: true
    journey_status?: true
  }

  export type Order_journeysSumAggregateInputType = {
    id?: true
    journey_status?: true
  }

  export type Order_journeysMinAggregateInputType = {
    id?: true
    order_id?: true
    journey_status?: true
    created_at?: true
  }

  export type Order_journeysMaxAggregateInputType = {
    id?: true
    order_id?: true
    journey_status?: true
    created_at?: true
  }

  export type Order_journeysCountAggregateInputType = {
    id?: true
    order_id?: true
    journey_status?: true
    created_at?: true
    _all?: true
  }

  export type Order_journeysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_journeys to aggregate.
     */
    where?: order_journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journeys to fetch.
     */
    orderBy?: order_journeysOrderByWithRelationInput | order_journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_journeys
    **/
    _count?: true | Order_journeysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_journeysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_journeysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_journeysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_journeysMaxAggregateInputType
  }

  export type GetOrder_journeysAggregateType<T extends Order_journeysAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_journeys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_journeys[P]>
      : GetScalarType<T[P], AggregateOrder_journeys[P]>
  }




  export type order_journeysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_journeysWhereInput
    orderBy?: order_journeysOrderByWithAggregationInput | order_journeysOrderByWithAggregationInput[]
    by: Order_journeysScalarFieldEnum[] | Order_journeysScalarFieldEnum
    having?: order_journeysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_journeysCountAggregateInputType | true
    _avg?: Order_journeysAvgAggregateInputType
    _sum?: Order_journeysSumAggregateInputType
    _min?: Order_journeysMinAggregateInputType
    _max?: Order_journeysMaxAggregateInputType
  }

  export type Order_journeysGroupByOutputType = {
    id: number
    order_id: string
    journey_status: number
    created_at: Date
    _count: Order_journeysCountAggregateOutputType | null
    _avg: Order_journeysAvgAggregateOutputType | null
    _sum: Order_journeysSumAggregateOutputType | null
    _min: Order_journeysMinAggregateOutputType | null
    _max: Order_journeysMaxAggregateOutputType | null
  }

  type GetOrder_journeysGroupByPayload<T extends order_journeysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_journeysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_journeysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_journeysGroupByOutputType[P]>
            : GetScalarType<T[P], Order_journeysGroupByOutputType[P]>
        }
      >
    >


  export type order_journeysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    journey_status?: boolean
    created_at?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    order_journey_status?: boolean | order_journey_statusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_journeys"]>

  export type order_journeysSelectScalar = {
    id?: boolean
    order_id?: boolean
    journey_status?: boolean
    created_at?: boolean
  }

  export type order_journeysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    order_journey_status?: boolean | order_journey_statusDefaultArgs<ExtArgs>
  }


  export type $order_journeysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_journeys"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      order_journey_status: Prisma.$order_journey_statusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: string
      journey_status: number
      created_at: Date
    }, ExtArgs["result"]["order_journeys"]>
    composites: {}
  }


  type order_journeysGetPayload<S extends boolean | null | undefined | order_journeysDefaultArgs> = $Result.GetResult<Prisma.$order_journeysPayload, S>

  type order_journeysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_journeysFindManyArgs, 'select' | 'include'> & {
      select?: Order_journeysCountAggregateInputType | true
    }

  export interface order_journeysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_journeys'], meta: { name: 'order_journeys' } }
    /**
     * Find zero or one Order_journeys that matches the filter.
     * @param {order_journeysFindUniqueArgs} args - Arguments to find a Order_journeys
     * @example
     * // Get one Order_journeys
     * const order_journeys = await prisma.order_journeys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_journeysFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_journeysFindUniqueArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_journeys that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_journeysFindUniqueOrThrowArgs} args - Arguments to find a Order_journeys
     * @example
     * // Get one Order_journeys
     * const order_journeys = await prisma.order_journeys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_journeysFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journeysFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journeysFindFirstArgs} args - Arguments to find a Order_journeys
     * @example
     * // Get one Order_journeys
     * const order_journeys = await prisma.order_journeys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_journeysFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journeysFindFirstArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_journeys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journeysFindFirstOrThrowArgs} args - Arguments to find a Order_journeys
     * @example
     * // Get one Order_journeys
     * const order_journeys = await prisma.order_journeys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_journeysFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journeysFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journeysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_journeys
     * const order_journeys = await prisma.order_journeys.findMany()
     * 
     * // Get first 10 Order_journeys
     * const order_journeys = await prisma.order_journeys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_journeysWithIdOnly = await prisma.order_journeys.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_journeysFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journeysFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_journeys.
     * @param {order_journeysCreateArgs} args - Arguments to create a Order_journeys.
     * @example
     * // Create one Order_journeys
     * const Order_journeys = await prisma.order_journeys.create({
     *   data: {
     *     // ... data to create a Order_journeys
     *   }
     * })
     * 
    **/
    create<T extends order_journeysCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_journeysCreateArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_journeys.
     *     @param {order_journeysCreateManyArgs} args - Arguments to create many Order_journeys.
     *     @example
     *     // Create many Order_journeys
     *     const order_journeys = await prisma.order_journeys.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_journeysCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journeysCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_journeys.
     * @param {order_journeysDeleteArgs} args - Arguments to delete one Order_journeys.
     * @example
     * // Delete one Order_journeys
     * const Order_journeys = await prisma.order_journeys.delete({
     *   where: {
     *     // ... filter to delete one Order_journeys
     *   }
     * })
     * 
    **/
    delete<T extends order_journeysDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_journeysDeleteArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_journeys.
     * @param {order_journeysUpdateArgs} args - Arguments to update one Order_journeys.
     * @example
     * // Update one Order_journeys
     * const order_journeys = await prisma.order_journeys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_journeysUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_journeysUpdateArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_journeys.
     * @param {order_journeysDeleteManyArgs} args - Arguments to filter Order_journeys to delete.
     * @example
     * // Delete a few Order_journeys
     * const { count } = await prisma.order_journeys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_journeysDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_journeysDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journeysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_journeys
     * const order_journeys = await prisma.order_journeys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_journeysUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_journeysUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_journeys.
     * @param {order_journeysUpsertArgs} args - Arguments to update or create a Order_journeys.
     * @example
     * // Update or create a Order_journeys
     * const order_journeys = await prisma.order_journeys.upsert({
     *   create: {
     *     // ... data to create a Order_journeys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_journeys we want to update
     *   }
     * })
    **/
    upsert<T extends order_journeysUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_journeysUpsertArgs<ExtArgs>>
    ): Prisma__order_journeysClient<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journeysCountArgs} args - Arguments to filter Order_journeys to count.
     * @example
     * // Count the number of Order_journeys
     * const count = await prisma.order_journeys.count({
     *   where: {
     *     // ... the filter for the Order_journeys we want to count
     *   }
     * })
    **/
    count<T extends order_journeysCountArgs>(
      args?: Subset<T, order_journeysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_journeysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_journeysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_journeysAggregateArgs>(args: Subset<T, Order_journeysAggregateArgs>): Prisma.PrismaPromise<GetOrder_journeysAggregateType<T>>

    /**
     * Group by Order_journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_journeysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_journeysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_journeysGroupByArgs['orderBy'] }
        : { orderBy?: order_journeysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_journeysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_journeysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_journeys model
   */
  readonly fields: order_journeysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_journeys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_journeysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order_journey_status<T extends order_journey_statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, order_journey_statusDefaultArgs<ExtArgs>>): Prisma__order_journey_statusClient<$Result.GetResult<Prisma.$order_journey_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_journeys model
   */ 
  interface order_journeysFieldRefs {
    readonly id: FieldRef<"order_journeys", 'Int'>
    readonly order_id: FieldRef<"order_journeys", 'String'>
    readonly journey_status: FieldRef<"order_journeys", 'Int'>
    readonly created_at: FieldRef<"order_journeys", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * order_journeys findUnique
   */
  export type order_journeysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * Filter, which order_journeys to fetch.
     */
    where: order_journeysWhereUniqueInput
  }


  /**
   * order_journeys findUniqueOrThrow
   */
  export type order_journeysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * Filter, which order_journeys to fetch.
     */
    where: order_journeysWhereUniqueInput
  }


  /**
   * order_journeys findFirst
   */
  export type order_journeysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * Filter, which order_journeys to fetch.
     */
    where?: order_journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journeys to fetch.
     */
    orderBy?: order_journeysOrderByWithRelationInput | order_journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_journeys.
     */
    cursor?: order_journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_journeys.
     */
    distinct?: Order_journeysScalarFieldEnum | Order_journeysScalarFieldEnum[]
  }


  /**
   * order_journeys findFirstOrThrow
   */
  export type order_journeysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * Filter, which order_journeys to fetch.
     */
    where?: order_journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journeys to fetch.
     */
    orderBy?: order_journeysOrderByWithRelationInput | order_journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_journeys.
     */
    cursor?: order_journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_journeys.
     */
    distinct?: Order_journeysScalarFieldEnum | Order_journeysScalarFieldEnum[]
  }


  /**
   * order_journeys findMany
   */
  export type order_journeysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * Filter, which order_journeys to fetch.
     */
    where?: order_journeysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_journeys to fetch.
     */
    orderBy?: order_journeysOrderByWithRelationInput | order_journeysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_journeys.
     */
    cursor?: order_journeysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_journeys.
     */
    skip?: number
    distinct?: Order_journeysScalarFieldEnum | Order_journeysScalarFieldEnum[]
  }


  /**
   * order_journeys create
   */
  export type order_journeysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * The data needed to create a order_journeys.
     */
    data: XOR<order_journeysCreateInput, order_journeysUncheckedCreateInput>
  }


  /**
   * order_journeys createMany
   */
  export type order_journeysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_journeys.
     */
    data: order_journeysCreateManyInput | order_journeysCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_journeys update
   */
  export type order_journeysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * The data needed to update a order_journeys.
     */
    data: XOR<order_journeysUpdateInput, order_journeysUncheckedUpdateInput>
    /**
     * Choose, which order_journeys to update.
     */
    where: order_journeysWhereUniqueInput
  }


  /**
   * order_journeys updateMany
   */
  export type order_journeysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_journeys.
     */
    data: XOR<order_journeysUpdateManyMutationInput, order_journeysUncheckedUpdateManyInput>
    /**
     * Filter which order_journeys to update
     */
    where?: order_journeysWhereInput
  }


  /**
   * order_journeys upsert
   */
  export type order_journeysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * The filter to search for the order_journeys to update in case it exists.
     */
    where: order_journeysWhereUniqueInput
    /**
     * In case the order_journeys found by the `where` argument doesn't exist, create a new order_journeys with this data.
     */
    create: XOR<order_journeysCreateInput, order_journeysUncheckedCreateInput>
    /**
     * In case the order_journeys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_journeysUpdateInput, order_journeysUncheckedUpdateInput>
  }


  /**
   * order_journeys delete
   */
  export type order_journeysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    /**
     * Filter which order_journeys to delete.
     */
    where: order_journeysWhereUniqueInput
  }


  /**
   * order_journeys deleteMany
   */
  export type order_journeysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_journeys to delete
     */
    where?: order_journeysWhereInput
  }


  /**
   * order_journeys without action
   */
  export type order_journeysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
  }



  /**
   * Model order_status
   */

  export type AggregateOrder_status = {
    _count: Order_statusCountAggregateOutputType | null
    _avg: Order_statusAvgAggregateOutputType | null
    _sum: Order_statusSumAggregateOutputType | null
    _min: Order_statusMinAggregateOutputType | null
    _max: Order_statusMaxAggregateOutputType | null
  }

  export type Order_statusAvgAggregateOutputType = {
    order_status: number | null
  }

  export type Order_statusSumAggregateOutputType = {
    order_status: number | null
  }

  export type Order_statusMinAggregateOutputType = {
    order_status: number | null
    order_status_desc: string | null
  }

  export type Order_statusMaxAggregateOutputType = {
    order_status: number | null
    order_status_desc: string | null
  }

  export type Order_statusCountAggregateOutputType = {
    order_status: number
    order_status_desc: number
    _all: number
  }


  export type Order_statusAvgAggregateInputType = {
    order_status?: true
  }

  export type Order_statusSumAggregateInputType = {
    order_status?: true
  }

  export type Order_statusMinAggregateInputType = {
    order_status?: true
    order_status_desc?: true
  }

  export type Order_statusMaxAggregateInputType = {
    order_status?: true
    order_status_desc?: true
  }

  export type Order_statusCountAggregateInputType = {
    order_status?: true
    order_status_desc?: true
    _all?: true
  }

  export type Order_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_status to aggregate.
     */
    where?: order_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_statuses to fetch.
     */
    orderBy?: order_statusOrderByWithRelationInput | order_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_statuses
    **/
    _count?: true | Order_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_statusMaxAggregateInputType
  }

  export type GetOrder_statusAggregateType<T extends Order_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_status[P]>
      : GetScalarType<T[P], AggregateOrder_status[P]>
  }




  export type order_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_statusWhereInput
    orderBy?: order_statusOrderByWithAggregationInput | order_statusOrderByWithAggregationInput[]
    by: Order_statusScalarFieldEnum[] | Order_statusScalarFieldEnum
    having?: order_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_statusCountAggregateInputType | true
    _avg?: Order_statusAvgAggregateInputType
    _sum?: Order_statusSumAggregateInputType
    _min?: Order_statusMinAggregateInputType
    _max?: Order_statusMaxAggregateInputType
  }

  export type Order_statusGroupByOutputType = {
    order_status: number
    order_status_desc: string
    _count: Order_statusCountAggregateOutputType | null
    _avg: Order_statusAvgAggregateOutputType | null
    _sum: Order_statusSumAggregateOutputType | null
    _min: Order_statusMinAggregateOutputType | null
    _max: Order_statusMaxAggregateOutputType | null
  }

  type GetOrder_statusGroupByPayload<T extends order_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Order_statusGroupByOutputType[P]>
        }
      >
    >


  export type order_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_status?: boolean
    order_status_desc?: boolean
    orders_orders_order_statusToorder_status?: boolean | order_status$orders_orders_order_statusToorder_statusArgs<ExtArgs>
    _count?: boolean | Order_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_status"]>

  export type order_statusSelectScalar = {
    order_status?: boolean
    order_status_desc?: boolean
  }

  export type order_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders_orders_order_statusToorder_status?: boolean | order_status$orders_orders_order_statusToorder_statusArgs<ExtArgs>
    _count?: boolean | Order_statusCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $order_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_status"
    objects: {
      orders_orders_order_statusToorder_status: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_status: number
      order_status_desc: string
    }, ExtArgs["result"]["order_status"]>
    composites: {}
  }


  type order_statusGetPayload<S extends boolean | null | undefined | order_statusDefaultArgs> = $Result.GetResult<Prisma.$order_statusPayload, S>

  type order_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_statusFindManyArgs, 'select' | 'include'> & {
      select?: Order_statusCountAggregateInputType | true
    }

  export interface order_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_status'], meta: { name: 'order_status' } }
    /**
     * Find zero or one Order_status that matches the filter.
     * @param {order_statusFindUniqueArgs} args - Arguments to find a Order_status
     * @example
     * // Get one Order_status
     * const order_status = await prisma.order_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_statusFindUniqueArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_statusFindUniqueOrThrowArgs} args - Arguments to find a Order_status
     * @example
     * // Get one Order_status
     * const order_status = await prisma.order_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_statusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_statusFindFirstArgs} args - Arguments to find a Order_status
     * @example
     * // Get one Order_status
     * const order_status = await prisma.order_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_statusFindFirstArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_statusFindFirstOrThrowArgs} args - Arguments to find a Order_status
     * @example
     * // Get one Order_status
     * const order_status = await prisma.order_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_statusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_statuses
     * const order_statuses = await prisma.order_status.findMany()
     * 
     * // Get first 10 Order_statuses
     * const order_statuses = await prisma.order_status.findMany({ take: 10 })
     * 
     * // Only select the `order_status`
     * const order_statusWithOrder_statusOnly = await prisma.order_status.findMany({ select: { order_status: true } })
     * 
    **/
    findMany<T extends order_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_statusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_status.
     * @param {order_statusCreateArgs} args - Arguments to create a Order_status.
     * @example
     * // Create one Order_status
     * const Order_status = await prisma.order_status.create({
     *   data: {
     *     // ... data to create a Order_status
     *   }
     * })
     * 
    **/
    create<T extends order_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_statusCreateArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_statuses.
     *     @param {order_statusCreateManyArgs} args - Arguments to create many Order_statuses.
     *     @example
     *     // Create many Order_statuses
     *     const order_status = await prisma.order_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_statusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_status.
     * @param {order_statusDeleteArgs} args - Arguments to delete one Order_status.
     * @example
     * // Delete one Order_status
     * const Order_status = await prisma.order_status.delete({
     *   where: {
     *     // ... filter to delete one Order_status
     *   }
     * })
     * 
    **/
    delete<T extends order_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_statusDeleteArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_status.
     * @param {order_statusUpdateArgs} args - Arguments to update one Order_status.
     * @example
     * // Update one Order_status
     * const order_status = await prisma.order_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_statusUpdateArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_statuses.
     * @param {order_statusDeleteManyArgs} args - Arguments to filter Order_statuses to delete.
     * @example
     * // Delete a few Order_statuses
     * const { count } = await prisma.order_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_statusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_statuses
     * const order_status = await prisma.order_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_statusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_status.
     * @param {order_statusUpsertArgs} args - Arguments to update or create a Order_status.
     * @example
     * // Update or create a Order_status
     * const order_status = await prisma.order_status.upsert({
     *   create: {
     *     // ... data to create a Order_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_status we want to update
     *   }
     * })
    **/
    upsert<T extends order_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_statusUpsertArgs<ExtArgs>>
    ): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_statusCountArgs} args - Arguments to filter Order_statuses to count.
     * @example
     * // Count the number of Order_statuses
     * const count = await prisma.order_status.count({
     *   where: {
     *     // ... the filter for the Order_statuses we want to count
     *   }
     * })
    **/
    count<T extends order_statusCountArgs>(
      args?: Subset<T, order_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_statusAggregateArgs>(args: Subset<T, Order_statusAggregateArgs>): Prisma.PrismaPromise<GetOrder_statusAggregateType<T>>

    /**
     * Group by Order_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_statusGroupByArgs['orderBy'] }
        : { orderBy?: order_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_status model
   */
  readonly fields: order_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders_orders_order_statusToorder_status<T extends order_status$orders_orders_order_statusToorder_statusArgs<ExtArgs> = {}>(args?: Subset<T, order_status$orders_orders_order_statusToorder_statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_status model
   */ 
  interface order_statusFieldRefs {
    readonly order_status: FieldRef<"order_status", 'Int'>
    readonly order_status_desc: FieldRef<"order_status", 'String'>
  }
    

  // Custom InputTypes

  /**
   * order_status findUnique
   */
  export type order_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_status to fetch.
     */
    where: order_statusWhereUniqueInput
  }


  /**
   * order_status findUniqueOrThrow
   */
  export type order_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_status to fetch.
     */
    where: order_statusWhereUniqueInput
  }


  /**
   * order_status findFirst
   */
  export type order_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_status to fetch.
     */
    where?: order_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_statuses to fetch.
     */
    orderBy?: order_statusOrderByWithRelationInput | order_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_statuses.
     */
    cursor?: order_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_statuses.
     */
    distinct?: Order_statusScalarFieldEnum | Order_statusScalarFieldEnum[]
  }


  /**
   * order_status findFirstOrThrow
   */
  export type order_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_status to fetch.
     */
    where?: order_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_statuses to fetch.
     */
    orderBy?: order_statusOrderByWithRelationInput | order_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_statuses.
     */
    cursor?: order_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_statuses.
     */
    distinct?: Order_statusScalarFieldEnum | Order_statusScalarFieldEnum[]
  }


  /**
   * order_status findMany
   */
  export type order_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * Filter, which order_statuses to fetch.
     */
    where?: order_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_statuses to fetch.
     */
    orderBy?: order_statusOrderByWithRelationInput | order_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_statuses.
     */
    cursor?: order_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_statuses.
     */
    skip?: number
    distinct?: Order_statusScalarFieldEnum | Order_statusScalarFieldEnum[]
  }


  /**
   * order_status create
   */
  export type order_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a order_status.
     */
    data: XOR<order_statusCreateInput, order_statusUncheckedCreateInput>
  }


  /**
   * order_status createMany
   */
  export type order_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_statuses.
     */
    data: order_statusCreateManyInput | order_statusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_status update
   */
  export type order_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a order_status.
     */
    data: XOR<order_statusUpdateInput, order_statusUncheckedUpdateInput>
    /**
     * Choose, which order_status to update.
     */
    where: order_statusWhereUniqueInput
  }


  /**
   * order_status updateMany
   */
  export type order_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_statuses.
     */
    data: XOR<order_statusUpdateManyMutationInput, order_statusUncheckedUpdateManyInput>
    /**
     * Filter which order_statuses to update
     */
    where?: order_statusWhereInput
  }


  /**
   * order_status upsert
   */
  export type order_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the order_status to update in case it exists.
     */
    where: order_statusWhereUniqueInput
    /**
     * In case the order_status found by the `where` argument doesn't exist, create a new order_status with this data.
     */
    create: XOR<order_statusCreateInput, order_statusUncheckedCreateInput>
    /**
     * In case the order_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_statusUpdateInput, order_statusUncheckedUpdateInput>
  }


  /**
   * order_status delete
   */
  export type order_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
    /**
     * Filter which order_status to delete.
     */
    where: order_statusWhereUniqueInput
  }


  /**
   * order_status deleteMany
   */
  export type order_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_statuses to delete
     */
    where?: order_statusWhereInput
  }


  /**
   * order_status.orders_orders_order_statusToorder_status
   */
  export type order_status$orders_orders_order_statusToorder_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * order_status without action
   */
  export type order_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_status
     */
    select?: order_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_statusInclude<ExtArgs> | null
  }



  /**
   * Model order_to_services
   */

  export type AggregateOrder_to_services = {
    _count: Order_to_servicesCountAggregateOutputType | null
    _avg: Order_to_servicesAvgAggregateOutputType | null
    _sum: Order_to_servicesSumAggregateOutputType | null
    _min: Order_to_servicesMinAggregateOutputType | null
    _max: Order_to_servicesMaxAggregateOutputType | null
  }

  export type Order_to_servicesAvgAggregateOutputType = {
    id: number | null
    service_id: number | null
  }

  export type Order_to_servicesSumAggregateOutputType = {
    id: number | null
    service_id: number | null
  }

  export type Order_to_servicesMinAggregateOutputType = {
    id: number | null
    order_id: string | null
    service_id: number | null
  }

  export type Order_to_servicesMaxAggregateOutputType = {
    id: number | null
    order_id: string | null
    service_id: number | null
  }

  export type Order_to_servicesCountAggregateOutputType = {
    id: number
    order_id: number
    service_id: number
    _all: number
  }


  export type Order_to_servicesAvgAggregateInputType = {
    id?: true
    service_id?: true
  }

  export type Order_to_servicesSumAggregateInputType = {
    id?: true
    service_id?: true
  }

  export type Order_to_servicesMinAggregateInputType = {
    id?: true
    order_id?: true
    service_id?: true
  }

  export type Order_to_servicesMaxAggregateInputType = {
    id?: true
    order_id?: true
    service_id?: true
  }

  export type Order_to_servicesCountAggregateInputType = {
    id?: true
    order_id?: true
    service_id?: true
    _all?: true
  }

  export type Order_to_servicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_to_services to aggregate.
     */
    where?: order_to_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_to_services to fetch.
     */
    orderBy?: order_to_servicesOrderByWithRelationInput | order_to_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_to_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_to_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_to_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_to_services
    **/
    _count?: true | Order_to_servicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_to_servicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_to_servicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_to_servicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_to_servicesMaxAggregateInputType
  }

  export type GetOrder_to_servicesAggregateType<T extends Order_to_servicesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_to_services]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_to_services[P]>
      : GetScalarType<T[P], AggregateOrder_to_services[P]>
  }




  export type order_to_servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_to_servicesWhereInput
    orderBy?: order_to_servicesOrderByWithAggregationInput | order_to_servicesOrderByWithAggregationInput[]
    by: Order_to_servicesScalarFieldEnum[] | Order_to_servicesScalarFieldEnum
    having?: order_to_servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_to_servicesCountAggregateInputType | true
    _avg?: Order_to_servicesAvgAggregateInputType
    _sum?: Order_to_servicesSumAggregateInputType
    _min?: Order_to_servicesMinAggregateInputType
    _max?: Order_to_servicesMaxAggregateInputType
  }

  export type Order_to_servicesGroupByOutputType = {
    id: number
    order_id: string
    service_id: number
    _count: Order_to_servicesCountAggregateOutputType | null
    _avg: Order_to_servicesAvgAggregateOutputType | null
    _sum: Order_to_servicesSumAggregateOutputType | null
    _min: Order_to_servicesMinAggregateOutputType | null
    _max: Order_to_servicesMaxAggregateOutputType | null
  }

  type GetOrder_to_servicesGroupByPayload<T extends order_to_servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_to_servicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_to_servicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_to_servicesGroupByOutputType[P]>
            : GetScalarType<T[P], Order_to_servicesGroupByOutputType[P]>
        }
      >
    >


  export type order_to_servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    service_id?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_to_services"]>

  export type order_to_servicesSelectScalar = {
    id?: boolean
    order_id?: boolean
    service_id?: boolean
  }

  export type order_to_servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }


  export type $order_to_servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_to_services"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      services: Prisma.$servicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: string
      service_id: number
    }, ExtArgs["result"]["order_to_services"]>
    composites: {}
  }


  type order_to_servicesGetPayload<S extends boolean | null | undefined | order_to_servicesDefaultArgs> = $Result.GetResult<Prisma.$order_to_servicesPayload, S>

  type order_to_servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_to_servicesFindManyArgs, 'select' | 'include'> & {
      select?: Order_to_servicesCountAggregateInputType | true
    }

  export interface order_to_servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_to_services'], meta: { name: 'order_to_services' } }
    /**
     * Find zero or one Order_to_services that matches the filter.
     * @param {order_to_servicesFindUniqueArgs} args - Arguments to find a Order_to_services
     * @example
     * // Get one Order_to_services
     * const order_to_services = await prisma.order_to_services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_to_servicesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_to_servicesFindUniqueArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_to_services that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_to_servicesFindUniqueOrThrowArgs} args - Arguments to find a Order_to_services
     * @example
     * // Get one Order_to_services
     * const order_to_services = await prisma.order_to_services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_to_servicesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_to_servicesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_to_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_to_servicesFindFirstArgs} args - Arguments to find a Order_to_services
     * @example
     * // Get one Order_to_services
     * const order_to_services = await prisma.order_to_services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_to_servicesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_to_servicesFindFirstArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_to_services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_to_servicesFindFirstOrThrowArgs} args - Arguments to find a Order_to_services
     * @example
     * // Get one Order_to_services
     * const order_to_services = await prisma.order_to_services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_to_servicesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_to_servicesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_to_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_to_servicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_to_services
     * const order_to_services = await prisma.order_to_services.findMany()
     * 
     * // Get first 10 Order_to_services
     * const order_to_services = await prisma.order_to_services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_to_servicesWithIdOnly = await prisma.order_to_services.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_to_servicesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_to_servicesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_to_services.
     * @param {order_to_servicesCreateArgs} args - Arguments to create a Order_to_services.
     * @example
     * // Create one Order_to_services
     * const Order_to_services = await prisma.order_to_services.create({
     *   data: {
     *     // ... data to create a Order_to_services
     *   }
     * })
     * 
    **/
    create<T extends order_to_servicesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_to_servicesCreateArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_to_services.
     *     @param {order_to_servicesCreateManyArgs} args - Arguments to create many Order_to_services.
     *     @example
     *     // Create many Order_to_services
     *     const order_to_services = await prisma.order_to_services.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_to_servicesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_to_servicesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_to_services.
     * @param {order_to_servicesDeleteArgs} args - Arguments to delete one Order_to_services.
     * @example
     * // Delete one Order_to_services
     * const Order_to_services = await prisma.order_to_services.delete({
     *   where: {
     *     // ... filter to delete one Order_to_services
     *   }
     * })
     * 
    **/
    delete<T extends order_to_servicesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_to_servicesDeleteArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_to_services.
     * @param {order_to_servicesUpdateArgs} args - Arguments to update one Order_to_services.
     * @example
     * // Update one Order_to_services
     * const order_to_services = await prisma.order_to_services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_to_servicesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_to_servicesUpdateArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_to_services.
     * @param {order_to_servicesDeleteManyArgs} args - Arguments to filter Order_to_services to delete.
     * @example
     * // Delete a few Order_to_services
     * const { count } = await prisma.order_to_services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_to_servicesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_to_servicesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_to_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_to_servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_to_services
     * const order_to_services = await prisma.order_to_services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_to_servicesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_to_servicesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_to_services.
     * @param {order_to_servicesUpsertArgs} args - Arguments to update or create a Order_to_services.
     * @example
     * // Update or create a Order_to_services
     * const order_to_services = await prisma.order_to_services.upsert({
     *   create: {
     *     // ... data to create a Order_to_services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_to_services we want to update
     *   }
     * })
    **/
    upsert<T extends order_to_servicesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_to_servicesUpsertArgs<ExtArgs>>
    ): Prisma__order_to_servicesClient<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_to_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_to_servicesCountArgs} args - Arguments to filter Order_to_services to count.
     * @example
     * // Count the number of Order_to_services
     * const count = await prisma.order_to_services.count({
     *   where: {
     *     // ... the filter for the Order_to_services we want to count
     *   }
     * })
    **/
    count<T extends order_to_servicesCountArgs>(
      args?: Subset<T, order_to_servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_to_servicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_to_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_to_servicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_to_servicesAggregateArgs>(args: Subset<T, Order_to_servicesAggregateArgs>): Prisma.PrismaPromise<GetOrder_to_servicesAggregateType<T>>

    /**
     * Group by Order_to_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_to_servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_to_servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_to_servicesGroupByArgs['orderBy'] }
        : { orderBy?: order_to_servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_to_servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_to_servicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_to_services model
   */
  readonly fields: order_to_servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_to_services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_to_servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    services<T extends servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicesDefaultArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_to_services model
   */ 
  interface order_to_servicesFieldRefs {
    readonly id: FieldRef<"order_to_services", 'Int'>
    readonly order_id: FieldRef<"order_to_services", 'String'>
    readonly service_id: FieldRef<"order_to_services", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * order_to_services findUnique
   */
  export type order_to_servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * Filter, which order_to_services to fetch.
     */
    where: order_to_servicesWhereUniqueInput
  }


  /**
   * order_to_services findUniqueOrThrow
   */
  export type order_to_servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * Filter, which order_to_services to fetch.
     */
    where: order_to_servicesWhereUniqueInput
  }


  /**
   * order_to_services findFirst
   */
  export type order_to_servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * Filter, which order_to_services to fetch.
     */
    where?: order_to_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_to_services to fetch.
     */
    orderBy?: order_to_servicesOrderByWithRelationInput | order_to_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_to_services.
     */
    cursor?: order_to_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_to_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_to_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_to_services.
     */
    distinct?: Order_to_servicesScalarFieldEnum | Order_to_servicesScalarFieldEnum[]
  }


  /**
   * order_to_services findFirstOrThrow
   */
  export type order_to_servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * Filter, which order_to_services to fetch.
     */
    where?: order_to_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_to_services to fetch.
     */
    orderBy?: order_to_servicesOrderByWithRelationInput | order_to_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_to_services.
     */
    cursor?: order_to_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_to_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_to_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_to_services.
     */
    distinct?: Order_to_servicesScalarFieldEnum | Order_to_servicesScalarFieldEnum[]
  }


  /**
   * order_to_services findMany
   */
  export type order_to_servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * Filter, which order_to_services to fetch.
     */
    where?: order_to_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_to_services to fetch.
     */
    orderBy?: order_to_servicesOrderByWithRelationInput | order_to_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_to_services.
     */
    cursor?: order_to_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_to_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_to_services.
     */
    skip?: number
    distinct?: Order_to_servicesScalarFieldEnum | Order_to_servicesScalarFieldEnum[]
  }


  /**
   * order_to_services create
   */
  export type order_to_servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a order_to_services.
     */
    data: XOR<order_to_servicesCreateInput, order_to_servicesUncheckedCreateInput>
  }


  /**
   * order_to_services createMany
   */
  export type order_to_servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_to_services.
     */
    data: order_to_servicesCreateManyInput | order_to_servicesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_to_services update
   */
  export type order_to_servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a order_to_services.
     */
    data: XOR<order_to_servicesUpdateInput, order_to_servicesUncheckedUpdateInput>
    /**
     * Choose, which order_to_services to update.
     */
    where: order_to_servicesWhereUniqueInput
  }


  /**
   * order_to_services updateMany
   */
  export type order_to_servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_to_services.
     */
    data: XOR<order_to_servicesUpdateManyMutationInput, order_to_servicesUncheckedUpdateManyInput>
    /**
     * Filter which order_to_services to update
     */
    where?: order_to_servicesWhereInput
  }


  /**
   * order_to_services upsert
   */
  export type order_to_servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the order_to_services to update in case it exists.
     */
    where: order_to_servicesWhereUniqueInput
    /**
     * In case the order_to_services found by the `where` argument doesn't exist, create a new order_to_services with this data.
     */
    create: XOR<order_to_servicesCreateInput, order_to_servicesUncheckedCreateInput>
    /**
     * In case the order_to_services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_to_servicesUpdateInput, order_to_servicesUncheckedUpdateInput>
  }


  /**
   * order_to_services delete
   */
  export type order_to_servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    /**
     * Filter which order_to_services to delete.
     */
    where: order_to_servicesWhereUniqueInput
  }


  /**
   * order_to_services deleteMany
   */
  export type order_to_servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_to_services to delete
     */
    where?: order_to_servicesWhereInput
  }


  /**
   * order_to_services without action
   */
  export type order_to_servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
  }



  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_status: number | null
    price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    order_status: number | null
    price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: string | null
    caregiver_id: string | null
    user_id: string | null
    order_status: number | null
    received_timestamp: Date | null
    date_start: Date | null
    date_end: Date | null
    price: number | null
    address: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: string | null
    caregiver_id: string | null
    user_id: string | null
    order_status: number | null
    received_timestamp: Date | null
    date_start: Date | null
    date_end: Date | null
    price: number | null
    address: string | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    caregiver_id: number
    user_id: number
    order_status: number
    received_timestamp: number
    date_start: number
    date_end: number
    price: number
    address: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_status?: true
    price?: true
  }

  export type OrdersSumAggregateInputType = {
    order_status?: true
    price?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    caregiver_id?: true
    user_id?: true
    order_status?: true
    received_timestamp?: true
    date_start?: true
    date_end?: true
    price?: true
    address?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    caregiver_id?: true
    user_id?: true
    order_status?: true
    received_timestamp?: true
    date_start?: true
    date_end?: true
    price?: true
    address?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    caregiver_id?: true
    user_id?: true
    order_status?: true
    received_timestamp?: true
    date_start?: true
    date_end?: true
    price?: true
    address?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: string
    caregiver_id: string
    user_id: string
    order_status: number
    received_timestamp: Date
    date_start: Date
    date_end: Date
    price: number
    address: string
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    caregiver_id?: boolean
    user_id?: boolean
    order_status?: boolean
    received_timestamp?: boolean
    date_start?: boolean
    date_end?: boolean
    price?: boolean
    address?: boolean
    order_journeys?: boolean | orders$order_journeysArgs<ExtArgs>
    order_to_services?: boolean | orders$order_to_servicesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    caregivers?: boolean | caregiversDefaultArgs<ExtArgs>
    order_status_orders_order_statusToorder_status?: boolean | order_statusDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    order_id?: boolean
    caregiver_id?: boolean
    user_id?: boolean
    order_status?: boolean
    received_timestamp?: boolean
    date_start?: boolean
    date_end?: boolean
    price?: boolean
    address?: boolean
  }

  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_journeys?: boolean | orders$order_journeysArgs<ExtArgs>
    order_to_services?: boolean | orders$order_to_servicesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    caregivers?: boolean | caregiversDefaultArgs<ExtArgs>
    order_status_orders_order_statusToorder_status?: boolean | order_statusDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_journeys: Prisma.$order_journeysPayload<ExtArgs>[]
      order_to_services: Prisma.$order_to_servicesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      caregivers: Prisma.$caregiversPayload<ExtArgs>
      order_status_orders_order_statusToorder_status: Prisma.$order_statusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: string
      caregiver_id: string
      user_id: string
      order_status: number
      received_timestamp: Date
      date_start: Date
      date_end: Date
      price: number
      address: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersCreateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order_journeys<T extends orders$order_journeysArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_journeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_journeysPayload<ExtArgs>, T, 'findMany'> | Null>;

    order_to_services<T extends orders$order_to_servicesArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_to_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    caregivers<T extends caregiversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, caregiversDefaultArgs<ExtArgs>>): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    order_status_orders_order_statusToorder_status<T extends order_statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, order_statusDefaultArgs<ExtArgs>>): Prisma__order_statusClient<$Result.GetResult<Prisma.$order_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", 'String'>
    readonly caregiver_id: FieldRef<"orders", 'String'>
    readonly user_id: FieldRef<"orders", 'String'>
    readonly order_status: FieldRef<"orders", 'Int'>
    readonly received_timestamp: FieldRef<"orders", 'DateTime'>
    readonly date_start: FieldRef<"orders", 'DateTime'>
    readonly date_end: FieldRef<"orders", 'DateTime'>
    readonly price: FieldRef<"orders", 'Float'>
    readonly address: FieldRef<"orders", 'String'>
  }
    

  // Custom InputTypes

  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders.order_journeys
   */
  export type orders$order_journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_journeys
     */
    select?: order_journeysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_journeysInclude<ExtArgs> | null
    where?: order_journeysWhereInput
    orderBy?: order_journeysOrderByWithRelationInput | order_journeysOrderByWithRelationInput[]
    cursor?: order_journeysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_journeysScalarFieldEnum | Order_journeysScalarFieldEnum[]
  }


  /**
   * orders.order_to_services
   */
  export type orders$order_to_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    where?: order_to_servicesWhereInput
    orderBy?: order_to_servicesOrderByWithRelationInput | order_to_servicesOrderByWithRelationInput[]
    cursor?: order_to_servicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_to_servicesScalarFieldEnum | Order_to_servicesScalarFieldEnum[]
  }


  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
  }



  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    review_rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    review_rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    order_id: string | null
    review: string | null
    review_rating: number | null
    created_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    order_id: string | null
    review: string | null
    review_rating: number | null
    created_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    order_id: number
    review: number
    review_rating: number
    created_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    review_rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    review_rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    order_id?: true
    review?: true
    review_rating?: true
    created_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    order_id?: true
    review?: true
    review_rating?: true
    created_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    order_id?: true
    review?: true
    review_rating?: true
    created_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    order_id: string
    review: string
    review_rating: number
    created_at: Date | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    review?: boolean
    review_rating?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    id?: boolean
    order_id?: boolean
    review?: boolean
    review_rating?: boolean
    created_at?: boolean
  }


  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: string
      review: string
      review_rating: number
      created_at: Date | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }


  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reviewsFindManyArgs, 'select' | 'include'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reviewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reviewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends reviewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
    **/
    create<T extends reviewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reviews.
     *     @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const reviews = await prisma.reviews.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reviewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
    **/
    delete<T extends reviewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reviewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reviewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reviewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
    **/
    upsert<T extends reviewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>
    ): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the reviews model
   */ 
  interface reviewsFieldRefs {
    readonly id: FieldRef<"reviews", 'Int'>
    readonly order_id: FieldRef<"reviews", 'String'>
    readonly review: FieldRef<"reviews", 'String'>
    readonly review_rating: FieldRef<"reviews", 'Float'>
    readonly created_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }


  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }


  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }


  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }


  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
  }


  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }


  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }


  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
  }


  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
  }



  /**
   * Model service_rates
   */

  export type AggregateService_rates = {
    _count: Service_ratesCountAggregateOutputType | null
    _avg: Service_ratesAvgAggregateOutputType | null
    _sum: Service_ratesSumAggregateOutputType | null
    _min: Service_ratesMinAggregateOutputType | null
    _max: Service_ratesMaxAggregateOutputType | null
  }

  export type Service_ratesAvgAggregateOutputType = {
    id: number | null
    service_id: number | null
    service_price: number | null
  }

  export type Service_ratesSumAggregateOutputType = {
    id: number | null
    service_id: number | null
    service_price: number | null
  }

  export type Service_ratesMinAggregateOutputType = {
    id: number | null
    service_id: number | null
    service_price: number | null
    created_at: Date | null
  }

  export type Service_ratesMaxAggregateOutputType = {
    id: number | null
    service_id: number | null
    service_price: number | null
    created_at: Date | null
  }

  export type Service_ratesCountAggregateOutputType = {
    id: number
    service_id: number
    service_price: number
    created_at: number
    _all: number
  }


  export type Service_ratesAvgAggregateInputType = {
    id?: true
    service_id?: true
    service_price?: true
  }

  export type Service_ratesSumAggregateInputType = {
    id?: true
    service_id?: true
    service_price?: true
  }

  export type Service_ratesMinAggregateInputType = {
    id?: true
    service_id?: true
    service_price?: true
    created_at?: true
  }

  export type Service_ratesMaxAggregateInputType = {
    id?: true
    service_id?: true
    service_price?: true
    created_at?: true
  }

  export type Service_ratesCountAggregateInputType = {
    id?: true
    service_id?: true
    service_price?: true
    created_at?: true
    _all?: true
  }

  export type Service_ratesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service_rates to aggregate.
     */
    where?: service_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_rates to fetch.
     */
    orderBy?: service_ratesOrderByWithRelationInput | service_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: service_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned service_rates
    **/
    _count?: true | Service_ratesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Service_ratesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Service_ratesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Service_ratesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Service_ratesMaxAggregateInputType
  }

  export type GetService_ratesAggregateType<T extends Service_ratesAggregateArgs> = {
        [P in keyof T & keyof AggregateService_rates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService_rates[P]>
      : GetScalarType<T[P], AggregateService_rates[P]>
  }




  export type service_ratesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: service_ratesWhereInput
    orderBy?: service_ratesOrderByWithAggregationInput | service_ratesOrderByWithAggregationInput[]
    by: Service_ratesScalarFieldEnum[] | Service_ratesScalarFieldEnum
    having?: service_ratesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Service_ratesCountAggregateInputType | true
    _avg?: Service_ratesAvgAggregateInputType
    _sum?: Service_ratesSumAggregateInputType
    _min?: Service_ratesMinAggregateInputType
    _max?: Service_ratesMaxAggregateInputType
  }

  export type Service_ratesGroupByOutputType = {
    id: number
    service_id: number
    service_price: number
    created_at: Date
    _count: Service_ratesCountAggregateOutputType | null
    _avg: Service_ratesAvgAggregateOutputType | null
    _sum: Service_ratesSumAggregateOutputType | null
    _min: Service_ratesMinAggregateOutputType | null
    _max: Service_ratesMaxAggregateOutputType | null
  }

  type GetService_ratesGroupByPayload<T extends service_ratesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Service_ratesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Service_ratesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Service_ratesGroupByOutputType[P]>
            : GetScalarType<T[P], Service_ratesGroupByOutputType[P]>
        }
      >
    >


  export type service_ratesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    service_price?: boolean
    created_at?: boolean
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service_rates"]>

  export type service_ratesSelectScalar = {
    id?: boolean
    service_id?: boolean
    service_price?: boolean
    created_at?: boolean
  }

  export type service_ratesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }


  export type $service_ratesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "service_rates"
    objects: {
      services: Prisma.$servicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      service_id: number
      service_price: number
      created_at: Date
    }, ExtArgs["result"]["service_rates"]>
    composites: {}
  }


  type service_ratesGetPayload<S extends boolean | null | undefined | service_ratesDefaultArgs> = $Result.GetResult<Prisma.$service_ratesPayload, S>

  type service_ratesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<service_ratesFindManyArgs, 'select' | 'include'> & {
      select?: Service_ratesCountAggregateInputType | true
    }

  export interface service_ratesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service_rates'], meta: { name: 'service_rates' } }
    /**
     * Find zero or one Service_rates that matches the filter.
     * @param {service_ratesFindUniqueArgs} args - Arguments to find a Service_rates
     * @example
     * // Get one Service_rates
     * const service_rates = await prisma.service_rates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends service_ratesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, service_ratesFindUniqueArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Service_rates that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {service_ratesFindUniqueOrThrowArgs} args - Arguments to find a Service_rates
     * @example
     * // Get one Service_rates
     * const service_rates = await prisma.service_rates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends service_ratesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, service_ratesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Service_rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_ratesFindFirstArgs} args - Arguments to find a Service_rates
     * @example
     * // Get one Service_rates
     * const service_rates = await prisma.service_rates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends service_ratesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, service_ratesFindFirstArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Service_rates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_ratesFindFirstOrThrowArgs} args - Arguments to find a Service_rates
     * @example
     * // Get one Service_rates
     * const service_rates = await prisma.service_rates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends service_ratesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, service_ratesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Service_rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_ratesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service_rates
     * const service_rates = await prisma.service_rates.findMany()
     * 
     * // Get first 10 Service_rates
     * const service_rates = await prisma.service_rates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const service_ratesWithIdOnly = await prisma.service_rates.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends service_ratesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, service_ratesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Service_rates.
     * @param {service_ratesCreateArgs} args - Arguments to create a Service_rates.
     * @example
     * // Create one Service_rates
     * const Service_rates = await prisma.service_rates.create({
     *   data: {
     *     // ... data to create a Service_rates
     *   }
     * })
     * 
    **/
    create<T extends service_ratesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, service_ratesCreateArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Service_rates.
     *     @param {service_ratesCreateManyArgs} args - Arguments to create many Service_rates.
     *     @example
     *     // Create many Service_rates
     *     const service_rates = await prisma.service_rates.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends service_ratesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, service_ratesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service_rates.
     * @param {service_ratesDeleteArgs} args - Arguments to delete one Service_rates.
     * @example
     * // Delete one Service_rates
     * const Service_rates = await prisma.service_rates.delete({
     *   where: {
     *     // ... filter to delete one Service_rates
     *   }
     * })
     * 
    **/
    delete<T extends service_ratesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, service_ratesDeleteArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Service_rates.
     * @param {service_ratesUpdateArgs} args - Arguments to update one Service_rates.
     * @example
     * // Update one Service_rates
     * const service_rates = await prisma.service_rates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends service_ratesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, service_ratesUpdateArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Service_rates.
     * @param {service_ratesDeleteManyArgs} args - Arguments to filter Service_rates to delete.
     * @example
     * // Delete a few Service_rates
     * const { count } = await prisma.service_rates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends service_ratesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, service_ratesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_ratesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service_rates
     * const service_rates = await prisma.service_rates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends service_ratesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, service_ratesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service_rates.
     * @param {service_ratesUpsertArgs} args - Arguments to update or create a Service_rates.
     * @example
     * // Update or create a Service_rates
     * const service_rates = await prisma.service_rates.upsert({
     *   create: {
     *     // ... data to create a Service_rates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service_rates we want to update
     *   }
     * })
    **/
    upsert<T extends service_ratesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, service_ratesUpsertArgs<ExtArgs>>
    ): Prisma__service_ratesClient<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Service_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_ratesCountArgs} args - Arguments to filter Service_rates to count.
     * @example
     * // Count the number of Service_rates
     * const count = await prisma.service_rates.count({
     *   where: {
     *     // ... the filter for the Service_rates we want to count
     *   }
     * })
    **/
    count<T extends service_ratesCountArgs>(
      args?: Subset<T, service_ratesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service_ratesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ratesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Service_ratesAggregateArgs>(args: Subset<T, Service_ratesAggregateArgs>): Prisma.PrismaPromise<GetService_ratesAggregateType<T>>

    /**
     * Group by Service_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {service_ratesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends service_ratesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: service_ratesGroupByArgs['orderBy'] }
        : { orderBy?: service_ratesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, service_ratesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetService_ratesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the service_rates model
   */
  readonly fields: service_ratesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service_rates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__service_ratesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    services<T extends servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicesDefaultArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the service_rates model
   */ 
  interface service_ratesFieldRefs {
    readonly id: FieldRef<"service_rates", 'Int'>
    readonly service_id: FieldRef<"service_rates", 'Int'>
    readonly service_price: FieldRef<"service_rates", 'Float'>
    readonly created_at: FieldRef<"service_rates", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * service_rates findUnique
   */
  export type service_ratesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * Filter, which service_rates to fetch.
     */
    where: service_ratesWhereUniqueInput
  }


  /**
   * service_rates findUniqueOrThrow
   */
  export type service_ratesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * Filter, which service_rates to fetch.
     */
    where: service_ratesWhereUniqueInput
  }


  /**
   * service_rates findFirst
   */
  export type service_ratesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * Filter, which service_rates to fetch.
     */
    where?: service_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_rates to fetch.
     */
    orderBy?: service_ratesOrderByWithRelationInput | service_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for service_rates.
     */
    cursor?: service_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of service_rates.
     */
    distinct?: Service_ratesScalarFieldEnum | Service_ratesScalarFieldEnum[]
  }


  /**
   * service_rates findFirstOrThrow
   */
  export type service_ratesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * Filter, which service_rates to fetch.
     */
    where?: service_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_rates to fetch.
     */
    orderBy?: service_ratesOrderByWithRelationInput | service_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for service_rates.
     */
    cursor?: service_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of service_rates.
     */
    distinct?: Service_ratesScalarFieldEnum | Service_ratesScalarFieldEnum[]
  }


  /**
   * service_rates findMany
   */
  export type service_ratesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * Filter, which service_rates to fetch.
     */
    where?: service_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of service_rates to fetch.
     */
    orderBy?: service_ratesOrderByWithRelationInput | service_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing service_rates.
     */
    cursor?: service_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` service_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` service_rates.
     */
    skip?: number
    distinct?: Service_ratesScalarFieldEnum | Service_ratesScalarFieldEnum[]
  }


  /**
   * service_rates create
   */
  export type service_ratesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * The data needed to create a service_rates.
     */
    data: XOR<service_ratesCreateInput, service_ratesUncheckedCreateInput>
  }


  /**
   * service_rates createMany
   */
  export type service_ratesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many service_rates.
     */
    data: service_ratesCreateManyInput | service_ratesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * service_rates update
   */
  export type service_ratesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * The data needed to update a service_rates.
     */
    data: XOR<service_ratesUpdateInput, service_ratesUncheckedUpdateInput>
    /**
     * Choose, which service_rates to update.
     */
    where: service_ratesWhereUniqueInput
  }


  /**
   * service_rates updateMany
   */
  export type service_ratesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update service_rates.
     */
    data: XOR<service_ratesUpdateManyMutationInput, service_ratesUncheckedUpdateManyInput>
    /**
     * Filter which service_rates to update
     */
    where?: service_ratesWhereInput
  }


  /**
   * service_rates upsert
   */
  export type service_ratesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * The filter to search for the service_rates to update in case it exists.
     */
    where: service_ratesWhereUniqueInput
    /**
     * In case the service_rates found by the `where` argument doesn't exist, create a new service_rates with this data.
     */
    create: XOR<service_ratesCreateInput, service_ratesUncheckedCreateInput>
    /**
     * In case the service_rates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<service_ratesUpdateInput, service_ratesUncheckedUpdateInput>
  }


  /**
   * service_rates delete
   */
  export type service_ratesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    /**
     * Filter which service_rates to delete.
     */
    where: service_ratesWhereUniqueInput
  }


  /**
   * service_rates deleteMany
   */
  export type service_ratesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service_rates to delete
     */
    where?: service_ratesWhereInput
  }


  /**
   * service_rates without action
   */
  export type service_ratesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
  }



  /**
   * Model services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    service_id: number | null
  }

  export type ServicesSumAggregateOutputType = {
    service_id: number | null
  }

  export type ServicesMinAggregateOutputType = {
    service_id: number | null
    service_desc: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    service_id: number | null
    service_desc: string | null
  }

  export type ServicesCountAggregateOutputType = {
    service_id: number
    service_desc: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    service_id?: true
  }

  export type ServicesSumAggregateInputType = {
    service_id?: true
  }

  export type ServicesMinAggregateInputType = {
    service_id?: true
    service_desc?: true
  }

  export type ServicesMaxAggregateInputType = {
    service_id?: true
    service_desc?: true
  }

  export type ServicesCountAggregateInputType = {
    service_id?: true
    service_desc?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    service_id: number
    service_desc: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    service_desc?: boolean
    order_to_services?: boolean | services$order_to_servicesArgs<ExtArgs>
    service_rates?: boolean | services$service_ratesArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectScalar = {
    service_id?: boolean
    service_desc?: boolean
  }

  export type servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_to_services?: boolean | services$order_to_servicesArgs<ExtArgs>
    service_rates?: boolean | services$service_ratesArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "services"
    objects: {
      order_to_services: Prisma.$order_to_servicesPayload<ExtArgs>[]
      service_rates: Prisma.$service_ratesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      service_id: number
      service_desc: string
    }, ExtArgs["result"]["services"]>
    composites: {}
  }


  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<servicesFindManyArgs, 'select' | 'include'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends servicesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Services that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends servicesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `service_id`
     * const servicesWithService_idOnly = await prisma.services.findMany({ select: { service_id: true } })
     * 
    **/
    findMany<T extends servicesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
    **/
    create<T extends servicesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, servicesCreateArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Services.
     *     @param {servicesCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const services = await prisma.services.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends servicesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
    **/
    delete<T extends servicesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends servicesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends servicesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends servicesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
    **/
    upsert<T extends servicesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>
    ): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the services model
   */
  readonly fields: servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order_to_services<T extends services$order_to_servicesArgs<ExtArgs> = {}>(args?: Subset<T, services$order_to_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_to_servicesPayload<ExtArgs>, T, 'findMany'> | Null>;

    service_rates<T extends services$service_ratesArgs<ExtArgs> = {}>(args?: Subset<T, services$service_ratesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$service_ratesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the services model
   */ 
  interface servicesFieldRefs {
    readonly service_id: FieldRef<"services", 'Int'>
    readonly service_desc: FieldRef<"services", 'String'>
  }
    

  // Custom InputTypes

  /**
   * services findUnique
   */
  export type servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }


  /**
   * services findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }


  /**
   * services findFirst
   */
  export type servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }


  /**
   * services findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }


  /**
   * services findMany
   */
  export type servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }


  /**
   * services create
   */
  export type servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }


  /**
   * services createMany
   */
  export type servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * services update
   */
  export type servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }


  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
  }


  /**
   * services upsert
   */
  export type servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }


  /**
   * services delete
   */
  export type servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }


  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
  }


  /**
   * services.order_to_services
   */
  export type services$order_to_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_to_services
     */
    select?: order_to_servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: order_to_servicesInclude<ExtArgs> | null
    where?: order_to_servicesWhereInput
    orderBy?: order_to_servicesOrderByWithRelationInput | order_to_servicesOrderByWithRelationInput[]
    cursor?: order_to_servicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_to_servicesScalarFieldEnum | Order_to_servicesScalarFieldEnum[]
  }


  /**
   * services.service_rates
   */
  export type services$service_ratesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service_rates
     */
    select?: service_ratesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: service_ratesInclude<ExtArgs> | null
    where?: service_ratesWhereInput
    orderBy?: service_ratesOrderByWithRelationInput | service_ratesOrderByWithRelationInput[]
    cursor?: service_ratesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Service_ratesScalarFieldEnum | Service_ratesScalarFieldEnum[]
  }


  /**
   * services without action
   */
  export type servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: servicesInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    caregiver_id: string | null
    birth_date: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    address: string | null
    phone_number: string | null
    profile_picture_url: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    caregiver_id: string | null
    birth_date: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    address: string | null
    phone_number: string | null
    profile_picture_url: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    caregiver_id: number
    birth_date: number
    first_name: number
    last_name: number
    email: number
    password: number
    address: number
    phone_number: number
    profile_picture_url: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    caregiver_id?: true
    birth_date?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    address?: true
    phone_number?: true
    profile_picture_url?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    caregiver_id?: true
    birth_date?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    address?: true
    phone_number?: true
    profile_picture_url?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    caregiver_id?: true
    birth_date?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    address?: true
    phone_number?: true
    profile_picture_url?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    caregiver_id: string | null
    birth_date: Date | null
    first_name: string | null
    last_name: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url: string | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    caregiver_id?: boolean
    birth_date?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone_number?: boolean
    profile_picture_url?: boolean
    created_at?: boolean
    orders?: boolean | users$ordersArgs<ExtArgs>
    caregivers?: boolean | users$caregiversArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    caregiver_id?: boolean
    birth_date?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone_number?: boolean
    profile_picture_url?: boolean
    created_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | users$ordersArgs<ExtArgs>
    caregivers?: boolean | users$caregiversArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
      caregivers: Prisma.$caregiversPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      caregiver_id: string | null
      birth_date: Date | null
      first_name: string | null
      last_name: string | null
      email: string
      password: string
      address: string
      phone_number: string
      profile_picture_url: string | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

    caregivers<T extends users$caregiversArgs<ExtArgs> = {}>(args?: Subset<T, users$caregiversArgs<ExtArgs>>): Prisma__caregiversClient<$Result.GetResult<Prisma.$caregiversPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly caregiver_id: FieldRef<"users", 'String'>
    readonly birth_date: FieldRef<"users", 'DateTime'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly profile_picture_url: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * users.caregivers
   */
  export type users$caregiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caregivers
     */
    select?: caregiversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: caregiversInclude<ExtArgs> | null
    where?: caregiversWhereInput
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Caregiver_educationScalarFieldEnum: {
    id: 'id',
    education_desc: 'education_desc'
  };

  export type Caregiver_educationScalarFieldEnum = (typeof Caregiver_educationScalarFieldEnum)[keyof typeof Caregiver_educationScalarFieldEnum]


  export const CaregiversScalarFieldEnum: {
    caregiver_id: 'caregiver_id',
    created_at: 'created_at',
    education_id: 'education_id',
    year_experience: 'year_experience'
  };

  export type CaregiversScalarFieldEnum = (typeof CaregiversScalarFieldEnum)[keyof typeof CaregiversScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    caregiver_id: 'caregiver_id',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const Order_journey_statusScalarFieldEnum: {
    journey_status_id: 'journey_status_id',
    journey_desc: 'journey_desc'
  };

  export type Order_journey_statusScalarFieldEnum = (typeof Order_journey_statusScalarFieldEnum)[keyof typeof Order_journey_statusScalarFieldEnum]


  export const Order_journeysScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    journey_status: 'journey_status',
    created_at: 'created_at'
  };

  export type Order_journeysScalarFieldEnum = (typeof Order_journeysScalarFieldEnum)[keyof typeof Order_journeysScalarFieldEnum]


  export const Order_statusScalarFieldEnum: {
    order_status: 'order_status',
    order_status_desc: 'order_status_desc'
  };

  export type Order_statusScalarFieldEnum = (typeof Order_statusScalarFieldEnum)[keyof typeof Order_statusScalarFieldEnum]


  export const Order_to_servicesScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    service_id: 'service_id'
  };

  export type Order_to_servicesScalarFieldEnum = (typeof Order_to_servicesScalarFieldEnum)[keyof typeof Order_to_servicesScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
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

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    review: 'review',
    review_rating: 'review_rating',
    created_at: 'created_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const Service_ratesScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    service_price: 'service_price',
    created_at: 'created_at'
  };

  export type Service_ratesScalarFieldEnum = (typeof Service_ratesScalarFieldEnum)[keyof typeof Service_ratesScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    service_id: 'service_id',
    service_desc: 'service_desc'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type caregiver_educationWhereInput = {
    AND?: caregiver_educationWhereInput | caregiver_educationWhereInput[]
    OR?: caregiver_educationWhereInput[]
    NOT?: caregiver_educationWhereInput | caregiver_educationWhereInput[]
    id?: IntFilter<"caregiver_education"> | number
    education_desc?: StringFilter<"caregiver_education"> | string
  }

  export type caregiver_educationOrderByWithRelationInput = {
    id?: SortOrder
    education_desc?: SortOrder
  }

  export type caregiver_educationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: caregiver_educationWhereInput | caregiver_educationWhereInput[]
    OR?: caregiver_educationWhereInput[]
    NOT?: caregiver_educationWhereInput | caregiver_educationWhereInput[]
    education_desc?: StringFilter<"caregiver_education"> | string
  }, "id">

  export type caregiver_educationOrderByWithAggregationInput = {
    id?: SortOrder
    education_desc?: SortOrder
    _count?: caregiver_educationCountOrderByAggregateInput
    _avg?: caregiver_educationAvgOrderByAggregateInput
    _max?: caregiver_educationMaxOrderByAggregateInput
    _min?: caregiver_educationMinOrderByAggregateInput
    _sum?: caregiver_educationSumOrderByAggregateInput
  }

  export type caregiver_educationScalarWhereWithAggregatesInput = {
    AND?: caregiver_educationScalarWhereWithAggregatesInput | caregiver_educationScalarWhereWithAggregatesInput[]
    OR?: caregiver_educationScalarWhereWithAggregatesInput[]
    NOT?: caregiver_educationScalarWhereWithAggregatesInput | caregiver_educationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"caregiver_education"> | number
    education_desc?: StringWithAggregatesFilter<"caregiver_education"> | string
  }

  export type caregiversWhereInput = {
    AND?: caregiversWhereInput | caregiversWhereInput[]
    OR?: caregiversWhereInput[]
    NOT?: caregiversWhereInput | caregiversWhereInput[]
    caregiver_id?: StringFilter<"caregivers"> | string
    created_at?: DateTimeFilter<"caregivers"> | Date | string
    education_id?: IntNullableFilter<"caregivers"> | number | null
    year_experience?: IntNullableFilter<"caregivers"> | number | null
    events?: EventsListRelationFilter
    orders?: OrdersListRelationFilter
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type caregiversOrderByWithRelationInput = {
    caregiver_id?: SortOrder
    created_at?: SortOrder
    education_id?: SortOrderInput | SortOrder
    year_experience?: SortOrderInput | SortOrder
    events?: eventsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type caregiversWhereUniqueInput = Prisma.AtLeast<{
    caregiver_id?: string
    AND?: caregiversWhereInput | caregiversWhereInput[]
    OR?: caregiversWhereInput[]
    NOT?: caregiversWhereInput | caregiversWhereInput[]
    created_at?: DateTimeFilter<"caregivers"> | Date | string
    education_id?: IntNullableFilter<"caregivers"> | number | null
    year_experience?: IntNullableFilter<"caregivers"> | number | null
    events?: EventsListRelationFilter
    orders?: OrdersListRelationFilter
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "caregiver_id">

  export type caregiversOrderByWithAggregationInput = {
    caregiver_id?: SortOrder
    created_at?: SortOrder
    education_id?: SortOrderInput | SortOrder
    year_experience?: SortOrderInput | SortOrder
    _count?: caregiversCountOrderByAggregateInput
    _avg?: caregiversAvgOrderByAggregateInput
    _max?: caregiversMaxOrderByAggregateInput
    _min?: caregiversMinOrderByAggregateInput
    _sum?: caregiversSumOrderByAggregateInput
  }

  export type caregiversScalarWhereWithAggregatesInput = {
    AND?: caregiversScalarWhereWithAggregatesInput | caregiversScalarWhereWithAggregatesInput[]
    OR?: caregiversScalarWhereWithAggregatesInput[]
    NOT?: caregiversScalarWhereWithAggregatesInput | caregiversScalarWhereWithAggregatesInput[]
    caregiver_id?: StringWithAggregatesFilter<"caregivers"> | string
    created_at?: DateTimeWithAggregatesFilter<"caregivers"> | Date | string
    education_id?: IntNullableWithAggregatesFilter<"caregivers"> | number | null
    year_experience?: IntNullableWithAggregatesFilter<"caregivers"> | number | null
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    caregiver_id?: StringFilter<"events"> | string
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    created_at?: DateTimeFilter<"events"> | Date | string
    deleted_at?: DateTimeNullableFilter<"events"> | Date | string | null
    caregivers?: XOR<CaregiversRelationFilter, caregiversWhereInput>
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    caregiver_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    caregivers?: caregiversOrderByWithRelationInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    caregiver_id?: StringFilter<"events"> | string
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    created_at?: DateTimeFilter<"events"> | Date | string
    deleted_at?: DateTimeNullableFilter<"events"> | Date | string | null
    caregivers?: XOR<CaregiversRelationFilter, caregiversWhereInput>
  }, "id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    caregiver_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    caregiver_id?: StringWithAggregatesFilter<"events"> | string
    start_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"events"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null
  }

  export type order_journey_statusWhereInput = {
    AND?: order_journey_statusWhereInput | order_journey_statusWhereInput[]
    OR?: order_journey_statusWhereInput[]
    NOT?: order_journey_statusWhereInput | order_journey_statusWhereInput[]
    journey_status_id?: IntFilter<"order_journey_status"> | number
    journey_desc?: StringFilter<"order_journey_status"> | string
    order_journeys?: Order_journeysListRelationFilter
  }

  export type order_journey_statusOrderByWithRelationInput = {
    journey_status_id?: SortOrder
    journey_desc?: SortOrder
    order_journeys?: order_journeysOrderByRelationAggregateInput
  }

  export type order_journey_statusWhereUniqueInput = Prisma.AtLeast<{
    journey_status_id?: number
    AND?: order_journey_statusWhereInput | order_journey_statusWhereInput[]
    OR?: order_journey_statusWhereInput[]
    NOT?: order_journey_statusWhereInput | order_journey_statusWhereInput[]
    journey_desc?: StringFilter<"order_journey_status"> | string
    order_journeys?: Order_journeysListRelationFilter
  }, "journey_status_id">

  export type order_journey_statusOrderByWithAggregationInput = {
    journey_status_id?: SortOrder
    journey_desc?: SortOrder
    _count?: order_journey_statusCountOrderByAggregateInput
    _avg?: order_journey_statusAvgOrderByAggregateInput
    _max?: order_journey_statusMaxOrderByAggregateInput
    _min?: order_journey_statusMinOrderByAggregateInput
    _sum?: order_journey_statusSumOrderByAggregateInput
  }

  export type order_journey_statusScalarWhereWithAggregatesInput = {
    AND?: order_journey_statusScalarWhereWithAggregatesInput | order_journey_statusScalarWhereWithAggregatesInput[]
    OR?: order_journey_statusScalarWhereWithAggregatesInput[]
    NOT?: order_journey_statusScalarWhereWithAggregatesInput | order_journey_statusScalarWhereWithAggregatesInput[]
    journey_status_id?: IntWithAggregatesFilter<"order_journey_status"> | number
    journey_desc?: StringWithAggregatesFilter<"order_journey_status"> | string
  }

  export type order_journeysWhereInput = {
    AND?: order_journeysWhereInput | order_journeysWhereInput[]
    OR?: order_journeysWhereInput[]
    NOT?: order_journeysWhereInput | order_journeysWhereInput[]
    id?: IntFilter<"order_journeys"> | number
    order_id?: StringFilter<"order_journeys"> | string
    journey_status?: IntFilter<"order_journeys"> | number
    created_at?: DateTimeFilter<"order_journeys"> | Date | string
    orders?: XOR<OrdersRelationFilter, ordersWhereInput>
    order_journey_status?: XOR<Order_journey_statusRelationFilter, order_journey_statusWhereInput>
  }

  export type order_journeysOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    journey_status?: SortOrder
    created_at?: SortOrder
    orders?: ordersOrderByWithRelationInput
    order_journey_status?: order_journey_statusOrderByWithRelationInput
  }

  export type order_journeysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_journeysWhereInput | order_journeysWhereInput[]
    OR?: order_journeysWhereInput[]
    NOT?: order_journeysWhereInput | order_journeysWhereInput[]
    order_id?: StringFilter<"order_journeys"> | string
    journey_status?: IntFilter<"order_journeys"> | number
    created_at?: DateTimeFilter<"order_journeys"> | Date | string
    orders?: XOR<OrdersRelationFilter, ordersWhereInput>
    order_journey_status?: XOR<Order_journey_statusRelationFilter, order_journey_statusWhereInput>
  }, "id">

  export type order_journeysOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    journey_status?: SortOrder
    created_at?: SortOrder
    _count?: order_journeysCountOrderByAggregateInput
    _avg?: order_journeysAvgOrderByAggregateInput
    _max?: order_journeysMaxOrderByAggregateInput
    _min?: order_journeysMinOrderByAggregateInput
    _sum?: order_journeysSumOrderByAggregateInput
  }

  export type order_journeysScalarWhereWithAggregatesInput = {
    AND?: order_journeysScalarWhereWithAggregatesInput | order_journeysScalarWhereWithAggregatesInput[]
    OR?: order_journeysScalarWhereWithAggregatesInput[]
    NOT?: order_journeysScalarWhereWithAggregatesInput | order_journeysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_journeys"> | number
    order_id?: StringWithAggregatesFilter<"order_journeys"> | string
    journey_status?: IntWithAggregatesFilter<"order_journeys"> | number
    created_at?: DateTimeWithAggregatesFilter<"order_journeys"> | Date | string
  }

  export type order_statusWhereInput = {
    AND?: order_statusWhereInput | order_statusWhereInput[]
    OR?: order_statusWhereInput[]
    NOT?: order_statusWhereInput | order_statusWhereInput[]
    order_status?: IntFilter<"order_status"> | number
    order_status_desc?: StringFilter<"order_status"> | string
    orders_orders_order_statusToorder_status?: OrdersListRelationFilter
  }

  export type order_statusOrderByWithRelationInput = {
    order_status?: SortOrder
    order_status_desc?: SortOrder
    orders_orders_order_statusToorder_status?: ordersOrderByRelationAggregateInput
  }

  export type order_statusWhereUniqueInput = Prisma.AtLeast<{
    order_status?: number
    AND?: order_statusWhereInput | order_statusWhereInput[]
    OR?: order_statusWhereInput[]
    NOT?: order_statusWhereInput | order_statusWhereInput[]
    order_status_desc?: StringFilter<"order_status"> | string
    orders_orders_order_statusToorder_status?: OrdersListRelationFilter
  }, "order_status">

  export type order_statusOrderByWithAggregationInput = {
    order_status?: SortOrder
    order_status_desc?: SortOrder
    _count?: order_statusCountOrderByAggregateInput
    _avg?: order_statusAvgOrderByAggregateInput
    _max?: order_statusMaxOrderByAggregateInput
    _min?: order_statusMinOrderByAggregateInput
    _sum?: order_statusSumOrderByAggregateInput
  }

  export type order_statusScalarWhereWithAggregatesInput = {
    AND?: order_statusScalarWhereWithAggregatesInput | order_statusScalarWhereWithAggregatesInput[]
    OR?: order_statusScalarWhereWithAggregatesInput[]
    NOT?: order_statusScalarWhereWithAggregatesInput | order_statusScalarWhereWithAggregatesInput[]
    order_status?: IntWithAggregatesFilter<"order_status"> | number
    order_status_desc?: StringWithAggregatesFilter<"order_status"> | string
  }

  export type order_to_servicesWhereInput = {
    AND?: order_to_servicesWhereInput | order_to_servicesWhereInput[]
    OR?: order_to_servicesWhereInput[]
    NOT?: order_to_servicesWhereInput | order_to_servicesWhereInput[]
    id?: IntFilter<"order_to_services"> | number
    order_id?: StringFilter<"order_to_services"> | string
    service_id?: IntFilter<"order_to_services"> | number
    orders?: XOR<OrdersRelationFilter, ordersWhereInput>
    services?: XOR<ServicesRelationFilter, servicesWhereInput>
  }

  export type order_to_servicesOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    service_id?: SortOrder
    orders?: ordersOrderByWithRelationInput
    services?: servicesOrderByWithRelationInput
  }

  export type order_to_servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_to_servicesWhereInput | order_to_servicesWhereInput[]
    OR?: order_to_servicesWhereInput[]
    NOT?: order_to_servicesWhereInput | order_to_servicesWhereInput[]
    order_id?: StringFilter<"order_to_services"> | string
    service_id?: IntFilter<"order_to_services"> | number
    orders?: XOR<OrdersRelationFilter, ordersWhereInput>
    services?: XOR<ServicesRelationFilter, servicesWhereInput>
  }, "id">

  export type order_to_servicesOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    service_id?: SortOrder
    _count?: order_to_servicesCountOrderByAggregateInput
    _avg?: order_to_servicesAvgOrderByAggregateInput
    _max?: order_to_servicesMaxOrderByAggregateInput
    _min?: order_to_servicesMinOrderByAggregateInput
    _sum?: order_to_servicesSumOrderByAggregateInput
  }

  export type order_to_servicesScalarWhereWithAggregatesInput = {
    AND?: order_to_servicesScalarWhereWithAggregatesInput | order_to_servicesScalarWhereWithAggregatesInput[]
    OR?: order_to_servicesScalarWhereWithAggregatesInput[]
    NOT?: order_to_servicesScalarWhereWithAggregatesInput | order_to_servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_to_services"> | number
    order_id?: StringWithAggregatesFilter<"order_to_services"> | string
    service_id?: IntWithAggregatesFilter<"order_to_services"> | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_id?: StringFilter<"orders"> | string
    caregiver_id?: StringFilter<"orders"> | string
    user_id?: StringFilter<"orders"> | string
    order_status?: IntFilter<"orders"> | number
    received_timestamp?: DateTimeFilter<"orders"> | Date | string
    date_start?: DateTimeFilter<"orders"> | Date | string
    date_end?: DateTimeFilter<"orders"> | Date | string
    price?: FloatFilter<"orders"> | number
    address?: StringFilter<"orders"> | string
    order_journeys?: Order_journeysListRelationFilter
    order_to_services?: Order_to_servicesListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
    caregivers?: XOR<CaregiversRelationFilter, caregiversWhereInput>
    order_status_orders_order_statusToorder_status?: XOR<Order_statusRelationFilter, order_statusWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    caregiver_id?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    received_timestamp?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    price?: SortOrder
    address?: SortOrder
    order_journeys?: order_journeysOrderByRelationAggregateInput
    order_to_services?: order_to_servicesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    caregivers?: caregiversOrderByWithRelationInput
    order_status_orders_order_statusToorder_status?: order_statusOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    caregiver_id?: StringFilter<"orders"> | string
    user_id?: StringFilter<"orders"> | string
    order_status?: IntFilter<"orders"> | number
    received_timestamp?: DateTimeFilter<"orders"> | Date | string
    date_start?: DateTimeFilter<"orders"> | Date | string
    date_end?: DateTimeFilter<"orders"> | Date | string
    price?: FloatFilter<"orders"> | number
    address?: StringFilter<"orders"> | string
    order_journeys?: Order_journeysListRelationFilter
    order_to_services?: Order_to_servicesListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
    caregivers?: XOR<CaregiversRelationFilter, caregiversWhereInput>
    order_status_orders_order_statusToorder_status?: XOR<Order_statusRelationFilter, order_statusWhereInput>
  }, "order_id">

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    caregiver_id?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    received_timestamp?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    price?: SortOrder
    address?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    order_id?: StringWithAggregatesFilter<"orders"> | string
    caregiver_id?: StringWithAggregatesFilter<"orders"> | string
    user_id?: StringWithAggregatesFilter<"orders"> | string
    order_status?: IntWithAggregatesFilter<"orders"> | number
    received_timestamp?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    date_start?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    date_end?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    price?: FloatWithAggregatesFilter<"orders"> | number
    address?: StringWithAggregatesFilter<"orders"> | string
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    id?: IntFilter<"reviews"> | number
    order_id?: StringFilter<"reviews"> | string
    review?: StringFilter<"reviews"> | string
    review_rating?: FloatFilter<"reviews"> | number
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
  }

  export type reviewsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    review?: SortOrder
    review_rating?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_id?: string
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    review?: StringFilter<"reviews"> | string
    review_rating?: FloatFilter<"reviews"> | number
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
  }, "id" | "order_id">

  export type reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    review?: SortOrder
    review_rating?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reviews"> | number
    order_id?: StringWithAggregatesFilter<"reviews"> | string
    review?: StringWithAggregatesFilter<"reviews"> | string
    review_rating?: FloatWithAggregatesFilter<"reviews"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null
  }

  export type service_ratesWhereInput = {
    AND?: service_ratesWhereInput | service_ratesWhereInput[]
    OR?: service_ratesWhereInput[]
    NOT?: service_ratesWhereInput | service_ratesWhereInput[]
    id?: IntFilter<"service_rates"> | number
    service_id?: IntFilter<"service_rates"> | number
    service_price?: FloatFilter<"service_rates"> | number
    created_at?: DateTimeFilter<"service_rates"> | Date | string
    services?: XOR<ServicesRelationFilter, servicesWhereInput>
  }

  export type service_ratesOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
    created_at?: SortOrder
    services?: servicesOrderByWithRelationInput
  }

  export type service_ratesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: service_ratesWhereInput | service_ratesWhereInput[]
    OR?: service_ratesWhereInput[]
    NOT?: service_ratesWhereInput | service_ratesWhereInput[]
    service_id?: IntFilter<"service_rates"> | number
    service_price?: FloatFilter<"service_rates"> | number
    created_at?: DateTimeFilter<"service_rates"> | Date | string
    services?: XOR<ServicesRelationFilter, servicesWhereInput>
  }, "id">

  export type service_ratesOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
    created_at?: SortOrder
    _count?: service_ratesCountOrderByAggregateInput
    _avg?: service_ratesAvgOrderByAggregateInput
    _max?: service_ratesMaxOrderByAggregateInput
    _min?: service_ratesMinOrderByAggregateInput
    _sum?: service_ratesSumOrderByAggregateInput
  }

  export type service_ratesScalarWhereWithAggregatesInput = {
    AND?: service_ratesScalarWhereWithAggregatesInput | service_ratesScalarWhereWithAggregatesInput[]
    OR?: service_ratesScalarWhereWithAggregatesInput[]
    NOT?: service_ratesScalarWhereWithAggregatesInput | service_ratesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"service_rates"> | number
    service_id?: IntWithAggregatesFilter<"service_rates"> | number
    service_price?: FloatWithAggregatesFilter<"service_rates"> | number
    created_at?: DateTimeWithAggregatesFilter<"service_rates"> | Date | string
  }

  export type servicesWhereInput = {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    service_id?: IntFilter<"services"> | number
    service_desc?: StringFilter<"services"> | string
    order_to_services?: Order_to_servicesListRelationFilter
    service_rates?: Service_ratesListRelationFilter
  }

  export type servicesOrderByWithRelationInput = {
    service_id?: SortOrder
    service_desc?: SortOrder
    order_to_services?: order_to_servicesOrderByRelationAggregateInput
    service_rates?: service_ratesOrderByRelationAggregateInput
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    service_id?: number
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    service_desc?: StringFilter<"services"> | string
    order_to_services?: Order_to_servicesListRelationFilter
    service_rates?: Service_ratesListRelationFilter
  }, "service_id">

  export type servicesOrderByWithAggregationInput = {
    service_id?: SortOrder
    service_desc?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    service_id?: IntWithAggregatesFilter<"services"> | number
    service_desc?: StringWithAggregatesFilter<"services"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: StringFilter<"users"> | string
    caregiver_id?: StringNullableFilter<"users"> | string | null
    birth_date?: DateTimeNullableFilter<"users"> | Date | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    profile_picture_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    orders?: OrdersListRelationFilter
    caregivers?: XOR<CaregiversNullableRelationFilter, caregiversWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    caregiver_id?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    orders?: ordersOrderByRelationAggregateInput
    caregivers?: caregiversOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    caregiver_id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    birth_date?: DateTimeNullableFilter<"users"> | Date | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    address?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    profile_picture_url?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    orders?: OrdersListRelationFilter
    caregivers?: XOR<CaregiversNullableRelationFilter, caregiversWhereInput> | null
  }, "user_id" | "caregiver_id">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    caregiver_id?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"users"> | string
    caregiver_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    address?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringWithAggregatesFilter<"users"> | string
    profile_picture_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type caregiver_educationCreateInput = {
    education_desc: string
  }

  export type caregiver_educationUncheckedCreateInput = {
    id?: number
    education_desc: string
  }

  export type caregiver_educationUpdateInput = {
    education_desc?: StringFieldUpdateOperationsInput | string
  }

  export type caregiver_educationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    education_desc?: StringFieldUpdateOperationsInput | string
  }

  export type caregiver_educationCreateManyInput = {
    id?: number
    education_desc: string
  }

  export type caregiver_educationUpdateManyMutationInput = {
    education_desc?: StringFieldUpdateOperationsInput | string
  }

  export type caregiver_educationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    education_desc?: StringFieldUpdateOperationsInput | string
  }

  export type caregiversCreateInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    events?: eventsCreateNestedManyWithoutCaregiversInput
    orders?: ordersCreateNestedManyWithoutCaregiversInput
    users?: usersCreateNestedOneWithoutCaregiversInput
  }

  export type caregiversUncheckedCreateInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    events?: eventsUncheckedCreateNestedManyWithoutCaregiversInput
    orders?: ordersUncheckedCreateNestedManyWithoutCaregiversInput
    users?: usersUncheckedCreateNestedOneWithoutCaregiversInput
  }

  export type caregiversUpdateInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUpdateManyWithoutCaregiversNestedInput
    orders?: ordersUpdateManyWithoutCaregiversNestedInput
    users?: usersUpdateOneWithoutCaregiversNestedInput
  }

  export type caregiversUncheckedUpdateInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUncheckedUpdateManyWithoutCaregiversNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCaregiversNestedInput
    users?: usersUncheckedUpdateOneWithoutCaregiversNestedInput
  }

  export type caregiversCreateManyInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
  }

  export type caregiversUpdateManyMutationInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type caregiversUncheckedUpdateManyInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventsCreateInput = {
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
    caregivers: caregiversCreateNestedOneWithoutEventsInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    caregiver_id: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type eventsUpdateInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caregivers?: caregiversUpdateOneRequiredWithoutEventsNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiver_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsCreateManyInput = {
    id?: number
    caregiver_id: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type eventsUpdateManyMutationInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiver_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_journey_statusCreateInput = {
    journey_status_id: number
    journey_desc: string
    order_journeys?: order_journeysCreateNestedManyWithoutOrder_journey_statusInput
  }

  export type order_journey_statusUncheckedCreateInput = {
    journey_status_id: number
    journey_desc: string
    order_journeys?: order_journeysUncheckedCreateNestedManyWithoutOrder_journey_statusInput
  }

  export type order_journey_statusUpdateInput = {
    journey_status_id?: IntFieldUpdateOperationsInput | number
    journey_desc?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUpdateManyWithoutOrder_journey_statusNestedInput
  }

  export type order_journey_statusUncheckedUpdateInput = {
    journey_status_id?: IntFieldUpdateOperationsInput | number
    journey_desc?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUncheckedUpdateManyWithoutOrder_journey_statusNestedInput
  }

  export type order_journey_statusCreateManyInput = {
    journey_status_id: number
    journey_desc: string
  }

  export type order_journey_statusUpdateManyMutationInput = {
    journey_status_id?: IntFieldUpdateOperationsInput | number
    journey_desc?: StringFieldUpdateOperationsInput | string
  }

  export type order_journey_statusUncheckedUpdateManyInput = {
    journey_status_id?: IntFieldUpdateOperationsInput | number
    journey_desc?: StringFieldUpdateOperationsInput | string
  }

  export type order_journeysCreateInput = {
    created_at?: Date | string
    orders: ordersCreateNestedOneWithoutOrder_journeysInput
    order_journey_status: order_journey_statusCreateNestedOneWithoutOrder_journeysInput
  }

  export type order_journeysUncheckedCreateInput = {
    id?: number
    order_id: string
    journey_status: number
    created_at?: Date | string
  }

  export type order_journeysUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutOrder_journeysNestedInput
    order_journey_status?: order_journey_statusUpdateOneRequiredWithoutOrder_journeysNestedInput
  }

  export type order_journeysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    journey_status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_journeysCreateManyInput = {
    id?: number
    order_id: string
    journey_status: number
    created_at?: Date | string
  }

  export type order_journeysUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_journeysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    journey_status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_statusCreateInput = {
    order_status: number
    order_status_desc: string
    orders_orders_order_statusToorder_status?: ordersCreateNestedManyWithoutOrder_status_orders_order_statusToorder_statusInput
  }

  export type order_statusUncheckedCreateInput = {
    order_status: number
    order_status_desc: string
    orders_orders_order_statusToorder_status?: ordersUncheckedCreateNestedManyWithoutOrder_status_orders_order_statusToorder_statusInput
  }

  export type order_statusUpdateInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_status_desc?: StringFieldUpdateOperationsInput | string
    orders_orders_order_statusToorder_status?: ordersUpdateManyWithoutOrder_status_orders_order_statusToorder_statusNestedInput
  }

  export type order_statusUncheckedUpdateInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_status_desc?: StringFieldUpdateOperationsInput | string
    orders_orders_order_statusToorder_status?: ordersUncheckedUpdateManyWithoutOrder_status_orders_order_statusToorder_statusNestedInput
  }

  export type order_statusCreateManyInput = {
    order_status: number
    order_status_desc: string
  }

  export type order_statusUpdateManyMutationInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_status_desc?: StringFieldUpdateOperationsInput | string
  }

  export type order_statusUncheckedUpdateManyInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_status_desc?: StringFieldUpdateOperationsInput | string
  }

  export type order_to_servicesCreateInput = {
    orders: ordersCreateNestedOneWithoutOrder_to_servicesInput
    services: servicesCreateNestedOneWithoutOrder_to_servicesInput
  }

  export type order_to_servicesUncheckedCreateInput = {
    id?: number
    order_id: string
    service_id: number
  }

  export type order_to_servicesUpdateInput = {
    orders?: ordersUpdateOneRequiredWithoutOrder_to_servicesNestedInput
    services?: servicesUpdateOneRequiredWithoutOrder_to_servicesNestedInput
  }

  export type order_to_servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type order_to_servicesCreateManyInput = {
    id?: number
    order_id: string
    service_id: number
  }

  export type order_to_servicesUpdateManyMutationInput = {

  }

  export type order_to_servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    order_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    caregivers: caregiversCreateNestedOneWithoutOrdersInput
    order_status_orders_order_statusToorder_status: order_statusCreateNestedOneWithoutOrders_orders_order_statusToorder_statusInput
  }

  export type ordersUncheckedCreateInput = {
    order_id: string
    caregiver_id: string
    user_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysUncheckedCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    caregivers?: caregiversUpdateOneRequiredWithoutOrdersNestedInput
    order_status_orders_order_statusToorder_status?: order_statusUpdateOneRequiredWithoutOrders_orders_order_statusToorder_statusNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUncheckedUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    order_id: string
    caregiver_id: string
    user_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
  }

  export type ordersUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsCreateInput = {
    order_id: string
    review: string
    review_rating: number
    created_at?: Date | string | null
  }

  export type reviewsUncheckedCreateInput = {
    id?: number
    order_id: string
    review: string
    review_rating: number
    created_at?: Date | string | null
  }

  export type reviewsUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    review_rating?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    review_rating?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsCreateManyInput = {
    id?: number
    order_id: string
    review: string
    review_rating: number
    created_at?: Date | string | null
  }

  export type reviewsUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    review_rating?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    review_rating?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type service_ratesCreateInput = {
    service_price: number
    created_at?: Date | string
    services: servicesCreateNestedOneWithoutService_ratesInput
  }

  export type service_ratesUncheckedCreateInput = {
    id?: number
    service_id: number
    service_price: number
    created_at?: Date | string
  }

  export type service_ratesUpdateInput = {
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: servicesUpdateOneRequiredWithoutService_ratesNestedInput
  }

  export type service_ratesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_ratesCreateManyInput = {
    id?: number
    service_id: number
    service_price: number
    created_at?: Date | string
  }

  export type service_ratesUpdateManyMutationInput = {
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_ratesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesCreateInput = {
    service_id: number
    service_desc: string
    order_to_services?: order_to_servicesCreateNestedManyWithoutServicesInput
    service_rates?: service_ratesCreateNestedManyWithoutServicesInput
  }

  export type servicesUncheckedCreateInput = {
    service_id: number
    service_desc: string
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutServicesInput
    service_rates?: service_ratesUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
    order_to_services?: order_to_servicesUpdateManyWithoutServicesNestedInput
    service_rates?: service_ratesUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutServicesNestedInput
    service_rates?: service_ratesUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type servicesCreateManyInput = {
    service_id: number
    service_desc: string
  }

  export type servicesUpdateManyMutationInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
  }

  export type servicesUncheckedUpdateManyInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    user_id: string
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
    orders?: ordersCreateNestedManyWithoutUsersInput
    caregivers?: caregiversCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id: string
    caregiver_id?: string | null
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutUsersNestedInput
    caregivers?: caregiversUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id: string
    caregiver_id?: string | null
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type caregiver_educationCountOrderByAggregateInput = {
    id?: SortOrder
    education_desc?: SortOrder
  }

  export type caregiver_educationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type caregiver_educationMaxOrderByAggregateInput = {
    id?: SortOrder
    education_desc?: SortOrder
  }

  export type caregiver_educationMinOrderByAggregateInput = {
    id?: SortOrder
    education_desc?: SortOrder
  }

  export type caregiver_educationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type caregiversCountOrderByAggregateInput = {
    caregiver_id?: SortOrder
    created_at?: SortOrder
    education_id?: SortOrder
    year_experience?: SortOrder
  }

  export type caregiversAvgOrderByAggregateInput = {
    education_id?: SortOrder
    year_experience?: SortOrder
  }

  export type caregiversMaxOrderByAggregateInput = {
    caregiver_id?: SortOrder
    created_at?: SortOrder
    education_id?: SortOrder
    year_experience?: SortOrder
  }

  export type caregiversMinOrderByAggregateInput = {
    caregiver_id?: SortOrder
    created_at?: SortOrder
    education_id?: SortOrder
    year_experience?: SortOrder
  }

  export type caregiversSumOrderByAggregateInput = {
    education_id?: SortOrder
    year_experience?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CaregiversRelationFilter = {
    is?: caregiversWhereInput
    isNot?: caregiversWhereInput
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    caregiver_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    caregiver_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    caregiver_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Order_journeysListRelationFilter = {
    every?: order_journeysWhereInput
    some?: order_journeysWhereInput
    none?: order_journeysWhereInput
  }

  export type order_journeysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_journey_statusCountOrderByAggregateInput = {
    journey_status_id?: SortOrder
    journey_desc?: SortOrder
  }

  export type order_journey_statusAvgOrderByAggregateInput = {
    journey_status_id?: SortOrder
  }

  export type order_journey_statusMaxOrderByAggregateInput = {
    journey_status_id?: SortOrder
    journey_desc?: SortOrder
  }

  export type order_journey_statusMinOrderByAggregateInput = {
    journey_status_id?: SortOrder
    journey_desc?: SortOrder
  }

  export type order_journey_statusSumOrderByAggregateInput = {
    journey_status_id?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type Order_journey_statusRelationFilter = {
    is?: order_journey_statusWhereInput
    isNot?: order_journey_statusWhereInput
  }

  export type order_journeysCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    journey_status?: SortOrder
    created_at?: SortOrder
  }

  export type order_journeysAvgOrderByAggregateInput = {
    id?: SortOrder
    journey_status?: SortOrder
  }

  export type order_journeysMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    journey_status?: SortOrder
    created_at?: SortOrder
  }

  export type order_journeysMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    journey_status?: SortOrder
    created_at?: SortOrder
  }

  export type order_journeysSumOrderByAggregateInput = {
    id?: SortOrder
    journey_status?: SortOrder
  }

  export type order_statusCountOrderByAggregateInput = {
    order_status?: SortOrder
    order_status_desc?: SortOrder
  }

  export type order_statusAvgOrderByAggregateInput = {
    order_status?: SortOrder
  }

  export type order_statusMaxOrderByAggregateInput = {
    order_status?: SortOrder
    order_status_desc?: SortOrder
  }

  export type order_statusMinOrderByAggregateInput = {
    order_status?: SortOrder
    order_status_desc?: SortOrder
  }

  export type order_statusSumOrderByAggregateInput = {
    order_status?: SortOrder
  }

  export type ServicesRelationFilter = {
    is?: servicesWhereInput
    isNot?: servicesWhereInput
  }

  export type order_to_servicesCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    service_id?: SortOrder
  }

  export type order_to_servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
  }

  export type order_to_servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    service_id?: SortOrder
  }

  export type order_to_servicesMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    service_id?: SortOrder
  }

  export type order_to_servicesSumOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Order_to_servicesListRelationFilter = {
    every?: order_to_servicesWhereInput
    some?: order_to_servicesWhereInput
    none?: order_to_servicesWhereInput
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Order_statusRelationFilter = {
    is?: order_statusWhereInput
    isNot?: order_statusWhereInput
  }

  export type order_to_servicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    caregiver_id?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    received_timestamp?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    price?: SortOrder
    address?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_status?: SortOrder
    price?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    caregiver_id?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    received_timestamp?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    price?: SortOrder
    address?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    caregiver_id?: SortOrder
    user_id?: SortOrder
    order_status?: SortOrder
    received_timestamp?: SortOrder
    date_start?: SortOrder
    date_end?: SortOrder
    price?: SortOrder
    address?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_status?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    review?: SortOrder
    review_rating?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    review_rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    review?: SortOrder
    review_rating?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    review?: SortOrder
    review_rating?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    review_rating?: SortOrder
  }

  export type service_ratesCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
    created_at?: SortOrder
  }

  export type service_ratesAvgOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
  }

  export type service_ratesMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
    created_at?: SortOrder
  }

  export type service_ratesMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
    created_at?: SortOrder
  }

  export type service_ratesSumOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    service_price?: SortOrder
  }

  export type Service_ratesListRelationFilter = {
    every?: service_ratesWhereInput
    some?: service_ratesWhereInput
    none?: service_ratesWhereInput
  }

  export type service_ratesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type servicesCountOrderByAggregateInput = {
    service_id?: SortOrder
    service_desc?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    service_id?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    service_id?: SortOrder
    service_desc?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    service_id?: SortOrder
    service_desc?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    service_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CaregiversNullableRelationFilter = {
    is?: caregiversWhereInput | null
    isNot?: caregiversWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    caregiver_id?: SortOrder
    birth_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    profile_picture_url?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    caregiver_id?: SortOrder
    birth_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    profile_picture_url?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    caregiver_id?: SortOrder
    birth_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    profile_picture_url?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eventsCreateNestedManyWithoutCaregiversInput = {
    create?: XOR<eventsCreateWithoutCaregiversInput, eventsUncheckedCreateWithoutCaregiversInput> | eventsCreateWithoutCaregiversInput[] | eventsUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCaregiversInput | eventsCreateOrConnectWithoutCaregiversInput[]
    createMany?: eventsCreateManyCaregiversInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutCaregiversInput = {
    create?: XOR<ordersCreateWithoutCaregiversInput, ordersUncheckedCreateWithoutCaregiversInput> | ordersCreateWithoutCaregiversInput[] | ordersUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCaregiversInput | ordersCreateOrConnectWithoutCaregiversInput[]
    createMany?: ordersCreateManyCaregiversInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCaregiversInput = {
    create?: XOR<usersCreateWithoutCaregiversInput, usersUncheckedCreateWithoutCaregiversInput>
    connectOrCreate?: usersCreateOrConnectWithoutCaregiversInput
    connect?: usersWhereUniqueInput
  }

  export type eventsUncheckedCreateNestedManyWithoutCaregiversInput = {
    create?: XOR<eventsCreateWithoutCaregiversInput, eventsUncheckedCreateWithoutCaregiversInput> | eventsCreateWithoutCaregiversInput[] | eventsUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCaregiversInput | eventsCreateOrConnectWithoutCaregiversInput[]
    createMany?: eventsCreateManyCaregiversInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCaregiversInput = {
    create?: XOR<ordersCreateWithoutCaregiversInput, ordersUncheckedCreateWithoutCaregiversInput> | ordersCreateWithoutCaregiversInput[] | ordersUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCaregiversInput | ordersCreateOrConnectWithoutCaregiversInput[]
    createMany?: ordersCreateManyCaregiversInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedOneWithoutCaregiversInput = {
    create?: XOR<usersCreateWithoutCaregiversInput, usersUncheckedCreateWithoutCaregiversInput>
    connectOrCreate?: usersCreateOrConnectWithoutCaregiversInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eventsUpdateManyWithoutCaregiversNestedInput = {
    create?: XOR<eventsCreateWithoutCaregiversInput, eventsUncheckedCreateWithoutCaregiversInput> | eventsCreateWithoutCaregiversInput[] | eventsUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCaregiversInput | eventsCreateOrConnectWithoutCaregiversInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutCaregiversInput | eventsUpsertWithWhereUniqueWithoutCaregiversInput[]
    createMany?: eventsCreateManyCaregiversInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutCaregiversInput | eventsUpdateWithWhereUniqueWithoutCaregiversInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutCaregiversInput | eventsUpdateManyWithWhereWithoutCaregiversInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutCaregiversNestedInput = {
    create?: XOR<ordersCreateWithoutCaregiversInput, ordersUncheckedCreateWithoutCaregiversInput> | ordersCreateWithoutCaregiversInput[] | ordersUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCaregiversInput | ordersCreateOrConnectWithoutCaregiversInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCaregiversInput | ordersUpsertWithWhereUniqueWithoutCaregiversInput[]
    createMany?: ordersCreateManyCaregiversInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCaregiversInput | ordersUpdateWithWhereUniqueWithoutCaregiversInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCaregiversInput | ordersUpdateManyWithWhereWithoutCaregiversInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type usersUpdateOneWithoutCaregiversNestedInput = {
    create?: XOR<usersCreateWithoutCaregiversInput, usersUncheckedCreateWithoutCaregiversInput>
    connectOrCreate?: usersCreateOrConnectWithoutCaregiversInput
    upsert?: usersUpsertWithoutCaregiversInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCaregiversInput, usersUpdateWithoutCaregiversInput>, usersUncheckedUpdateWithoutCaregiversInput>
  }

  export type eventsUncheckedUpdateManyWithoutCaregiversNestedInput = {
    create?: XOR<eventsCreateWithoutCaregiversInput, eventsUncheckedCreateWithoutCaregiversInput> | eventsCreateWithoutCaregiversInput[] | eventsUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutCaregiversInput | eventsCreateOrConnectWithoutCaregiversInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutCaregiversInput | eventsUpsertWithWhereUniqueWithoutCaregiversInput[]
    createMany?: eventsCreateManyCaregiversInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutCaregiversInput | eventsUpdateWithWhereUniqueWithoutCaregiversInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutCaregiversInput | eventsUpdateManyWithWhereWithoutCaregiversInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCaregiversNestedInput = {
    create?: XOR<ordersCreateWithoutCaregiversInput, ordersUncheckedCreateWithoutCaregiversInput> | ordersCreateWithoutCaregiversInput[] | ordersUncheckedCreateWithoutCaregiversInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCaregiversInput | ordersCreateOrConnectWithoutCaregiversInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCaregiversInput | ordersUpsertWithWhereUniqueWithoutCaregiversInput[]
    createMany?: ordersCreateManyCaregiversInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCaregiversInput | ordersUpdateWithWhereUniqueWithoutCaregiversInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCaregiversInput | ordersUpdateManyWithWhereWithoutCaregiversInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type usersUncheckedUpdateOneWithoutCaregiversNestedInput = {
    create?: XOR<usersCreateWithoutCaregiversInput, usersUncheckedCreateWithoutCaregiversInput>
    connectOrCreate?: usersCreateOrConnectWithoutCaregiversInput
    upsert?: usersUpsertWithoutCaregiversInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCaregiversInput, usersUpdateWithoutCaregiversInput>, usersUncheckedUpdateWithoutCaregiversInput>
  }

  export type caregiversCreateNestedOneWithoutEventsInput = {
    create?: XOR<caregiversCreateWithoutEventsInput, caregiversUncheckedCreateWithoutEventsInput>
    connectOrCreate?: caregiversCreateOrConnectWithoutEventsInput
    connect?: caregiversWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type caregiversUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<caregiversCreateWithoutEventsInput, caregiversUncheckedCreateWithoutEventsInput>
    connectOrCreate?: caregiversCreateOrConnectWithoutEventsInput
    upsert?: caregiversUpsertWithoutEventsInput
    connect?: caregiversWhereUniqueInput
    update?: XOR<XOR<caregiversUpdateToOneWithWhereWithoutEventsInput, caregiversUpdateWithoutEventsInput>, caregiversUncheckedUpdateWithoutEventsInput>
  }

  export type order_journeysCreateNestedManyWithoutOrder_journey_statusInput = {
    create?: XOR<order_journeysCreateWithoutOrder_journey_statusInput, order_journeysUncheckedCreateWithoutOrder_journey_statusInput> | order_journeysCreateWithoutOrder_journey_statusInput[] | order_journeysUncheckedCreateWithoutOrder_journey_statusInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrder_journey_statusInput | order_journeysCreateOrConnectWithoutOrder_journey_statusInput[]
    createMany?: order_journeysCreateManyOrder_journey_statusInputEnvelope
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
  }

  export type order_journeysUncheckedCreateNestedManyWithoutOrder_journey_statusInput = {
    create?: XOR<order_journeysCreateWithoutOrder_journey_statusInput, order_journeysUncheckedCreateWithoutOrder_journey_statusInput> | order_journeysCreateWithoutOrder_journey_statusInput[] | order_journeysUncheckedCreateWithoutOrder_journey_statusInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrder_journey_statusInput | order_journeysCreateOrConnectWithoutOrder_journey_statusInput[]
    createMany?: order_journeysCreateManyOrder_journey_statusInputEnvelope
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
  }

  export type order_journeysUpdateManyWithoutOrder_journey_statusNestedInput = {
    create?: XOR<order_journeysCreateWithoutOrder_journey_statusInput, order_journeysUncheckedCreateWithoutOrder_journey_statusInput> | order_journeysCreateWithoutOrder_journey_statusInput[] | order_journeysUncheckedCreateWithoutOrder_journey_statusInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrder_journey_statusInput | order_journeysCreateOrConnectWithoutOrder_journey_statusInput[]
    upsert?: order_journeysUpsertWithWhereUniqueWithoutOrder_journey_statusInput | order_journeysUpsertWithWhereUniqueWithoutOrder_journey_statusInput[]
    createMany?: order_journeysCreateManyOrder_journey_statusInputEnvelope
    set?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    disconnect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    delete?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    update?: order_journeysUpdateWithWhereUniqueWithoutOrder_journey_statusInput | order_journeysUpdateWithWhereUniqueWithoutOrder_journey_statusInput[]
    updateMany?: order_journeysUpdateManyWithWhereWithoutOrder_journey_statusInput | order_journeysUpdateManyWithWhereWithoutOrder_journey_statusInput[]
    deleteMany?: order_journeysScalarWhereInput | order_journeysScalarWhereInput[]
  }

  export type order_journeysUncheckedUpdateManyWithoutOrder_journey_statusNestedInput = {
    create?: XOR<order_journeysCreateWithoutOrder_journey_statusInput, order_journeysUncheckedCreateWithoutOrder_journey_statusInput> | order_journeysCreateWithoutOrder_journey_statusInput[] | order_journeysUncheckedCreateWithoutOrder_journey_statusInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrder_journey_statusInput | order_journeysCreateOrConnectWithoutOrder_journey_statusInput[]
    upsert?: order_journeysUpsertWithWhereUniqueWithoutOrder_journey_statusInput | order_journeysUpsertWithWhereUniqueWithoutOrder_journey_statusInput[]
    createMany?: order_journeysCreateManyOrder_journey_statusInputEnvelope
    set?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    disconnect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    delete?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    update?: order_journeysUpdateWithWhereUniqueWithoutOrder_journey_statusInput | order_journeysUpdateWithWhereUniqueWithoutOrder_journey_statusInput[]
    updateMany?: order_journeysUpdateManyWithWhereWithoutOrder_journey_statusInput | order_journeysUpdateManyWithWhereWithoutOrder_journey_statusInput[]
    deleteMany?: order_journeysScalarWhereInput | order_journeysScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_journeysInput = {
    create?: XOR<ordersCreateWithoutOrder_journeysInput, ordersUncheckedCreateWithoutOrder_journeysInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_journeysInput
    connect?: ordersWhereUniqueInput
  }

  export type order_journey_statusCreateNestedOneWithoutOrder_journeysInput = {
    create?: XOR<order_journey_statusCreateWithoutOrder_journeysInput, order_journey_statusUncheckedCreateWithoutOrder_journeysInput>
    connectOrCreate?: order_journey_statusCreateOrConnectWithoutOrder_journeysInput
    connect?: order_journey_statusWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_journeysNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_journeysInput, ordersUncheckedCreateWithoutOrder_journeysInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_journeysInput
    upsert?: ordersUpsertWithoutOrder_journeysInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_journeysInput, ordersUpdateWithoutOrder_journeysInput>, ordersUncheckedUpdateWithoutOrder_journeysInput>
  }

  export type order_journey_statusUpdateOneRequiredWithoutOrder_journeysNestedInput = {
    create?: XOR<order_journey_statusCreateWithoutOrder_journeysInput, order_journey_statusUncheckedCreateWithoutOrder_journeysInput>
    connectOrCreate?: order_journey_statusCreateOrConnectWithoutOrder_journeysInput
    upsert?: order_journey_statusUpsertWithoutOrder_journeysInput
    connect?: order_journey_statusWhereUniqueInput
    update?: XOR<XOR<order_journey_statusUpdateToOneWithWhereWithoutOrder_journeysInput, order_journey_statusUpdateWithoutOrder_journeysInput>, order_journey_statusUncheckedUpdateWithoutOrder_journeysInput>
  }

  export type ordersCreateNestedManyWithoutOrder_status_orders_order_statusToorder_statusInput = {
    create?: XOR<ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput> | ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput[] | ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput | ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput[]
    createMany?: ordersCreateManyOrder_status_orders_order_statusToorder_statusInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutOrder_status_orders_order_statusToorder_statusInput = {
    create?: XOR<ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput> | ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput[] | ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput | ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput[]
    createMany?: ordersCreateManyOrder_status_orders_order_statusToorder_statusInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutOrder_status_orders_order_statusToorder_statusNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput> | ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput[] | ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput | ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput | ordersUpsertWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput[]
    createMany?: ordersCreateManyOrder_status_orders_order_statusToorder_statusInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput | ordersUpdateWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutOrder_status_orders_order_statusToorder_statusInput | ordersUpdateManyWithWhereWithoutOrder_status_orders_order_statusToorder_statusInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutOrder_status_orders_order_statusToorder_statusNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput> | ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput[] | ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput | ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput | ordersUpsertWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput[]
    createMany?: ordersCreateManyOrder_status_orders_order_statusToorder_statusInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput | ordersUpdateWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutOrder_status_orders_order_statusToorder_statusInput | ordersUpdateManyWithWhereWithoutOrder_status_orders_order_statusToorder_statusInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_to_servicesInput = {
    create?: XOR<ordersCreateWithoutOrder_to_servicesInput, ordersUncheckedCreateWithoutOrder_to_servicesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_to_servicesInput
    connect?: ordersWhereUniqueInput
  }

  export type servicesCreateNestedOneWithoutOrder_to_servicesInput = {
    create?: XOR<servicesCreateWithoutOrder_to_servicesInput, servicesUncheckedCreateWithoutOrder_to_servicesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutOrder_to_servicesInput
    connect?: servicesWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_to_servicesNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_to_servicesInput, ordersUncheckedCreateWithoutOrder_to_servicesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_to_servicesInput
    upsert?: ordersUpsertWithoutOrder_to_servicesInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_to_servicesInput, ordersUpdateWithoutOrder_to_servicesInput>, ordersUncheckedUpdateWithoutOrder_to_servicesInput>
  }

  export type servicesUpdateOneRequiredWithoutOrder_to_servicesNestedInput = {
    create?: XOR<servicesCreateWithoutOrder_to_servicesInput, servicesUncheckedCreateWithoutOrder_to_servicesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutOrder_to_servicesInput
    upsert?: servicesUpsertWithoutOrder_to_servicesInput
    connect?: servicesWhereUniqueInput
    update?: XOR<XOR<servicesUpdateToOneWithWhereWithoutOrder_to_servicesInput, servicesUpdateWithoutOrder_to_servicesInput>, servicesUncheckedUpdateWithoutOrder_to_servicesInput>
  }

  export type order_journeysCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_journeysCreateWithoutOrdersInput, order_journeysUncheckedCreateWithoutOrdersInput> | order_journeysCreateWithoutOrdersInput[] | order_journeysUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrdersInput | order_journeysCreateOrConnectWithoutOrdersInput[]
    createMany?: order_journeysCreateManyOrdersInputEnvelope
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
  }

  export type order_to_servicesCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_to_servicesCreateWithoutOrdersInput, order_to_servicesUncheckedCreateWithoutOrdersInput> | order_to_servicesCreateWithoutOrdersInput[] | order_to_servicesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutOrdersInput | order_to_servicesCreateOrConnectWithoutOrdersInput[]
    createMany?: order_to_servicesCreateManyOrdersInputEnvelope
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type caregiversCreateNestedOneWithoutOrdersInput = {
    create?: XOR<caregiversCreateWithoutOrdersInput, caregiversUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: caregiversCreateOrConnectWithoutOrdersInput
    connect?: caregiversWhereUniqueInput
  }

  export type order_statusCreateNestedOneWithoutOrders_orders_order_statusToorder_statusInput = {
    create?: XOR<order_statusCreateWithoutOrders_orders_order_statusToorder_statusInput, order_statusUncheckedCreateWithoutOrders_orders_order_statusToorder_statusInput>
    connectOrCreate?: order_statusCreateOrConnectWithoutOrders_orders_order_statusToorder_statusInput
    connect?: order_statusWhereUniqueInput
  }

  export type order_journeysUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_journeysCreateWithoutOrdersInput, order_journeysUncheckedCreateWithoutOrdersInput> | order_journeysCreateWithoutOrdersInput[] | order_journeysUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrdersInput | order_journeysCreateOrConnectWithoutOrdersInput[]
    createMany?: order_journeysCreateManyOrdersInputEnvelope
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
  }

  export type order_to_servicesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_to_servicesCreateWithoutOrdersInput, order_to_servicesUncheckedCreateWithoutOrdersInput> | order_to_servicesCreateWithoutOrdersInput[] | order_to_servicesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutOrdersInput | order_to_servicesCreateOrConnectWithoutOrdersInput[]
    createMany?: order_to_servicesCreateManyOrdersInputEnvelope
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type order_journeysUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_journeysCreateWithoutOrdersInput, order_journeysUncheckedCreateWithoutOrdersInput> | order_journeysCreateWithoutOrdersInput[] | order_journeysUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrdersInput | order_journeysCreateOrConnectWithoutOrdersInput[]
    upsert?: order_journeysUpsertWithWhereUniqueWithoutOrdersInput | order_journeysUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_journeysCreateManyOrdersInputEnvelope
    set?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    disconnect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    delete?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    update?: order_journeysUpdateWithWhereUniqueWithoutOrdersInput | order_journeysUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_journeysUpdateManyWithWhereWithoutOrdersInput | order_journeysUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_journeysScalarWhereInput | order_journeysScalarWhereInput[]
  }

  export type order_to_servicesUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_to_servicesCreateWithoutOrdersInput, order_to_servicesUncheckedCreateWithoutOrdersInput> | order_to_servicesCreateWithoutOrdersInput[] | order_to_servicesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutOrdersInput | order_to_servicesCreateOrConnectWithoutOrdersInput[]
    upsert?: order_to_servicesUpsertWithWhereUniqueWithoutOrdersInput | order_to_servicesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_to_servicesCreateManyOrdersInputEnvelope
    set?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    disconnect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    delete?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    update?: order_to_servicesUpdateWithWhereUniqueWithoutOrdersInput | order_to_servicesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_to_servicesUpdateManyWithWhereWithoutOrdersInput | order_to_servicesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_to_servicesScalarWhereInput | order_to_servicesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type caregiversUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<caregiversCreateWithoutOrdersInput, caregiversUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: caregiversCreateOrConnectWithoutOrdersInput
    upsert?: caregiversUpsertWithoutOrdersInput
    connect?: caregiversWhereUniqueInput
    update?: XOR<XOR<caregiversUpdateToOneWithWhereWithoutOrdersInput, caregiversUpdateWithoutOrdersInput>, caregiversUncheckedUpdateWithoutOrdersInput>
  }

  export type order_statusUpdateOneRequiredWithoutOrders_orders_order_statusToorder_statusNestedInput = {
    create?: XOR<order_statusCreateWithoutOrders_orders_order_statusToorder_statusInput, order_statusUncheckedCreateWithoutOrders_orders_order_statusToorder_statusInput>
    connectOrCreate?: order_statusCreateOrConnectWithoutOrders_orders_order_statusToorder_statusInput
    upsert?: order_statusUpsertWithoutOrders_orders_order_statusToorder_statusInput
    connect?: order_statusWhereUniqueInput
    update?: XOR<XOR<order_statusUpdateToOneWithWhereWithoutOrders_orders_order_statusToorder_statusInput, order_statusUpdateWithoutOrders_orders_order_statusToorder_statusInput>, order_statusUncheckedUpdateWithoutOrders_orders_order_statusToorder_statusInput>
  }

  export type order_journeysUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_journeysCreateWithoutOrdersInput, order_journeysUncheckedCreateWithoutOrdersInput> | order_journeysCreateWithoutOrdersInput[] | order_journeysUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_journeysCreateOrConnectWithoutOrdersInput | order_journeysCreateOrConnectWithoutOrdersInput[]
    upsert?: order_journeysUpsertWithWhereUniqueWithoutOrdersInput | order_journeysUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_journeysCreateManyOrdersInputEnvelope
    set?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    disconnect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    delete?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    connect?: order_journeysWhereUniqueInput | order_journeysWhereUniqueInput[]
    update?: order_journeysUpdateWithWhereUniqueWithoutOrdersInput | order_journeysUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_journeysUpdateManyWithWhereWithoutOrdersInput | order_journeysUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_journeysScalarWhereInput | order_journeysScalarWhereInput[]
  }

  export type order_to_servicesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_to_servicesCreateWithoutOrdersInput, order_to_servicesUncheckedCreateWithoutOrdersInput> | order_to_servicesCreateWithoutOrdersInput[] | order_to_servicesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutOrdersInput | order_to_servicesCreateOrConnectWithoutOrdersInput[]
    upsert?: order_to_servicesUpsertWithWhereUniqueWithoutOrdersInput | order_to_servicesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_to_servicesCreateManyOrdersInputEnvelope
    set?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    disconnect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    delete?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    update?: order_to_servicesUpdateWithWhereUniqueWithoutOrdersInput | order_to_servicesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_to_servicesUpdateManyWithWhereWithoutOrdersInput | order_to_servicesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_to_servicesScalarWhereInput | order_to_servicesScalarWhereInput[]
  }

  export type servicesCreateNestedOneWithoutService_ratesInput = {
    create?: XOR<servicesCreateWithoutService_ratesInput, servicesUncheckedCreateWithoutService_ratesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutService_ratesInput
    connect?: servicesWhereUniqueInput
  }

  export type servicesUpdateOneRequiredWithoutService_ratesNestedInput = {
    create?: XOR<servicesCreateWithoutService_ratesInput, servicesUncheckedCreateWithoutService_ratesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutService_ratesInput
    upsert?: servicesUpsertWithoutService_ratesInput
    connect?: servicesWhereUniqueInput
    update?: XOR<XOR<servicesUpdateToOneWithWhereWithoutService_ratesInput, servicesUpdateWithoutService_ratesInput>, servicesUncheckedUpdateWithoutService_ratesInput>
  }

  export type order_to_servicesCreateNestedManyWithoutServicesInput = {
    create?: XOR<order_to_servicesCreateWithoutServicesInput, order_to_servicesUncheckedCreateWithoutServicesInput> | order_to_servicesCreateWithoutServicesInput[] | order_to_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutServicesInput | order_to_servicesCreateOrConnectWithoutServicesInput[]
    createMany?: order_to_servicesCreateManyServicesInputEnvelope
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
  }

  export type service_ratesCreateNestedManyWithoutServicesInput = {
    create?: XOR<service_ratesCreateWithoutServicesInput, service_ratesUncheckedCreateWithoutServicesInput> | service_ratesCreateWithoutServicesInput[] | service_ratesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: service_ratesCreateOrConnectWithoutServicesInput | service_ratesCreateOrConnectWithoutServicesInput[]
    createMany?: service_ratesCreateManyServicesInputEnvelope
    connect?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
  }

  export type order_to_servicesUncheckedCreateNestedManyWithoutServicesInput = {
    create?: XOR<order_to_servicesCreateWithoutServicesInput, order_to_servicesUncheckedCreateWithoutServicesInput> | order_to_servicesCreateWithoutServicesInput[] | order_to_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutServicesInput | order_to_servicesCreateOrConnectWithoutServicesInput[]
    createMany?: order_to_servicesCreateManyServicesInputEnvelope
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
  }

  export type service_ratesUncheckedCreateNestedManyWithoutServicesInput = {
    create?: XOR<service_ratesCreateWithoutServicesInput, service_ratesUncheckedCreateWithoutServicesInput> | service_ratesCreateWithoutServicesInput[] | service_ratesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: service_ratesCreateOrConnectWithoutServicesInput | service_ratesCreateOrConnectWithoutServicesInput[]
    createMany?: service_ratesCreateManyServicesInputEnvelope
    connect?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
  }

  export type order_to_servicesUpdateManyWithoutServicesNestedInput = {
    create?: XOR<order_to_servicesCreateWithoutServicesInput, order_to_servicesUncheckedCreateWithoutServicesInput> | order_to_servicesCreateWithoutServicesInput[] | order_to_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutServicesInput | order_to_servicesCreateOrConnectWithoutServicesInput[]
    upsert?: order_to_servicesUpsertWithWhereUniqueWithoutServicesInput | order_to_servicesUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: order_to_servicesCreateManyServicesInputEnvelope
    set?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    disconnect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    delete?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    update?: order_to_servicesUpdateWithWhereUniqueWithoutServicesInput | order_to_servicesUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: order_to_servicesUpdateManyWithWhereWithoutServicesInput | order_to_servicesUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: order_to_servicesScalarWhereInput | order_to_servicesScalarWhereInput[]
  }

  export type service_ratesUpdateManyWithoutServicesNestedInput = {
    create?: XOR<service_ratesCreateWithoutServicesInput, service_ratesUncheckedCreateWithoutServicesInput> | service_ratesCreateWithoutServicesInput[] | service_ratesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: service_ratesCreateOrConnectWithoutServicesInput | service_ratesCreateOrConnectWithoutServicesInput[]
    upsert?: service_ratesUpsertWithWhereUniqueWithoutServicesInput | service_ratesUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: service_ratesCreateManyServicesInputEnvelope
    set?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    disconnect?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    delete?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    connect?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    update?: service_ratesUpdateWithWhereUniqueWithoutServicesInput | service_ratesUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: service_ratesUpdateManyWithWhereWithoutServicesInput | service_ratesUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: service_ratesScalarWhereInput | service_ratesScalarWhereInput[]
  }

  export type order_to_servicesUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: XOR<order_to_servicesCreateWithoutServicesInput, order_to_servicesUncheckedCreateWithoutServicesInput> | order_to_servicesCreateWithoutServicesInput[] | order_to_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: order_to_servicesCreateOrConnectWithoutServicesInput | order_to_servicesCreateOrConnectWithoutServicesInput[]
    upsert?: order_to_servicesUpsertWithWhereUniqueWithoutServicesInput | order_to_servicesUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: order_to_servicesCreateManyServicesInputEnvelope
    set?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    disconnect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    delete?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    connect?: order_to_servicesWhereUniqueInput | order_to_servicesWhereUniqueInput[]
    update?: order_to_servicesUpdateWithWhereUniqueWithoutServicesInput | order_to_servicesUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: order_to_servicesUpdateManyWithWhereWithoutServicesInput | order_to_servicesUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: order_to_servicesScalarWhereInput | order_to_servicesScalarWhereInput[]
  }

  export type service_ratesUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: XOR<service_ratesCreateWithoutServicesInput, service_ratesUncheckedCreateWithoutServicesInput> | service_ratesCreateWithoutServicesInput[] | service_ratesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: service_ratesCreateOrConnectWithoutServicesInput | service_ratesCreateOrConnectWithoutServicesInput[]
    upsert?: service_ratesUpsertWithWhereUniqueWithoutServicesInput | service_ratesUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: service_ratesCreateManyServicesInputEnvelope
    set?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    disconnect?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    delete?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    connect?: service_ratesWhereUniqueInput | service_ratesWhereUniqueInput[]
    update?: service_ratesUpdateWithWhereUniqueWithoutServicesInput | service_ratesUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: service_ratesUpdateManyWithWhereWithoutServicesInput | service_ratesUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: service_ratesScalarWhereInput | service_ratesScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type caregiversCreateNestedOneWithoutUsersInput = {
    create?: XOR<caregiversCreateWithoutUsersInput, caregiversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: caregiversCreateOrConnectWithoutUsersInput
    connect?: caregiversWhereUniqueInput
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type caregiversUpdateOneWithoutUsersNestedInput = {
    create?: XOR<caregiversCreateWithoutUsersInput, caregiversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: caregiversCreateOrConnectWithoutUsersInput
    upsert?: caregiversUpsertWithoutUsersInput
    disconnect?: caregiversWhereInput | boolean
    delete?: caregiversWhereInput | boolean
    connect?: caregiversWhereUniqueInput
    update?: XOR<XOR<caregiversUpdateToOneWithWhereWithoutUsersInput, caregiversUpdateWithoutUsersInput>, caregiversUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type eventsCreateWithoutCaregiversInput = {
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type eventsUncheckedCreateWithoutCaregiversInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type eventsCreateOrConnectWithoutCaregiversInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutCaregiversInput, eventsUncheckedCreateWithoutCaregiversInput>
  }

  export type eventsCreateManyCaregiversInputEnvelope = {
    data: eventsCreateManyCaregiversInput | eventsCreateManyCaregiversInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutCaregiversInput = {
    order_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    order_status_orders_order_statusToorder_status: order_statusCreateNestedOneWithoutOrders_orders_order_statusToorder_statusInput
  }

  export type ordersUncheckedCreateWithoutCaregiversInput = {
    order_id: string
    user_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysUncheckedCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCaregiversInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCaregiversInput, ordersUncheckedCreateWithoutCaregiversInput>
  }

  export type ordersCreateManyCaregiversInputEnvelope = {
    data: ordersCreateManyCaregiversInput | ordersCreateManyCaregiversInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCaregiversInput = {
    user_id: string
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCaregiversInput = {
    user_id: string
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCaregiversInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCaregiversInput, usersUncheckedCreateWithoutCaregiversInput>
  }

  export type eventsUpsertWithWhereUniqueWithoutCaregiversInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutCaregiversInput, eventsUncheckedUpdateWithoutCaregiversInput>
    create: XOR<eventsCreateWithoutCaregiversInput, eventsUncheckedCreateWithoutCaregiversInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutCaregiversInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutCaregiversInput, eventsUncheckedUpdateWithoutCaregiversInput>
  }

  export type eventsUpdateManyWithWhereWithoutCaregiversInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutCaregiversInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    caregiver_id?: StringFilter<"events"> | string
    start_date?: DateTimeFilter<"events"> | Date | string
    end_date?: DateTimeFilter<"events"> | Date | string
    created_at?: DateTimeFilter<"events"> | Date | string
    deleted_at?: DateTimeNullableFilter<"events"> | Date | string | null
  }

  export type ordersUpsertWithWhereUniqueWithoutCaregiversInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCaregiversInput, ordersUncheckedUpdateWithoutCaregiversInput>
    create: XOR<ordersCreateWithoutCaregiversInput, ordersUncheckedCreateWithoutCaregiversInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCaregiversInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCaregiversInput, ordersUncheckedUpdateWithoutCaregiversInput>
  }

  export type ordersUpdateManyWithWhereWithoutCaregiversInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCaregiversInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    order_id?: StringFilter<"orders"> | string
    caregiver_id?: StringFilter<"orders"> | string
    user_id?: StringFilter<"orders"> | string
    order_status?: IntFilter<"orders"> | number
    received_timestamp?: DateTimeFilter<"orders"> | Date | string
    date_start?: DateTimeFilter<"orders"> | Date | string
    date_end?: DateTimeFilter<"orders"> | Date | string
    price?: FloatFilter<"orders"> | number
    address?: StringFilter<"orders"> | string
  }

  export type usersUpsertWithoutCaregiversInput = {
    update: XOR<usersUpdateWithoutCaregiversInput, usersUncheckedUpdateWithoutCaregiversInput>
    create: XOR<usersCreateWithoutCaregiversInput, usersUncheckedCreateWithoutCaregiversInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCaregiversInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCaregiversInput, usersUncheckedUpdateWithoutCaregiversInput>
  }

  export type usersUpdateWithoutCaregiversInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCaregiversInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type caregiversCreateWithoutEventsInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    orders?: ordersCreateNestedManyWithoutCaregiversInput
    users?: usersCreateNestedOneWithoutCaregiversInput
  }

  export type caregiversUncheckedCreateWithoutEventsInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    orders?: ordersUncheckedCreateNestedManyWithoutCaregiversInput
    users?: usersUncheckedCreateNestedOneWithoutCaregiversInput
  }

  export type caregiversCreateOrConnectWithoutEventsInput = {
    where: caregiversWhereUniqueInput
    create: XOR<caregiversCreateWithoutEventsInput, caregiversUncheckedCreateWithoutEventsInput>
  }

  export type caregiversUpsertWithoutEventsInput = {
    update: XOR<caregiversUpdateWithoutEventsInput, caregiversUncheckedUpdateWithoutEventsInput>
    create: XOR<caregiversCreateWithoutEventsInput, caregiversUncheckedCreateWithoutEventsInput>
    where?: caregiversWhereInput
  }

  export type caregiversUpdateToOneWithWhereWithoutEventsInput = {
    where?: caregiversWhereInput
    data: XOR<caregiversUpdateWithoutEventsInput, caregiversUncheckedUpdateWithoutEventsInput>
  }

  export type caregiversUpdateWithoutEventsInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUpdateManyWithoutCaregiversNestedInput
    users?: usersUpdateOneWithoutCaregiversNestedInput
  }

  export type caregiversUncheckedUpdateWithoutEventsInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUncheckedUpdateManyWithoutCaregiversNestedInput
    users?: usersUncheckedUpdateOneWithoutCaregiversNestedInput
  }

  export type order_journeysCreateWithoutOrder_journey_statusInput = {
    created_at?: Date | string
    orders: ordersCreateNestedOneWithoutOrder_journeysInput
  }

  export type order_journeysUncheckedCreateWithoutOrder_journey_statusInput = {
    id?: number
    order_id: string
    created_at?: Date | string
  }

  export type order_journeysCreateOrConnectWithoutOrder_journey_statusInput = {
    where: order_journeysWhereUniqueInput
    create: XOR<order_journeysCreateWithoutOrder_journey_statusInput, order_journeysUncheckedCreateWithoutOrder_journey_statusInput>
  }

  export type order_journeysCreateManyOrder_journey_statusInputEnvelope = {
    data: order_journeysCreateManyOrder_journey_statusInput | order_journeysCreateManyOrder_journey_statusInput[]
    skipDuplicates?: boolean
  }

  export type order_journeysUpsertWithWhereUniqueWithoutOrder_journey_statusInput = {
    where: order_journeysWhereUniqueInput
    update: XOR<order_journeysUpdateWithoutOrder_journey_statusInput, order_journeysUncheckedUpdateWithoutOrder_journey_statusInput>
    create: XOR<order_journeysCreateWithoutOrder_journey_statusInput, order_journeysUncheckedCreateWithoutOrder_journey_statusInput>
  }

  export type order_journeysUpdateWithWhereUniqueWithoutOrder_journey_statusInput = {
    where: order_journeysWhereUniqueInput
    data: XOR<order_journeysUpdateWithoutOrder_journey_statusInput, order_journeysUncheckedUpdateWithoutOrder_journey_statusInput>
  }

  export type order_journeysUpdateManyWithWhereWithoutOrder_journey_statusInput = {
    where: order_journeysScalarWhereInput
    data: XOR<order_journeysUpdateManyMutationInput, order_journeysUncheckedUpdateManyWithoutOrder_journey_statusInput>
  }

  export type order_journeysScalarWhereInput = {
    AND?: order_journeysScalarWhereInput | order_journeysScalarWhereInput[]
    OR?: order_journeysScalarWhereInput[]
    NOT?: order_journeysScalarWhereInput | order_journeysScalarWhereInput[]
    id?: IntFilter<"order_journeys"> | number
    order_id?: StringFilter<"order_journeys"> | string
    journey_status?: IntFilter<"order_journeys"> | number
    created_at?: DateTimeFilter<"order_journeys"> | Date | string
  }

  export type ordersCreateWithoutOrder_journeysInput = {
    order_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_to_services?: order_to_servicesCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    caregivers: caregiversCreateNestedOneWithoutOrdersInput
    order_status_orders_order_statusToorder_status: order_statusCreateNestedOneWithoutOrders_orders_order_statusToorder_statusInput
  }

  export type ordersUncheckedCreateWithoutOrder_journeysInput = {
    order_id: string
    caregiver_id: string
    user_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_journeysInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_journeysInput, ordersUncheckedCreateWithoutOrder_journeysInput>
  }

  export type order_journey_statusCreateWithoutOrder_journeysInput = {
    journey_status_id: number
    journey_desc: string
  }

  export type order_journey_statusUncheckedCreateWithoutOrder_journeysInput = {
    journey_status_id: number
    journey_desc: string
  }

  export type order_journey_statusCreateOrConnectWithoutOrder_journeysInput = {
    where: order_journey_statusWhereUniqueInput
    create: XOR<order_journey_statusCreateWithoutOrder_journeysInput, order_journey_statusUncheckedCreateWithoutOrder_journeysInput>
  }

  export type ordersUpsertWithoutOrder_journeysInput = {
    update: XOR<ordersUpdateWithoutOrder_journeysInput, ordersUncheckedUpdateWithoutOrder_journeysInput>
    create: XOR<ordersCreateWithoutOrder_journeysInput, ordersUncheckedCreateWithoutOrder_journeysInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_journeysInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_journeysInput, ordersUncheckedUpdateWithoutOrder_journeysInput>
  }

  export type ordersUpdateWithoutOrder_journeysInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_to_services?: order_to_servicesUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    caregivers?: caregiversUpdateOneRequiredWithoutOrdersNestedInput
    order_status_orders_order_statusToorder_status?: order_statusUpdateOneRequiredWithoutOrders_orders_order_statusToorder_statusNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_journeysInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type order_journey_statusUpsertWithoutOrder_journeysInput = {
    update: XOR<order_journey_statusUpdateWithoutOrder_journeysInput, order_journey_statusUncheckedUpdateWithoutOrder_journeysInput>
    create: XOR<order_journey_statusCreateWithoutOrder_journeysInput, order_journey_statusUncheckedCreateWithoutOrder_journeysInput>
    where?: order_journey_statusWhereInput
  }

  export type order_journey_statusUpdateToOneWithWhereWithoutOrder_journeysInput = {
    where?: order_journey_statusWhereInput
    data: XOR<order_journey_statusUpdateWithoutOrder_journeysInput, order_journey_statusUncheckedUpdateWithoutOrder_journeysInput>
  }

  export type order_journey_statusUpdateWithoutOrder_journeysInput = {
    journey_status_id?: IntFieldUpdateOperationsInput | number
    journey_desc?: StringFieldUpdateOperationsInput | string
  }

  export type order_journey_statusUncheckedUpdateWithoutOrder_journeysInput = {
    journey_status_id?: IntFieldUpdateOperationsInput | number
    journey_desc?: StringFieldUpdateOperationsInput | string
  }

  export type ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput = {
    order_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    caregivers: caregiversCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput = {
    order_id: string
    caregiver_id: string
    user_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysUncheckedCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_status_orders_order_statusToorder_statusInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput>
  }

  export type ordersCreateManyOrder_status_orders_order_statusToorder_statusInputEnvelope = {
    data: ordersCreateManyOrder_status_orders_order_statusToorder_statusInput | ordersCreateManyOrder_status_orders_order_statusToorder_statusInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedUpdateWithoutOrder_status_orders_order_statusToorder_statusInput>
    create: XOR<ordersCreateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedCreateWithoutOrder_status_orders_order_statusToorder_statusInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutOrder_status_orders_order_statusToorder_statusInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutOrder_status_orders_order_statusToorder_statusInput, ordersUncheckedUpdateWithoutOrder_status_orders_order_statusToorder_statusInput>
  }

  export type ordersUpdateManyWithWhereWithoutOrder_status_orders_order_statusToorder_statusInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutOrder_status_orders_order_statusToorder_statusInput>
  }

  export type ordersCreateWithoutOrder_to_servicesInput = {
    order_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
    caregivers: caregiversCreateNestedOneWithoutOrdersInput
    order_status_orders_order_statusToorder_status: order_statusCreateNestedOneWithoutOrders_orders_order_statusToorder_statusInput
  }

  export type ordersUncheckedCreateWithoutOrder_to_servicesInput = {
    order_id: string
    caregiver_id: string
    user_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_to_servicesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_to_servicesInput, ordersUncheckedCreateWithoutOrder_to_servicesInput>
  }

  export type servicesCreateWithoutOrder_to_servicesInput = {
    service_id: number
    service_desc: string
    service_rates?: service_ratesCreateNestedManyWithoutServicesInput
  }

  export type servicesUncheckedCreateWithoutOrder_to_servicesInput = {
    service_id: number
    service_desc: string
    service_rates?: service_ratesUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesCreateOrConnectWithoutOrder_to_servicesInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutOrder_to_servicesInput, servicesUncheckedCreateWithoutOrder_to_servicesInput>
  }

  export type ordersUpsertWithoutOrder_to_servicesInput = {
    update: XOR<ordersUpdateWithoutOrder_to_servicesInput, ordersUncheckedUpdateWithoutOrder_to_servicesInput>
    create: XOR<ordersCreateWithoutOrder_to_servicesInput, ordersUncheckedCreateWithoutOrder_to_servicesInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_to_servicesInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_to_servicesInput, ordersUncheckedUpdateWithoutOrder_to_servicesInput>
  }

  export type ordersUpdateWithoutOrder_to_servicesInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    caregivers?: caregiversUpdateOneRequiredWithoutOrdersNestedInput
    order_status_orders_order_statusToorder_status?: order_statusUpdateOneRequiredWithoutOrders_orders_order_statusToorder_statusNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_to_servicesInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type servicesUpsertWithoutOrder_to_servicesInput = {
    update: XOR<servicesUpdateWithoutOrder_to_servicesInput, servicesUncheckedUpdateWithoutOrder_to_servicesInput>
    create: XOR<servicesCreateWithoutOrder_to_servicesInput, servicesUncheckedCreateWithoutOrder_to_servicesInput>
    where?: servicesWhereInput
  }

  export type servicesUpdateToOneWithWhereWithoutOrder_to_servicesInput = {
    where?: servicesWhereInput
    data: XOR<servicesUpdateWithoutOrder_to_servicesInput, servicesUncheckedUpdateWithoutOrder_to_servicesInput>
  }

  export type servicesUpdateWithoutOrder_to_servicesInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
    service_rates?: service_ratesUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateWithoutOrder_to_servicesInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
    service_rates?: service_ratesUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type order_journeysCreateWithoutOrdersInput = {
    created_at?: Date | string
    order_journey_status: order_journey_statusCreateNestedOneWithoutOrder_journeysInput
  }

  export type order_journeysUncheckedCreateWithoutOrdersInput = {
    id?: number
    journey_status: number
    created_at?: Date | string
  }

  export type order_journeysCreateOrConnectWithoutOrdersInput = {
    where: order_journeysWhereUniqueInput
    create: XOR<order_journeysCreateWithoutOrdersInput, order_journeysUncheckedCreateWithoutOrdersInput>
  }

  export type order_journeysCreateManyOrdersInputEnvelope = {
    data: order_journeysCreateManyOrdersInput | order_journeysCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_to_servicesCreateWithoutOrdersInput = {
    services: servicesCreateNestedOneWithoutOrder_to_servicesInput
  }

  export type order_to_servicesUncheckedCreateWithoutOrdersInput = {
    id?: number
    service_id: number
  }

  export type order_to_servicesCreateOrConnectWithoutOrdersInput = {
    where: order_to_servicesWhereUniqueInput
    create: XOR<order_to_servicesCreateWithoutOrdersInput, order_to_servicesUncheckedCreateWithoutOrdersInput>
  }

  export type order_to_servicesCreateManyOrdersInputEnvelope = {
    data: order_to_servicesCreateManyOrdersInput | order_to_servicesCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrdersInput = {
    user_id: string
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
    caregivers?: caregiversCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    user_id: string
    caregiver_id?: string | null
    birth_date?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password: string
    address: string
    phone_number: string
    profile_picture_url?: string | null
    created_at?: Date | string
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type caregiversCreateWithoutOrdersInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    events?: eventsCreateNestedManyWithoutCaregiversInput
    users?: usersCreateNestedOneWithoutCaregiversInput
  }

  export type caregiversUncheckedCreateWithoutOrdersInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    events?: eventsUncheckedCreateNestedManyWithoutCaregiversInput
    users?: usersUncheckedCreateNestedOneWithoutCaregiversInput
  }

  export type caregiversCreateOrConnectWithoutOrdersInput = {
    where: caregiversWhereUniqueInput
    create: XOR<caregiversCreateWithoutOrdersInput, caregiversUncheckedCreateWithoutOrdersInput>
  }

  export type order_statusCreateWithoutOrders_orders_order_statusToorder_statusInput = {
    order_status: number
    order_status_desc: string
  }

  export type order_statusUncheckedCreateWithoutOrders_orders_order_statusToorder_statusInput = {
    order_status: number
    order_status_desc: string
  }

  export type order_statusCreateOrConnectWithoutOrders_orders_order_statusToorder_statusInput = {
    where: order_statusWhereUniqueInput
    create: XOR<order_statusCreateWithoutOrders_orders_order_statusToorder_statusInput, order_statusUncheckedCreateWithoutOrders_orders_order_statusToorder_statusInput>
  }

  export type order_journeysUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_journeysWhereUniqueInput
    update: XOR<order_journeysUpdateWithoutOrdersInput, order_journeysUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_journeysCreateWithoutOrdersInput, order_journeysUncheckedCreateWithoutOrdersInput>
  }

  export type order_journeysUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_journeysWhereUniqueInput
    data: XOR<order_journeysUpdateWithoutOrdersInput, order_journeysUncheckedUpdateWithoutOrdersInput>
  }

  export type order_journeysUpdateManyWithWhereWithoutOrdersInput = {
    where: order_journeysScalarWhereInput
    data: XOR<order_journeysUpdateManyMutationInput, order_journeysUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_to_servicesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_to_servicesWhereUniqueInput
    update: XOR<order_to_servicesUpdateWithoutOrdersInput, order_to_servicesUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_to_servicesCreateWithoutOrdersInput, order_to_servicesUncheckedCreateWithoutOrdersInput>
  }

  export type order_to_servicesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_to_servicesWhereUniqueInput
    data: XOR<order_to_servicesUpdateWithoutOrdersInput, order_to_servicesUncheckedUpdateWithoutOrdersInput>
  }

  export type order_to_servicesUpdateManyWithWhereWithoutOrdersInput = {
    where: order_to_servicesScalarWhereInput
    data: XOR<order_to_servicesUpdateManyMutationInput, order_to_servicesUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_to_servicesScalarWhereInput = {
    AND?: order_to_servicesScalarWhereInput | order_to_servicesScalarWhereInput[]
    OR?: order_to_servicesScalarWhereInput[]
    NOT?: order_to_servicesScalarWhereInput | order_to_servicesScalarWhereInput[]
    id?: IntFilter<"order_to_services"> | number
    order_id?: StringFilter<"order_to_services"> | string
    service_id?: IntFilter<"order_to_services"> | number
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    caregivers?: caregiversUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type caregiversUpsertWithoutOrdersInput = {
    update: XOR<caregiversUpdateWithoutOrdersInput, caregiversUncheckedUpdateWithoutOrdersInput>
    create: XOR<caregiversCreateWithoutOrdersInput, caregiversUncheckedCreateWithoutOrdersInput>
    where?: caregiversWhereInput
  }

  export type caregiversUpdateToOneWithWhereWithoutOrdersInput = {
    where?: caregiversWhereInput
    data: XOR<caregiversUpdateWithoutOrdersInput, caregiversUncheckedUpdateWithoutOrdersInput>
  }

  export type caregiversUpdateWithoutOrdersInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUpdateManyWithoutCaregiversNestedInput
    users?: usersUpdateOneWithoutCaregiversNestedInput
  }

  export type caregiversUncheckedUpdateWithoutOrdersInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUncheckedUpdateManyWithoutCaregiversNestedInput
    users?: usersUncheckedUpdateOneWithoutCaregiversNestedInput
  }

  export type order_statusUpsertWithoutOrders_orders_order_statusToorder_statusInput = {
    update: XOR<order_statusUpdateWithoutOrders_orders_order_statusToorder_statusInput, order_statusUncheckedUpdateWithoutOrders_orders_order_statusToorder_statusInput>
    create: XOR<order_statusCreateWithoutOrders_orders_order_statusToorder_statusInput, order_statusUncheckedCreateWithoutOrders_orders_order_statusToorder_statusInput>
    where?: order_statusWhereInput
  }

  export type order_statusUpdateToOneWithWhereWithoutOrders_orders_order_statusToorder_statusInput = {
    where?: order_statusWhereInput
    data: XOR<order_statusUpdateWithoutOrders_orders_order_statusToorder_statusInput, order_statusUncheckedUpdateWithoutOrders_orders_order_statusToorder_statusInput>
  }

  export type order_statusUpdateWithoutOrders_orders_order_statusToorder_statusInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_status_desc?: StringFieldUpdateOperationsInput | string
  }

  export type order_statusUncheckedUpdateWithoutOrders_orders_order_statusToorder_statusInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_status_desc?: StringFieldUpdateOperationsInput | string
  }

  export type servicesCreateWithoutService_ratesInput = {
    service_id: number
    service_desc: string
    order_to_services?: order_to_servicesCreateNestedManyWithoutServicesInput
  }

  export type servicesUncheckedCreateWithoutService_ratesInput = {
    service_id: number
    service_desc: string
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesCreateOrConnectWithoutService_ratesInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutService_ratesInput, servicesUncheckedCreateWithoutService_ratesInput>
  }

  export type servicesUpsertWithoutService_ratesInput = {
    update: XOR<servicesUpdateWithoutService_ratesInput, servicesUncheckedUpdateWithoutService_ratesInput>
    create: XOR<servicesCreateWithoutService_ratesInput, servicesUncheckedCreateWithoutService_ratesInput>
    where?: servicesWhereInput
  }

  export type servicesUpdateToOneWithWhereWithoutService_ratesInput = {
    where?: servicesWhereInput
    data: XOR<servicesUpdateWithoutService_ratesInput, servicesUncheckedUpdateWithoutService_ratesInput>
  }

  export type servicesUpdateWithoutService_ratesInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
    order_to_services?: order_to_servicesUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateWithoutService_ratesInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    service_desc?: StringFieldUpdateOperationsInput | string
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type order_to_servicesCreateWithoutServicesInput = {
    orders: ordersCreateNestedOneWithoutOrder_to_servicesInput
  }

  export type order_to_servicesUncheckedCreateWithoutServicesInput = {
    id?: number
    order_id: string
  }

  export type order_to_servicesCreateOrConnectWithoutServicesInput = {
    where: order_to_servicesWhereUniqueInput
    create: XOR<order_to_servicesCreateWithoutServicesInput, order_to_servicesUncheckedCreateWithoutServicesInput>
  }

  export type order_to_servicesCreateManyServicesInputEnvelope = {
    data: order_to_servicesCreateManyServicesInput | order_to_servicesCreateManyServicesInput[]
    skipDuplicates?: boolean
  }

  export type service_ratesCreateWithoutServicesInput = {
    service_price: number
    created_at?: Date | string
  }

  export type service_ratesUncheckedCreateWithoutServicesInput = {
    id?: number
    service_price: number
    created_at?: Date | string
  }

  export type service_ratesCreateOrConnectWithoutServicesInput = {
    where: service_ratesWhereUniqueInput
    create: XOR<service_ratesCreateWithoutServicesInput, service_ratesUncheckedCreateWithoutServicesInput>
  }

  export type service_ratesCreateManyServicesInputEnvelope = {
    data: service_ratesCreateManyServicesInput | service_ratesCreateManyServicesInput[]
    skipDuplicates?: boolean
  }

  export type order_to_servicesUpsertWithWhereUniqueWithoutServicesInput = {
    where: order_to_servicesWhereUniqueInput
    update: XOR<order_to_servicesUpdateWithoutServicesInput, order_to_servicesUncheckedUpdateWithoutServicesInput>
    create: XOR<order_to_servicesCreateWithoutServicesInput, order_to_servicesUncheckedCreateWithoutServicesInput>
  }

  export type order_to_servicesUpdateWithWhereUniqueWithoutServicesInput = {
    where: order_to_servicesWhereUniqueInput
    data: XOR<order_to_servicesUpdateWithoutServicesInput, order_to_servicesUncheckedUpdateWithoutServicesInput>
  }

  export type order_to_servicesUpdateManyWithWhereWithoutServicesInput = {
    where: order_to_servicesScalarWhereInput
    data: XOR<order_to_servicesUpdateManyMutationInput, order_to_servicesUncheckedUpdateManyWithoutServicesInput>
  }

  export type service_ratesUpsertWithWhereUniqueWithoutServicesInput = {
    where: service_ratesWhereUniqueInput
    update: XOR<service_ratesUpdateWithoutServicesInput, service_ratesUncheckedUpdateWithoutServicesInput>
    create: XOR<service_ratesCreateWithoutServicesInput, service_ratesUncheckedCreateWithoutServicesInput>
  }

  export type service_ratesUpdateWithWhereUniqueWithoutServicesInput = {
    where: service_ratesWhereUniqueInput
    data: XOR<service_ratesUpdateWithoutServicesInput, service_ratesUncheckedUpdateWithoutServicesInput>
  }

  export type service_ratesUpdateManyWithWhereWithoutServicesInput = {
    where: service_ratesScalarWhereInput
    data: XOR<service_ratesUpdateManyMutationInput, service_ratesUncheckedUpdateManyWithoutServicesInput>
  }

  export type service_ratesScalarWhereInput = {
    AND?: service_ratesScalarWhereInput | service_ratesScalarWhereInput[]
    OR?: service_ratesScalarWhereInput[]
    NOT?: service_ratesScalarWhereInput | service_ratesScalarWhereInput[]
    id?: IntFilter<"service_rates"> | number
    service_id?: IntFilter<"service_rates"> | number
    service_price?: FloatFilter<"service_rates"> | number
    created_at?: DateTimeFilter<"service_rates"> | Date | string
  }

  export type ordersCreateWithoutUsersInput = {
    order_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesCreateNestedManyWithoutOrdersInput
    caregivers: caregiversCreateNestedOneWithoutOrdersInput
    order_status_orders_order_statusToorder_status: order_statusCreateNestedOneWithoutOrders_orders_order_statusToorder_statusInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    order_id: string
    caregiver_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
    order_journeys?: order_journeysUncheckedCreateNestedManyWithoutOrdersInput
    order_to_services?: order_to_servicesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type caregiversCreateWithoutUsersInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    events?: eventsCreateNestedManyWithoutCaregiversInput
    orders?: ordersCreateNestedManyWithoutCaregiversInput
  }

  export type caregiversUncheckedCreateWithoutUsersInput = {
    caregiver_id: string
    created_at?: Date | string
    education_id?: number | null
    year_experience?: number | null
    events?: eventsUncheckedCreateNestedManyWithoutCaregiversInput
    orders?: ordersUncheckedCreateNestedManyWithoutCaregiversInput
  }

  export type caregiversCreateOrConnectWithoutUsersInput = {
    where: caregiversWhereUniqueInput
    create: XOR<caregiversCreateWithoutUsersInput, caregiversUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type caregiversUpsertWithoutUsersInput = {
    update: XOR<caregiversUpdateWithoutUsersInput, caregiversUncheckedUpdateWithoutUsersInput>
    create: XOR<caregiversCreateWithoutUsersInput, caregiversUncheckedCreateWithoutUsersInput>
    where?: caregiversWhereInput
  }

  export type caregiversUpdateToOneWithWhereWithoutUsersInput = {
    where?: caregiversWhereInput
    data: XOR<caregiversUpdateWithoutUsersInput, caregiversUncheckedUpdateWithoutUsersInput>
  }

  export type caregiversUpdateWithoutUsersInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUpdateManyWithoutCaregiversNestedInput
    orders?: ordersUpdateManyWithoutCaregiversNestedInput
  }

  export type caregiversUncheckedUpdateWithoutUsersInput = {
    caregiver_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    education_id?: NullableIntFieldUpdateOperationsInput | number | null
    year_experience?: NullableIntFieldUpdateOperationsInput | number | null
    events?: eventsUncheckedUpdateManyWithoutCaregiversNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCaregiversNestedInput
  }

  export type eventsCreateManyCaregiversInput = {
    id?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ordersCreateManyCaregiversInput = {
    order_id: string
    user_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
  }

  export type eventsUpdateWithoutCaregiversInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsUncheckedUpdateWithoutCaregiversInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventsUncheckedUpdateManyWithoutCaregiversInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutCaregiversInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    order_status_orders_order_statusToorder_status?: order_statusUpdateOneRequiredWithoutOrders_orders_order_statusToorder_statusNestedInput
  }

  export type ordersUncheckedUpdateWithoutCaregiversInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUncheckedUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCaregiversInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type order_journeysCreateManyOrder_journey_statusInput = {
    id?: number
    order_id: string
    created_at?: Date | string
  }

  export type order_journeysUpdateWithoutOrder_journey_statusInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneRequiredWithoutOrder_journeysNestedInput
  }

  export type order_journeysUncheckedUpdateWithoutOrder_journey_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_journeysUncheckedUpdateManyWithoutOrder_journey_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyOrder_status_orders_order_statusToorder_statusInput = {
    order_id: string
    caregiver_id: string
    user_id: string
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
  }

  export type ordersUpdateWithoutOrder_status_orders_order_statusToorder_statusInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
    caregivers?: caregiversUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_status_orders_order_statusToorder_statusInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUncheckedUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutOrder_status_orders_order_statusToorder_statusInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type order_journeysCreateManyOrdersInput = {
    id?: number
    journey_status: number
    created_at?: Date | string
  }

  export type order_to_servicesCreateManyOrdersInput = {
    id?: number
    service_id: number
  }

  export type order_journeysUpdateWithoutOrdersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_journey_status?: order_journey_statusUpdateOneRequiredWithoutOrder_journeysNestedInput
  }

  export type order_journeysUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    journey_status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_journeysUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    journey_status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type order_to_servicesUpdateWithoutOrdersInput = {
    services?: servicesUpdateOneRequiredWithoutOrder_to_servicesNestedInput
  }

  export type order_to_servicesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type order_to_servicesUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type order_to_servicesCreateManyServicesInput = {
    id?: number
    order_id: string
  }

  export type service_ratesCreateManyServicesInput = {
    id?: number
    service_price: number
    created_at?: Date | string
  }

  export type order_to_servicesUpdateWithoutServicesInput = {
    orders?: ordersUpdateOneRequiredWithoutOrder_to_servicesNestedInput
  }

  export type order_to_servicesUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
  }

  export type order_to_servicesUncheckedUpdateManyWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
  }

  export type service_ratesUpdateWithoutServicesInput = {
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_ratesUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type service_ratesUncheckedUpdateManyWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyUsersInput = {
    order_id: string
    caregiver_id: string
    order_status: number
    received_timestamp?: Date | string
    date_start: Date | string
    date_end: Date | string
    price: number
    address: string
  }

  export type ordersUpdateWithoutUsersInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUpdateManyWithoutOrdersNestedInput
    caregivers?: caregiversUpdateOneRequiredWithoutOrdersNestedInput
    order_status_orders_order_statusToorder_status?: order_statusUpdateOneRequiredWithoutOrders_orders_order_statusToorder_statusNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    order_journeys?: order_journeysUncheckedUpdateManyWithoutOrdersNestedInput
    order_to_services?: order_to_servicesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    caregiver_id?: StringFieldUpdateOperationsInput | string
    order_status?: IntFieldUpdateOperationsInput | number
    received_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CaregiversCountOutputTypeDefaultArgs instead
     */
    export type CaregiversCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CaregiversCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Order_journey_statusCountOutputTypeDefaultArgs instead
     */
    export type Order_journey_statusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Order_journey_statusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Order_statusCountOutputTypeDefaultArgs instead
     */
    export type Order_statusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Order_statusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicesCountOutputTypeDefaultArgs instead
     */
    export type ServicesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use caregiver_educationDefaultArgs instead
     */
    export type caregiver_educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = caregiver_educationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use caregiversDefaultArgs instead
     */
    export type caregiversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = caregiversDefaultArgs<ExtArgs>
    /**
     * @deprecated Use eventsDefaultArgs instead
     */
    export type eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = eventsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_journey_statusDefaultArgs instead
     */
    export type order_journey_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_journey_statusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_journeysDefaultArgs instead
     */
    export type order_journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_journeysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_statusDefaultArgs instead
     */
    export type order_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_statusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_to_servicesDefaultArgs instead
     */
    export type order_to_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_to_servicesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordersDefaultArgs instead
     */
    export type ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reviewsDefaultArgs instead
     */
    export type reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reviewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use service_ratesDefaultArgs instead
     */
    export type service_ratesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = service_ratesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use servicesDefaultArgs instead
     */
    export type servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = servicesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}