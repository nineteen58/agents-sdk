// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Prompts extends APIResource {
  /**
   * Creates a new broadcast prompt with the provided details
   */
  createPrompt(
    body: PromptCreatePromptParams,
    options?: RequestOptions,
  ): APIPromise<PromptCreatePromptResponse> {
    return this._client.post('/public-api/prompts', { body, ...options });
  }

  /**
   * Delete a prompt
   */
  deletePrompt(promptID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/public-api/prompts/${promptID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a paginated list of broadcast prompts
   */
  listPrompts(
    query: PromptListPromptsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromptListPromptsResponse> {
    return this._client.get('/public-api/prompts', { query, ...options });
  }

  /**
   * Partially update a prompt
   */
  partialUpdatePrompt(
    promptID: string,
    body: PromptPartialUpdatePromptParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/public-api/prompts/${promptID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a prompt by ID
   */
  retrievePrompt(promptID: string, options?: RequestOptions): APIPromise<PromptRetrievePromptResponse> {
    return this._client.get(path`/public-api/prompts/${promptID}`, options);
  }

  /**
   * Update a prompt (full update)
   */
  updatePrompt(promptID: string, body: PromptUpdatePromptParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/public-api/prompts/${promptID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PromptCreatePromptResponse {
  prompt?: PromptCreatePromptResponse.Prompt;
}

export namespace PromptCreatePromptResponse {
  export interface Prompt {
    id?: string;

    agent_id?: string;

    background?: string;

    created_at?: string;

    example_conversation?: string;

    flow?: string;

    goal?: string;

    is_global?: boolean;

    name?: string;

    outcomes?: string;

    outcomes_json?: unknown;

    persona?: string;

    prompt?: string;

    tool_use_rules?: string;
  }
}

export interface PromptListPromptsResponse {
  currentPage?: number;

  pageSize?: number;

  prompts?: Array<PromptListPromptsResponse.Prompt>;

  totalCount?: number;

  totalPages?: number;
}

export namespace PromptListPromptsResponse {
  export interface Prompt {
    id?: string;

    agent_id?: string;

    background?: string;

    created_at?: string;

    example_conversation?: string;

    flow?: string;

    goal?: string;

    is_global?: boolean;

    name?: string;

    outcomes?: string;

    outcomes_json?: unknown;

    persona?: string;

    prompt?: string;

    tool_use_rules?: string;
  }
}

export interface PromptRetrievePromptResponse {
  prompt?: PromptRetrievePromptResponse.Prompt;
}

export namespace PromptRetrievePromptResponse {
  export interface Prompt {
    id?: string;

    agent_id?: string;

    background?: string;

    created_at?: string;

    example_conversation?: string;

    flow?: string;

    goal?: string;

    is_global?: boolean;

    name?: string;

    outcomes?: string;

    outcomes_json?: unknown;

    persona?: string;

    prompt?: string;

    tool_use_rules?: string;
  }
}

export interface PromptCreatePromptParams {
  /**
   * Name of the prompt
   */
  name: string;

  /**
   * The prompt content
   */
  prompt: string;

  /**
   * Associated agent ID
   */
  agent_id?: string;

  /**
   * Background information
   */
  background?: string;

  /**
   * Example conversation
   */
  example_conversation?: string;

  /**
   * Flow description
   */
  flow?: string;

  /**
   * Goal of the prompt
   */
  goal?: string;

  /**
   * Whether the prompt is global
   */
  is_global?: boolean;

  /**
   * Expected outcomes
   */
  outcomes?: string;

  /**
   * JSON structured outcomes
   */
  outcomes_json?: unknown;

  /**
   * Persona description
   */
  persona?: string;

  /**
   * Rules for tool usage
   */
  tool_use_rules?: string;
}

export interface PromptListPromptsParams {
  /**
   * Filter prompts by agent ID
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

export interface PromptPartialUpdatePromptParams {
  agent_id?: string;

  background?: string;

  example_conversation?: string;

  flow?: string;

  goal?: string;

  is_global?: boolean;

  name?: string;

  outcomes?: string;

  outcomes_json?: unknown;

  persona?: string;

  prompt?: string;

  tool_use_rules?: string;
}

export interface PromptUpdatePromptParams {
  name: string;

  prompt: string;

  agent_id?: string;

  background?: string;

  example_conversation?: string;

  flow?: string;

  goal?: string;

  is_global?: boolean;

  outcomes?: string;

  outcomes_json?: unknown;

  persona?: string;

  tool_use_rules?: string;
}

export declare namespace Prompts {
  export {
    type PromptCreatePromptResponse as PromptCreatePromptResponse,
    type PromptListPromptsResponse as PromptListPromptsResponse,
    type PromptRetrievePromptResponse as PromptRetrievePromptResponse,
    type PromptCreatePromptParams as PromptCreatePromptParams,
    type PromptListPromptsParams as PromptListPromptsParams,
    type PromptPartialUpdatePromptParams as PromptPartialUpdatePromptParams,
    type PromptUpdatePromptParams as PromptUpdatePromptParams,
  };
}
