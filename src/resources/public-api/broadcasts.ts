// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Broadcasts extends APIResource {
  /**
   * Creates a new broadcast campaign
   */
  createBroadcast(
    body: BroadcastCreateBroadcastParams,
    options?: RequestOptions,
  ): APIPromise<BroadcastCreateBroadcastResponse> {
    return this._client.post('/public-api/broadcasts', { body, ...options });
  }

  /**
   * Returns a paginated list of broadcasts
   */
  listBroadcasts(
    query: BroadcastListBroadcastsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BroadcastListBroadcastsResponse> {
    return this._client.get('/public-api/broadcasts', { query, ...options });
  }

  /**
   * Returns details of a specific broadcast and its associated messages
   */
  retrieveBroadcast(id: string, options?: RequestOptions): APIPromise<BroadcastRetrieveBroadcastResponse> {
    return this._client.get(path`/public-api/broadcasts/${id}`, options);
  }
}

export interface Broadcast {
  id?: string;

  agent_id?: string;

  created_at?: string;

  description?: string;

  name?: string;

  test?: boolean;
}

export interface BroadcastCreateBroadcastResponse {
  broadcast?: Broadcast;
}

export interface BroadcastListBroadcastsResponse {
  broadcasts?: Array<Broadcast>;

  currentPage?: number;

  pageSize?: number;

  totalCount?: number;

  totalPages?: number;
}

export interface BroadcastRetrieveBroadcastResponse {
  broadcast?: Broadcast;

  messages?: Array<BroadcastRetrieveBroadcastResponse.Message>;
}

export namespace BroadcastRetrieveBroadcastResponse {
  export interface Message {
    answered?: boolean;

    broadcast_text?: string;

    contact_id?: string;

    delivered?: boolean;

    successful?: boolean;

    successful_evaluation?: string;

    summary?: string;

    transcript?: unknown;
  }
}

export interface BroadcastCreateBroadcastParams {
  agent_id: string;

  channel: 'phone' | 'advanced-voice';

  contact_ids: Array<string>;

  prompt_id: string;

  description?: string;

  first_sentence?: string;

  name?: string;

  test?: boolean;
}

export interface BroadcastListBroadcastsParams {
  /**
   * Filter broadcasts by agent ID
   */
  agent_id?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  pageSize?: number;
}

export declare namespace Broadcasts {
  export {
    type Broadcast as Broadcast,
    type BroadcastCreateBroadcastResponse as BroadcastCreateBroadcastResponse,
    type BroadcastListBroadcastsResponse as BroadcastListBroadcastsResponse,
    type BroadcastRetrieveBroadcastResponse as BroadcastRetrieveBroadcastResponse,
    type BroadcastCreateBroadcastParams as BroadcastCreateBroadcastParams,
    type BroadcastListBroadcastsParams as BroadcastListBroadcastsParams,
  };
}
