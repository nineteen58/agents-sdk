// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BroadcastsAPI from './broadcasts';
import {
  Broadcast as BroadcastsAPIBroadcast,
  BroadcastCreateBroadcastParams,
  BroadcastCreateBroadcastResponse,
  BroadcastListBroadcastsParams,
  BroadcastListBroadcastsResponse,
  BroadcastRetrieveBroadcastResponse,
  Broadcasts,
} from './broadcasts';
import * as ContactsAPI from './contacts';
import {
  Contact,
  ContactCreateContactParams,
  ContactCreateContactResponse,
  ContactDeleteContactResponse,
  ContactEnrichContactParams,
  ContactEnrichContactResponse,
  ContactListContactsParams,
  ContactListContactsResponse,
  ContactPartialUpdateContactParams,
  ContactRetrieveContactResponse,
  ContactUpdateContactParams,
  Contacts as ContactsAPIContacts,
} from './contacts';
import * as PromptsAPI from './prompts';
import {
  PromptCreatePromptParams,
  PromptCreatePromptResponse,
  PromptListPromptsParams,
  PromptListPromptsResponse,
  PromptPartialUpdatePromptParams,
  PromptRetrievePromptResponse,
  PromptUpdatePromptParams,
  Prompts,
} from './prompts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class PublicAPI extends APIResource {
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  prompts: PromptsAPI.Prompts = new PromptsAPI.Prompts(this._client);
  broadcasts: BroadcastsAPI.Broadcasts = new BroadcastsAPI.Broadcasts(this._client);

  /**
   * Returns a paginated list of agents with their associated channels
   */
  listAgents(
    query: PublicAPIListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicAPIListAgentsResponse> {
    return this._client.get('/public-api/agents', { query, ...options });
  }

  /**
   * Returns a paginated list of conversations with optional filtering capabilities
   */
  listConversations(
    query: PublicAPIListConversationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicAPIListConversationsResponse> {
    return this._client.get('/public-api/conversations', { query, ...options });
  }

  /**
   * Initiates voice calls to specified contacts using the provided broadcast
   * configurations
   */
  triggerPhonecalls(
    body: PublicAPITriggerPhonecallsParams,
    options?: RequestOptions,
  ): APIPromise<PublicAPITriggerPhonecallsResponse> {
    return this._client.post('/public-api/phonecalls', { body, ...options });
  }
}

export interface PublicAPIListAgentsResponse {
  agents?: Array<PublicAPIListAgentsResponse.Agent>;

  currentPage?: number;

  pageSize?: number;

  totalCount?: number;

  totalPages?: number;
}

export namespace PublicAPIListAgentsResponse {
  export interface Agent {
    base_prompt?: string;

    channels?: Array<Agent.Channel>;

    description?: string;

    name?: string;
  }

  export namespace Agent {
    export interface Channel {
      id?: string;

      channel?: string;
    }
  }
}

export interface PublicAPIListConversationsResponse {
  conversations?: Array<PublicAPIListConversationsResponse.Conversation>;

  currentPage?: number;

  pageSize?: number;

  totalCount?: number;

  totalPages?: number;
}

export namespace PublicAPIListConversationsResponse {
  export interface Conversation {
    id?: string;

    agent_id?: string;

    contacts?: Conversation.Contacts;

    conversation?: unknown;
  }

  export namespace Conversation {
    export interface Contacts {
      id?: string;

      identifier?: string;
    }
  }
}

export interface PublicAPITriggerPhonecallsResponse {
  message?: string;

  result?: unknown;
}

export interface PublicAPIListAgentsParams {
  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  pageSize?: number;
}

export interface PublicAPIListConversationsParams {
  /**
   * Filter conversations by agent ID
   */
  agentId?: string;

  /**
   * Filter conversations by contact ID
   */
  contactId?: string;

  /**
   * Filter conversations by contact identifier
   */
  identifier?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  pageSize?: number;
}

export interface PublicAPITriggerPhonecallsParams {
  broadcasts: Array<PublicAPITriggerPhonecallsParams.Broadcast>;

  orgId: string;

  testBroadcast?: boolean;
}

export namespace PublicAPITriggerPhonecallsParams {
  export interface Broadcast {
    agent: string;

    assistantId: string;

    contact: string;

    firstSentence: string;

    name: string;

    objective: string;

    phoneNumberId: string;

    backgroundTrack?: string;

    firstMessageMode?: string;

    hipaaEnabled?: boolean;

    language?: string;

    startTime?: string | null;

    voice?: string;
  }
}

PublicAPI.Contacts = ContactsAPIContacts;
PublicAPI.Prompts = Prompts;
PublicAPI.Broadcasts = Broadcasts;

export declare namespace PublicAPI {
  export {
    type PublicAPIListAgentsResponse as PublicAPIListAgentsResponse,
    type PublicAPIListConversationsResponse as PublicAPIListConversationsResponse,
    type PublicAPITriggerPhonecallsResponse as PublicAPITriggerPhonecallsResponse,
    type PublicAPIListAgentsParams as PublicAPIListAgentsParams,
    type PublicAPIListConversationsParams as PublicAPIListConversationsParams,
    type PublicAPITriggerPhonecallsParams as PublicAPITriggerPhonecallsParams,
  };

  export {
    ContactsAPIContacts as Contacts,
    type Contact as Contact,
    type ContactCreateContactResponse as ContactCreateContactResponse,
    type ContactDeleteContactResponse as ContactDeleteContactResponse,
    type ContactEnrichContactResponse as ContactEnrichContactResponse,
    type ContactListContactsResponse as ContactListContactsResponse,
    type ContactRetrieveContactResponse as ContactRetrieveContactResponse,
    type ContactCreateContactParams as ContactCreateContactParams,
    type ContactEnrichContactParams as ContactEnrichContactParams,
    type ContactListContactsParams as ContactListContactsParams,
    type ContactPartialUpdateContactParams as ContactPartialUpdateContactParams,
    type ContactUpdateContactParams as ContactUpdateContactParams,
  };

  export {
    Prompts as Prompts,
    type PromptCreatePromptResponse as PromptCreatePromptResponse,
    type PromptListPromptsResponse as PromptListPromptsResponse,
    type PromptRetrievePromptResponse as PromptRetrievePromptResponse,
    type PromptCreatePromptParams as PromptCreatePromptParams,
    type PromptListPromptsParams as PromptListPromptsParams,
    type PromptPartialUpdatePromptParams as PromptPartialUpdatePromptParams,
    type PromptUpdatePromptParams as PromptUpdatePromptParams,
  };

  export {
    Broadcasts as Broadcasts,
    type BroadcastsAPIBroadcast as Broadcast,
    type BroadcastCreateBroadcastResponse as BroadcastCreateBroadcastResponse,
    type BroadcastListBroadcastsResponse as BroadcastListBroadcastsResponse,
    type BroadcastRetrieveBroadcastResponse as BroadcastRetrieveBroadcastResponse,
    type BroadcastCreateBroadcastParams as BroadcastCreateBroadcastParams,
    type BroadcastListBroadcastsParams as BroadcastListBroadcastsParams,
  };
}
