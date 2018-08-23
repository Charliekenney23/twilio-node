/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import serialize = require('../../../base/serialize');
import { BindingList } from './service/binding';
import { BindingListInstance } from './service/binding';
import { ChannelList } from './service/channel';
import { ChannelListInstance } from './service/channel';
import { RoleList } from './service/role';
import { RoleListInstance } from './service/role';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';
import { UserListInstance } from './service/user';

/**
 * @description Initialize the ServiceList
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V2): ServiceListInstance;

/**
 * Options to pass to update
 *
 * @property consumptionReportInterval - The consumption_report_interval
 * @property defaultChannelCreatorRoleSid - Channel role assigned to creator of channel when joining for first time
 * @property defaultChannelRoleSid - Channel role assigned on channel join
 * @property defaultServiceRoleSid - The default_service_role_sid
 * @property friendlyName - Human-readable name for this service instance
 * @property limits.channelMembers - The maximum number of Members that can be added to Channels within this Service.
 * @property limits.userChannels - The maximum number of Channels Users can be a Member of within this Service.
 * @property media.compatibilityMessage - The media.compatibility_message
 * @property notifications.addedToChannel.enabled - The notifications.added_to_channel.enabled
 * @property notifications.addedToChannel.sound - The notifications.added_to_channel.sound
 * @property notifications.addedToChannel.template - The notifications.added_to_channel.template
 * @property notifications.invitedToChannel.enabled - The notifications.invited_to_channel.enabled
 * @property notifications.invitedToChannel.sound - The notifications.invited_to_channel.sound
 * @property notifications.invitedToChannel.template - The notifications.invited_to_channel.template
 * @property notifications.logEnabled - The notifications.log_enabled
 * @property notifications.newMessage.badgeCountEnabled - The notifications.new_message.badge_count_enabled
 * @property notifications.newMessage.enabled - The notifications.new_message.enabled
 * @property notifications.newMessage.sound - The notifications.new_message.sound
 * @property notifications.newMessage.template - The notifications.new_message.template
 * @property notifications.removedFromChannel.enabled - The notifications.removed_from_channel.enabled
 * @property notifications.removedFromChannel.sound - The notifications.removed_from_channel.sound
 * @property notifications.removedFromChannel.template - The notifications.removed_from_channel.template
 * @property postWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
 * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
 * @property preWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
 * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
 * @property reachabilityEnabled - true if the reachability feature should be enabled.
 * @property readStatusEnabled - true if the member read status feature is enabled, false if not.
 * @property typingIndicatorTimeout - The duration in seconds indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
 * @property webhookMethod - The webhook request format to use.
 */
interface ServiceInstanceUpdateOptions {
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  limits?: {
    channelMembers?: number;
    userChannels?: number;
  };
  media?: {
    compatibilityMessage?: string;
  };
  notifications?: {
    newMessage?: {
      enabled?: boolean;
      template?: string;
      sound?: string;
      badgeCountEnabled?: boolean;
    };
    addedToChannel?: {
      enabled?: boolean;
      template?: string;
      sound?: string;
    };
    removedFromChannel?: {
      enabled?: boolean;
      template?: string;
      sound?: string;
    };
    invitedToChannel?: {
      enabled?: boolean;
      template?: string;
      sound?: string;
    };
    logEnabled?: boolean;
  };
  postWebhookRetryCount?: number;
  postWebhookUrl?: string;
  preWebhookRetryCount?: number;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string[];
  webhookMethod?: string;
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - The sid
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Human-readable name for this service instance
 */
interface ServiceListInstanceCreateOptions {
  friendlyName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceEachOptions {
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ServiceListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ServiceListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceResource {
  account_sid: string;
  consumption_report_interval: number;
  date_created: Date;
  date_updated: Date;
  default_channel_creator_role_sid: string;
  default_channel_role_sid: string;
  default_service_role_sid: string;
  friendly_name: string;
  limits: string;
  links: string;
  media: string;
  notifications: string;
  post_webhook_retry_count: number;
  post_webhook_url: string;
  pre_webhook_retry_count: number;
  pre_webhook_url: string;
  reachability_enabled: boolean;
  read_status_enabled: boolean;
  sid: string;
  typing_indicator_timeout: number;
  url: string;
  webhook_filters: string;
  webhook_method: string;
}

interface ServiceSolution {
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContext
   *
   * @property channels - channels resource
   * @property roles - roles resource
   * @property users - users resource
   * @property bindings - bindings resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V2, sid: string);

  bindings: BindingListInstance;
  channels: ChannelListInstance;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  roles: RoleListInstance;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance>;
  users: UserListInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this service.
   * @property friendlyName - The human-readable name of this service.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property defaultServiceRoleSid - The service role assigned to users when they are added to the service.
   * @property defaultChannelRoleSid - The channel role assigned to users when they are added to a channel.
   * @property defaultChannelCreatorRoleSid - The channel role assigned to a channel creator when joining a new channel.
   * @property readStatusEnabled - Enable the Message Constumption Horizon feature.
   * @property reachabilityEnabled - Indicates whether the  the Reachability feature is enabled for this Service instance.
   * @property typingIndicatorTimeout - The amount of time in seconds after a "started typing" event when clients should assume that user is no longer typing, even if no "ended typing" message was received.
   * @property consumptionReportInterval - DEPRECATED.
   * @property limits - Configuration for service instance level limits.
   * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
   * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
   * @property webhookMethod - The webhook request format to use for both PRE and POST webhooks.
   * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
   * @property preWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
   * @property postWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
   * @property notifications - Notification configuration for the Service instance.
   * @property media - The media
   * @property url - An absolute URL for this service.
   * @property links - URLs to access the Channels, Roles, and Users for this service.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V2, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  /**
   * Access the bindings
   */
  bindings(): BindingListInstance;
  /**
   * Access the channels
   */
  channels(): ChannelListInstance;
  consumptionReportInterval: number;
  dateCreated: Date;
  dateUpdated: Date;
  defaultChannelCreatorRoleSid: string;
  defaultChannelRoleSid: string;
  defaultServiceRoleSid: string;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  friendlyName: string;
  limits: string;
  links: string;
  media: string;
  notifications: string;
  postWebhookRetryCount: number;
  postWebhookUrl: string;
  preWebhookRetryCount: number;
  preWebhookUrl: string;
  reachabilityEnabled: boolean;
  readStatusEnabled: boolean;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Access the roles
   */
  roles(): RoleListInstance;
  sid: string;
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  typingIndicatorTimeout: number;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
  /**
   * Access the users
   */
  users(): UserListInstance;
  webhookFilters: string;
  webhookMethod: string;
}


declare class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }