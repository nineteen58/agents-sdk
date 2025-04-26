// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nineteen58Agents from 'nineteen58-agents';

const client = new Nineteen58Agents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contacts', () => {
  // skipped: tests are disabled for the time being
  test.skip('createContact: only required params', async () => {
    const responsePromise = client.publicAPI.contacts.createContact({
      channel: 'whatsapp',
      identifier: '1234567890',
      name: 'John Doe',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createContact: required and optional params', async () => {
    const response = await client.publicAPI.contacts.createContact({
      channel: 'whatsapp',
      identifier: '1234567890',
      name: 'John Doe',
      email: 'john.doe@example.com',
      notes: 'Interested in AI solutions',
      personal_context: 'Met at Tech Conference 2024',
      relevant_information: 'Prefers communication in the morning',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteContact', async () => {
    const responsePromise = client.publicAPI.contacts.deleteContact('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('enrichContact', async () => {
    const responsePromise = client.publicAPI.contacts.enrichContact('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listContacts', async () => {
    const responsePromise = client.publicAPI.contacts.listContacts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listContacts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.publicAPI.contacts.listContacts(
        { channel: 'whatsapp', email: 'email', name: 'name', page: 1, pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nineteen58Agents.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('partialUpdateContact', async () => {
    const responsePromise = client.publicAPI.contacts.partialUpdateContact('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveContact', async () => {
    const responsePromise = client.publicAPI.contacts.retrieveContact('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateContact: only required params', async () => {
    const responsePromise = client.publicAPI.contacts.updateContact('id', {
      channel: 'channel',
      identifier: 'identifier',
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateContact: required and optional params', async () => {
    const response = await client.publicAPI.contacts.updateContact('id', {
      channel: 'channel',
      identifier: 'identifier',
      name: 'name',
      email: 'email',
      notes: 'notes',
      personal_context: 'personal_context',
      relevant_information: 'relevant_information',
    });
  });
});
