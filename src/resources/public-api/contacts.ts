// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Creates a new contact with the provided information. Special validation is
   * applied for WhatsApp contacts.
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicAPI.contacts.createContact({
   *     channel: 'whatsapp',
   *     identifier: '1234567890',
   *     name: 'John Doe',
   *   });
   * ```
   */
  createContact(
    body: ContactCreateContactParams,
    options?: RequestOptions,
  ): APIPromise<ContactCreateContactResponse> {
    return this._client.post('/public-api/contacts', { body, ...options });
  }

  /**
   * Deletes an existing contact
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicAPI.contacts.deleteContact('id');
   * ```
   */
  deleteContact(id: string, options?: RequestOptions): APIPromise<ContactDeleteContactResponse> {
    return this._client.delete(path`/public-api/contacts/${id}`, options);
  }

  /**
   * Processes various types of input data to enrich contact information
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicAPI.contacts.enrichContact('id');
   * ```
   */
  enrichContact(
    id: string,
    body: ContactEnrichContactParams,
    options?: RequestOptions,
  ): APIPromise<ContactEnrichContactResponse> {
    return this._client.post(
      path`/public-api/contacts/${id}/enrich`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns a paginated list of contacts with optional filtering capabilities
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicAPI.contacts.listContacts();
   * ```
   */
  listContacts(
    query: ContactListContactsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContactListContactsResponse> {
    return this._client.get('/public-api/contacts', { query, ...options });
  }

  /**
   * Updates specific fields of an existing contact
   *
   * @example
   * ```ts
   * const contact =
   *   await client.publicAPI.contacts.partialUpdateContact(
   *     'id',
   *   );
   * ```
   */
  partialUpdateContact(
    id: string,
    body: ContactPartialUpdateContactParams,
    options?: RequestOptions,
  ): APIPromise<Contact> {
    return this._client.patch(path`/public-api/contacts/${id}`, { body, ...options });
  }

  /**
   * Retrieves a single contact by its ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicAPI.contacts.retrieveContact('id');
   * ```
   */
  retrieveContact(id: string, options?: RequestOptions): APIPromise<ContactRetrieveContactResponse> {
    return this._client.get(path`/public-api/contacts/${id}`, options);
  }

  /**
   * Updates all fields of an existing contact
   *
   * @example
   * ```ts
   * const contact =
   *   await client.publicAPI.contacts.updateContact('id', {
   *     channel: 'channel',
   *     identifier: 'identifier',
   *     name: 'name',
   *   });
   * ```
   */
  updateContact(id: string, body: ContactUpdateContactParams, options?: RequestOptions): APIPromise<Contact> {
    return this._client.put(path`/public-api/contacts/${id}`, { body, ...options });
  }
}

export interface Contact {
  id?: string;

  channel?: string;

  email?: string | null;

  identifier?: string;

  name?: string;

  notes?: string | null;

  personal_context?: string | null;

  relevant_information?: string | null;
}

export interface ContactCreateContactResponse {
  contact_id?: string;

  message?: string;
}

export interface ContactDeleteContactResponse {
  message?: string;
}

export interface ContactEnrichContactResponse {
  id?: string;

  channel?: string;

  email?: string | null;

  identifier?: string;

  name?: string;

  notes?: string | null;

  personal_context?: string | null;

  relevant_information?: string | null;
}

export interface ContactListContactsResponse {
  contacts?: Array<ContactListContactsResponse.Contact>;

  currentPage?: number;

  pageSize?: number;

  totalCount?: number;

  totalPages?: number;
}

export namespace ContactListContactsResponse {
  export interface Contact {
    id?: string;

    channel?: string;

    email?: string;

    identifier?: string;

    name?: string;

    notes?: string;

    personal_context?: string;

    relevant_information?: string;
  }
}

export interface ContactRetrieveContactResponse {
  id?: string;

  channel?: string;

  email?: string | null;

  identifier?: string;

  name?: string;

  notes?: string | null;

  personal_context?: string | null;

  relevant_information?: string | null;
}

export interface ContactCreateContactParams {
  /**
   * Communication channel
   */
  channel: 'whatsapp' | 'email';

  /**
   * Unique identifier for the contact (phone number for WhatsApp, email for email
   * channel)
   */
  identifier: string;

  /**
   * Contact's full name
   */
  name: string;

  /**
   * Contact's email address
   */
  email?: string;

  /**
   * Additional notes or comments about the contact
   */
  notes?: string;

  /**
   * Personal context or background information about the contact
   */
  personal_context?: string;

  /**
   * Any other relevant information about the contact
   */
  relevant_information?: string;
}

export interface ContactEnrichContactParams {
  /**
   * The input data or file content
   */
  data?: string;

  /**
   * Enrichment prompt or instructions
   */
  prompt?: string;

  /**
   * Type of input data
   */
  type?: 'text' | 'json' | 'pdf' | 'image';
}

export interface ContactListContactsParams {
  /**
   * Filter contacts by exact channel match
   */
  channel?: 'whatsapp' | 'email';

  /**
   * Filter contacts by partial email match (case-insensitive)
   */
  email?: string;

  /**
   * Filter contacts by partial name match (case-insensitive)
   */
  name?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  pageSize?: number;
}

export interface ContactPartialUpdateContactParams {
  channel?: string;

  /**
   * Current channel type (needed for WhatsApp validation)
   */
  currentChannel?: string;

  email?: string | null;

  identifier?: string;

  name?: string;

  notes?: string | null;

  personal_context?: string | null;

  relevant_information?: string | null;
}

export interface ContactUpdateContactParams {
  channel: string;

  identifier: string;

  name: string;

  email?: string | null;

  notes?: string | null;

  personal_context?: string | null;

  relevant_information?: string | null;
}

export declare namespace Contacts {
  export {
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
}
