// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nineteen58Agents from 'nineteen58-agents';

const client = new Nineteen58Agents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource publicAPI', () => {
  // skipped: tests are disabled for the time being
  test.skip('listAgents', async () => {
    const responsePromise = client.publicAPI.listAgents();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAgents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.publicAPI.listAgents({ page: 1, pageSize: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nineteen58Agents.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConversations', async () => {
    const responsePromise = client.publicAPI.listConversations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listConversations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.publicAPI.listConversations(
        {
          agentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          contactId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          identifier: 'identifier',
          page: 1,
          pageSize: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nineteen58Agents.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('triggerPhonecalls: only required params', async () => {
    const responsePromise = client.publicAPI.triggerPhonecalls({
      broadcasts: [
        {
          agent: 'agent',
          assistantId: 'assistantId',
          contact: 'contact',
          firstSentence: 'firstSentence',
          name: 'name',
          objective: 'objective',
          phoneNumberId: 'phoneNumberId',
        },
      ],
      orgId: 'orgId',
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
  test.skip('triggerPhonecalls: required and optional params', async () => {
    const response = await client.publicAPI.triggerPhonecalls({
      broadcasts: [
        {
          agent: 'agent',
          assistantId: 'assistantId',
          contact: 'contact',
          firstSentence: 'firstSentence',
          name: 'name',
          objective: 'objective',
          phoneNumberId: 'phoneNumberId',
          backgroundTrack: 'backgroundTrack',
          firstMessageMode: 'firstMessageMode',
          hipaaEnabled: true,
          language: 'language',
          startTime: 'startTime',
          voice: 'voice',
        },
      ],
      orgId: 'orgId',
      testBroadcast: true,
    });
  });
});
