// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Nineteen58Agents } from '../client';

export abstract class APIResource {
  protected _client: Nineteen58Agents;

  constructor(client: Nineteen58Agents) {
    this._client = client;
  }
}
