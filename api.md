# PublicAPI

Types:

- <code><a href="./src/resources/public-api/public-api.ts">PublicAPIListAgentsResponse</a></code>
- <code><a href="./src/resources/public-api/public-api.ts">PublicAPIListConversationsResponse</a></code>
- <code><a href="./src/resources/public-api/public-api.ts">PublicAPITriggerPhonecallsResponse</a></code>

Methods:

- <code title="get /public-api/agents">client.publicAPI.<a href="./src/resources/public-api/public-api.ts">listAgents</a>({ ...params }) -> PublicAPIListAgentsResponse</code>
- <code title="get /public-api/conversations">client.publicAPI.<a href="./src/resources/public-api/public-api.ts">listConversations</a>({ ...params }) -> PublicAPIListConversationsResponse</code>
- <code title="post /public-api/phonecalls">client.publicAPI.<a href="./src/resources/public-api/public-api.ts">triggerPhonecalls</a>({ ...params }) -> PublicAPITriggerPhonecallsResponse</code>

## Contacts

Types:

- <code><a href="./src/resources/public-api/contacts.ts">Contact</a></code>
- <code><a href="./src/resources/public-api/contacts.ts">ContactCreateContactResponse</a></code>
- <code><a href="./src/resources/public-api/contacts.ts">ContactDeleteContactResponse</a></code>
- <code><a href="./src/resources/public-api/contacts.ts">ContactEnrichContactResponse</a></code>
- <code><a href="./src/resources/public-api/contacts.ts">ContactListContactsResponse</a></code>
- <code><a href="./src/resources/public-api/contacts.ts">ContactRetrieveContactResponse</a></code>

Methods:

- <code title="post /public-api/contacts">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">createContact</a>({ ...params }) -> ContactCreateContactResponse</code>
- <code title="delete /public-api/contacts/{id}">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">deleteContact</a>(id) -> ContactDeleteContactResponse</code>
- <code title="post /public-api/contacts/{id}/enrich">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">enrichContact</a>(id, { ...params }) -> ContactEnrichContactResponse</code>
- <code title="get /public-api/contacts">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">listContacts</a>({ ...params }) -> ContactListContactsResponse</code>
- <code title="patch /public-api/contacts/{id}">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">partialUpdateContact</a>(id, { ...params }) -> Contact</code>
- <code title="get /public-api/contacts/{id}">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">retrieveContact</a>(id) -> ContactRetrieveContactResponse</code>
- <code title="put /public-api/contacts/{id}">client.publicAPI.contacts.<a href="./src/resources/public-api/contacts.ts">updateContact</a>(id, { ...params }) -> Contact</code>

## Prompts

Types:

- <code><a href="./src/resources/public-api/prompts.ts">PromptCreatePromptResponse</a></code>
- <code><a href="./src/resources/public-api/prompts.ts">PromptListPromptsResponse</a></code>
- <code><a href="./src/resources/public-api/prompts.ts">PromptRetrievePromptResponse</a></code>

Methods:

- <code title="post /public-api/prompts">client.publicAPI.prompts.<a href="./src/resources/public-api/prompts.ts">createPrompt</a>({ ...params }) -> PromptCreatePromptResponse</code>
- <code title="delete /public-api/prompts/{promptId}">client.publicAPI.prompts.<a href="./src/resources/public-api/prompts.ts">deletePrompt</a>(promptID) -> void</code>
- <code title="get /public-api/prompts">client.publicAPI.prompts.<a href="./src/resources/public-api/prompts.ts">listPrompts</a>({ ...params }) -> PromptListPromptsResponse</code>
- <code title="patch /public-api/prompts/{promptId}">client.publicAPI.prompts.<a href="./src/resources/public-api/prompts.ts">partialUpdatePrompt</a>(promptID, { ...params }) -> void</code>
- <code title="get /public-api/prompts/{promptId}">client.publicAPI.prompts.<a href="./src/resources/public-api/prompts.ts">retrievePrompt</a>(promptID) -> PromptRetrievePromptResponse</code>
- <code title="put /public-api/prompts/{promptId}">client.publicAPI.prompts.<a href="./src/resources/public-api/prompts.ts">updatePrompt</a>(promptID, { ...params }) -> void</code>

## Broadcasts

Types:

- <code><a href="./src/resources/public-api/broadcasts.ts">Broadcast</a></code>
- <code><a href="./src/resources/public-api/broadcasts.ts">BroadcastCreateBroadcastResponse</a></code>
- <code><a href="./src/resources/public-api/broadcasts.ts">BroadcastListBroadcastsResponse</a></code>
- <code><a href="./src/resources/public-api/broadcasts.ts">BroadcastRetrieveBroadcastResponse</a></code>

Methods:

- <code title="post /public-api/broadcasts">client.publicAPI.broadcasts.<a href="./src/resources/public-api/broadcasts.ts">createBroadcast</a>({ ...params }) -> BroadcastCreateBroadcastResponse</code>
- <code title="get /public-api/broadcasts">client.publicAPI.broadcasts.<a href="./src/resources/public-api/broadcasts.ts">listBroadcasts</a>({ ...params }) -> BroadcastListBroadcastsResponse</code>
- <code title="get /public-api/broadcasts/{id}">client.publicAPI.broadcasts.<a href="./src/resources/public-api/broadcasts.ts">retrieveBroadcast</a>(id) -> BroadcastRetrieveBroadcastResponse</code>
