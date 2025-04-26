// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nineteen58Agents from 'nineteen58-agents';

const client = new Nineteen58Agents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompts', () => {
  // skipped: tests are disabled for the time being
  test.skip('createPrompt: only required params', async () => {
    const responsePromise = client.publicAPI.prompts.createPrompt({ name: 'name', prompt: 'prompt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createPrompt: required and optional params', async () => {
    const response = await client.publicAPI.prompts.createPrompt({
      name: 'name',
      prompt: 'prompt',
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      background: 'background',
      example_conversation: 'example_conversation',
      flow: 'flow',
      goal: 'goal',
      is_global: true,
      outcomes: 'outcomes',
      outcomes_json: {},
      persona: 'persona',
      tool_use_rules: 'tool_use_rules',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('deletePrompt', async () => {
    const responsePromise = client.publicAPI.prompts.deletePrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPrompts', async () => {
    const responsePromise = client.publicAPI.prompts.listPrompts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPrompts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.publicAPI.prompts.listPrompts(
        { agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', page: 1, pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Nineteen58Agents.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('partialUpdatePrompt', async () => {
    const responsePromise = client.publicAPI.prompts.partialUpdatePrompt(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePrompt', async () => {
    const responsePromise = client.publicAPI.prompts.retrievePrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updatePrompt: only required params', async () => {
    const responsePromise = client.publicAPI.prompts.updatePrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'name',
      prompt: 'prompt',
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
  test.skip('updatePrompt: required and optional params', async () => {
    const response = await client.publicAPI.prompts.updatePrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'name',
      prompt: 'prompt',
      agent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      background: 'background',
      example_conversation: 'example_conversation',
      flow: 'flow',
      goal: 'goal',
      is_global: true,
      outcomes: 'outcomes',
      outcomes_json: {},
      persona: 'persona',
      tool_use_rules: 'tool_use_rules',
    });
  });
});
