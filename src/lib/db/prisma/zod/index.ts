import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AddressScalarFieldEnumSchema = z.enum(['id','street','city','state','zipCode','latitude','longitude']);

export const AppointmentScalarFieldEnumSchema = z.enum(['id','date','endDate','status','clientId','serviceId','businessId','createdAt','updatedAt']);

export const BusinessHourScalarFieldEnumSchema = z.enum(['id','dayOfWeek','opening','closing','businessId']);

export const ServicePromotionScalarFieldEnumSchema = z.enum(['id','discount','startDate','endDate','serviceId','businessId','createdAt','updatedAt']);

export const ServiceScalarFieldEnumSchema = z.enum(['id','name','description','duration','price','category','businessId','createdAt','updatedAt']);

export const BusinessScalarFieldEnumSchema = z.enum(['id','name','description','rif','businessType','logo','city','municipality','phone','addressId','ownerId','createdAt','updatedAt']);

export const PaymentScalarFieldEnumSchema = z.enum(['id','amountBs','amountUsd','exchangeRate','method','reference','clientId','serviceId','businessId','appointmentId','createdAt','updatedAt']);

export const ReminderScalarFieldEnumSchema = z.enum(['id','method','triggerTime','sent','retries','appointmentId','createdAt','updatedAt']);

export const UserSecurityScalarFieldEnumSchema = z.enum(['id','token','password','userId','createdAt','updatedAt']);

export const SubscriptionPromotionScalarFieldEnumSchema = z.enum(['id','name','description','discount','duration','startDate','endDate','applicableTo','subscriptionId','createdAt','updatedAt']);

export const SubscriptionScalarFieldEnumSchema = z.enum(['id','plan','startDate','endDate','status','businessId','ownerId','createdAt','updatedAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','firstName','lastName','pid','phone','photo','email','status','role','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const AppointmentStatusSchema = z.enum(['PENDING','IN_PROCESS','COMPLETED']);

export type AppointmentStatusType = `${z.infer<typeof AppointmentStatusSchema>}`

export const ServiceCategorySchema = z.enum(['HAIRCUT','MANICURE','FACIAL_TREATMENT','MASSAGE','TRAINING','CONSULTATION','OTHER']);

export type ServiceCategoryType = `${z.infer<typeof ServiceCategorySchema>}`

export const BusinessTypeSchema = z.enum(['BARBERSHOP','SKINCARE','MANICURE','SPA','GYM','RESTAURANT','OTHER']);

export type BusinessTypeType = `${z.infer<typeof BusinessTypeSchema>}`

export const PaymentMethodSchema = z.enum(['CASH','TRANSFER','PAYPAL','BINANCE','ZELLE','OTHER']);

export type PaymentMethodType = `${z.infer<typeof PaymentMethodSchema>}`

export const SubscriptionPlanSchema = z.enum(['BASIC','PRO','PREMIUM']);

export type SubscriptionPlanType = `${z.infer<typeof SubscriptionPlanSchema>}`

export const SubscriptionStatusSchema = z.enum(['ACTIVE','INACTIVE']);

export type SubscriptionStatusType = `${z.infer<typeof SubscriptionStatusSchema>}`

export const UserStatusSchema = z.enum(['ACTIVE','INACTIVE']);

export type UserStatusType = `${z.infer<typeof UserStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().nullable(),
  latitude: z.number(),
  longitude: z.number(),
})

export type Address = z.infer<typeof AddressSchema>

/////////////////////////////////////////
// APPOINTMENT SCHEMA
/////////////////////////////////////////

export const AppointmentSchema = z.object({
  status: AppointmentStatusSchema,
  id: z.string(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Appointment = z.infer<typeof AppointmentSchema>

/////////////////////////////////////////
// BUSINESS HOUR SCHEMA
/////////////////////////////////////////

export const BusinessHourSchema = z.object({
  id: z.string(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date(),
  businessId: z.string(),
})

export type BusinessHour = z.infer<typeof BusinessHourSchema>

/////////////////////////////////////////
// SERVICE PROMOTION SCHEMA
/////////////////////////////////////////

export const ServicePromotionSchema = z.object({
  id: z.string(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ServicePromotion = z.infer<typeof ServicePromotionSchema>

/////////////////////////////////////////
// SERVICE SCHEMA
/////////////////////////////////////////

export const ServiceSchema = z.object({
  category: ServiceCategorySchema,
  id: z.string(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  businessId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Service = z.infer<typeof ServiceSchema>

/////////////////////////////////////////
// BUSINESS SCHEMA
/////////////////////////////////////////

export const BusinessSchema = z.object({
  businessType: BusinessTypeSchema,
  id: z.string(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Business = z.infer<typeof BusinessSchema>

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
  method: PaymentMethodSchema,
  id: z.string(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  reference: z.string().nullable(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Payment = z.infer<typeof PaymentSchema>

/////////////////////////////////////////
// REMINDER SCHEMA
/////////////////////////////////////////

export const ReminderSchema = z.object({
  id: z.string(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean(),
  retries: z.number().int(),
  appointmentId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Reminder = z.infer<typeof ReminderSchema>

/////////////////////////////////////////
// USER SECURITY SCHEMA
/////////////////////////////////////////

export const UserSecuritySchema = z.object({
  id: z.string(),
  token: z.string().nullable(),
  password: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserSecurity = z.infer<typeof UserSecuritySchema>

/////////////////////////////////////////
// SUBSCRIPTION PROMOTION SCHEMA
/////////////////////////////////////////

export const SubscriptionPromotionSchema = z.object({
  applicableTo: SubscriptionPlanSchema.array(),
  id: z.string(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  subscriptionId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SubscriptionPromotion = z.infer<typeof SubscriptionPromotionSchema>

/////////////////////////////////////////
// SUBSCRIPTION SCHEMA
/////////////////////////////////////////

export const SubscriptionSchema = z.object({
  plan: SubscriptionPlanSchema,
  status: SubscriptionStatusSchema,
  id: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  businessId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Subscription = z.infer<typeof SubscriptionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  status: UserStatusSchema,
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().nullable(),
  phone: z.string(),
  photo: z.string().nullable(),
  email: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ADDRESS
//------------------------------------------------------

export const AddressIncludeSchema: z.ZodType<Prisma.AddressInclude> = z.object({
}).strict()

export const AddressArgsSchema: z.ZodType<Prisma.AddressDefaultArgs> = z.object({
  select: z.lazy(() => AddressSelectSchema).optional(),
  include: z.lazy(() => AddressIncludeSchema).optional(),
}).strict();

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
  id: z.boolean().optional(),
  street: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zipCode: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
}).strict()

// APPOINTMENT
//------------------------------------------------------

export const AppointmentIncludeSchema: z.ZodType<Prisma.AppointmentInclude> = z.object({
}).strict()

export const AppointmentArgsSchema: z.ZodType<Prisma.AppointmentDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentSelectSchema).optional(),
  include: z.lazy(() => AppointmentIncludeSchema).optional(),
}).strict();

export const AppointmentCountOutputTypeArgsSchema: z.ZodType<Prisma.AppointmentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AppointmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AppointmentCountOutputTypeSelectSchema: z.ZodType<Prisma.AppointmentCountOutputTypeSelect> = z.object({
  reminders: z.boolean().optional(),
}).strict();

export const AppointmentSelectSchema: z.ZodType<Prisma.AppointmentSelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  endDate: z.boolean().optional(),
  status: z.boolean().optional(),
  clientId: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  businessId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  client: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  payment: z.union([z.boolean(),z.lazy(() => PaymentArgsSchema)]).optional(),
  reminders: z.union([z.boolean(),z.lazy(() => ReminderArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AppointmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BUSINESS HOUR
//------------------------------------------------------

export const BusinessHourIncludeSchema: z.ZodType<Prisma.BusinessHourInclude> = z.object({
}).strict()

export const BusinessHourArgsSchema: z.ZodType<Prisma.BusinessHourDefaultArgs> = z.object({
  select: z.lazy(() => BusinessHourSelectSchema).optional(),
  include: z.lazy(() => BusinessHourIncludeSchema).optional(),
}).strict();

export const BusinessHourSelectSchema: z.ZodType<Prisma.BusinessHourSelect> = z.object({
  id: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  opening: z.boolean().optional(),
  closing: z.boolean().optional(),
  businessId: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
}).strict()

// SERVICE PROMOTION
//------------------------------------------------------

export const ServicePromotionIncludeSchema: z.ZodType<Prisma.ServicePromotionInclude> = z.object({
}).strict()

export const ServicePromotionArgsSchema: z.ZodType<Prisma.ServicePromotionDefaultArgs> = z.object({
  select: z.lazy(() => ServicePromotionSelectSchema).optional(),
  include: z.lazy(() => ServicePromotionIncludeSchema).optional(),
}).strict();

export const ServicePromotionSelectSchema: z.ZodType<Prisma.ServicePromotionSelect> = z.object({
  id: z.boolean().optional(),
  discount: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  businessId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
}).strict()

// SERVICE
//------------------------------------------------------

export const ServiceIncludeSchema: z.ZodType<Prisma.ServiceInclude> = z.object({
}).strict()

export const ServiceArgsSchema: z.ZodType<Prisma.ServiceDefaultArgs> = z.object({
  select: z.lazy(() => ServiceSelectSchema).optional(),
  include: z.lazy(() => ServiceIncludeSchema).optional(),
}).strict();

export const ServiceCountOutputTypeArgsSchema: z.ZodType<Prisma.ServiceCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ServiceCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ServiceCountOutputTypeSelectSchema: z.ZodType<Prisma.ServiceCountOutputTypeSelect> = z.object({
  payments: z.boolean().optional(),
  appointments: z.boolean().optional(),
  promotions: z.boolean().optional(),
}).strict();

export const ServiceSelectSchema: z.ZodType<Prisma.ServiceSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  duration: z.boolean().optional(),
  price: z.boolean().optional(),
  category: z.boolean().optional(),
  businessId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentArgsSchema)]).optional(),
  appointments: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
  promotions: z.union([z.boolean(),z.lazy(() => ServicePromotionArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ServiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BUSINESS
//------------------------------------------------------

export const BusinessIncludeSchema: z.ZodType<Prisma.BusinessInclude> = z.object({
}).strict()

export const BusinessArgsSchema: z.ZodType<Prisma.BusinessDefaultArgs> = z.object({
  select: z.lazy(() => BusinessSelectSchema).optional(),
  include: z.lazy(() => BusinessIncludeSchema).optional(),
}).strict();

export const BusinessCountOutputTypeArgsSchema: z.ZodType<Prisma.BusinessCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BusinessCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BusinessCountOutputTypeSelectSchema: z.ZodType<Prisma.BusinessCountOutputTypeSelect> = z.object({
  services: z.boolean().optional(),
  payments: z.boolean().optional(),
  appointments: z.boolean().optional(),
  hours: z.boolean().optional(),
  subscriptions: z.boolean().optional(),
  promotions: z.boolean().optional(),
}).strict();

export const BusinessSelectSchema: z.ZodType<Prisma.BusinessSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  rif: z.boolean().optional(),
  businessType: z.boolean().optional(),
  logo: z.boolean().optional(),
  city: z.boolean().optional(),
  municipality: z.boolean().optional(),
  phone: z.boolean().optional(),
  addressId: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  services: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentArgsSchema)]).optional(),
  appointments: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
  hours: z.union([z.boolean(),z.lazy(() => BusinessHourArgsSchema)]).optional(),
  subscriptions: z.union([z.boolean(),z.lazy(() => SubscriptionArgsSchema)]).optional(),
  promotions: z.union([z.boolean(),z.lazy(() => ServicePromotionArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BusinessCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PAYMENT
//------------------------------------------------------

export const PaymentIncludeSchema: z.ZodType<Prisma.PaymentInclude> = z.object({
}).strict()

export const PaymentArgsSchema: z.ZodType<Prisma.PaymentDefaultArgs> = z.object({
  select: z.lazy(() => PaymentSelectSchema).optional(),
  include: z.lazy(() => PaymentIncludeSchema).optional(),
}).strict();

export const PaymentSelectSchema: z.ZodType<Prisma.PaymentSelect> = z.object({
  id: z.boolean().optional(),
  amountBs: z.boolean().optional(),
  amountUsd: z.boolean().optional(),
  exchangeRate: z.boolean().optional(),
  method: z.boolean().optional(),
  reference: z.boolean().optional(),
  clientId: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  businessId: z.boolean().optional(),
  appointmentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  client: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  service: z.union([z.boolean(),z.lazy(() => ServiceArgsSchema)]).optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  appointment: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
}).strict()

// REMINDER
//------------------------------------------------------

export const ReminderIncludeSchema: z.ZodType<Prisma.ReminderInclude> = z.object({
}).strict()

export const ReminderArgsSchema: z.ZodType<Prisma.ReminderDefaultArgs> = z.object({
  select: z.lazy(() => ReminderSelectSchema).optional(),
  include: z.lazy(() => ReminderIncludeSchema).optional(),
}).strict();

export const ReminderSelectSchema: z.ZodType<Prisma.ReminderSelect> = z.object({
  id: z.boolean().optional(),
  method: z.boolean().optional(),
  triggerTime: z.boolean().optional(),
  sent: z.boolean().optional(),
  retries: z.boolean().optional(),
  appointmentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  appointment: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
}).strict()

// USER SECURITY
//------------------------------------------------------

export const UserSecurityIncludeSchema: z.ZodType<Prisma.UserSecurityInclude> = z.object({
}).strict()

export const UserSecurityArgsSchema: z.ZodType<Prisma.UserSecurityDefaultArgs> = z.object({
  select: z.lazy(() => UserSecuritySelectSchema).optional(),
  include: z.lazy(() => UserSecurityIncludeSchema).optional(),
}).strict();

export const UserSecuritySelectSchema: z.ZodType<Prisma.UserSecuritySelect> = z.object({
  id: z.boolean().optional(),
  token: z.boolean().optional(),
  password: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SUBSCRIPTION PROMOTION
//------------------------------------------------------

export const SubscriptionPromotionIncludeSchema: z.ZodType<Prisma.SubscriptionPromotionInclude> = z.object({
}).strict()

export const SubscriptionPromotionArgsSchema: z.ZodType<Prisma.SubscriptionPromotionDefaultArgs> = z.object({
  select: z.lazy(() => SubscriptionPromotionSelectSchema).optional(),
  include: z.lazy(() => SubscriptionPromotionIncludeSchema).optional(),
}).strict();

export const SubscriptionPromotionSelectSchema: z.ZodType<Prisma.SubscriptionPromotionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  discount: z.boolean().optional(),
  duration: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  applicableTo: z.boolean().optional(),
  subscriptionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  subscription: z.union([z.boolean(),z.lazy(() => SubscriptionArgsSchema)]).optional(),
}).strict()

// SUBSCRIPTION
//------------------------------------------------------

export const SubscriptionIncludeSchema: z.ZodType<Prisma.SubscriptionInclude> = z.object({
}).strict()

export const SubscriptionArgsSchema: z.ZodType<Prisma.SubscriptionDefaultArgs> = z.object({
  select: z.lazy(() => SubscriptionSelectSchema).optional(),
  include: z.lazy(() => SubscriptionIncludeSchema).optional(),
}).strict();

export const SubscriptionCountOutputTypeArgsSchema: z.ZodType<Prisma.SubscriptionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SubscriptionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SubscriptionCountOutputTypeSelectSchema: z.ZodType<Prisma.SubscriptionCountOutputTypeSelect> = z.object({
  promotions: z.boolean().optional(),
}).strict();

export const SubscriptionSelectSchema: z.ZodType<Prisma.SubscriptionSelect> = z.object({
  id: z.boolean().optional(),
  plan: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  status: z.boolean().optional(),
  businessId: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  promotions: z.union([z.boolean(),z.lazy(() => SubscriptionPromotionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SubscriptionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  payments: z.boolean().optional(),
  businesses: z.boolean().optional(),
  appointments: z.boolean().optional(),
  subscriptions: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  pid: z.boolean().optional(),
  phone: z.boolean().optional(),
  photo: z.boolean().optional(),
  email: z.boolean().optional(),
  status: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  payments: z.union([z.boolean(),z.lazy(() => PaymentArgsSchema)]).optional(),
  businesses: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  appointments: z.union([z.boolean(),z.lazy(() => AppointmentArgsSchema)]).optional(),
  security: z.union([z.boolean(),z.lazy(() => UserSecurityArgsSchema)]).optional(),
  subscriptions: z.union([z.boolean(),z.lazy(() => SubscriptionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AddressWhereInputSchema: z.ZodType<Prisma.AddressWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  zipCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  latitude: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  longitude: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  business: z.union([ z.lazy(() => BusinessNullableScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AddressOrderByWithRelationInputSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zipCode: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional()
}).strict();

export const AddressWhereUniqueInputSchema: z.ZodType<Prisma.AddressWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  zipCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  latitude: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  longitude: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  business: z.union([ z.lazy(() => BusinessNullableScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AddressOrderByWithAggregationInputSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zipCode: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AddressCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AddressAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AddressMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AddressMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AddressSumOrderByAggregateInputSchema).optional()
}).strict();

export const AddressScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  street: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  zipCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  latitude: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  longitude: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const AppointmentWhereInputSchema: z.ZodType<Prisma.AppointmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppointmentWhereInputSchema),z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentWhereInputSchema),z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppointmentStatusFilterSchema),z.lazy(() => AppointmentStatusSchema) ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  client: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  payment: z.union([ z.lazy(() => PaymentNullableScalarRelationFilterSchema),z.lazy(() => PaymentWhereInputSchema) ]).optional().nullable(),
  reminders: z.lazy(() => ReminderListRelationFilterSchema).optional()
}).strict();

export const AppointmentOrderByWithRelationInputSchema: z.ZodType<Prisma.AppointmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  client: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional(),
  payment: z.lazy(() => PaymentOrderByWithRelationInputSchema).optional(),
  reminders: z.lazy(() => ReminderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AppointmentWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AppointmentWhereInputSchema),z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentWhereInputSchema),z.lazy(() => AppointmentWhereInputSchema).array() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppointmentStatusFilterSchema),z.lazy(() => AppointmentStatusSchema) ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  client: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  payment: z.union([ z.lazy(() => PaymentNullableScalarRelationFilterSchema),z.lazy(() => PaymentWhereInputSchema) ]).optional().nullable(),
  reminders: z.lazy(() => ReminderListRelationFilterSchema).optional()
}).strict());

export const AppointmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.AppointmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AppointmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AppointmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AppointmentMinOrderByAggregateInputSchema).optional()
}).strict();

export const AppointmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AppointmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema),z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema),z.lazy(() => AppointmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppointmentStatusWithAggregatesFilterSchema),z.lazy(() => AppointmentStatusSchema) ]).optional(),
  clientId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BusinessHourWhereInputSchema: z.ZodType<Prisma.BusinessHourWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessHourWhereInputSchema),z.lazy(() => BusinessHourWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessHourWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessHourWhereInputSchema),z.lazy(() => BusinessHourWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  opening: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  closing: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
}).strict();

export const BusinessHourOrderByWithRelationInputSchema: z.ZodType<Prisma.BusinessHourOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opening: z.lazy(() => SortOrderSchema).optional(),
  closing: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional()
}).strict();

export const BusinessHourWhereUniqueInputSchema: z.ZodType<Prisma.BusinessHourWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => BusinessHourWhereInputSchema),z.lazy(() => BusinessHourWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessHourWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessHourWhereInputSchema),z.lazy(() => BusinessHourWhereInputSchema).array() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  opening: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  closing: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
}).strict());

export const BusinessHourOrderByWithAggregationInputSchema: z.ZodType<Prisma.BusinessHourOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opening: z.lazy(() => SortOrderSchema).optional(),
  closing: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BusinessHourCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BusinessHourAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BusinessHourMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BusinessHourMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BusinessHourSumOrderByAggregateInputSchema).optional()
}).strict();

export const BusinessHourScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BusinessHourScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessHourScalarWhereWithAggregatesInputSchema),z.lazy(() => BusinessHourScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessHourScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessHourScalarWhereWithAggregatesInputSchema),z.lazy(() => BusinessHourScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  opening: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  closing: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ServicePromotionWhereInputSchema: z.ZodType<Prisma.ServicePromotionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServicePromotionWhereInputSchema),z.lazy(() => ServicePromotionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServicePromotionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServicePromotionWhereInputSchema),z.lazy(() => ServicePromotionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
}).strict();

export const ServicePromotionOrderByWithRelationInputSchema: z.ZodType<Prisma.ServicePromotionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional()
}).strict();

export const ServicePromotionWhereUniqueInputSchema: z.ZodType<Prisma.ServicePromotionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ServicePromotionWhereInputSchema),z.lazy(() => ServicePromotionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServicePromotionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServicePromotionWhereInputSchema),z.lazy(() => ServicePromotionWhereInputSchema).array() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
}).strict());

export const ServicePromotionOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServicePromotionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ServicePromotionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServicePromotionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServicePromotionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServicePromotionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServicePromotionSumOrderByAggregateInputSchema).optional()
}).strict();

export const ServicePromotionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServicePromotionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ServicePromotionScalarWhereWithAggregatesInputSchema),z.lazy(() => ServicePromotionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServicePromotionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServicePromotionScalarWhereWithAggregatesInputSchema),z.lazy(() => ServicePromotionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ServiceWhereInputSchema: z.ZodType<Prisma.ServiceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => EnumServiceCategoryFilterSchema),z.lazy(() => ServiceCategorySchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
  promotions: z.lazy(() => ServicePromotionListRelationFilterSchema).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
}).strict();

export const ServiceOrderByWithRelationInputSchema: z.ZodType<Prisma.ServiceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional(),
  appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionOrderByRelationAggregateInputSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional()
}).strict();

export const ServiceWhereUniqueInputSchema: z.ZodType<Prisma.ServiceWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => EnumServiceCategoryFilterSchema),z.lazy(() => ServiceCategorySchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
  promotions: z.lazy(() => ServicePromotionListRelationFilterSchema).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
}).strict());

export const ServiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ServiceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ServiceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ServiceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ServiceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ServiceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ServiceSumOrderByAggregateInputSchema).optional()
}).strict();

export const ServiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ServiceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema),z.lazy(() => ServiceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => EnumServiceCategoryWithAggregatesFilterSchema),z.lazy(() => ServiceCategorySchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BusinessWhereInputSchema: z.ZodType<Prisma.BusinessWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessWhereInputSchema),z.lazy(() => BusinessWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessWhereInputSchema),z.lazy(() => BusinessWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rif: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessType: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  municipality: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  services: z.lazy(() => ServiceListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
  hours: z.lazy(() => BusinessHourListRelationFilterSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionListRelationFilterSchema).optional(),
  promotions: z.lazy(() => ServicePromotionListRelationFilterSchema).optional(),
  address: z.union([ z.lazy(() => AddressScalarRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const BusinessOrderByWithRelationInputSchema: z.ZodType<Prisma.BusinessOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rif: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  municipality: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  services: z.lazy(() => ServiceOrderByRelationAggregateInputSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional(),
  appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
  hours: z.lazy(() => BusinessHourOrderByRelationAggregateInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionOrderByRelationAggregateInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionOrderByRelationAggregateInputSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const BusinessWhereUniqueInputSchema: z.ZodType<Prisma.BusinessWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    rif: z.string(),
    addressId: z.string()
  }),
  z.object({
    id: z.string(),
    rif: z.string(),
  }),
  z.object({
    id: z.string(),
    addressId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    rif: z.string(),
    addressId: z.string(),
  }),
  z.object({
    rif: z.string(),
  }),
  z.object({
    addressId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  rif: z.string().optional(),
  addressId: z.string().optional(),
  AND: z.union([ z.lazy(() => BusinessWhereInputSchema),z.lazy(() => BusinessWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessWhereInputSchema),z.lazy(() => BusinessWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessType: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  municipality: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  services: z.lazy(() => ServiceListRelationFilterSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
  hours: z.lazy(() => BusinessHourListRelationFilterSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionListRelationFilterSchema).optional(),
  promotions: z.lazy(() => ServicePromotionListRelationFilterSchema).optional(),
  address: z.union([ z.lazy(() => AddressScalarRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const BusinessOrderByWithAggregationInputSchema: z.ZodType<Prisma.BusinessOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rif: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  municipality: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BusinessCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BusinessMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BusinessMinOrderByAggregateInputSchema).optional()
}).strict();

export const BusinessScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BusinessScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema),z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema),z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rif: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  businessType: z.union([ z.lazy(() => EnumBusinessTypeWithAggregatesFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  logo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  municipality: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PaymentWhereInputSchema: z.ZodType<Prisma.PaymentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amountBs: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  amountUsd: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  exchangeRate: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  method: z.union([ z.lazy(() => EnumPaymentMethodFilterSchema),z.lazy(() => PaymentMethodSchema) ]).optional(),
  reference: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  client: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  appointment: z.union([ z.lazy(() => AppointmentNullableScalarRelationFilterSchema),z.lazy(() => AppointmentWhereInputSchema) ]).optional().nullable(),
}).strict();

export const PaymentOrderByWithRelationInputSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  client: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional(),
  appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional()
}).strict();

export const PaymentWhereUniqueInputSchema: z.ZodType<Prisma.PaymentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    appointmentId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    appointmentId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  appointmentId: z.string().optional(),
  AND: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentWhereInputSchema),z.lazy(() => PaymentWhereInputSchema).array() ]).optional(),
  amountBs: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  amountUsd: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  exchangeRate: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  method: z.union([ z.lazy(() => EnumPaymentMethodFilterSchema),z.lazy(() => PaymentMethodSchema) ]).optional(),
  reference: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  client: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  service: z.union([ z.lazy(() => ServiceScalarRelationFilterSchema),z.lazy(() => ServiceWhereInputSchema) ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  appointment: z.union([ z.lazy(() => AppointmentNullableScalarRelationFilterSchema),z.lazy(() => AppointmentWhereInputSchema) ]).optional().nullable(),
}).strict());

export const PaymentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PaymentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PaymentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PaymentSumOrderByAggregateInputSchema).optional()
}).strict();

export const PaymentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amountBs: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  amountUsd: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  exchangeRate: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  method: z.union([ z.lazy(() => EnumPaymentMethodWithAggregatesFilterSchema),z.lazy(() => PaymentMethodSchema) ]).optional(),
  reference: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  clientId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ReminderWhereInputSchema: z.ZodType<Prisma.ReminderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReminderWhereInputSchema),z.lazy(() => ReminderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderWhereInputSchema),z.lazy(() => ReminderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  retries: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  appointment: z.union([ z.lazy(() => AppointmentScalarRelationFilterSchema),z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
}).strict();

export const ReminderOrderByWithRelationInputSchema: z.ZodType<Prisma.ReminderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  triggerTime: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  retries: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  appointment: z.lazy(() => AppointmentOrderByWithRelationInputSchema).optional()
}).strict();

export const ReminderWhereUniqueInputSchema: z.ZodType<Prisma.ReminderWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ReminderWhereInputSchema),z.lazy(() => ReminderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderWhereInputSchema),z.lazy(() => ReminderWhereInputSchema).array() ]).optional(),
  method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  retries: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  appointment: z.union([ z.lazy(() => AppointmentScalarRelationFilterSchema),z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
}).strict());

export const ReminderOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReminderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  triggerTime: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  retries: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReminderCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReminderAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReminderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReminderMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReminderSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReminderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReminderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReminderScalarWhereWithAggregatesInputSchema),z.lazy(() => ReminderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderScalarWhereWithAggregatesInputSchema),z.lazy(() => ReminderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  triggerTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  retries: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserSecurityWhereInputSchema: z.ZodType<Prisma.UserSecurityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserSecurityWhereInputSchema),z.lazy(() => UserSecurityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSecurityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSecurityWhereInputSchema),z.lazy(() => UserSecurityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const UserSecurityOrderByWithRelationInputSchema: z.ZodType<Prisma.UserSecurityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const UserSecurityWhereUniqueInputSchema: z.ZodType<Prisma.UserSecurityWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserSecurityWhereInputSchema),z.lazy(() => UserSecurityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSecurityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSecurityWhereInputSchema),z.lazy(() => UserSecurityWhereInputSchema).array() ]).optional(),
  token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const UserSecurityOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserSecurityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserSecurityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserSecurityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserSecurityMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserSecurityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserSecurityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserSecurityScalarWhereWithAggregatesInputSchema),z.lazy(() => UserSecurityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserSecurityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserSecurityScalarWhereWithAggregatesInputSchema),z.lazy(() => UserSecurityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SubscriptionPromotionWhereInputSchema: z.ZodType<Prisma.SubscriptionPromotionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionPromotionWhereInputSchema),z.lazy(() => SubscriptionPromotionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionPromotionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionPromotionWhereInputSchema),z.lazy(() => SubscriptionPromotionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  applicableTo: z.lazy(() => EnumSubscriptionPlanNullableListFilterSchema).optional(),
  subscriptionId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  subscription: z.union([ z.lazy(() => SubscriptionNullableScalarRelationFilterSchema),z.lazy(() => SubscriptionWhereInputSchema) ]).optional().nullable(),
}).strict();

export const SubscriptionPromotionOrderByWithRelationInputSchema: z.ZodType<Prisma.SubscriptionPromotionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  applicableTo: z.lazy(() => SortOrderSchema).optional(),
  subscriptionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  subscription: z.lazy(() => SubscriptionOrderByWithRelationInputSchema).optional()
}).strict();

export const SubscriptionPromotionWhereUniqueInputSchema: z.ZodType<Prisma.SubscriptionPromotionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SubscriptionPromotionWhereInputSchema),z.lazy(() => SubscriptionPromotionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionPromotionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionPromotionWhereInputSchema),z.lazy(() => SubscriptionPromotionWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  applicableTo: z.lazy(() => EnumSubscriptionPlanNullableListFilterSchema).optional(),
  subscriptionId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  subscription: z.union([ z.lazy(() => SubscriptionNullableScalarRelationFilterSchema),z.lazy(() => SubscriptionWhereInputSchema) ]).optional().nullable(),
}).strict());

export const SubscriptionPromotionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubscriptionPromotionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  applicableTo: z.lazy(() => SortOrderSchema).optional(),
  subscriptionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SubscriptionPromotionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SubscriptionPromotionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubscriptionPromotionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubscriptionPromotionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SubscriptionPromotionSumOrderByAggregateInputSchema).optional()
}).strict();

export const SubscriptionPromotionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubscriptionPromotionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionPromotionScalarWhereWithAggregatesInputSchema),z.lazy(() => SubscriptionPromotionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionPromotionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionPromotionScalarWhereWithAggregatesInputSchema),z.lazy(() => SubscriptionPromotionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  applicableTo: z.lazy(() => EnumSubscriptionPlanNullableListFilterSchema).optional(),
  subscriptionId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SubscriptionWhereInputSchema: z.ZodType<Prisma.SubscriptionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionWhereInputSchema),z.lazy(() => SubscriptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionWhereInputSchema),z.lazy(() => SubscriptionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  plan: z.union([ z.lazy(() => EnumSubscriptionPlanFilterSchema),z.lazy(() => SubscriptionPlanSchema) ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumSubscriptionStatusFilterSchema),z.lazy(() => SubscriptionStatusSchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  promotions: z.lazy(() => SubscriptionPromotionListRelationFilterSchema).optional()
}).strict();

export const SubscriptionOrderByWithRelationInputSchema: z.ZodType<Prisma.SubscriptionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  plan: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  promotions: z.lazy(() => SubscriptionPromotionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SubscriptionWhereUniqueInputSchema: z.ZodType<Prisma.SubscriptionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => SubscriptionWhereInputSchema),z.lazy(() => SubscriptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionWhereInputSchema),z.lazy(() => SubscriptionWhereInputSchema).array() ]).optional(),
  plan: z.union([ z.lazy(() => EnumSubscriptionPlanFilterSchema),z.lazy(() => SubscriptionPlanSchema) ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumSubscriptionStatusFilterSchema),z.lazy(() => SubscriptionStatusSchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  business: z.union([ z.lazy(() => BusinessScalarRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  owner: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  promotions: z.lazy(() => SubscriptionPromotionListRelationFilterSchema).optional()
}).strict());

export const SubscriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubscriptionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  plan: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SubscriptionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SubscriptionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SubscriptionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SubscriptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubscriptionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema),z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema),z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  plan: z.union([ z.lazy(() => EnumSubscriptionPlanWithAggregatesFilterSchema),z.lazy(() => SubscriptionPlanSchema) ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumSubscriptionStatusWithAggregatesFilterSchema),z.lazy(() => SubscriptionStatusSchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pid: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  photo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumUserStatusFilterSchema),z.lazy(() => UserStatusSchema) ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
  businesses: z.lazy(() => BusinessListRelationFilterSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
  security: z.union([ z.lazy(() => UserSecurityNullableScalarRelationFilterSchema),z.lazy(() => UserSecurityWhereInputSchema) ]).optional().nullable(),
  subscriptions: z.lazy(() => SubscriptionListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  pid: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  photo: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputSchema).optional(),
  businesses: z.lazy(() => BusinessOrderByRelationAggregateInputSchema).optional(),
  appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputSchema).optional(),
  security: z.lazy(() => UserSecurityOrderByWithRelationInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    pid: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
    pid: z.string(),
  }),
  z.object({
    id: z.string(),
    email: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    pid: z.string(),
    email: z.string(),
  }),
  z.object({
    pid: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  pid: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  photo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumUserStatusFilterSchema),z.lazy(() => UserStatusSchema) ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
  businesses: z.lazy(() => BusinessListRelationFilterSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
  security: z.union([ z.lazy(() => UserSecurityNullableScalarRelationFilterSchema),z.lazy(() => UserSecurityWhereInputSchema) ]).optional().nullable(),
  subscriptions: z.lazy(() => SubscriptionListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  pid: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  photo: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pid: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  photo: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumUserStatusWithAggregatesFilterSchema),z.lazy(() => UserStatusSchema) ]).optional(),
  role: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AddressCreateInputSchema: z.ZodType<Prisma.AddressCreateInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().optional().nullable(),
  latitude: z.number(),
  longitude: z.number(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutAddressInputSchema).optional()
}).strict();

export const AddressUncheckedCreateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().optional().nullable(),
  latitude: z.number(),
  longitude: z.number(),
  business: z.lazy(() => BusinessUncheckedCreateNestedOneWithoutAddressInputSchema).optional()
}).strict();

export const AddressUpdateInputSchema: z.ZodType<Prisma.AddressUpdateInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  latitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUpdateOneWithoutAddressNestedInputSchema).optional()
}).strict();

export const AddressUncheckedUpdateInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  latitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUncheckedUpdateOneWithoutAddressNestedInputSchema).optional()
}).strict();

export const AddressCreateManyInputSchema: z.ZodType<Prisma.AddressCreateManyInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().optional().nullable(),
  latitude: z.number(),
  longitude: z.number()
}).strict();

export const AddressUpdateManyMutationInputSchema: z.ZodType<Prisma.AddressUpdateManyMutationInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  latitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateManyInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  latitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AppointmentCreateInputSchema: z.ZodType<Prisma.AppointmentCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutAppointmentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutAppointmentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutAppointmentsInputSchema),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUncheckedCreateInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payment: z.lazy(() => PaymentUncheckedCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUpdateInputSchema: z.ZodType<Prisma.AppointmentUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  payment: z.lazy(() => PaymentUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payment: z.lazy(() => PaymentUncheckedUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentCreateManyInputSchema: z.ZodType<Prisma.AppointmentCreateManyInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AppointmentUpdateManyMutationInputSchema: z.ZodType<Prisma.AppointmentUpdateManyMutationInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AppointmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessHourCreateInputSchema: z.ZodType<Prisma.BusinessHourCreateInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutHoursInputSchema)
}).strict();

export const BusinessHourUncheckedCreateInputSchema: z.ZodType<Prisma.BusinessHourUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date(),
  businessId: z.string()
}).strict();

export const BusinessHourUpdateInputSchema: z.ZodType<Prisma.BusinessHourUpdateInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutHoursNestedInputSchema).optional()
}).strict();

export const BusinessHourUncheckedUpdateInputSchema: z.ZodType<Prisma.BusinessHourUncheckedUpdateInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessHourCreateManyInputSchema: z.ZodType<Prisma.BusinessHourCreateManyInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date(),
  businessId: z.string()
}).strict();

export const BusinessHourUpdateManyMutationInputSchema: z.ZodType<Prisma.BusinessHourUpdateManyMutationInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessHourUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BusinessHourUncheckedUpdateManyInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionCreateInputSchema: z.ZodType<Prisma.ServicePromotionCreateInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutPromotionsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutPromotionsInputSchema)
}).strict();

export const ServicePromotionUncheckedCreateInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServicePromotionUpdateInputSchema: z.ZodType<Prisma.ServicePromotionUpdateInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutPromotionsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutPromotionsNestedInputSchema).optional()
}).strict();

export const ServicePromotionUncheckedUpdateInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionCreateManyInputSchema: z.ZodType<Prisma.ServicePromotionCreateManyInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServicePromotionUpdateManyMutationInputSchema: z.ZodType<Prisma.ServicePromotionUpdateManyMutationInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateManyInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceCreateInputSchema: z.ZodType<Prisma.ServiceCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutServiceInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutServiceInputSchema).optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutServicesInputSchema)
}).strict();

export const ServiceUncheckedCreateInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutServiceInputSchema).optional()
}).strict();

export const ServiceUpdateInputSchema: z.ZodType<Prisma.ServiceUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutServiceNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutServiceNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutServicesNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceCreateManyInputSchema: z.ZodType<Prisma.ServiceCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServiceUpdateManyMutationInputSchema: z.ZodType<Prisma.ServiceUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessCreateInputSchema: z.ZodType<Prisma.BusinessCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessUpdateInputSchema: z.ZodType<Prisma.BusinessUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const BusinessCreateManyInputSchema: z.ZodType<Prisma.BusinessCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BusinessUpdateManyMutationInputSchema: z.ZodType<Prisma.BusinessUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateInputSchema: z.ZodType<Prisma.PaymentCreateInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutPaymentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutPaymentsInputSchema),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutPaymentInputSchema).optional()
}).strict();

export const PaymentUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentUpdateInputSchema: z.ZodType<Prisma.PaymentUpdateInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  appointment: z.lazy(() => AppointmentUpdateOneWithoutPaymentNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateManyInputSchema: z.ZodType<Prisma.PaymentCreateManyInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentUpdateManyMutationInputSchema: z.ZodType<Prisma.PaymentUpdateManyMutationInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderCreateInputSchema: z.ZodType<Prisma.ReminderCreateInput> = z.object({
  id: z.string().optional(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean().optional(),
  retries: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutRemindersInputSchema)
}).strict();

export const ReminderUncheckedCreateInputSchema: z.ZodType<Prisma.ReminderUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean().optional(),
  retries: z.number().int().optional(),
  appointmentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ReminderUpdateInputSchema: z.ZodType<Prisma.ReminderUpdateInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  appointment: z.lazy(() => AppointmentUpdateOneRequiredWithoutRemindersNestedInputSchema).optional()
}).strict();

export const ReminderUncheckedUpdateInputSchema: z.ZodType<Prisma.ReminderUncheckedUpdateInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderCreateManyInputSchema: z.ZodType<Prisma.ReminderCreateManyInput> = z.object({
  id: z.string().optional(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean().optional(),
  retries: z.number().int().optional(),
  appointmentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ReminderUpdateManyMutationInputSchema: z.ZodType<Prisma.ReminderUpdateManyMutationInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReminderUncheckedUpdateManyInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSecurityCreateInputSchema: z.ZodType<Prisma.UserSecurityCreateInput> = z.object({
  id: z.string().optional(),
  token: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSecurityInputSchema)
}).strict();

export const UserSecurityUncheckedCreateInputSchema: z.ZodType<Prisma.UserSecurityUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  token: z.string().optional().nullable(),
  password: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSecurityUpdateInputSchema: z.ZodType<Prisma.UserSecurityUpdateInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSecurityNestedInputSchema).optional()
}).strict();

export const UserSecurityUncheckedUpdateInputSchema: z.ZodType<Prisma.UserSecurityUncheckedUpdateInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSecurityCreateManyInputSchema: z.ZodType<Prisma.UserSecurityCreateManyInput> = z.object({
  id: z.string().optional(),
  token: z.string().optional().nullable(),
  password: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSecurityUpdateManyMutationInputSchema: z.ZodType<Prisma.UserSecurityUpdateManyMutationInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSecurityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserSecurityUncheckedUpdateManyInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionCreateInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionCreateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutPromotionsInputSchema).optional()
}).strict();

export const SubscriptionPromotionUncheckedCreateInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionCreateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  subscriptionId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionPromotionUpdateInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  subscription: z.lazy(() => SubscriptionUpdateOneWithoutPromotionsNestedInputSchema).optional()
}).strict();

export const SubscriptionPromotionUncheckedUpdateInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  subscriptionId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionCreateManyInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionCreateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  subscriptionId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionPromotionUpdateManyMutationInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  subscriptionId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionCreateInputSchema: z.ZodType<Prisma.SubscriptionCreateInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutSubscriptionsInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutSubscriptionsInputSchema),
  promotions: z.lazy(() => SubscriptionPromotionCreateNestedManyWithoutSubscriptionInputSchema).optional()
}).strict();

export const SubscriptionUncheckedCreateInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  businessId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  promotions: z.lazy(() => SubscriptionPromotionUncheckedCreateNestedManyWithoutSubscriptionInputSchema).optional()
}).strict();

export const SubscriptionUpdateInputSchema: z.ZodType<Prisma.SubscriptionUpdateInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional(),
  promotions: z.lazy(() => SubscriptionPromotionUpdateManyWithoutSubscriptionNestedInputSchema).optional()
}).strict();

export const SubscriptionUncheckedUpdateInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  promotions: z.lazy(() => SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionNestedInputSchema).optional()
}).strict();

export const SubscriptionCreateManyInputSchema: z.ZodType<Prisma.SubscriptionCreateManyInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  businessId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionUpdateManyMutationInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyMutationInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const BusinessNullableScalarRelationFilterSchema: z.ZodType<Prisma.BusinessNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => BusinessWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BusinessWhereInputSchema).optional().nullable()
}).strict();

export const AddressCountOrderByAggregateInputSchema: z.ZodType<Prisma.AddressCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zipCode: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AddressAvgOrderByAggregateInput> = z.object({
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zipCode: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressMinOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zipCode: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressSumOrderByAggregateInputSchema: z.ZodType<Prisma.AddressSumOrderByAggregateInput> = z.object({
  latitude: z.lazy(() => SortOrderSchema).optional(),
  longitude: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const EnumAppointmentStatusFilterSchema: z.ZodType<Prisma.EnumAppointmentStatusFilter> = z.object({
  equals: z.lazy(() => AppointmentStatusSchema).optional(),
  in: z.lazy(() => AppointmentStatusSchema).array().optional(),
  notIn: z.lazy(() => AppointmentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => NestedEnumAppointmentStatusFilterSchema) ]).optional(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ServiceScalarRelationFilterSchema: z.ZodType<Prisma.ServiceScalarRelationFilter> = z.object({
  is: z.lazy(() => ServiceWhereInputSchema).optional(),
  isNot: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const BusinessScalarRelationFilterSchema: z.ZodType<Prisma.BusinessScalarRelationFilter> = z.object({
  is: z.lazy(() => BusinessWhereInputSchema).optional(),
  isNot: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const PaymentNullableScalarRelationFilterSchema: z.ZodType<Prisma.PaymentNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => PaymentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PaymentWhereInputSchema).optional().nullable()
}).strict();

export const ReminderListRelationFilterSchema: z.ZodType<Prisma.ReminderListRelationFilter> = z.object({
  every: z.lazy(() => ReminderWhereInputSchema).optional(),
  some: z.lazy(() => ReminderWhereInputSchema).optional(),
  none: z.lazy(() => ReminderWhereInputSchema).optional()
}).strict();

export const ReminderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReminderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AppointmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AppointmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AppointmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.AppointmentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const EnumAppointmentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAppointmentStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AppointmentStatusSchema).optional(),
  in: z.lazy(() => AppointmentStatusSchema).array().optional(),
  notIn: z.lazy(() => AppointmentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => NestedEnumAppointmentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAppointmentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAppointmentStatusFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const BusinessHourCountOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessHourCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opening: z.lazy(() => SortOrderSchema).optional(),
  closing: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessHourAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessHourAvgOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessHourMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessHourMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opening: z.lazy(() => SortOrderSchema).optional(),
  closing: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessHourMinOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessHourMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opening: z.lazy(() => SortOrderSchema).optional(),
  closing: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessHourSumOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessHourSumOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const ServicePromotionCountOrderByAggregateInputSchema: z.ZodType<Prisma.ServicePromotionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServicePromotionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ServicePromotionAvgOrderByAggregateInput> = z.object({
  discount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServicePromotionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServicePromotionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServicePromotionMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServicePromotionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServicePromotionSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServicePromotionSumOrderByAggregateInput> = z.object({
  discount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumServiceCategoryFilterSchema: z.ZodType<Prisma.EnumServiceCategoryFilter> = z.object({
  equals: z.lazy(() => ServiceCategorySchema).optional(),
  in: z.lazy(() => ServiceCategorySchema).array().optional(),
  notIn: z.lazy(() => ServiceCategorySchema).array().optional(),
  not: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => NestedEnumServiceCategoryFilterSchema) ]).optional(),
}).strict();

export const PaymentListRelationFilterSchema: z.ZodType<Prisma.PaymentListRelationFilter> = z.object({
  every: z.lazy(() => PaymentWhereInputSchema).optional(),
  some: z.lazy(() => PaymentWhereInputSchema).optional(),
  none: z.lazy(() => PaymentWhereInputSchema).optional()
}).strict();

export const AppointmentListRelationFilterSchema: z.ZodType<Prisma.AppointmentListRelationFilter> = z.object({
  every: z.lazy(() => AppointmentWhereInputSchema).optional(),
  some: z.lazy(() => AppointmentWhereInputSchema).optional(),
  none: z.lazy(() => AppointmentWhereInputSchema).optional()
}).strict();

export const ServicePromotionListRelationFilterSchema: z.ZodType<Prisma.ServicePromotionListRelationFilter> = z.object({
  every: z.lazy(() => ServicePromotionWhereInputSchema).optional(),
  some: z.lazy(() => ServicePromotionWhereInputSchema).optional(),
  none: z.lazy(() => ServicePromotionWhereInputSchema).optional()
}).strict();

export const PaymentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PaymentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AppointmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AppointmentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServicePromotionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServicePromotionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceAvgOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ServiceSumOrderByAggregateInputSchema: z.ZodType<Prisma.ServiceSumOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumServiceCategoryWithAggregatesFilterSchema: z.ZodType<Prisma.EnumServiceCategoryWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ServiceCategorySchema).optional(),
  in: z.lazy(() => ServiceCategorySchema).array().optional(),
  notIn: z.lazy(() => ServiceCategorySchema).array().optional(),
  not: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => NestedEnumServiceCategoryWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumServiceCategoryFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumServiceCategoryFilterSchema).optional()
}).strict();

export const EnumBusinessTypeFilterSchema: z.ZodType<Prisma.EnumBusinessTypeFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeFilterSchema) ]).optional(),
}).strict();

export const ServiceListRelationFilterSchema: z.ZodType<Prisma.ServiceListRelationFilter> = z.object({
  every: z.lazy(() => ServiceWhereInputSchema).optional(),
  some: z.lazy(() => ServiceWhereInputSchema).optional(),
  none: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const BusinessHourListRelationFilterSchema: z.ZodType<Prisma.BusinessHourListRelationFilter> = z.object({
  every: z.lazy(() => BusinessHourWhereInputSchema).optional(),
  some: z.lazy(() => BusinessHourWhereInputSchema).optional(),
  none: z.lazy(() => BusinessHourWhereInputSchema).optional()
}).strict();

export const SubscriptionListRelationFilterSchema: z.ZodType<Prisma.SubscriptionListRelationFilter> = z.object({
  every: z.lazy(() => SubscriptionWhereInputSchema).optional(),
  some: z.lazy(() => SubscriptionWhereInputSchema).optional(),
  none: z.lazy(() => SubscriptionWhereInputSchema).optional()
}).strict();

export const AddressScalarRelationFilterSchema: z.ZodType<Prisma.AddressScalarRelationFilter> = z.object({
  is: z.lazy(() => AddressWhereInputSchema).optional(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export const ServiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ServiceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessHourOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BusinessHourOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubscriptionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessCountOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rif: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  municipality: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rif: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  municipality: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessMinOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  rif: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  municipality: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumBusinessTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBusinessTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional()
}).strict();

export const EnumPaymentMethodFilterSchema: z.ZodType<Prisma.EnumPaymentMethodFilter> = z.object({
  equals: z.lazy(() => PaymentMethodSchema).optional(),
  in: z.lazy(() => PaymentMethodSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => NestedEnumPaymentMethodFilterSchema) ]).optional(),
}).strict();

export const AppointmentNullableScalarRelationFilterSchema: z.ZodType<Prisma.AppointmentNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => AppointmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AppointmentWhereInputSchema).optional().nullable()
}).strict();

export const PaymentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentAvgOrderByAggregateInput> = z.object({
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentMinOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  reference: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  serviceId: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PaymentSumOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentSumOrderByAggregateInput> = z.object({
  amountBs: z.lazy(() => SortOrderSchema).optional(),
  amountUsd: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumPaymentMethodWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPaymentMethodWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PaymentMethodSchema).optional(),
  in: z.lazy(() => PaymentMethodSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => NestedEnumPaymentMethodWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentMethodFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentMethodFilterSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const AppointmentScalarRelationFilterSchema: z.ZodType<Prisma.AppointmentScalarRelationFilter> = z.object({
  is: z.lazy(() => AppointmentWhereInputSchema).optional(),
  isNot: z.lazy(() => AppointmentWhereInputSchema).optional()
}).strict();

export const ReminderCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  triggerTime: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  retries: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderAvgOrderByAggregateInput> = z.object({
  retries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  triggerTime: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  retries: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  triggerTime: z.lazy(() => SortOrderSchema).optional(),
  sent: z.lazy(() => SortOrderSchema).optional(),
  retries: z.lazy(() => SortOrderSchema).optional(),
  appointmentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReminderSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReminderSumOrderByAggregateInput> = z.object({
  retries: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const UserSecurityCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserSecurityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSecurityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserSecurityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSecurityMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserSecurityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSubscriptionPlanNullableListFilterSchema: z.ZodType<Prisma.EnumSubscriptionPlanNullableListFilter> = z.object({
  equals: z.lazy(() => SubscriptionPlanSchema).array().optional().nullable(),
  has: z.lazy(() => SubscriptionPlanSchema).optional().nullable(),
  hasEvery: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  hasSome: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const SubscriptionNullableScalarRelationFilterSchema: z.ZodType<Prisma.SubscriptionNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SubscriptionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SubscriptionWhereInputSchema).optional().nullable()
}).strict();

export const SubscriptionPromotionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionPromotionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  applicableTo: z.lazy(() => SortOrderSchema).optional(),
  subscriptionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionPromotionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionPromotionAvgOrderByAggregateInput> = z.object({
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionPromotionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionPromotionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  subscriptionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionPromotionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionPromotionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  subscriptionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionPromotionSumOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionPromotionSumOrderByAggregateInput> = z.object({
  discount: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSubscriptionPlanFilterSchema: z.ZodType<Prisma.EnumSubscriptionPlanFilter> = z.object({
  equals: z.lazy(() => SubscriptionPlanSchema).optional(),
  in: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => NestedEnumSubscriptionPlanFilterSchema) ]).optional(),
}).strict();

export const EnumSubscriptionStatusFilterSchema: z.ZodType<Prisma.EnumSubscriptionStatusFilter> = z.object({
  equals: z.lazy(() => SubscriptionStatusSchema).optional(),
  in: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => NestedEnumSubscriptionStatusFilterSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionListRelationFilterSchema: z.ZodType<Prisma.SubscriptionPromotionListRelationFilter> = z.object({
  every: z.lazy(() => SubscriptionPromotionWhereInputSchema).optional(),
  some: z.lazy(() => SubscriptionPromotionWhereInputSchema).optional(),
  none: z.lazy(() => SubscriptionPromotionWhereInputSchema).optional()
}).strict();

export const SubscriptionPromotionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubscriptionPromotionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  plan: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  plan: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SubscriptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  plan: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSubscriptionPlanWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSubscriptionPlanWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SubscriptionPlanSchema).optional(),
  in: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => NestedEnumSubscriptionPlanWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionPlanFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionPlanFilterSchema).optional()
}).strict();

export const EnumSubscriptionStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSubscriptionStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SubscriptionStatusSchema).optional(),
  in: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => NestedEnumSubscriptionStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionStatusFilterSchema).optional()
}).strict();

export const EnumUserStatusFilterSchema: z.ZodType<Prisma.EnumUserStatusFilter> = z.object({
  equals: z.lazy(() => UserStatusSchema).optional(),
  in: z.lazy(() => UserStatusSchema).array().optional(),
  notIn: z.lazy(() => UserStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => NestedEnumUserStatusFilterSchema) ]).optional(),
}).strict();

export const BusinessListRelationFilterSchema: z.ZodType<Prisma.BusinessListRelationFilter> = z.object({
  every: z.lazy(() => BusinessWhereInputSchema).optional(),
  some: z.lazy(() => BusinessWhereInputSchema).optional(),
  none: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const UserSecurityNullableScalarRelationFilterSchema: z.ZodType<Prisma.UserSecurityNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => UserSecurityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserSecurityWhereInputSchema).optional().nullable()
}).strict();

export const BusinessOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BusinessOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  pid: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  photo: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  pid: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  photo: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  pid: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  photo: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumUserStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserStatusSchema).optional(),
  in: z.lazy(() => UserStatusSchema).array().optional(),
  notIn: z.lazy(() => UserStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => NestedEnumUserStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserStatusFilterSchema).optional()
}).strict();

export const BusinessCreateNestedOneWithoutAddressInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutAddressInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const BusinessUncheckedCreateNestedOneWithoutAddressInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateNestedOneWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutAddressInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BusinessUpdateOneWithoutAddressNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutAddressInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutAddressInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutAddressInputSchema),z.lazy(() => BusinessUpdateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAddressInputSchema) ]).optional(),
}).strict();

export const BusinessUncheckedUpdateOneWithoutAddressNestedInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateOneWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutAddressInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutAddressInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutAddressInputSchema),z.lazy(() => BusinessUpdateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAddressInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAppointmentsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ServiceCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutAppointmentsInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional()
}).strict();

export const BusinessCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutAppointmentsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const PaymentCreateNestedOneWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentCreateNestedOneWithoutAppointmentInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputSchema).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputSchema).optional()
}).strict();

export const ReminderCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderCreateNestedManyWithoutAppointmentInput> = z.object({
  create: z.union([ z.lazy(() => ReminderCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateWithoutAppointmentInputSchema).array(),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderCreateManyAppointmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedCreateNestedOneWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedOneWithoutAppointmentInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputSchema).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputSchema).optional()
}).strict();

export const ReminderUncheckedCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUncheckedCreateNestedManyWithoutAppointmentInput> = z.object({
  create: z.union([ z.lazy(() => ReminderCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateWithoutAppointmentInputSchema).array(),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderCreateManyAppointmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const EnumAppointmentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAppointmentStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AppointmentStatusSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAppointmentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAppointmentsInputSchema),z.lazy(() => UserUpdateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
}).strict();

export const ServiceUpdateOneRequiredWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutAppointmentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutAppointmentsInputSchema),z.lazy(() => ServiceUpdateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
}).strict();

export const BusinessUpdateOneRequiredWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutAppointmentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAppointmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutAppointmentsInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutAppointmentsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutAppointmentsInputSchema),z.lazy(() => BusinessUpdateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAppointmentsInputSchema) ]).optional(),
}).strict();

export const PaymentUpdateOneWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.PaymentUpdateOneWithoutAppointmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputSchema).optional(),
  upsert: z.lazy(() => PaymentUpsertWithoutAppointmentInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PaymentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PaymentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateToOneWithWhereWithoutAppointmentInputSchema),z.lazy(() => PaymentUpdateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputSchema) ]).optional(),
}).strict();

export const ReminderUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.ReminderUpdateManyWithoutAppointmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReminderCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateWithoutAppointmentInputSchema).array(),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReminderUpsertWithWhereUniqueWithoutAppointmentInputSchema),z.lazy(() => ReminderUpsertWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderCreateManyAppointmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReminderUpdateWithWhereUniqueWithoutAppointmentInputSchema),z.lazy(() => ReminderUpdateWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReminderUpdateManyWithWhereWithoutAppointmentInputSchema),z.lazy(() => ReminderUpdateManyWithWhereWithoutAppointmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReminderScalarWhereInputSchema),z.lazy(() => ReminderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedUpdateOneWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateOneWithoutAppointmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutAppointmentInputSchema).optional(),
  upsert: z.lazy(() => PaymentUpsertWithoutAppointmentInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PaymentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PaymentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateToOneWithWhereWithoutAppointmentInputSchema),z.lazy(() => PaymentUpdateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputSchema) ]).optional(),
}).strict();

export const ReminderUncheckedUpdateManyWithoutAppointmentNestedInputSchema: z.ZodType<Prisma.ReminderUncheckedUpdateManyWithoutAppointmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReminderCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateWithoutAppointmentInputSchema).array(),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema),z.lazy(() => ReminderCreateOrConnectWithoutAppointmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReminderUpsertWithWhereUniqueWithoutAppointmentInputSchema),z.lazy(() => ReminderUpsertWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReminderCreateManyAppointmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReminderWhereUniqueInputSchema),z.lazy(() => ReminderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReminderUpdateWithWhereUniqueWithoutAppointmentInputSchema),z.lazy(() => ReminderUpdateWithWhereUniqueWithoutAppointmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReminderUpdateManyWithWhereWithoutAppointmentInputSchema),z.lazy(() => ReminderUpdateManyWithWhereWithoutAppointmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReminderScalarWhereInputSchema),z.lazy(() => ReminderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateNestedOneWithoutHoursInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutHoursInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutHoursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutHoursInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BusinessUpdateOneRequiredWithoutHoursNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutHoursNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutHoursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutHoursInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutHoursInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutHoursInputSchema),z.lazy(() => BusinessUpdateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutHoursInputSchema) ]).optional(),
}).strict();

export const ServiceCreateNestedOneWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutPromotionsInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPromotionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutPromotionsInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional()
}).strict();

export const BusinessCreateNestedOneWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutPromotionsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPromotionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutPromotionsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const ServiceUpdateOneRequiredWithoutPromotionsNestedInputSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutPromotionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPromotionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutPromotionsInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutPromotionsInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutPromotionsInputSchema),z.lazy(() => ServiceUpdateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutPromotionsInputSchema) ]).optional(),
}).strict();

export const BusinessUpdateOneRequiredWithoutPromotionsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutPromotionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPromotionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutPromotionsInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutPromotionsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutPromotionsInputSchema),z.lazy(() => BusinessUpdateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutPromotionsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutServiceInputSchema),z.lazy(() => PaymentCreateWithoutServiceInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AppointmentCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutServiceInputSchema),z.lazy(() => AppointmentCreateWithoutServiceInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateNestedOneWithoutServicesInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutServicesInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutServicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutServicesInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const PaymentUncheckedCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutServiceInputSchema),z.lazy(() => PaymentCreateWithoutServiceInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutServiceInputSchema),z.lazy(() => AppointmentCreateWithoutServiceInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionUncheckedCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedCreateNestedManyWithoutServiceInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyServiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumServiceCategoryFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumServiceCategoryFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ServiceCategorySchema).optional()
}).strict();

export const PaymentUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutServiceInputSchema),z.lazy(() => PaymentCreateWithoutServiceInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutServiceInputSchema),z.lazy(() => AppointmentCreateWithoutServiceInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.ServicePromotionUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServicePromotionScalarWhereInputSchema),z.lazy(() => ServicePromotionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUpdateOneRequiredWithoutServicesNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutServicesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutServicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutServicesInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutServicesInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutServicesInputSchema),z.lazy(() => BusinessUpdateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutServicesInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutServiceInputSchema),z.lazy(() => PaymentCreateWithoutServiceInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutServiceInputSchema),z.lazy(() => AppointmentCreateWithoutServiceInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => AppointmentUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionUncheckedUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateManyWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutServiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyServiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutServiceInputSchema),z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutServiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutServiceInputSchema),z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutServiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServicePromotionScalarWhereInputSchema),z.lazy(() => ServicePromotionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServiceCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutBusinessInputSchema),z.lazy(() => ServiceCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutBusinessInputSchema),z.lazy(() => PaymentCreateWithoutBusinessInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AppointmentCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateWithoutBusinessInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessHourCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema).array(),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessHourCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SubscriptionCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AddressCreateNestedOneWithoutBusinessInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedCreateWithoutBusinessInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutBusinessInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutBusinessesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBusinessesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedCreateWithoutBusinessesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBusinessesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutBusinessInputSchema),z.lazy(() => ServiceCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutBusinessInputSchema),z.lazy(() => PaymentCreateWithoutBusinessInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateWithoutBusinessInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema).array(),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessHourCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumBusinessTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBusinessTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BusinessTypeSchema).optional()
}).strict();

export const ServiceUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.ServiceUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutBusinessInputSchema),z.lazy(() => ServiceCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServiceUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServiceUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => ServiceUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceScalarWhereInputSchema),z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutBusinessInputSchema),z.lazy(() => PaymentCreateWithoutBusinessInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateWithoutBusinessInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => AppointmentUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessHourUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.BusinessHourUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema).array(),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessHourUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => BusinessHourUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessHourCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessHourUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => BusinessHourUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessHourUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => BusinessHourUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessHourScalarWhereInputSchema),z.lazy(() => BusinessHourScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SubscriptionUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => SubscriptionUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.ServicePromotionUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServicePromotionScalarWhereInputSchema),z.lazy(() => ServicePromotionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AddressUpdateOneRequiredWithoutBusinessNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedCreateWithoutBusinessInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutBusinessInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutBusinessInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateToOneWithWhereWithoutBusinessInputSchema),z.lazy(() => AddressUpdateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutBusinessInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBusinessesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedCreateWithoutBusinessesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBusinessesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBusinessesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBusinessesInputSchema),z.lazy(() => UserUpdateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBusinessesInputSchema) ]).optional(),
}).strict();

export const ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutBusinessInputSchema),z.lazy(() => ServiceCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServiceCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServiceUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServiceUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServiceCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServiceWhereUniqueInputSchema),z.lazy(() => ServiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServiceUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServiceUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => ServiceUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServiceScalarWhereInputSchema),z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutBusinessInputSchema),z.lazy(() => PaymentCreateWithoutBusinessInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateWithoutBusinessInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => AppointmentUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.BusinessHourUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema).array(),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => BusinessHourCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessHourUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => BusinessHourUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessHourCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessHourWhereUniqueInputSchema),z.lazy(() => BusinessHourWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessHourUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => BusinessHourUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessHourUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => BusinessHourUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessHourScalarWhereInputSchema),z.lazy(() => BusinessHourScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => SubscriptionUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema).array(),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => ServicePromotionCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ServicePromotionCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ServicePromotionWhereUniqueInputSchema),z.lazy(() => ServicePromotionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ServicePromotionScalarWhereInputSchema),z.lazy(() => ServicePromotionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPaymentsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ServiceCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutPaymentsInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional()
}).strict();

export const BusinessCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutPaymentsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const AppointmentCreateNestedOneWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutPaymentInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutPaymentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutPaymentInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional()
}).strict();

export const EnumPaymentMethodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPaymentMethodFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PaymentMethodSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPaymentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPaymentsInputSchema),z.lazy(() => UserUpdateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
}).strict();

export const ServiceUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutPaymentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ServiceCreateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ServiceUpdateToOneWithWhereWithoutPaymentsInputSchema),z.lazy(() => ServiceUpdateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
}).strict();

export const BusinessUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutPaymentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPaymentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutPaymentsInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutPaymentsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutPaymentsInputSchema),z.lazy(() => BusinessUpdateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutPaymentsInputSchema) ]).optional(),
}).strict();

export const AppointmentUpdateOneWithoutPaymentNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateOneWithoutPaymentNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutPaymentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutPaymentInputSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutPaymentInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AppointmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateToOneWithWhereWithoutPaymentInputSchema),z.lazy(() => AppointmentUpdateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutPaymentInputSchema) ]).optional(),
}).strict();

export const AppointmentCreateNestedOneWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutRemindersInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutRemindersInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const AppointmentUpdateOneRequiredWithoutRemindersNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutRemindersNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutRemindersInputSchema).optional(),
  upsert: z.lazy(() => AppointmentUpsertWithoutRemindersInputSchema).optional(),
  connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateToOneWithWhereWithoutRemindersInputSchema),z.lazy(() => AppointmentUpdateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutRemindersInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSecurityInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSecurityInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedCreateWithoutSecurityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSecurityInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSecurityNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSecurityNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedCreateWithoutSecurityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSecurityInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSecurityInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSecurityInputSchema),z.lazy(() => UserUpdateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSecurityInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionCreateapplicableToInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateapplicableToInput> = z.object({
  set: z.lazy(() => SubscriptionPlanSchema).array()
}).strict();

export const SubscriptionCreateNestedOneWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedOneWithoutPromotionsInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPromotionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutPromotionsInputSchema).optional(),
  connect: z.lazy(() => SubscriptionWhereUniqueInputSchema).optional()
}).strict();

export const SubscriptionPromotionUpdateapplicableToInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateapplicableToInput> = z.object({
  set: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  push: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
}).strict();

export const SubscriptionUpdateOneWithoutPromotionsNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateOneWithoutPromotionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPromotionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutPromotionsInputSchema).optional(),
  upsert: z.lazy(() => SubscriptionUpsertWithoutPromotionsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SubscriptionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SubscriptionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateToOneWithWhereWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUpdateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutPromotionsInputSchema) ]).optional(),
}).strict();

export const BusinessCreateNestedOneWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutSubscriptionsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscriptionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const SubscriptionPromotionCreateNestedManyWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateNestedManyWithoutSubscriptionInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema).array(),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionPromotionCreateManySubscriptionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SubscriptionPromotionUncheckedCreateNestedManyWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedCreateNestedManyWithoutSubscriptionInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema).array(),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionPromotionCreateManySubscriptionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumSubscriptionPlanFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SubscriptionPlanSchema).optional()
}).strict();

export const EnumSubscriptionStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSubscriptionStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SubscriptionStatusSchema).optional()
}).strict();

export const BusinessUpdateOneRequiredWithoutSubscriptionsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutSubscriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateToOneWithWhereWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUpdateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutSubscriptionsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutSubscriptionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSubscriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema),z.lazy(() => UserUpdateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSubscriptionsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionUpdateManyWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateManyWithoutSubscriptionNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema).array(),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionPromotionUpsertWithWhereUniqueWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUpsertWithWhereUniqueWithoutSubscriptionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionPromotionCreateManySubscriptionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionPromotionUpdateWithWhereUniqueWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUpdateWithWhereUniqueWithoutSubscriptionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionPromotionUpdateManyWithWhereWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUpdateManyWithWhereWithoutSubscriptionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionPromotionScalarWhereInputSchema),z.lazy(() => SubscriptionPromotionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema).array(),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionPromotionUpsertWithWhereUniqueWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUpsertWithWhereUniqueWithoutSubscriptionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionPromotionCreateManySubscriptionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionPromotionUpdateWithWhereUniqueWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUpdateWithWhereUniqueWithoutSubscriptionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionPromotionUpdateManyWithWhereWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUpdateManyWithWhereWithoutSubscriptionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionPromotionScalarWhereInputSchema),z.lazy(() => SubscriptionPromotionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutClientInputSchema),z.lazy(() => PaymentCreateWithoutClientInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutOwnerInputSchema),z.lazy(() => BusinessCreateWithoutOwnerInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AppointmentCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema),z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserSecurityCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserSecurityCreateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserSecurityCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserSecurityWhereUniqueInputSchema).optional()
}).strict();

export const SubscriptionCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutClientInputSchema),z.lazy(() => PaymentCreateWithoutClientInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutOwnerInputSchema),z.lazy(() => BusinessCreateWithoutOwnerInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUncheckedCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema),z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserSecurityUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserSecurityCreateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserSecurityCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserSecurityWhereUniqueInputSchema).optional()
}).strict();

export const SubscriptionUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumUserStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserStatusSchema).optional()
}).strict();

export const PaymentUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutClientInputSchema),z.lazy(() => PaymentCreateWithoutClientInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.BusinessUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutOwnerInputSchema),z.lazy(() => BusinessCreateWithoutOwnerInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => BusinessUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => BusinessUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => BusinessUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema),z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserSecurityUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserSecurityUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserSecurityCreateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserSecurityCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserSecurityUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserSecurityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserSecurityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserSecurityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserSecurityUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => UserSecurityUpdateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SubscriptionUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => SubscriptionUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentCreateWithoutClientInputSchema),z.lazy(() => PaymentCreateWithoutClientInputSchema).array(),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema),z.lazy(() => PaymentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => PaymentUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentWhereUniqueInputSchema),z.lazy(() => PaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => PaymentUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => PaymentUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutOwnerInputSchema),z.lazy(() => BusinessCreateWithoutOwnerInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => BusinessUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BusinessCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => BusinessUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => BusinessUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema),z.lazy(() => AppointmentCreateWithoutClientInputSchema).array(),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema),z.lazy(() => AppointmentCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => AppointmentUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppointmentCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppointmentWhereUniqueInputSchema),z.lazy(() => AppointmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => AppointmentUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => AppointmentUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserSecurityUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserSecurityUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserSecurityCreateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserSecurityCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserSecurityUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserSecurityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserSecurityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserSecurityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserSecurityUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => UserSecurityUpdateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SubscriptionUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => SubscriptionUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumAppointmentStatusFilterSchema: z.ZodType<Prisma.NestedEnumAppointmentStatusFilter> = z.object({
  equals: z.lazy(() => AppointmentStatusSchema).optional(),
  in: z.lazy(() => AppointmentStatusSchema).array().optional(),
  notIn: z.lazy(() => AppointmentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => NestedEnumAppointmentStatusFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumAppointmentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAppointmentStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AppointmentStatusSchema).optional(),
  in: z.lazy(() => AppointmentStatusSchema).array().optional(),
  notIn: z.lazy(() => AppointmentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => NestedEnumAppointmentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAppointmentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAppointmentStatusFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedEnumServiceCategoryFilterSchema: z.ZodType<Prisma.NestedEnumServiceCategoryFilter> = z.object({
  equals: z.lazy(() => ServiceCategorySchema).optional(),
  in: z.lazy(() => ServiceCategorySchema).array().optional(),
  notIn: z.lazy(() => ServiceCategorySchema).array().optional(),
  not: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => NestedEnumServiceCategoryFilterSchema) ]).optional(),
}).strict();

export const NestedEnumServiceCategoryWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumServiceCategoryWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ServiceCategorySchema).optional(),
  in: z.lazy(() => ServiceCategorySchema).array().optional(),
  notIn: z.lazy(() => ServiceCategorySchema).array().optional(),
  not: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => NestedEnumServiceCategoryWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumServiceCategoryFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumServiceCategoryFilterSchema).optional()
}).strict();

export const NestedEnumBusinessTypeFilterSchema: z.ZodType<Prisma.NestedEnumBusinessTypeFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumBusinessTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBusinessTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional()
}).strict();

export const NestedEnumPaymentMethodFilterSchema: z.ZodType<Prisma.NestedEnumPaymentMethodFilter> = z.object({
  equals: z.lazy(() => PaymentMethodSchema).optional(),
  in: z.lazy(() => PaymentMethodSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => NestedEnumPaymentMethodFilterSchema) ]).optional(),
}).strict();

export const NestedEnumPaymentMethodWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPaymentMethodWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PaymentMethodSchema).optional(),
  in: z.lazy(() => PaymentMethodSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => NestedEnumPaymentMethodWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentMethodFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentMethodFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedEnumSubscriptionPlanFilterSchema: z.ZodType<Prisma.NestedEnumSubscriptionPlanFilter> = z.object({
  equals: z.lazy(() => SubscriptionPlanSchema).optional(),
  in: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => NestedEnumSubscriptionPlanFilterSchema) ]).optional(),
}).strict();

export const NestedEnumSubscriptionStatusFilterSchema: z.ZodType<Prisma.NestedEnumSubscriptionStatusFilter> = z.object({
  equals: z.lazy(() => SubscriptionStatusSchema).optional(),
  in: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => NestedEnumSubscriptionStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumSubscriptionPlanWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSubscriptionPlanWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SubscriptionPlanSchema).optional(),
  in: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionPlanSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => NestedEnumSubscriptionPlanWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionPlanFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionPlanFilterSchema).optional()
}).strict();

export const NestedEnumSubscriptionStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SubscriptionStatusSchema).optional(),
  in: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  notIn: z.lazy(() => SubscriptionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => NestedEnumSubscriptionStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscriptionStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscriptionStatusFilterSchema).optional()
}).strict();

export const NestedEnumUserStatusFilterSchema: z.ZodType<Prisma.NestedEnumUserStatusFilter> = z.object({
  equals: z.lazy(() => UserStatusSchema).optional(),
  in: z.lazy(() => UserStatusSchema).array().optional(),
  notIn: z.lazy(() => UserStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => NestedEnumUserStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumUserStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserStatusSchema).optional(),
  in: z.lazy(() => UserStatusSchema).array().optional(),
  notIn: z.lazy(() => UserStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => NestedEnumUserStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserStatusFilterSchema).optional()
}).strict();

export const BusinessCreateWithoutAddressInputSchema: z.ZodType<Prisma.BusinessCreateWithoutAddressInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutAddressInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutAddressInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutAddressInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export const BusinessUpsertWithoutAddressInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutAddressInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAddressInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAddressInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutAddressInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutAddressInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAddressInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutAddressInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutAddressInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutAddressInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutAddressInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserCreateWithoutAppointmentsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutOwnerInputSchema).optional(),
  security: z.lazy(() => UserSecurityCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAppointmentsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAppointmentsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppointmentsInputSchema) ]),
}).strict();

export const ServiceCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceCreateWithoutAppointmentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutServiceInputSchema).optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutServicesInputSchema)
}).strict();

export const ServiceUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutAppointmentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutServiceInputSchema).optional()
}).strict();

export const ServiceCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutAppointmentsInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutAppointmentsInputSchema) ]),
}).strict();

export const BusinessCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutAppointmentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutAppointmentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutAppointmentsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAppointmentsInputSchema) ]),
}).strict();

export const PaymentCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentCreateWithoutAppointmentInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutPaymentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutPaymentsInputSchema)
}).strict();

export const PaymentUncheckedCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutAppointmentInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentCreateOrConnectWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutAppointmentInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema) ]),
}).strict();

export const ReminderCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderCreateWithoutAppointmentInput> = z.object({
  id: z.string().optional(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean().optional(),
  retries: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ReminderUncheckedCreateWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUncheckedCreateWithoutAppointmentInput> = z.object({
  id: z.string().optional(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean().optional(),
  retries: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ReminderCreateOrConnectWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderCreateOrConnectWithoutAppointmentInput> = z.object({
  where: z.lazy(() => ReminderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReminderCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema) ]),
}).strict();

export const ReminderCreateManyAppointmentInputEnvelopeSchema: z.ZodType<Prisma.ReminderCreateManyAppointmentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReminderCreateManyAppointmentInputSchema),z.lazy(() => ReminderCreateManyAppointmentInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAppointmentsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAppointmentsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAppointmentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAppointmentsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAppointmentsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutOwnerNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAppointmentsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const ServiceUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceUpsertWithoutAppointmentsInput> = z.object({
  update: z.union([ z.lazy(() => ServiceUpdateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const ServiceUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutAppointmentsInput> = z.object({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutAppointmentsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutAppointmentsInputSchema) ]),
}).strict();

export const ServiceUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceUpdateWithoutAppointmentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutServiceNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutServicesNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutAppointmentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutServiceNestedInputSchema).optional()
}).strict();

export const BusinessUpsertWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutAppointmentsInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAppointmentsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutAppointmentsInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutAppointmentsInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutAppointmentsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutAppointmentsInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutAppointmentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutAppointmentsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutAppointmentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const PaymentUpsertWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpsertWithoutAppointmentInput> = z.object({
  update: z.union([ z.lazy(() => PaymentUpdateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutAppointmentInputSchema) ]),
  where: z.lazy(() => PaymentWhereInputSchema).optional()
}).strict();

export const PaymentUpdateToOneWithWhereWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpdateToOneWithWhereWithoutAppointmentInput> = z.object({
  where: z.lazy(() => PaymentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutAppointmentInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutAppointmentInputSchema) ]),
}).strict();

export const PaymentUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutAppointmentInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutAppointmentInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderUpsertWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUpsertWithWhereUniqueWithoutAppointmentInput> = z.object({
  where: z.lazy(() => ReminderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReminderUpdateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedUpdateWithoutAppointmentInputSchema) ]),
  create: z.union([ z.lazy(() => ReminderCreateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedCreateWithoutAppointmentInputSchema) ]),
}).strict();

export const ReminderUpdateWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUpdateWithWhereUniqueWithoutAppointmentInput> = z.object({
  where: z.lazy(() => ReminderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReminderUpdateWithoutAppointmentInputSchema),z.lazy(() => ReminderUncheckedUpdateWithoutAppointmentInputSchema) ]),
}).strict();

export const ReminderUpdateManyWithWhereWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUpdateManyWithWhereWithoutAppointmentInput> = z.object({
  where: z.lazy(() => ReminderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReminderUpdateManyMutationInputSchema),z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentInputSchema) ]),
}).strict();

export const ReminderScalarWhereInputSchema: z.ZodType<Prisma.ReminderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReminderScalarWhereInputSchema),z.lazy(() => ReminderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReminderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReminderScalarWhereInputSchema),z.lazy(() => ReminderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  sent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  retries: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BusinessCreateWithoutHoursInputSchema: z.ZodType<Prisma.BusinessCreateWithoutHoursInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutHoursInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutHoursInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutHoursInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutHoursInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutHoursInputSchema) ]),
}).strict();

export const BusinessUpsertWithoutHoursInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutHoursInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutHoursInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutHoursInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutHoursInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutHoursInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutHoursInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutHoursInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutHoursInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutHoursInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutHoursInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutHoursInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const ServiceCreateWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceCreateWithoutPromotionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutServiceInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutServiceInputSchema).optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutServicesInputSchema)
}).strict();

export const ServiceUncheckedCreateWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutPromotionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema).optional()
}).strict();

export const ServiceCreateOrConnectWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutPromotionsInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPromotionsInputSchema) ]),
}).strict();

export const BusinessCreateWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutPromotionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutPromotionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutPromotionsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPromotionsInputSchema) ]),
}).strict();

export const ServiceUpsertWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceUpsertWithoutPromotionsInput> = z.object({
  update: z.union([ z.lazy(() => ServiceUpdateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutPromotionsInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPromotionsInputSchema) ]),
  where: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const ServiceUpdateToOneWithWhereWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutPromotionsInput> = z.object({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutPromotionsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutPromotionsInputSchema) ]),
}).strict();

export const ServiceUpdateWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceUpdateWithoutPromotionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutServiceNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutServiceNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutServicesNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateWithoutPromotionsInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutPromotionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional()
}).strict();

export const BusinessUpsertWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutPromotionsInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutPromotionsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPromotionsInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutPromotionsInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutPromotionsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutPromotionsInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutPromotionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutPromotionsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutPromotionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const PaymentCreateWithoutServiceInputSchema: z.ZodType<Prisma.PaymentCreateWithoutServiceInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutPaymentsInputSchema),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutPaymentInputSchema).optional()
}).strict();

export const PaymentUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutServiceInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutServiceInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const PaymentCreateManyServiceInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyServiceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentCreateManyServiceInputSchema),z.lazy(() => PaymentCreateManyServiceInputSchema).array() ]),
}).strict();

export const AppointmentCreateWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutServiceInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutAppointmentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutAppointmentsInputSchema),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutServiceInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payment: z.lazy(() => PaymentUncheckedCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutServiceInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const AppointmentCreateManyServiceInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyServiceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppointmentCreateManyServiceInputSchema),z.lazy(() => AppointmentCreateManyServiceInputSchema).array() ]),
}).strict();

export const ServicePromotionCreateWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionCreateWithoutServiceInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutPromotionsInputSchema)
}).strict();

export const ServicePromotionUncheckedCreateWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedCreateWithoutServiceInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServicePromotionCreateOrConnectWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionCreateOrConnectWithoutServiceInput> = z.object({
  where: z.lazy(() => ServicePromotionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const ServicePromotionCreateManyServiceInputEnvelopeSchema: z.ZodType<Prisma.ServicePromotionCreateManyServiceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServicePromotionCreateManyServiceInputSchema),z.lazy(() => ServicePromotionCreateManyServiceInputSchema).array() ]),
}).strict();

export const BusinessCreateWithoutServicesInputSchema: z.ZodType<Prisma.BusinessCreateWithoutServicesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutServicesInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutServicesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutServicesInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutServicesInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutServicesInputSchema) ]),
}).strict();

export const PaymentUpsertWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const PaymentUpdateWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutServiceInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict();

export const PaymentUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema),z.lazy(() => PaymentUncheckedUpdateManyWithoutServiceInputSchema) ]),
}).strict();

export const PaymentScalarWhereInputSchema: z.ZodType<Prisma.PaymentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentScalarWhereInputSchema),z.lazy(() => PaymentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amountBs: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  amountUsd: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  exchangeRate: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  method: z.union([ z.lazy(() => EnumPaymentMethodFilterSchema),z.lazy(() => PaymentMethodSchema) ]).optional(),
  reference: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appointmentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AppointmentUpsertWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const AppointmentUpdateWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutServiceInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict();

export const AppointmentUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema),z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceInputSchema) ]),
}).strict();

export const AppointmentScalarWhereInputSchema: z.ZodType<Prisma.AppointmentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AppointmentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AppointmentScalarWhereInputSchema),z.lazy(() => AppointmentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumAppointmentStatusFilterSchema),z.lazy(() => AppointmentStatusSchema) ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ServicePromotionUpsertWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUpsertWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => ServicePromotionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServicePromotionUpdateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedUpdateWithoutServiceInputSchema) ]),
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutServiceInputSchema) ]),
}).strict();

export const ServicePromotionUpdateWithWhereUniqueWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUpdateWithWhereUniqueWithoutServiceInput> = z.object({
  where: z.lazy(() => ServicePromotionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServicePromotionUpdateWithoutServiceInputSchema),z.lazy(() => ServicePromotionUncheckedUpdateWithoutServiceInputSchema) ]),
}).strict();

export const ServicePromotionUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUpdateManyWithWhereWithoutServiceInput> = z.object({
  where: z.lazy(() => ServicePromotionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServicePromotionUpdateManyMutationInputSchema),z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutServiceInputSchema) ]),
}).strict();

export const ServicePromotionScalarWhereInputSchema: z.ZodType<Prisma.ServicePromotionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServicePromotionScalarWhereInputSchema),z.lazy(() => ServicePromotionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServicePromotionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServicePromotionScalarWhereInputSchema),z.lazy(() => ServicePromotionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BusinessUpsertWithoutServicesInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutServicesInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutServicesInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutServicesInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutServicesInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutServicesInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutServicesInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutServicesInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutServicesInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutServicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutServicesInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutServicesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const ServiceCreateWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutServiceInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutServiceInputSchema).optional()
}).strict();

export const ServiceUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutServiceInputSchema).optional()
}).strict();

export const ServiceCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const ServiceCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.ServiceCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServiceCreateManyBusinessInputSchema),z.lazy(() => ServiceCreateManyBusinessInputSchema).array() ]),
}).strict();

export const PaymentCreateWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutPaymentsInputSchema),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutPaymentInputSchema).optional()
}).strict();

export const PaymentUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  serviceId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const PaymentCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentCreateManyBusinessInputSchema),z.lazy(() => PaymentCreateManyBusinessInputSchema).array() ]),
}).strict();

export const AppointmentCreateWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutAppointmentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutAppointmentsInputSchema),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  serviceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payment: z.lazy(() => PaymentUncheckedCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const AppointmentCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppointmentCreateManyBusinessInputSchema),z.lazy(() => AppointmentCreateManyBusinessInputSchema).array() ]),
}).strict();

export const BusinessHourCreateWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date()
}).strict();

export const BusinessHourUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date()
}).strict();

export const BusinessHourCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => BusinessHourWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const BusinessHourCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.BusinessHourCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BusinessHourCreateManyBusinessInputSchema),z.lazy(() => BusinessHourCreateManyBusinessInputSchema).array() ]),
}).strict();

export const SubscriptionCreateWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutSubscriptionsInputSchema),
  promotions: z.lazy(() => SubscriptionPromotionCreateNestedManyWithoutSubscriptionInputSchema).optional()
}).strict();

export const SubscriptionUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  promotions: z.lazy(() => SubscriptionPromotionUncheckedCreateNestedManyWithoutSubscriptionInputSchema).optional()
}).strict();

export const SubscriptionCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const SubscriptionCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubscriptionCreateManyBusinessInputSchema),z.lazy(() => SubscriptionCreateManyBusinessInputSchema).array() ]),
}).strict();

export const ServicePromotionCreateWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutPromotionsInputSchema)
}).strict();

export const ServicePromotionUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  serviceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServicePromotionCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServicePromotionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const ServicePromotionCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.ServicePromotionCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ServicePromotionCreateManyBusinessInputSchema),z.lazy(() => ServicePromotionCreateManyBusinessInputSchema).array() ]),
}).strict();

export const AddressCreateWithoutBusinessInputSchema: z.ZodType<Prisma.AddressCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().optional().nullable(),
  latitude: z.number(),
  longitude: z.number()
}).strict();

export const AddressUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string().optional().nullable(),
  latitude: z.number(),
  longitude: z.number()
}).strict();

export const AddressCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const UserCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.UserCreateWithoutBusinessesInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutClientInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBusinessesInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBusinessesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export const ServiceUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServiceUpdateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const ServiceUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutBusinessInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const ServiceUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServiceUpdateManyMutationInputSchema),z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export const ServiceScalarWhereInputSchema: z.ZodType<Prisma.ServiceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceScalarWhereInputSchema),z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceScalarWhereInputSchema),z.lazy(() => ServiceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => EnumServiceCategoryFilterSchema),z.lazy(() => ServiceCategorySchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PaymentUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const PaymentUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutBusinessInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const PaymentUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema),z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export const AppointmentUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const AppointmentUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutBusinessInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const AppointmentUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema),z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export const BusinessHourUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => BusinessHourWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BusinessHourUpdateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessHourCreateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const BusinessHourUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => BusinessHourWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BusinessHourUpdateWithoutBusinessInputSchema),z.lazy(() => BusinessHourUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const BusinessHourUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => BusinessHourScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BusinessHourUpdateManyMutationInputSchema),z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export const BusinessHourScalarWhereInputSchema: z.ZodType<Prisma.BusinessHourScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessHourScalarWhereInputSchema),z.lazy(() => BusinessHourScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessHourScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessHourScalarWhereInputSchema),z.lazy(() => BusinessHourScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  opening: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  closing: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const SubscriptionUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const SubscriptionUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateWithoutBusinessInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const SubscriptionUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => SubscriptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateManyMutationInputSchema),z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export const SubscriptionScalarWhereInputSchema: z.ZodType<Prisma.SubscriptionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  plan: z.union([ z.lazy(() => EnumSubscriptionPlanFilterSchema),z.lazy(() => SubscriptionPlanSchema) ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumSubscriptionStatusFilterSchema),z.lazy(() => SubscriptionStatusSchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ServicePromotionUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServicePromotionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ServicePromotionUpdateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => ServicePromotionCreateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const ServicePromotionUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServicePromotionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ServicePromotionUpdateWithoutBusinessInputSchema),z.lazy(() => ServicePromotionUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const ServicePromotionUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => ServicePromotionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ServicePromotionUpdateManyMutationInputSchema),z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessInputSchema) ]),
}).strict();

export const AddressUpsertWithoutBusinessInputSchema: z.ZodType<Prisma.AddressUpsertWithoutBusinessInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedCreateWithoutBusinessInputSchema) ]),
  where: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export const AddressUpdateToOneWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => AddressWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddressUpdateWithoutBusinessInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const AddressUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.AddressUpdateWithoutBusinessInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  latitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutBusinessInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  zipCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  latitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  longitude: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpsertWithoutBusinessesInputSchema: z.ZodType<Prisma.UserUpsertWithoutBusinessesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBusinessesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedCreateWithoutBusinessesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBusinessesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBusinessesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBusinessesInputSchema) ]),
}).strict();

export const UserUpdateWithoutBusinessesInputSchema: z.ZodType<Prisma.UserUpdateWithoutBusinessesInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutClientNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutBusinessesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBusinessesInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.UserCreateWithoutPaymentsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPaymentsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPaymentsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPaymentsInputSchema) ]),
}).strict();

export const ServiceCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceCreateWithoutPaymentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutServiceInputSchema).optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutServicesInputSchema)
}).strict();

export const ServiceUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceUncheckedCreateWithoutPaymentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutServiceInputSchema).optional()
}).strict();

export const ServiceCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutPaymentsInput> = z.object({
  where: z.lazy(() => ServiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ServiceCreateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPaymentsInputSchema) ]),
}).strict();

export const BusinessCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutPaymentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutPaymentsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutPaymentsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPaymentsInputSchema) ]),
}).strict();

export const AppointmentCreateWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutPaymentInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutAppointmentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutAppointmentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutAppointmentsInputSchema),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUncheckedCreateWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutPaymentInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentCreateOrConnectWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutPaymentInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutPaymentInputSchema) ]),
}).strict();

export const UserUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.UserUpsertWithoutPaymentsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPaymentsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPaymentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPaymentsInputSchema) ]),
}).strict();

export const UserUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.UserUpdateWithoutPaymentsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPaymentsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const ServiceUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceUpsertWithoutPaymentsInput> = z.object({
  update: z.union([ z.lazy(() => ServiceUpdateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => ServiceCreateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict();

export const ServiceUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutPaymentsInput> = z.object({
  where: z.lazy(() => ServiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ServiceUpdateWithoutPaymentsInputSchema),z.lazy(() => ServiceUncheckedUpdateWithoutPaymentsInputSchema) ]),
}).strict();

export const ServiceUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceUpdateWithoutPaymentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutServiceNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutServicesNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutPaymentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutServiceNestedInputSchema).optional()
}).strict();

export const BusinessUpsertWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutPaymentsInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutPaymentsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutPaymentsInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutPaymentsInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutPaymentsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutPaymentsInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutPaymentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutPaymentsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutPaymentsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const AppointmentUpsertWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentUpsertWithoutPaymentInput> = z.object({
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutPaymentInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutPaymentInputSchema) ]),
  where: z.lazy(() => AppointmentWhereInputSchema).optional()
}).strict();

export const AppointmentUpdateToOneWithWhereWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutPaymentInput> = z.object({
  where: z.lazy(() => AppointmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutPaymentInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutPaymentInputSchema) ]),
}).strict();

export const AppointmentUpdateWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutPaymentInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateWithoutPaymentInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutPaymentInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  reminders: z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentCreateWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutRemindersInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  client: z.lazy(() => UserCreateNestedOneWithoutAppointmentsInputSchema),
  service: z.lazy(() => ServiceCreateNestedOneWithoutAppointmentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutAppointmentsInputSchema),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUncheckedCreateWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutRemindersInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payment: z.lazy(() => PaymentUncheckedCreateNestedOneWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentCreateOrConnectWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutRemindersInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputSchema) ]),
}).strict();

export const AppointmentUpsertWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentUpsertWithoutRemindersInput> = z.object({
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutRemindersInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutRemindersInputSchema) ]),
  where: z.lazy(() => AppointmentWhereInputSchema).optional()
}).strict();

export const AppointmentUpdateToOneWithWhereWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentUpdateToOneWithWhereWithoutRemindersInput> = z.object({
  where: z.lazy(() => AppointmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutRemindersInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutRemindersInputSchema) ]),
}).strict();

export const AppointmentUpdateWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutRemindersInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  payment: z.lazy(() => PaymentUpdateOneWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateWithoutRemindersInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutRemindersInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payment: z.lazy(() => PaymentUncheckedUpdateOneWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSecurityInputSchema: z.ZodType<Prisma.UserCreateWithoutSecurityInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSecurityInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSecurityInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSecurityInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSecurityInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedCreateWithoutSecurityInputSchema) ]),
}).strict();

export const UserUpsertWithoutSecurityInputSchema: z.ZodType<Prisma.UserUpsertWithoutSecurityInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSecurityInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedCreateWithoutSecurityInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSecurityInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSecurityInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSecurityInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSecurityInputSchema) ]),
}).strict();

export const UserUpdateWithoutSecurityInputSchema: z.ZodType<Prisma.UserUpdateWithoutSecurityInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSecurityInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSecurityInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export const SubscriptionCreateWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutPromotionsInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutSubscriptionsInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutSubscriptionsInputSchema)
}).strict();

export const SubscriptionUncheckedCreateWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutPromotionsInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  businessId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionCreateOrConnectWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutPromotionsInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPromotionsInputSchema) ]),
}).strict();

export const SubscriptionUpsertWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithoutPromotionsInput> = z.object({
  update: z.union([ z.lazy(() => SubscriptionUpdateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutPromotionsInputSchema) ]),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPromotionsInputSchema) ]),
  where: z.lazy(() => SubscriptionWhereInputSchema).optional()
}).strict();

export const SubscriptionUpdateToOneWithWhereWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionUpdateToOneWithWhereWithoutPromotionsInput> = z.object({
  where: z.lazy(() => SubscriptionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SubscriptionUpdateWithoutPromotionsInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutPromotionsInputSchema) ]),
}).strict();

export const SubscriptionUpdateWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutPromotionsInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional()
}).strict();

export const SubscriptionUncheckedUpdateWithoutPromotionsInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutPromotionsInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessCreateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutSubscriptionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema),
  owner: z.lazy(() => UserCreateNestedOneWithoutBusinessesInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutSubscriptionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutSubscriptionsInputSchema) ]),
}).strict();

export const UserCreateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSubscriptionsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSubscriptionsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  pid: z.string().optional().nullable(),
  phone: z.string(),
  photo: z.string().optional().nullable(),
  email: z.string(),
  status: z.lazy(() => UserStatusSchema).optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutClientInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]),
}).strict();

export const SubscriptionPromotionCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateWithoutSubscriptionInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionCreateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedCreateWithoutSubscriptionInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionCreateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionPromotionCreateOrConnectWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateOrConnectWithoutSubscriptionInput> = z.object({
  where: z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema) ]),
}).strict();

export const SubscriptionPromotionCreateManySubscriptionInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionPromotionCreateManySubscriptionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubscriptionPromotionCreateManySubscriptionInputSchema),z.lazy(() => SubscriptionPromotionCreateManySubscriptionInputSchema).array() ]),
}).strict();

export const BusinessUpsertWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutSubscriptionsInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutSubscriptionsInputSchema) ]),
  where: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessUpdateToOneWithWhereWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessUpdateToOneWithWhereWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => BusinessWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutSubscriptionsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutSubscriptionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutSubscriptionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSubscriptionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSubscriptionsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSubscriptionsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pid: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  photo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusSchema),z.lazy(() => EnumUserStatusFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientNestedInputSchema).optional(),
  security: z.lazy(() => UserSecurityUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const SubscriptionPromotionUpsertWithWhereUniqueWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpsertWithWhereUniqueWithoutSubscriptionInput> = z.object({
  where: z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubscriptionPromotionUpdateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedUpdateWithoutSubscriptionInputSchema) ]),
  create: z.union([ z.lazy(() => SubscriptionPromotionCreateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedCreateWithoutSubscriptionInputSchema) ]),
}).strict();

export const SubscriptionPromotionUpdateWithWhereUniqueWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateWithWhereUniqueWithoutSubscriptionInput> = z.object({
  where: z.lazy(() => SubscriptionPromotionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubscriptionPromotionUpdateWithoutSubscriptionInputSchema),z.lazy(() => SubscriptionPromotionUncheckedUpdateWithoutSubscriptionInputSchema) ]),
}).strict();

export const SubscriptionPromotionUpdateManyWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateManyWithWhereWithoutSubscriptionInput> = z.object({
  where: z.lazy(() => SubscriptionPromotionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubscriptionPromotionUpdateManyMutationInputSchema),z.lazy(() => SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionInputSchema) ]),
}).strict();

export const SubscriptionPromotionScalarWhereInputSchema: z.ZodType<Prisma.SubscriptionPromotionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionPromotionScalarWhereInputSchema),z.lazy(() => SubscriptionPromotionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionPromotionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionPromotionScalarWhereInputSchema),z.lazy(() => SubscriptionPromotionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  duration: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  applicableTo: z.lazy(() => EnumSubscriptionPlanNullableListFilterSchema).optional(),
  subscriptionId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PaymentCreateWithoutClientInputSchema: z.ZodType<Prisma.PaymentCreateWithoutClientInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutPaymentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutPaymentsInputSchema),
  appointment: z.lazy(() => AppointmentCreateNestedOneWithoutPaymentInputSchema).optional()
}).strict();

export const PaymentUncheckedCreateWithoutClientInputSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutClientInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  serviceId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentCreateOrConnectWithoutClientInputSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutClientInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentCreateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema) ]),
}).strict();

export const PaymentCreateManyClientInputEnvelopeSchema: z.ZodType<Prisma.PaymentCreateManyClientInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentCreateManyClientInputSchema),z.lazy(() => PaymentCreateManyClientInputSchema).array() ]),
}).strict();

export const BusinessCreateWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessCreateWithoutOwnerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionCreateNestedManyWithoutBusinessInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutBusinessInputSchema)
}).strict();

export const BusinessUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const BusinessCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.BusinessCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BusinessCreateManyOwnerInputSchema),z.lazy(() => BusinessCreateManyOwnerInputSchema).array() ]),
}).strict();

export const AppointmentCreateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentCreateWithoutClientInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  service: z.lazy(() => ServiceCreateNestedOneWithoutAppointmentsInputSchema),
  business: z.lazy(() => BusinessCreateNestedOneWithoutAppointmentsInputSchema),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentUncheckedCreateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedCreateWithoutClientInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payment: z.lazy(() => PaymentUncheckedCreateNestedOneWithoutAppointmentInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedCreateNestedManyWithoutAppointmentInputSchema).optional()
}).strict();

export const AppointmentCreateOrConnectWithoutClientInputSchema: z.ZodType<Prisma.AppointmentCreateOrConnectWithoutClientInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema) ]),
}).strict();

export const AppointmentCreateManyClientInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyClientInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppointmentCreateManyClientInputSchema),z.lazy(() => AppointmentCreateManyClientInputSchema).array() ]),
}).strict();

export const UserSecurityCreateWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  token: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSecurityUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  token: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserSecurityCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserSecurityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserSecurityCreateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SubscriptionCreateWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutOwnerInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  business: z.lazy(() => BusinessCreateNestedOneWithoutSubscriptionsInputSchema),
  promotions: z.lazy(() => SubscriptionPromotionCreateNestedManyWithoutSubscriptionInputSchema).optional()
}).strict();

export const SubscriptionUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  promotions: z.lazy(() => SubscriptionPromotionUncheckedCreateNestedManyWithoutSubscriptionInputSchema).optional()
}).strict();

export const SubscriptionCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const SubscriptionCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubscriptionCreateManyOwnerInputSchema),z.lazy(() => SubscriptionCreateManyOwnerInputSchema).array() ]),
}).strict();

export const PaymentUpsertWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentUpdateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutClientInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentCreateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedCreateWithoutClientInputSchema) ]),
}).strict();

export const PaymentUpdateWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => PaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateWithoutClientInputSchema),z.lazy(() => PaymentUncheckedUpdateWithoutClientInputSchema) ]),
}).strict();

export const PaymentUpdateManyWithWhereWithoutClientInputSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutClientInput> = z.object({
  where: z.lazy(() => PaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentUpdateManyMutationInputSchema),z.lazy(() => PaymentUncheckedUpdateManyWithoutClientInputSchema) ]),
}).strict();

export const BusinessUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BusinessUpdateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const BusinessUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutOwnerInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export const BusinessUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => BusinessScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BusinessUpdateManyMutationInputSchema),z.lazy(() => BusinessUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export const BusinessScalarWhereInputSchema: z.ZodType<Prisma.BusinessScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rif: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessType: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  municipality: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AppointmentUpsertWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpsertWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppointmentUpdateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutClientInputSchema) ]),
  create: z.union([ z.lazy(() => AppointmentCreateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedCreateWithoutClientInputSchema) ]),
}).strict();

export const AppointmentUpdateWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => AppointmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateWithoutClientInputSchema),z.lazy(() => AppointmentUncheckedUpdateWithoutClientInputSchema) ]),
}).strict();

export const AppointmentUpdateManyWithWhereWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutClientInput> = z.object({
  where: z.lazy(() => AppointmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AppointmentUpdateManyMutationInputSchema),z.lazy(() => AppointmentUncheckedUpdateManyWithoutClientInputSchema) ]),
}).strict();

export const UserSecurityUpsertWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => UserSecurityUpdateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserSecurityCreateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => UserSecurityWhereInputSchema).optional()
}).strict();

export const UserSecurityUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserSecurityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserSecurityUpdateWithoutUserInputSchema),z.lazy(() => UserSecurityUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const UserSecurityUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityUpdateWithoutUserInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserSecurityUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserSecurityUncheckedUpdateWithoutUserInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const SubscriptionUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateWithoutOwnerInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export const SubscriptionUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => SubscriptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateManyMutationInputSchema),z.lazy(() => SubscriptionUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export const ReminderCreateManyAppointmentInputSchema: z.ZodType<Prisma.ReminderCreateManyAppointmentInput> = z.object({
  id: z.string().optional(),
  method: z.string(),
  triggerTime: z.coerce.date(),
  sent: z.boolean().optional(),
  retries: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ReminderUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUpdateWithoutAppointmentInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderUncheckedUpdateWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUncheckedUpdateWithoutAppointmentInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReminderUncheckedUpdateManyWithoutAppointmentInputSchema: z.ZodType<Prisma.ReminderUncheckedUpdateManyWithoutAppointmentInput> = z.object({
  method: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  triggerTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  retries: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateManyServiceInputSchema: z.ZodType<Prisma.PaymentCreateManyServiceInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AppointmentCreateManyServiceInputSchema: z.ZodType<Prisma.AppointmentCreateManyServiceInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServicePromotionCreateManyServiceInputSchema: z.ZodType<Prisma.ServicePromotionCreateManyServiceInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentUpdateWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutServiceInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  appointment: z.lazy(() => AppointmentUpdateOneWithoutPaymentNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutServiceInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutServiceInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutServiceInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AppointmentUpdateWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutServiceInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  payment: z.lazy(() => PaymentUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutServiceInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payment: z.lazy(() => PaymentUncheckedUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateManyWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutServiceInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionUpdateWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUpdateWithoutServiceInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutPromotionsNestedInputSchema).optional()
}).strict();

export const ServicePromotionUncheckedUpdateWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateWithoutServiceInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionUncheckedUpdateManyWithoutServiceInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateManyWithoutServiceInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServiceCreateManyBusinessInputSchema: z.ZodType<Prisma.ServiceCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  duration: z.number().int(),
  price: z.number(),
  category: z.lazy(() => ServiceCategorySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentCreateManyBusinessInputSchema: z.ZodType<Prisma.PaymentCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  clientId: z.string(),
  serviceId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AppointmentCreateManyBusinessInputSchema: z.ZodType<Prisma.AppointmentCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  clientId: z.string(),
  serviceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BusinessHourCreateManyBusinessInputSchema: z.ZodType<Prisma.BusinessHourCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number().int(),
  opening: z.coerce.date(),
  closing: z.coerce.date()
}).strict();

export const SubscriptionCreateManyBusinessInputSchema: z.ZodType<Prisma.SubscriptionCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  ownerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServicePromotionCreateManyBusinessInputSchema: z.ZodType<Prisma.ServicePromotionCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  discount: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  serviceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ServiceUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUpdateWithoutBusinessInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutServiceNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateWithoutBusinessInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutServiceNestedInputSchema).optional()
}).strict();

export const ServiceUncheckedUpdateManyWithoutBusinessInputSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyWithoutBusinessInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => ServiceCategorySchema),z.lazy(() => EnumServiceCategoryFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutBusinessInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  appointment: z.lazy(() => AppointmentUpdateOneWithoutPaymentNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutBusinessInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutBusinessInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutBusinessInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AppointmentUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutBusinessInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  client: z.lazy(() => UserUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  payment: z.lazy(() => PaymentUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutBusinessInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payment: z.lazy(() => PaymentUncheckedUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateManyWithoutBusinessInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutBusinessInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessHourUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUpdateWithoutBusinessInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessHourUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUncheckedUpdateWithoutBusinessInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessHourUncheckedUpdateManyWithoutBusinessInputSchema: z.ZodType<Prisma.BusinessHourUncheckedUpdateManyWithoutBusinessInput> = z.object({
  dayOfWeek: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opening: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  closing: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutBusinessInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional(),
  promotions: z.lazy(() => SubscriptionPromotionUpdateManyWithoutSubscriptionNestedInputSchema).optional()
}).strict();

export const SubscriptionUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutBusinessInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  promotions: z.lazy(() => SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionNestedInputSchema).optional()
}).strict();

export const SubscriptionUncheckedUpdateManyWithoutBusinessInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutBusinessInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUpdateWithoutBusinessInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutPromotionsNestedInputSchema).optional()
}).strict();

export const ServicePromotionUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateWithoutBusinessInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ServicePromotionUncheckedUpdateManyWithoutBusinessInputSchema: z.ZodType<Prisma.ServicePromotionUncheckedUpdateManyWithoutBusinessInput> = z.object({
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionCreateManySubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionCreateManySubscriptionInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  discount: z.number(),
  duration: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionCreateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionPromotionUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateWithoutSubscriptionInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionUncheckedUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedUpdateWithoutSubscriptionInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applicableTo: z.union([ z.lazy(() => SubscriptionPromotionUpdateapplicableToInputSchema),z.lazy(() => SubscriptionPlanSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentCreateManyClientInputSchema: z.ZodType<Prisma.PaymentCreateManyClientInput> = z.object({
  id: z.string().optional(),
  amountBs: z.number(),
  amountUsd: z.number(),
  exchangeRate: z.number(),
  method: z.lazy(() => PaymentMethodSchema),
  reference: z.string().optional().nullable(),
  serviceId: z.string(),
  businessId: z.string(),
  appointmentId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BusinessCreateManyOwnerInputSchema: z.ZodType<Prisma.BusinessCreateManyOwnerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  rif: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  logo: z.string(),
  city: z.string(),
  municipality: z.string(),
  phone: z.string(),
  addressId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AppointmentCreateManyClientInputSchema: z.ZodType<Prisma.AppointmentCreateManyClientInput> = z.object({
  id: z.string().optional(),
  date: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => AppointmentStatusSchema).optional(),
  serviceId: z.string(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SubscriptionCreateManyOwnerInputSchema: z.ZodType<Prisma.SubscriptionCreateManyOwnerInput> = z.object({
  id: z.string().optional(),
  plan: z.lazy(() => SubscriptionPlanSchema),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  status: z.lazy(() => SubscriptionStatusSchema).optional(),
  businessId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PaymentUpdateWithoutClientInputSchema: z.ZodType<Prisma.PaymentUpdateWithoutClientInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutPaymentsNestedInputSchema).optional(),
  appointment: z.lazy(() => AppointmentUpdateOneWithoutPaymentNestedInputSchema).optional()
}).strict();

export const PaymentUncheckedUpdateWithoutClientInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateWithoutClientInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PaymentUncheckedUpdateManyWithoutClientInputSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutClientInput> = z.object({
  amountBs: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  amountUsd: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  exchangeRate: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodSchema),z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputSchema) ]).optional(),
  reference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appointmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutOwnerInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUpdateManyWithoutBusinessNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutBusinessNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutOwnerInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  services: z.lazy(() => ServiceUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  hours: z.lazy(() => BusinessHourUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  promotions: z.lazy(() => ServicePromotionUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyWithoutOwnerInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rif: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  municipality: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AppointmentUpdateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUpdateWithoutClientInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  service: z.lazy(() => ServiceUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutAppointmentsNestedInputSchema).optional(),
  payment: z.lazy(() => PaymentUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateWithoutClientInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  payment: z.lazy(() => PaymentUncheckedUpdateOneWithoutAppointmentNestedInputSchema).optional(),
  reminders: z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentNestedInputSchema).optional()
}).strict();

export const AppointmentUncheckedUpdateManyWithoutClientInputSchema: z.ZodType<Prisma.AppointmentUncheckedUpdateManyWithoutClientInput> = z.object({
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => AppointmentStatusSchema),z.lazy(() => EnumAppointmentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  serviceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SubscriptionUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutOwnerInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  business: z.lazy(() => BusinessUpdateOneRequiredWithoutSubscriptionsNestedInputSchema).optional(),
  promotions: z.lazy(() => SubscriptionPromotionUpdateManyWithoutSubscriptionNestedInputSchema).optional()
}).strict();

export const SubscriptionUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutOwnerInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  promotions: z.lazy(() => SubscriptionPromotionUncheckedUpdateManyWithoutSubscriptionNestedInputSchema).optional()
}).strict();

export const SubscriptionUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutOwnerInput> = z.object({
  plan: z.union([ z.lazy(() => SubscriptionPlanSchema),z.lazy(() => EnumSubscriptionPlanFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SubscriptionStatusSchema),z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AddressFindFirstArgsSchema: z.ZodType<Prisma.AddressFindFirstArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressScalarFieldEnumSchema,AddressScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AddressFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AddressFindFirstOrThrowArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressScalarFieldEnumSchema,AddressScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AddressFindManyArgsSchema: z.ZodType<Prisma.AddressFindManyArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressScalarFieldEnumSchema,AddressScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AddressAggregateArgsSchema: z.ZodType<Prisma.AddressAggregateArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AddressGroupByArgsSchema: z.ZodType<Prisma.AddressGroupByArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithAggregationInputSchema.array(),AddressOrderByWithAggregationInputSchema ]).optional(),
  by: AddressScalarFieldEnumSchema.array(),
  having: AddressScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AddressFindUniqueArgsSchema: z.ZodType<Prisma.AddressFindUniqueArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AddressFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AddressFindUniqueOrThrowArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AppointmentFindFirstArgsSchema: z.ZodType<Prisma.AppointmentFindFirstArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereInputSchema.optional(),
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(),AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentScalarFieldEnumSchema,AppointmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AppointmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AppointmentFindFirstOrThrowArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereInputSchema.optional(),
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(),AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentScalarFieldEnumSchema,AppointmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AppointmentFindManyArgsSchema: z.ZodType<Prisma.AppointmentFindManyArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereInputSchema.optional(),
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(),AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AppointmentScalarFieldEnumSchema,AppointmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AppointmentAggregateArgsSchema: z.ZodType<Prisma.AppointmentAggregateArgs> = z.object({
  where: AppointmentWhereInputSchema.optional(),
  orderBy: z.union([ AppointmentOrderByWithRelationInputSchema.array(),AppointmentOrderByWithRelationInputSchema ]).optional(),
  cursor: AppointmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AppointmentGroupByArgsSchema: z.ZodType<Prisma.AppointmentGroupByArgs> = z.object({
  where: AppointmentWhereInputSchema.optional(),
  orderBy: z.union([ AppointmentOrderByWithAggregationInputSchema.array(),AppointmentOrderByWithAggregationInputSchema ]).optional(),
  by: AppointmentScalarFieldEnumSchema.array(),
  having: AppointmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AppointmentFindUniqueArgsSchema: z.ZodType<Prisma.AppointmentFindUniqueArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema,
}).strict() ;

export const AppointmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AppointmentFindUniqueOrThrowArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema,
}).strict() ;

export const BusinessHourFindFirstArgsSchema: z.ZodType<Prisma.BusinessHourFindFirstArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereInputSchema.optional(),
  orderBy: z.union([ BusinessHourOrderByWithRelationInputSchema.array(),BusinessHourOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessHourWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessHourScalarFieldEnumSchema,BusinessHourScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BusinessHourFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BusinessHourFindFirstOrThrowArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereInputSchema.optional(),
  orderBy: z.union([ BusinessHourOrderByWithRelationInputSchema.array(),BusinessHourOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessHourWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessHourScalarFieldEnumSchema,BusinessHourScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BusinessHourFindManyArgsSchema: z.ZodType<Prisma.BusinessHourFindManyArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereInputSchema.optional(),
  orderBy: z.union([ BusinessHourOrderByWithRelationInputSchema.array(),BusinessHourOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessHourWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessHourScalarFieldEnumSchema,BusinessHourScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BusinessHourAggregateArgsSchema: z.ZodType<Prisma.BusinessHourAggregateArgs> = z.object({
  where: BusinessHourWhereInputSchema.optional(),
  orderBy: z.union([ BusinessHourOrderByWithRelationInputSchema.array(),BusinessHourOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessHourWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BusinessHourGroupByArgsSchema: z.ZodType<Prisma.BusinessHourGroupByArgs> = z.object({
  where: BusinessHourWhereInputSchema.optional(),
  orderBy: z.union([ BusinessHourOrderByWithAggregationInputSchema.array(),BusinessHourOrderByWithAggregationInputSchema ]).optional(),
  by: BusinessHourScalarFieldEnumSchema.array(),
  having: BusinessHourScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BusinessHourFindUniqueArgsSchema: z.ZodType<Prisma.BusinessHourFindUniqueArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereUniqueInputSchema,
}).strict() ;

export const BusinessHourFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BusinessHourFindUniqueOrThrowArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereUniqueInputSchema,
}).strict() ;

export const ServicePromotionFindFirstArgsSchema: z.ZodType<Prisma.ServicePromotionFindFirstArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereInputSchema.optional(),
  orderBy: z.union([ ServicePromotionOrderByWithRelationInputSchema.array(),ServicePromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: ServicePromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServicePromotionScalarFieldEnumSchema,ServicePromotionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServicePromotionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ServicePromotionFindFirstOrThrowArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereInputSchema.optional(),
  orderBy: z.union([ ServicePromotionOrderByWithRelationInputSchema.array(),ServicePromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: ServicePromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServicePromotionScalarFieldEnumSchema,ServicePromotionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServicePromotionFindManyArgsSchema: z.ZodType<Prisma.ServicePromotionFindManyArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereInputSchema.optional(),
  orderBy: z.union([ ServicePromotionOrderByWithRelationInputSchema.array(),ServicePromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: ServicePromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServicePromotionScalarFieldEnumSchema,ServicePromotionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServicePromotionAggregateArgsSchema: z.ZodType<Prisma.ServicePromotionAggregateArgs> = z.object({
  where: ServicePromotionWhereInputSchema.optional(),
  orderBy: z.union([ ServicePromotionOrderByWithRelationInputSchema.array(),ServicePromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: ServicePromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServicePromotionGroupByArgsSchema: z.ZodType<Prisma.ServicePromotionGroupByArgs> = z.object({
  where: ServicePromotionWhereInputSchema.optional(),
  orderBy: z.union([ ServicePromotionOrderByWithAggregationInputSchema.array(),ServicePromotionOrderByWithAggregationInputSchema ]).optional(),
  by: ServicePromotionScalarFieldEnumSchema.array(),
  having: ServicePromotionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServicePromotionFindUniqueArgsSchema: z.ZodType<Prisma.ServicePromotionFindUniqueArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereUniqueInputSchema,
}).strict() ;

export const ServicePromotionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ServicePromotionFindUniqueOrThrowArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereUniqueInputSchema,
}).strict() ;

export const ServiceFindFirstArgsSchema: z.ZodType<Prisma.ServiceFindFirstArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceScalarFieldEnumSchema,ServiceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ServiceFindFirstOrThrowArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceScalarFieldEnumSchema,ServiceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceFindManyArgsSchema: z.ZodType<Prisma.ServiceFindManyArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ServiceScalarFieldEnumSchema,ServiceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ServiceAggregateArgsSchema: z.ZodType<Prisma.ServiceAggregateArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithRelationInputSchema.array(),ServiceOrderByWithRelationInputSchema ]).optional(),
  cursor: ServiceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceGroupByArgsSchema: z.ZodType<Prisma.ServiceGroupByArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  orderBy: z.union([ ServiceOrderByWithAggregationInputSchema.array(),ServiceOrderByWithAggregationInputSchema ]).optional(),
  by: ServiceScalarFieldEnumSchema.array(),
  having: ServiceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ServiceFindUniqueArgsSchema: z.ZodType<Prisma.ServiceFindUniqueArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const ServiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ServiceFindUniqueOrThrowArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const BusinessFindFirstArgsSchema: z.ZodType<Prisma.BusinessFindFirstArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessScalarFieldEnumSchema,BusinessScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BusinessFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BusinessFindFirstOrThrowArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessScalarFieldEnumSchema,BusinessScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BusinessFindManyArgsSchema: z.ZodType<Prisma.BusinessFindManyArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BusinessScalarFieldEnumSchema,BusinessScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BusinessAggregateArgsSchema: z.ZodType<Prisma.BusinessAggregateArgs> = z.object({
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BusinessGroupByArgsSchema: z.ZodType<Prisma.BusinessGroupByArgs> = z.object({
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithAggregationInputSchema.array(),BusinessOrderByWithAggregationInputSchema ]).optional(),
  by: BusinessScalarFieldEnumSchema.array(),
  having: BusinessScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BusinessFindUniqueArgsSchema: z.ZodType<Prisma.BusinessFindUniqueArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
}).strict() ;

export const BusinessFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BusinessFindUniqueOrThrowArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
}).strict() ;

export const PaymentFindFirstArgsSchema: z.ZodType<Prisma.PaymentFindFirstArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema,PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PaymentFindFirstOrThrowArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema,PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentFindManyArgsSchema: z.ZodType<Prisma.PaymentFindManyArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentScalarFieldEnumSchema,PaymentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PaymentAggregateArgsSchema: z.ZodType<Prisma.PaymentAggregateArgs> = z.object({
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithRelationInputSchema.array(),PaymentOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PaymentGroupByArgsSchema: z.ZodType<Prisma.PaymentGroupByArgs> = z.object({
  where: PaymentWhereInputSchema.optional(),
  orderBy: z.union([ PaymentOrderByWithAggregationInputSchema.array(),PaymentOrderByWithAggregationInputSchema ]).optional(),
  by: PaymentScalarFieldEnumSchema.array(),
  having: PaymentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PaymentFindUniqueArgsSchema: z.ZodType<Prisma.PaymentFindUniqueArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const PaymentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PaymentFindUniqueOrThrowArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const ReminderFindFirstArgsSchema: z.ZodType<Prisma.ReminderFindFirstArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereInputSchema.optional(),
  orderBy: z.union([ ReminderOrderByWithRelationInputSchema.array(),ReminderOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReminderScalarFieldEnumSchema,ReminderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReminderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReminderFindFirstOrThrowArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereInputSchema.optional(),
  orderBy: z.union([ ReminderOrderByWithRelationInputSchema.array(),ReminderOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReminderScalarFieldEnumSchema,ReminderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReminderFindManyArgsSchema: z.ZodType<Prisma.ReminderFindManyArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereInputSchema.optional(),
  orderBy: z.union([ ReminderOrderByWithRelationInputSchema.array(),ReminderOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReminderScalarFieldEnumSchema,ReminderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReminderAggregateArgsSchema: z.ZodType<Prisma.ReminderAggregateArgs> = z.object({
  where: ReminderWhereInputSchema.optional(),
  orderBy: z.union([ ReminderOrderByWithRelationInputSchema.array(),ReminderOrderByWithRelationInputSchema ]).optional(),
  cursor: ReminderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReminderGroupByArgsSchema: z.ZodType<Prisma.ReminderGroupByArgs> = z.object({
  where: ReminderWhereInputSchema.optional(),
  orderBy: z.union([ ReminderOrderByWithAggregationInputSchema.array(),ReminderOrderByWithAggregationInputSchema ]).optional(),
  by: ReminderScalarFieldEnumSchema.array(),
  having: ReminderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReminderFindUniqueArgsSchema: z.ZodType<Prisma.ReminderFindUniqueArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereUniqueInputSchema,
}).strict() ;

export const ReminderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReminderFindUniqueOrThrowArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereUniqueInputSchema,
}).strict() ;

export const UserSecurityFindFirstArgsSchema: z.ZodType<Prisma.UserSecurityFindFirstArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereInputSchema.optional(),
  orderBy: z.union([ UserSecurityOrderByWithRelationInputSchema.array(),UserSecurityOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSecurityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserSecurityScalarFieldEnumSchema,UserSecurityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserSecurityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserSecurityFindFirstOrThrowArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereInputSchema.optional(),
  orderBy: z.union([ UserSecurityOrderByWithRelationInputSchema.array(),UserSecurityOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSecurityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserSecurityScalarFieldEnumSchema,UserSecurityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserSecurityFindManyArgsSchema: z.ZodType<Prisma.UserSecurityFindManyArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereInputSchema.optional(),
  orderBy: z.union([ UserSecurityOrderByWithRelationInputSchema.array(),UserSecurityOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSecurityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserSecurityScalarFieldEnumSchema,UserSecurityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserSecurityAggregateArgsSchema: z.ZodType<Prisma.UserSecurityAggregateArgs> = z.object({
  where: UserSecurityWhereInputSchema.optional(),
  orderBy: z.union([ UserSecurityOrderByWithRelationInputSchema.array(),UserSecurityOrderByWithRelationInputSchema ]).optional(),
  cursor: UserSecurityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserSecurityGroupByArgsSchema: z.ZodType<Prisma.UserSecurityGroupByArgs> = z.object({
  where: UserSecurityWhereInputSchema.optional(),
  orderBy: z.union([ UserSecurityOrderByWithAggregationInputSchema.array(),UserSecurityOrderByWithAggregationInputSchema ]).optional(),
  by: UserSecurityScalarFieldEnumSchema.array(),
  having: UserSecurityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserSecurityFindUniqueArgsSchema: z.ZodType<Prisma.UserSecurityFindUniqueArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereUniqueInputSchema,
}).strict() ;

export const UserSecurityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserSecurityFindUniqueOrThrowArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionPromotionFindFirstArgsSchema: z.ZodType<Prisma.SubscriptionPromotionFindFirstArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionPromotionOrderByWithRelationInputSchema.array(),SubscriptionPromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionPromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionPromotionScalarFieldEnumSchema,SubscriptionPromotionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SubscriptionPromotionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionPromotionFindFirstOrThrowArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionPromotionOrderByWithRelationInputSchema.array(),SubscriptionPromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionPromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionPromotionScalarFieldEnumSchema,SubscriptionPromotionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SubscriptionPromotionFindManyArgsSchema: z.ZodType<Prisma.SubscriptionPromotionFindManyArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionPromotionOrderByWithRelationInputSchema.array(),SubscriptionPromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionPromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionPromotionScalarFieldEnumSchema,SubscriptionPromotionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SubscriptionPromotionAggregateArgsSchema: z.ZodType<Prisma.SubscriptionPromotionAggregateArgs> = z.object({
  where: SubscriptionPromotionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionPromotionOrderByWithRelationInputSchema.array(),SubscriptionPromotionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionPromotionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SubscriptionPromotionGroupByArgsSchema: z.ZodType<Prisma.SubscriptionPromotionGroupByArgs> = z.object({
  where: SubscriptionPromotionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionPromotionOrderByWithAggregationInputSchema.array(),SubscriptionPromotionOrderByWithAggregationInputSchema ]).optional(),
  by: SubscriptionPromotionScalarFieldEnumSchema.array(),
  having: SubscriptionPromotionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SubscriptionPromotionFindUniqueArgsSchema: z.ZodType<Prisma.SubscriptionPromotionFindUniqueArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionPromotionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionPromotionFindUniqueOrThrowArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionFindFirstArgsSchema: z.ZodType<Prisma.SubscriptionFindFirstArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithRelationInputSchema.array(),SubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionScalarFieldEnumSchema,SubscriptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SubscriptionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionFindFirstOrThrowArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithRelationInputSchema.array(),SubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionScalarFieldEnumSchema,SubscriptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SubscriptionFindManyArgsSchema: z.ZodType<Prisma.SubscriptionFindManyArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithRelationInputSchema.array(),SubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionScalarFieldEnumSchema,SubscriptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SubscriptionAggregateArgsSchema: z.ZodType<Prisma.SubscriptionAggregateArgs> = z.object({
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithRelationInputSchema.array(),SubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SubscriptionGroupByArgsSchema: z.ZodType<Prisma.SubscriptionGroupByArgs> = z.object({
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithAggregationInputSchema.array(),SubscriptionOrderByWithAggregationInputSchema ]).optional(),
  by: SubscriptionScalarFieldEnumSchema.array(),
  having: SubscriptionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SubscriptionFindUniqueArgsSchema: z.ZodType<Prisma.SubscriptionFindUniqueArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionFindUniqueOrThrowArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const AddressCreateArgsSchema: z.ZodType<Prisma.AddressCreateArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  data: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
}).strict() ;

export const AddressUpsertArgsSchema: z.ZodType<Prisma.AddressUpsertArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
  create: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
  update: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
}).strict() ;

export const AddressCreateManyArgsSchema: z.ZodType<Prisma.AddressCreateManyArgs> = z.object({
  data: z.union([ AddressCreateManyInputSchema,AddressCreateManyInputSchema.array() ]),
}).strict() ;

export const AddressDeleteArgsSchema: z.ZodType<Prisma.AddressDeleteArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AddressUpdateArgsSchema: z.ZodType<Prisma.AddressUpdateArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  data: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AddressUpdateManyArgsSchema: z.ZodType<Prisma.AddressUpdateManyArgs> = z.object({
  data: z.union([ AddressUpdateManyMutationInputSchema,AddressUncheckedUpdateManyInputSchema ]),
  where: AddressWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AddressDeleteManyArgsSchema: z.ZodType<Prisma.AddressDeleteManyArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AppointmentCreateArgsSchema: z.ZodType<Prisma.AppointmentCreateArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  data: z.union([ AppointmentCreateInputSchema,AppointmentUncheckedCreateInputSchema ]),
}).strict() ;

export const AppointmentUpsertArgsSchema: z.ZodType<Prisma.AppointmentUpsertArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema,
  create: z.union([ AppointmentCreateInputSchema,AppointmentUncheckedCreateInputSchema ]),
  update: z.union([ AppointmentUpdateInputSchema,AppointmentUncheckedUpdateInputSchema ]),
}).strict() ;

export const AppointmentCreateManyArgsSchema: z.ZodType<Prisma.AppointmentCreateManyArgs> = z.object({
  data: z.union([ AppointmentCreateManyInputSchema,AppointmentCreateManyInputSchema.array() ]),
}).strict() ;

export const AppointmentDeleteArgsSchema: z.ZodType<Prisma.AppointmentDeleteArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  where: AppointmentWhereUniqueInputSchema,
}).strict() ;

export const AppointmentUpdateArgsSchema: z.ZodType<Prisma.AppointmentUpdateArgs> = z.object({
  select: AppointmentSelectSchema.optional(),
  include: AppointmentIncludeSchema.optional(),
  data: z.union([ AppointmentUpdateInputSchema,AppointmentUncheckedUpdateInputSchema ]),
  where: AppointmentWhereUniqueInputSchema,
}).strict() ;

export const AppointmentUpdateManyArgsSchema: z.ZodType<Prisma.AppointmentUpdateManyArgs> = z.object({
  data: z.union([ AppointmentUpdateManyMutationInputSchema,AppointmentUncheckedUpdateManyInputSchema ]),
  where: AppointmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AppointmentDeleteManyArgsSchema: z.ZodType<Prisma.AppointmentDeleteManyArgs> = z.object({
  where: AppointmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BusinessHourCreateArgsSchema: z.ZodType<Prisma.BusinessHourCreateArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  data: z.union([ BusinessHourCreateInputSchema,BusinessHourUncheckedCreateInputSchema ]),
}).strict() ;

export const BusinessHourUpsertArgsSchema: z.ZodType<Prisma.BusinessHourUpsertArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereUniqueInputSchema,
  create: z.union([ BusinessHourCreateInputSchema,BusinessHourUncheckedCreateInputSchema ]),
  update: z.union([ BusinessHourUpdateInputSchema,BusinessHourUncheckedUpdateInputSchema ]),
}).strict() ;

export const BusinessHourCreateManyArgsSchema: z.ZodType<Prisma.BusinessHourCreateManyArgs> = z.object({
  data: z.union([ BusinessHourCreateManyInputSchema,BusinessHourCreateManyInputSchema.array() ]),
}).strict() ;

export const BusinessHourDeleteArgsSchema: z.ZodType<Prisma.BusinessHourDeleteArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  where: BusinessHourWhereUniqueInputSchema,
}).strict() ;

export const BusinessHourUpdateArgsSchema: z.ZodType<Prisma.BusinessHourUpdateArgs> = z.object({
  select: BusinessHourSelectSchema.optional(),
  include: BusinessHourIncludeSchema.optional(),
  data: z.union([ BusinessHourUpdateInputSchema,BusinessHourUncheckedUpdateInputSchema ]),
  where: BusinessHourWhereUniqueInputSchema,
}).strict() ;

export const BusinessHourUpdateManyArgsSchema: z.ZodType<Prisma.BusinessHourUpdateManyArgs> = z.object({
  data: z.union([ BusinessHourUpdateManyMutationInputSchema,BusinessHourUncheckedUpdateManyInputSchema ]),
  where: BusinessHourWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BusinessHourDeleteManyArgsSchema: z.ZodType<Prisma.BusinessHourDeleteManyArgs> = z.object({
  where: BusinessHourWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServicePromotionCreateArgsSchema: z.ZodType<Prisma.ServicePromotionCreateArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  data: z.union([ ServicePromotionCreateInputSchema,ServicePromotionUncheckedCreateInputSchema ]),
}).strict() ;

export const ServicePromotionUpsertArgsSchema: z.ZodType<Prisma.ServicePromotionUpsertArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereUniqueInputSchema,
  create: z.union([ ServicePromotionCreateInputSchema,ServicePromotionUncheckedCreateInputSchema ]),
  update: z.union([ ServicePromotionUpdateInputSchema,ServicePromotionUncheckedUpdateInputSchema ]),
}).strict() ;

export const ServicePromotionCreateManyArgsSchema: z.ZodType<Prisma.ServicePromotionCreateManyArgs> = z.object({
  data: z.union([ ServicePromotionCreateManyInputSchema,ServicePromotionCreateManyInputSchema.array() ]),
}).strict() ;

export const ServicePromotionDeleteArgsSchema: z.ZodType<Prisma.ServicePromotionDeleteArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  where: ServicePromotionWhereUniqueInputSchema,
}).strict() ;

export const ServicePromotionUpdateArgsSchema: z.ZodType<Prisma.ServicePromotionUpdateArgs> = z.object({
  select: ServicePromotionSelectSchema.optional(),
  include: ServicePromotionIncludeSchema.optional(),
  data: z.union([ ServicePromotionUpdateInputSchema,ServicePromotionUncheckedUpdateInputSchema ]),
  where: ServicePromotionWhereUniqueInputSchema,
}).strict() ;

export const ServicePromotionUpdateManyArgsSchema: z.ZodType<Prisma.ServicePromotionUpdateManyArgs> = z.object({
  data: z.union([ ServicePromotionUpdateManyMutationInputSchema,ServicePromotionUncheckedUpdateManyInputSchema ]),
  where: ServicePromotionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServicePromotionDeleteManyArgsSchema: z.ZodType<Prisma.ServicePromotionDeleteManyArgs> = z.object({
  where: ServicePromotionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceCreateArgsSchema: z.ZodType<Prisma.ServiceCreateArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  data: z.union([ ServiceCreateInputSchema,ServiceUncheckedCreateInputSchema ]),
}).strict() ;

export const ServiceUpsertArgsSchema: z.ZodType<Prisma.ServiceUpsertArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
  create: z.union([ ServiceCreateInputSchema,ServiceUncheckedCreateInputSchema ]),
  update: z.union([ ServiceUpdateInputSchema,ServiceUncheckedUpdateInputSchema ]),
}).strict() ;

export const ServiceCreateManyArgsSchema: z.ZodType<Prisma.ServiceCreateManyArgs> = z.object({
  data: z.union([ ServiceCreateManyInputSchema,ServiceCreateManyInputSchema.array() ]),
}).strict() ;

export const ServiceDeleteArgsSchema: z.ZodType<Prisma.ServiceDeleteArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const ServiceUpdateArgsSchema: z.ZodType<Prisma.ServiceUpdateArgs> = z.object({
  select: ServiceSelectSchema.optional(),
  include: ServiceIncludeSchema.optional(),
  data: z.union([ ServiceUpdateInputSchema,ServiceUncheckedUpdateInputSchema ]),
  where: ServiceWhereUniqueInputSchema,
}).strict() ;

export const ServiceUpdateManyArgsSchema: z.ZodType<Prisma.ServiceUpdateManyArgs> = z.object({
  data: z.union([ ServiceUpdateManyMutationInputSchema,ServiceUncheckedUpdateManyInputSchema ]),
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ServiceDeleteManyArgsSchema: z.ZodType<Prisma.ServiceDeleteManyArgs> = z.object({
  where: ServiceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BusinessCreateArgsSchema: z.ZodType<Prisma.BusinessCreateArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  data: z.union([ BusinessCreateInputSchema,BusinessUncheckedCreateInputSchema ]),
}).strict() ;

export const BusinessUpsertArgsSchema: z.ZodType<Prisma.BusinessUpsertArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
  create: z.union([ BusinessCreateInputSchema,BusinessUncheckedCreateInputSchema ]),
  update: z.union([ BusinessUpdateInputSchema,BusinessUncheckedUpdateInputSchema ]),
}).strict() ;

export const BusinessCreateManyArgsSchema: z.ZodType<Prisma.BusinessCreateManyArgs> = z.object({
  data: z.union([ BusinessCreateManyInputSchema,BusinessCreateManyInputSchema.array() ]),
}).strict() ;

export const BusinessDeleteArgsSchema: z.ZodType<Prisma.BusinessDeleteArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
}).strict() ;

export const BusinessUpdateArgsSchema: z.ZodType<Prisma.BusinessUpdateArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  data: z.union([ BusinessUpdateInputSchema,BusinessUncheckedUpdateInputSchema ]),
  where: BusinessWhereUniqueInputSchema,
}).strict() ;

export const BusinessUpdateManyArgsSchema: z.ZodType<Prisma.BusinessUpdateManyArgs> = z.object({
  data: z.union([ BusinessUpdateManyMutationInputSchema,BusinessUncheckedUpdateManyInputSchema ]),
  where: BusinessWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BusinessDeleteManyArgsSchema: z.ZodType<Prisma.BusinessDeleteManyArgs> = z.object({
  where: BusinessWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PaymentCreateArgsSchema: z.ZodType<Prisma.PaymentCreateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  data: z.union([ PaymentCreateInputSchema,PaymentUncheckedCreateInputSchema ]),
}).strict() ;

export const PaymentUpsertArgsSchema: z.ZodType<Prisma.PaymentUpsertArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
  create: z.union([ PaymentCreateInputSchema,PaymentUncheckedCreateInputSchema ]),
  update: z.union([ PaymentUpdateInputSchema,PaymentUncheckedUpdateInputSchema ]),
}).strict() ;

export const PaymentCreateManyArgsSchema: z.ZodType<Prisma.PaymentCreateManyArgs> = z.object({
  data: z.union([ PaymentCreateManyInputSchema,PaymentCreateManyInputSchema.array() ]),
}).strict() ;

export const PaymentDeleteArgsSchema: z.ZodType<Prisma.PaymentDeleteArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const PaymentUpdateArgsSchema: z.ZodType<Prisma.PaymentUpdateArgs> = z.object({
  select: PaymentSelectSchema.optional(),
  include: PaymentIncludeSchema.optional(),
  data: z.union([ PaymentUpdateInputSchema,PaymentUncheckedUpdateInputSchema ]),
  where: PaymentWhereUniqueInputSchema,
}).strict() ;

export const PaymentUpdateManyArgsSchema: z.ZodType<Prisma.PaymentUpdateManyArgs> = z.object({
  data: z.union([ PaymentUpdateManyMutationInputSchema,PaymentUncheckedUpdateManyInputSchema ]),
  where: PaymentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PaymentDeleteManyArgsSchema: z.ZodType<Prisma.PaymentDeleteManyArgs> = z.object({
  where: PaymentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReminderCreateArgsSchema: z.ZodType<Prisma.ReminderCreateArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  data: z.union([ ReminderCreateInputSchema,ReminderUncheckedCreateInputSchema ]),
}).strict() ;

export const ReminderUpsertArgsSchema: z.ZodType<Prisma.ReminderUpsertArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereUniqueInputSchema,
  create: z.union([ ReminderCreateInputSchema,ReminderUncheckedCreateInputSchema ]),
  update: z.union([ ReminderUpdateInputSchema,ReminderUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReminderCreateManyArgsSchema: z.ZodType<Prisma.ReminderCreateManyArgs> = z.object({
  data: z.union([ ReminderCreateManyInputSchema,ReminderCreateManyInputSchema.array() ]),
}).strict() ;

export const ReminderDeleteArgsSchema: z.ZodType<Prisma.ReminderDeleteArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  where: ReminderWhereUniqueInputSchema,
}).strict() ;

export const ReminderUpdateArgsSchema: z.ZodType<Prisma.ReminderUpdateArgs> = z.object({
  select: ReminderSelectSchema.optional(),
  include: ReminderIncludeSchema.optional(),
  data: z.union([ ReminderUpdateInputSchema,ReminderUncheckedUpdateInputSchema ]),
  where: ReminderWhereUniqueInputSchema,
}).strict() ;

export const ReminderUpdateManyArgsSchema: z.ZodType<Prisma.ReminderUpdateManyArgs> = z.object({
  data: z.union([ ReminderUpdateManyMutationInputSchema,ReminderUncheckedUpdateManyInputSchema ]),
  where: ReminderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReminderDeleteManyArgsSchema: z.ZodType<Prisma.ReminderDeleteManyArgs> = z.object({
  where: ReminderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserSecurityCreateArgsSchema: z.ZodType<Prisma.UserSecurityCreateArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  data: z.union([ UserSecurityCreateInputSchema,UserSecurityUncheckedCreateInputSchema ]),
}).strict() ;

export const UserSecurityUpsertArgsSchema: z.ZodType<Prisma.UserSecurityUpsertArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereUniqueInputSchema,
  create: z.union([ UserSecurityCreateInputSchema,UserSecurityUncheckedCreateInputSchema ]),
  update: z.union([ UserSecurityUpdateInputSchema,UserSecurityUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserSecurityCreateManyArgsSchema: z.ZodType<Prisma.UserSecurityCreateManyArgs> = z.object({
  data: z.union([ UserSecurityCreateManyInputSchema,UserSecurityCreateManyInputSchema.array() ]),
}).strict() ;

export const UserSecurityDeleteArgsSchema: z.ZodType<Prisma.UserSecurityDeleteArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  where: UserSecurityWhereUniqueInputSchema,
}).strict() ;

export const UserSecurityUpdateArgsSchema: z.ZodType<Prisma.UserSecurityUpdateArgs> = z.object({
  select: UserSecuritySelectSchema.optional(),
  include: UserSecurityIncludeSchema.optional(),
  data: z.union([ UserSecurityUpdateInputSchema,UserSecurityUncheckedUpdateInputSchema ]),
  where: UserSecurityWhereUniqueInputSchema,
}).strict() ;

export const UserSecurityUpdateManyArgsSchema: z.ZodType<Prisma.UserSecurityUpdateManyArgs> = z.object({
  data: z.union([ UserSecurityUpdateManyMutationInputSchema,UserSecurityUncheckedUpdateManyInputSchema ]),
  where: UserSecurityWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserSecurityDeleteManyArgsSchema: z.ZodType<Prisma.UserSecurityDeleteManyArgs> = z.object({
  where: UserSecurityWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SubscriptionPromotionCreateArgsSchema: z.ZodType<Prisma.SubscriptionPromotionCreateArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  data: z.union([ SubscriptionPromotionCreateInputSchema,SubscriptionPromotionUncheckedCreateInputSchema ]),
}).strict() ;

export const SubscriptionPromotionUpsertArgsSchema: z.ZodType<Prisma.SubscriptionPromotionUpsertArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereUniqueInputSchema,
  create: z.union([ SubscriptionPromotionCreateInputSchema,SubscriptionPromotionUncheckedCreateInputSchema ]),
  update: z.union([ SubscriptionPromotionUpdateInputSchema,SubscriptionPromotionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SubscriptionPromotionCreateManyArgsSchema: z.ZodType<Prisma.SubscriptionPromotionCreateManyArgs> = z.object({
  data: z.union([ SubscriptionPromotionCreateManyInputSchema,SubscriptionPromotionCreateManyInputSchema.array() ]),
}).strict() ;

export const SubscriptionPromotionDeleteArgsSchema: z.ZodType<Prisma.SubscriptionPromotionDeleteArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  where: SubscriptionPromotionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionPromotionUpdateArgsSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateArgs> = z.object({
  select: SubscriptionPromotionSelectSchema.optional(),
  include: SubscriptionPromotionIncludeSchema.optional(),
  data: z.union([ SubscriptionPromotionUpdateInputSchema,SubscriptionPromotionUncheckedUpdateInputSchema ]),
  where: SubscriptionPromotionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionPromotionUpdateManyArgsSchema: z.ZodType<Prisma.SubscriptionPromotionUpdateManyArgs> = z.object({
  data: z.union([ SubscriptionPromotionUpdateManyMutationInputSchema,SubscriptionPromotionUncheckedUpdateManyInputSchema ]),
  where: SubscriptionPromotionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SubscriptionPromotionDeleteManyArgsSchema: z.ZodType<Prisma.SubscriptionPromotionDeleteManyArgs> = z.object({
  where: SubscriptionPromotionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SubscriptionCreateArgsSchema: z.ZodType<Prisma.SubscriptionCreateArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  data: z.union([ SubscriptionCreateInputSchema,SubscriptionUncheckedCreateInputSchema ]),
}).strict() ;

export const SubscriptionUpsertArgsSchema: z.ZodType<Prisma.SubscriptionUpsertArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereUniqueInputSchema,
  create: z.union([ SubscriptionCreateInputSchema,SubscriptionUncheckedCreateInputSchema ]),
  update: z.union([ SubscriptionUpdateInputSchema,SubscriptionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SubscriptionCreateManyArgsSchema: z.ZodType<Prisma.SubscriptionCreateManyArgs> = z.object({
  data: z.union([ SubscriptionCreateManyInputSchema,SubscriptionCreateManyInputSchema.array() ]),
}).strict() ;

export const SubscriptionDeleteArgsSchema: z.ZodType<Prisma.SubscriptionDeleteArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  where: SubscriptionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionUpdateArgsSchema: z.ZodType<Prisma.SubscriptionUpdateArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: SubscriptionIncludeSchema.optional(),
  data: z.union([ SubscriptionUpdateInputSchema,SubscriptionUncheckedUpdateInputSchema ]),
  where: SubscriptionWhereUniqueInputSchema,
}).strict() ;

export const SubscriptionUpdateManyArgsSchema: z.ZodType<Prisma.SubscriptionUpdateManyArgs> = z.object({
  data: z.union([ SubscriptionUpdateManyMutationInputSchema,SubscriptionUncheckedUpdateManyInputSchema ]),
  where: SubscriptionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SubscriptionDeleteManyArgsSchema: z.ZodType<Prisma.SubscriptionDeleteManyArgs> = z.object({
  where: SubscriptionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;