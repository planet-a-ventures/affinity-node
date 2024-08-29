# .ListsApi

All URIs are relative to _http://api.affinity.co_

| Method                                                                                                     | HTTP request                                                 | Description                                 |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| [**getV2Lists**](ListsApi.md#getV2Lists)                                                                   | **GET** /v2/lists                                            | Get metadata on all Lists                   |
| [**getV2ListsListid**](ListsApi.md#getV2ListsListid)                                                       | **GET** /v2/lists/{listId}                                   | Get metadata on a single List               |
| [**getV2ListsListidFields**](ListsApi.md#getV2ListsListidFields)                                           | **GET** /v2/lists/{listId}/fields                            | Get metadata on a single List\&#39;s Fields |
| [**getV2ListsListidListEntries**](ListsApi.md#getV2ListsListidListEntries)                                 | **GET** /v2/lists/{listId}/list-entries                      | Get all List Entries on a List              |
| [**getV2ListsListidSavedViews**](ListsApi.md#getV2ListsListidSavedViews)                                   | **GET** /v2/lists/{listId}/saved-views                       | Get metadata on Saved Views                 |
| [**getV2ListsListidSavedViewsViewid**](ListsApi.md#getV2ListsListidSavedViewsViewid)                       | **GET** /v2/lists/{listId}/saved-views/{viewId}              | Get metadata on a single Saved View         |
| [**getV2ListsListidSavedViewsViewidListEntries**](ListsApi.md#getV2ListsListidSavedViewsViewidListEntries) | **GET** /v2/lists/{listId}/saved-views/{viewId}/list-entries | Get all List Entries on a Saved View        |

# **getV2Lists**

> ListWithTypePaged getV2Lists()

Returns metadata on Lists.

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsRequest = {
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2Lists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description                            | Notes                            |
| ---------- | ------------ | -------------------------------------- | -------------------------------- |
| **cursor** | [**string**] | Cursor for the next or previous page   | (optional) defaults to undefined |
| **limit**  | [**number**] | Number of items to include in the page | (optional) defaults to 100       |

### Return type

**ListWithTypePaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | Get metadata on all Lists | -                |
| **400**     | Bad Request               | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)

# **getV2ListsListid**

> ListWithType getV2ListsListid()

Returns metadata on a single List.

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsListidRequest = {
  // number | List ID
  listId: 1,
};

apiInstance.getV2ListsListid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **listId** | [**number**] | List ID     | defaults to undefined |

### Return type

**ListWithType**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Get metadata on a single List | -                |
| **400**     | Bad Request                   | -                |
| **404**     | Not Found                     | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)

# **getV2ListsListidFields**

> FieldMetadataPaged getV2ListsListidFields()

Returns metadata on the Fields available on a single List. Use the returned
Field IDs to request field data from the GET `/v2/lists/{listId}/list-entries`
endpoint.

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsListidFieldsRequest = {
  // number | List ID
  listId: 1,
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2ListsListidFields(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description                            | Notes                            |
| ---------- | ------------ | -------------------------------------- | -------------------------------- |
| **listId** | [**number**] | List ID                                | defaults to undefined            |
| **cursor** | [**string**] | Cursor for the next or previous page   | (optional) defaults to undefined |
| **limit**  | [**number**] | Number of items to include in the page | (optional) defaults to 100       |

### Return type

**FieldMetadataPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                 | Response headers |
| ----------- | ------------------------------------------- | ---------------- |
| **200**     | Get metadata on a single List\&#39;s Fields | -                |
| **400**     | Bad Request                                 | -                |
| **404**     | Not Found                                   | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)

# **getV2ListsListidListEntries**

> ListEntryWithEntityPaged getV2ListsListidListEntries()

Paginate through the List Entries (AKA rows) on a given List. Returns basic
information and field data, including list-specific field data, on each Company,
Person, or Opportunity on the List. List Entries also include metadata about
their creation, i.e., when they were added to the List and by whom. To retrieve
field data, you must use either the `fieldIds` or the `fieldTypes` parameter to
specify the Fields for which you want data returned. These Field IDs and Types
can be found using the GET `/v2/lists/{listId}/fields` endpoint. When no
`fieldIds` or `fieldTypes` are provided, List Entries will be returned without
any field data attached. To supply multiple `fieldIds` or `fieldTypes`
parameters, generate a query string that looks like this:
`?fieldIds=field-1234&fieldIds=affinity-data-location` or
`?fieldTypes=enriched&fieldTypes=global`. Requires the \"Export data from
Lists\" [permission](#section/Getting-Started/Permissions).

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsListidListEntriesRequest = {
  // number | List ID
  listId: 1,
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
  // Array<string> | Field IDs for which to return field data (optional)
  fieldIds: [
    "fieldIds_example",
  ],
  // Array<'enriched' | 'global' | 'list' | 'relationship-intelligence'> | Field Types for which to return field data (optional)
  fieldTypes: [
    "enriched",
  ],
};

apiInstance.getV2ListsListidListEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name           | Type                                                                                                                   | Description                                | Notes                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------- |
| **listId**     | [**number**]                                                                                                           | List ID                                    | defaults to undefined            |
| **cursor**     | [**string**]                                                                                                           | Cursor for the next or previous page       | (optional) defaults to undefined |
| **limit**      | [**number**]                                                                                                           | Number of items to include in the page     | (optional) defaults to 100       |
| **fieldIds**   | **Array&lt;string&gt;**                                                                                                | Field IDs for which to return field data   | (optional) defaults to undefined |
| **fieldTypes** | **Array<&#39;enriched&#39; &#124; &#39;global&#39; &#124; &#39;list&#39; &#124; &#39;relationship-intelligence&#39;>** | Field Types for which to return field data | (optional) defaults to undefined |

### Return type

**ListEntryWithEntityPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **200**     | Get all List Entries on a List | -                |
| **400**     | Bad Request                    | -                |
| **403**     | Forbidden                      | -                |
| **404**     | Not Found                      | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)

# **getV2ListsListidSavedViews**

> SavedViewPaged getV2ListsListidSavedViews()

Returns metadata on the Saved Views on a List.

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsListidSavedViewsRequest = {
  // number | List ID
  listId: 1,
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2ListsListidSavedViews(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description                            | Notes                            |
| ---------- | ------------ | -------------------------------------- | -------------------------------- |
| **listId** | [**number**] | List ID                                | defaults to undefined            |
| **cursor** | [**string**] | Cursor for the next or previous page   | (optional) defaults to undefined |
| **limit**  | [**number**] | Number of items to include in the page | (optional) defaults to 100       |

### Return type

**SavedViewPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Get metadata on Saved Views | -                |
| **400**     | Bad Request                 | -                |
| **404**     | Not Found                   | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)

# **getV2ListsListidSavedViewsViewid**

> SavedView getV2ListsListidSavedViewsViewid()

Returns metadata on a single Saved View.

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsListidSavedViewsViewidRequest = {
  // number | List ID
  listId: 1,
  // number | Saved view ID
  viewId: 1,
};

apiInstance.getV2ListsListidSavedViewsViewid(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description   | Notes                 |
| ---------- | ------------ | ------------- | --------------------- |
| **listId** | [**number**] | List ID       | defaults to undefined |
| **viewId** | [**number**] | Saved view ID | defaults to undefined |

### Return type

**SavedView**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                         | Response headers |
| ----------- | ----------------------------------- | ---------------- |
| **200**     | Get metadata on a single Saved View | -                |
| **400**     | Bad Request                         | -                |
| **404**     | Not Found                           | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)

# **getV2ListsListidSavedViewsViewidListEntries**

> ListEntryWithEntityPaged getV2ListsListidSavedViewsViewidListEntries()

Paginate through the List Entries (AKA rows) on a given Saved View. Use this
endpoint when you need to filter entities or only want **some** field data to be
returned: This endpoint respects the filters set on a Saved View via web app,
and only returns field data corresponding to the columns that have been pulled
into the Saved View via web app. Though this endpoint respects the Saved View\'s
filters and column/Field selection, it does not yet preserve sort order. This
endpoint also only supports **sheet-type Saved Views**, and not board- or
dashboard-type Saved Views. See the [Data Model](#section/Data-Model) section
for more information about Saved Views. Requires the \"Export data from Lists\"
[permission](#section/Getting-Started/Permissions).

### Example

```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiGetV2ListsListidSavedViewsViewidListEntriesRequest = {
  // number | List ID
  listId: 1,
  // number | Saved view ID
  viewId: 1,
  // string | Cursor for the next or previous page (optional)
  cursor: "cursor_example",
  // number | Number of items to include in the page (optional)
  limit: 100,
};

apiInstance.getV2ListsListidSavedViewsViewidListEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```

### Parameters

| Name       | Type         | Description                            | Notes                            |
| ---------- | ------------ | -------------------------------------- | -------------------------------- |
| **listId** | [**number**] | List ID                                | defaults to undefined            |
| **viewId** | [**number**] | Saved view ID                          | defaults to undefined            |
| **cursor** | [**string**] | Cursor for the next or previous page   | (optional) defaults to undefined |
| **limit**  | [**number**] | Number of items to include in the page | (optional) defaults to 100       |

### Return type

**ListEntryWithEntityPaged**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **200**     | Get all List Entries on a Saved View | -                |
| **400**     | Bad Request                          | -                |
| **403**     | Forbidden                            | -                |
| **404**     | Not Found                            | -                |

[[Back to top]](#)
[[Back to API list]](README.md#documentation-for-api-endpoints)
[[Back to Model list]](README.md#documentation-for-models)
[[Back to README]](README.md)
