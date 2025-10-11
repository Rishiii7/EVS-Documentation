export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface ApiParameter {
  name: string
  type: string
  required: boolean
  description?: string
}

export interface ApiEndpoint {
  method: ApiMethod
  path: string
  description: string
  parameters?: ApiParameter[]
  pathParameters?: ApiParameter[]
  response: ApiParameter[]
  curlExample: string
  responseExample: string
}

export interface ApiService {
  id: string
  name: string
  description: string
  endpoints: ApiEndpoint[]
}

export const apiServices: ApiService[] = [
  {
    "id": "parent-company",
    "name": "Parent Company",
    "description": "Manage parent company information",
    "endpoints": [
      {
        "method": "GET",
        "path": "/api/v1/parent-companies/",
        "description": "Retrieve a list of all parent companies.",
        "parameters": [
          {
            "name": "name",
            "type": "string",
            "required": false,
            "description": "Filter companies by name (case-insensitive contains)"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the parent company."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Name of the parent company."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/parent-companies/?name=Acme' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "pc_1234567890",
      "name": "Acme Corporation",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ]`
      },
      {
        "method": "GET",
        "path": "/api/v1/parent-companies/{id}/",
        "description": "Retrieve details of a specific parent company.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the parent company"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the parent company."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Name of the parent company."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/parent-companies/pc_1234567890/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "id": "pc_1234567890",
    "name": "Acme Corporation",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }`
      },
      {
        "method": "POST",
        "path": "/api/v1/parent-companies/",
        "description": "Create a new parent company.",
        "parameters": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Name of the new parent company"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the parent company."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Name of the parent company."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X POST 'https://api.example.com/api/v1/parent-companies/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"name\": \"Acme Corporation\"}'",
        "responseExample": `{
    "id": "pc_1234567890",
    "name": "Acme Corporation",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }`
      },
      {
        "method": "PATCH",
        "path": "/api/v1/parent-companies/{id}/",
        "description": "Update an existing parent company.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the parent company"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "description": "New name for the parent company"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the parent company."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Updated name of the parent company."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X PATCH 'https://api.example.com/api/v1/parent-companies/pc_1234567890/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"name\": \"Acme Corp Updated\"}'",
        "responseExample": `{
    "id": "pc_1234567890",
    "name": "Acme Corp Updated",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T11:45:00Z"
  }`
      },
      {
        "method": "DELETE",
        "path": "/api/v1/parent-companies/{id}/",
        "description": "Delete a parent company.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the parent company to delete"
          }
        ],
        "response": [
          {
            "name": "success",
            "type": "boolean",
            "required": true,
            "description": "Indicates if the deletion was successful."
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Confirmation message."
          }
        ],
        "curlExample": "curl -X DELETE 'https://api.example.com/api/v1/parent-companies/pc_1234567890/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "success": true,
    "message": "Parent company deleted successfully"
  }`
      },
      {
        "method": "GET",
        "path": "/api/v1/parent-companies/{id}/hospitals/",
        "description": "Get all hospitals (sites) for a specific parent company.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the parent company"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the site."
          },
          {
            "name": "site_name",
            "type": "string",
            "required": true,
            "description": "Name of the site."
          },
          {
            "name": "building_name",
            "type": "string",
            "required": true,
            "description": "Name of the building."
          },
          {
            "name": "parent_company_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent company."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/parent-companies/pc_1234567890/hospitals/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "site_12345",
      "site_name": "Downtown Medical Center",
      "building_name": "Main Building",
      "parent_company_id": "pc_1234567890",
      "created_at": "2024-01-16T09:15:00Z",
      "updated_at": "2024-01-16T09:15:00Z"
    }
  ]`
      }
    ]
  },
  {
    "id": "area",
    "name": "Area",
    "description": "Manage area information within sites",
    "endpoints": [
      {
        "method": "GET",
        "path": "/api/v1/areas/",
        "description": "Retrieve a list of all areas.",
        "parameters": [
          {
            "name": "site_id",
            "type": "string",
            "required": false,
            "description": "Filter areas by site ID"
          },
          {
            "name": "type",
            "type": "string",
            "required": false,
            "description": "Filter by area type"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the area."
          },
          {
            "name": "site_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent site."
          },
          {
            "name": "floor",
            "type": "string",
            "required": true,
            "description": "Floor number or identifier."
          },
          {
            "name": "area_name",
            "type": "string",
            "required": true,
            "description": "Name of the area."
          },
          {
            "name": "type",
            "type": "string",
            "required": true,
            "description": "Type of the area (e.g., Patient Room, Hallway, etc.)."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/areas/?site_id=site_12345&type=Patient+Room' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "area_67890",
      "site_id": "site_12345",
      "floor": "3",
      "area_name": "West Wing",
      "type": "Patient Room",
      "created_at": "2024-01-17T08:30:00Z",
      "updated_at": "2024-01-17T08:30:00Z"
    }
  ]`
      },
      {
        "method": "GET",
        "path": "/api/v1/areas/{id}/",
        "description": "Retrieve details of a specific area.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the area"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the area."
          },
          {
            "name": "site_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent site."
          },
          {
            "name": "floor",
            "type": "string",
            "required": true,
            "description": "Floor number or identifier."
          },
          {
            "name": "area_name",
            "type": "string",
            "required": true,
            "description": "Name of the area."
          },
          {
            "name": "type",
            "type": "string",
            "required": true,
            "description": "Type of the area (e.g., Patient Room, Hallway, etc.)."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/areas/area_67890/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "id": "area_67890",
    "site_id": "site_12345",
    "floor": "3",
    "area_name": "West Wing",
    "type": "Patient Room",
    "created_at": "2024-01-17T08:30:00Z",
    "updated_at": "2024-01-17T08:30:00Z"
  }`
      },
      {
        "method": "POST",
        "path": "/api/v1/areas/",
        "description": "Create a new area.",
        "parameters": [
          {
            "name": "site_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent site"
          },
          {
            "name": "floor",
            "type": "string",
            "required": true,
            "description": "Floor number or identifier"
          },
          {
            "name": "area_name",
            "type": "string",
            "required": true,
            "description": "Name of the area"
          },
          {
            "name": "type",
            "type": "string",
            "required": true,
            "description": "Type of the area"
          }
        ],
        response: [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the area."
          },
          {
            "name": "site_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent site."
          },
          {
            "name": "floor",
            "type": "string",
            "required": true,
            "description": "Floor number or identifier."
          },
          {
            "name": "area_name",
            "type": "string",
            "required": true,
            "description": "Name of the area."
          },
          {
            "name": "type",
            "type": "string",
            "required": true,
            "description": "Type of the area (e.g., Patient Room, Hallway, etc.)."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X POST 'https://api.example.com/api/v1/areas/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"site_id\": \"site_12345\", \"floor\": \"3\", \"area_name\": \"West Wing\", \"type\": \"Patient Room\"}'",
        "responseExample": `{
    "id": "area_67890",
    "site_id": "site_12345",
    "floor": "3",
    "area_name": "West Wing",
    "type": "Patient Room",
    "created_at": "2024-01-17T08:30:00Z",
    "updated_at": "2024-01-17T08:30:00Z"
  }`
      },
      {
        "method": "PATCH",
        "path": "/api/v1/areas/{id}/",
        "description": "Update an existing area.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the area"
          },
          {
            "name": "floor",
            "type": "string",
            "required": false,
            "description": "New floor number or identifier"
          },
          {
            "name": "area_name",
            "type": "string",
            "required": false,
            "description": "New name for the area"
          },
          {
            "name": "type",
            "type": "string",
            "required": false,
            "description": "New type for the area"
          }
        ],
        response: [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the area."
          },
          {
            "name": "site_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent site."
          },
          {
            "name": "floor",
            "type": "string",
            "required": true,
            "description": "Floor number or identifier."
          },
          {
            "name": "area_name",
            "type": "string",
            "required": true,
            "description": "Name of the area."
          },
          {
            "name": "type",
            "type": "string",
            "required": true,
            "description": "Type of the area (e.g., Patient Room, Hallway, etc.)."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X PATCH 'https://api.example.com/api/v1/areas/area_67890/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"area_name\": \"West Wing - Updated\"}'",
        "responseExample": `{
    "id": "area_67890",
    "site_id": "site_12345",
    "floor": "3",
    "area_name": "West Wing - Updated",
    "type": "Patient Room",
    "created_at": "2024-01-17T08:30:00Z",
    "updated_at": "2024-01-17T09:45:00Z"
  }`
      },
      {
        "method": "DELETE",
        "path": "/api/v1/areas/{id}/",
        "description": "Delete an area.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the area to delete"
          }
        ],
        response: [
          {
            "name": "success",
            "type": "boolean",
            "required": true,
            "description": "Indicates whether the deletion was successful."
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Description of the deletion result."
          }
        ],
        "curlExample": "curl -X DELETE 'https://api.example.com/api/v1/areas/area_67890/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "success": true,
    "message": "Area deleted successfully"
  }`
      }
    ]
  },
  {
    "id": "subarea",
    "name": "SubArea",
    "description": "Manage subarea information within areas",
    "endpoints": [
      {
        "method": "GET",
        "path": "/api/v1/subareas/",
        "description": "Retrieve a list of all subareas.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": false,
            "description": "Filter subareas by area ID"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the subarea."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent area."
          },
          {
            "name": "sub_area",
            "type": "string",
            "required": true,
            "description": "Name of the subarea."
          },
          {
            "name": "length",
            "type": "number",
            "required": true,
            "description": "Length of the subarea in feet."
          },
          {
            "name": "width",
            "type": "number",
            "required": true,
            "description": "Width of the subarea in feet."
          },
          {
            "name": "floor_type",
            "type": "string",
            "required": true,
            "description": "Type of flooring (e.g., tile, carpet, other)."
          },
          {
            "name": "cleaning_prod",
            "type": "number",
            "required": true,
            "description": "Cleaning productivity rate."
          },
          {
            "name": "floor_prod",
            "type": "number",
            "required": true,
            "description": "Floor care productivity rate."
          },
          {
            "name": "sq_ft",
            "type": "number",
            "required": true,
            "description": "Calculated square footage (read-only)."
          },
          {
            "name": "cleaning_time",
            "type": "number",
            "required": true,
            "description": "Calculated cleaning time (read-only)."
          },
          {
            "name": "floor_care_tile_time",
            "type": "number",
            "required": true,
            "description": "Calculated tile floor care time (read-only)."
          },
          {
            "name": "floor_care_carpet_time",
            "type": "number",
            "required": true,
            "description": "Calculated carpet floor care time (read-only)."
          },
          {
            "name": "other_floor_care_time",
            "type": "number",
            "required": true,
            "description": "Calculated other floor care time (read-only)."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/subareas/?area_id=area_67890' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "sub_13579",
      "area_id": "area_67890",
      "sub_area": "Patient Room 301",
      "length": 20,
      "width": 15,
      "floor_type": "tile",
      "cleaning_prod": 1.5,
      "floor_prod": 2.0,
      "sq_ft": 300,
      "cleaning_time": 200,
      "floor_care_tile_time": 150,
      "floor_care_carpet_time": 0,
      "other_floor_care_time": 0,
      "created_at": "2024-01-18T10:15:00Z",
      "updated_at": "2024-01-18T10:15:00Z"
    }
  ]`
      },
      {
        "method": "GET",
        "path": "/api/v1/subareas/{id}/",
        "description": "Retrieve details of a specific subarea.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the subarea"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the subarea."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent area."
          },
          {
            "name": "sub_area",
            "type": "string",
            "required": true,
            "description": "Name of the subarea."
          },
          {
            "name": "length",
            "type": "number",
            "required": true,
            "description": "Length of the subarea in feet."
          },
          {
            "name": "width",
            "type": "number",
            "required": true,
            "description": "Width of the subarea in feet."
          },
          {
            "name": "floor_type",
            "type": "string",
            "required": true,
            "description": "Type of flooring (e.g., tile, carpet, other)."
          },
          {
            "name": "cleaning_prod",
            "type": "number",
            "required": true,
            "description": "Cleaning productivity rate."
          },
          {
            "name": "floor_prod",
            "type": "number",
            "required": true,
            "description": "Floor care productivity rate."
          },
          {
            "name": "sq_ft",
            "type": "number",
            "required": true,
            "description": "Calculated square footage (read-only)."
          },
          {
            "name": "cleaning_time",
            "type": "number",
            "required": true,
            "description": "Calculated cleaning time (read-only)."
          },
          {
            "name": "floor_care_tile_time",
            "type": "number",
            "required": true,
            "description": "Calculated tile floor care time (read-only)."
          },
          {
            "name": "floor_care_carpet_time",
            "type": "number",
            "required": true,
            "description": "Calculated carpet floor care time (read-only)."
          },
          {
            "name": "other_floor_care_time",
            "type": "number",
            "required": true,
            "description": "Calculated other floor care time (read-only)."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/subareas/sub_13579/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "id": "sub_13579",
    "area_id": "area_67890",
    "sub_area": "Patient Room 301",
    "length": 20,
    "width": 15,
    "floor_type": "tile",
    "cleaning_prod": 1.5,
    "floor_prod": 2.0,
    "sq_ft": 300,
    "cleaning_time": 200,
    "floor_care_tile_time": 150,
    "floor_care_carpet_time": 0,
    "other_floor_care_time": 0,
    "created_at": "2024-01-18T10:15:00Z",
    "updated_at": "2024-01-18T10:15:00Z"
  }`
      },
      {
        "method": "POST",
        "path": "/api/v1/subareas/",
        "description": "Create a new subarea.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the parent area"
          },
          {
            "name": "sub_area",
            "type": "string",
            "required": true,
            "description": "Name of the subarea"
          },
          {
            "name": "length",
            "type": "number",
            "required": true,
            "description": "Length in feet"
          },
          {
            "name": "width",
            "type": "number",
            "required": true,
            "description": "Width in feet"
          },
          {
            "name": "floor_type",
            "type": "string",
            "required": true,
            "description": "Type of flooring (tile, carpet, other)"
          },
          {
            "name": "cleaning_prod",
            "type": "number",
            "required": true,
            "description": "Cleaning productivity rate"
          },
          {
            "name": "floor_prod",
            "type": "number",
            "required": true,
            "description": "Floor care productivity rate"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the subarea."
          }
        ],
        "curlExample": "curl -X POST 'https://api.example.com/api/v1/subareas/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"area_id\": \"area_67890\", \"sub_area\": \"Patient Room 301\", \"length\": 20, \"width\": 15, \"floor_type\": \"tile\", \"cleaning_prod\": 1.5, \"floor_prod\": 2.0}'",
        "responseExample": `{
    "id": "sub_13579",
    "area_id": "area_67890",
    "sub_area": "Patient Room 301",
    "length": 20,
    "width": 15,
    "floor_type": "tile",
    "cleaning_prod": 1.5,
    "floor_prod": 2.0,
    "sq_ft": 300,
    "cleaning_time": 200,
    "floor_care_tile_time": 150,
    "floor_care_carpet_time": 0,
    "other_floor_care_time": 0,
    "created_at": "2024-01-18T10:15:00Z",
    "updated_at": "2024-01-18T10:15:00Z"
  }`
      },
      {
        "method": "PATCH",
        "path": "/api/v1/subareas/{id}/",
        "description": "Update an existing subarea.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the subarea"
          },
          {
            "name": "sub_area",
            "type": "string",
            "required": false,
            "description": "New name for the subarea"
          },
          {
            "name": "length",
            "type": "number",
            "required": false,
            "description": "New length in feet"
          },
          {
            "name": "width",
            "type": "number",
            "required": false,
            "description": "New width in feet"
          },
          {
            "name": "floor_type",
            "type": "string",
            "required": false,
            "description": "New type of flooring"
          },
          {
            "name": "cleaning_prod",
            "type": "number",
            "required": false,
            "description": "New cleaning productivity rate"
          },
          {
            "name": "floor_prod",
            "type": "number",
            "required": false,
            "description": "New floor care productivity rate"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the subarea."
          }
        ],
        "curlExample": "curl -X PATCH 'https://api.example.com/api/v1/subareas/sub_13579/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"length\": 22, \"width\": 16}'",
        "responseExample": `{
    "id": "sub_13579",
    "area_id": "area_67890",
    "sub_area": "Patient Room 301",
    "length": 22,
    "width": 16,
    "floor_type": "tile",
    "cleaning_prod": 1.5,
    "floor_prod": 2.0,
    "sq_ft": 352,
    "cleaning_time": 235,
    "floor_care_tile_time": 176,
    "floor_care_carpet_time": 0,
    "other_floor_care_time": 0,
    "created_at": "2024-01-18T10:15:00Z",
    "updated_at": "2024-01-18T11:30:00Z"
  }`
      },
      {
        "method": "DELETE",
        "path": "/api/v1/subareas/{id}/",
        "description": "Delete a subarea.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the subarea to delete"
          }
        ],
        "response": [
          {
            "name": "success",
            "type": "boolean",
            "required": true,
            "description": "Indicates whether the deletion was successful"
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Message indicating the result of the deletion"
          }
        ],
        "curlExample": "curl -X DELETE 'https://api.example.com/api/v1/subareas/sub_13579/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "success": true,
    "message": "Subarea deleted successfully"
  }`
      }
    ]
  },
  {
    "id": "er-buffer",
    "name": "ER Buffer",
    "description": "Manage ER Buffer calculations and data",
    "endpoints": [
      {
        "method": "GET",
        "path": "/api/v1/er-buffers/",
        "description": "Retrieve a list of all ER buffer records.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": false,
            "description": "Filter ER buffers by area ID"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ER buffer record."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area."
          },
          {
            "name": "patient_rooms",
            "type": "integer",
            "required": true,
            "description": "Number of patient rooms."
          },
          {
            "name": "weekly_freq_cleaning",
            "type": "number",
            "required": true,
            "description": "Weekly cleaning frequency."
          },
          {
            "name": "weekly_freq_floorcare_tile",
            "type": "number",
            "required": true,
            "description": "Weekly tile floor care frequency."
          },
          {
            "name": "weekly_freq_floorcare_carpet",
            "type": "number",
            "required": true,
            "description": "Weekly carpet floor care frequency."
          },
          {
            "name": "weekly_freq_floorcare_other",
            "type": "number",
            "required": true,
            "description": "Weekly other floor care frequency."
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Additional notes about the ER buffer."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/er-buffers/?area_id=area_67890' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "erb_24680",
      "area_id": "area_67890",
      "patient_rooms": 25,
      "weekly_freq_cleaning": 1.5,
      "weekly_freq_floorcare_tile": 0.5,
      "weekly_freq_floorcare_carpet": 0.5,
      "weekly_freq_floorcare_other": 0.2,
      "notes": "High traffic area",
      "created_at": "2024-01-19T09:30:00Z",
      "updated_at": "2024-01-19T09:30:00Z"
    }
  ]`
      },
      {
        "method": "GET",
        "path": "/api/v1/er-buffers/{id}/",
        "description": "Retrieve details of a specific ER buffer record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the ER buffer record"
          }
        ],
        "response":[
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ER buffer record."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area."
          },
          {
            "name": "patient_rooms",
            "type": "integer",
            "required": true,
            "description": "Number of patient rooms."
          },
          {
            "name": "weekly_freq_cleaning",
            "type": "number",
            "required": true,
            "description": "Weekly cleaning frequency."
          },
          {
            "name": "weekly_freq_floorcare_tile",
            "type": "number",
            "required": true,
            "description": "Weekly tile floor care frequency."
          },
          {
            "name": "weekly_freq_floorcare_carpet",
            "type": "number",
            "required": true,
            "description": "Weekly carpet floor care frequency."
          },
          {
            "name": "weekly_freq_floorcare_other",
            "type": "number",
            "required": true,
            "description": "Weekly other floor care frequency."
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Additional notes about the ER buffer."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/er-buffers/erb_24680/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "id": "erb_24680",
    "area_id": "area_67890",
    "patient_rooms": 25,
    "weekly_freq_cleaning": 1.5,
    "weekly_freq_floorcare_tile": 0.5,
    "weekly_freq_floorcare_carpet": 0.5,
    "weekly_freq_floorcare_other": 0.2,
    "notes": "High traffic area",
    "created_at": "2024-01-19T09:30:00Z",
    "updated_at": "2024-01-19T09:30:00Z"
  }`
      },
      {
        "method": "POST",
        "path": "/api/v1/er-buffers/",
        "description": "Create a new ER buffer record.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area"
          },
          {
            "name": "patient_rooms",
            "type": "integer",
            "required": true,
            "description": "Number of patient rooms"
          },
          {
            "name": "weekly_freq_cleaning",
            "type": "number",
            "required": true,
            "description": "Weekly cleaning frequency"
          },
          {
            "name": "weekly_freq_floorcare_tile",
            "type": "number",
            "required": true,
            "description": "Weekly tile floor care frequency"
          },
          {
            "name": "weekly_freq_floorcare_carpet",
            "type": "number",
            "required": true,
            "description": "Weekly carpet floor care frequency"
          },
          {
            "name": "weekly_freq_floorcare_other",
            "type": "number",
            "required": true,
            "description": "Weekly other floor care frequency"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Additional notes"
          }
        ],
        "response":[
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ER buffer record."
          }
        ],
        "curlExample": "curl -X POST 'https://api.example.com/api/v1/er-buffers/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"area_id\": \"area_67890\", \"patient_rooms\": 25, \"weekly_freq_cleaning\": 1.5, \"weekly_freq_floorcare_tile\": 0.5, \"weekly_freq_floorcare_carpet\": 0.5, \"weekly_freq_floorcare_other\": 0.2, \"notes\": \"High traffic area\"}'",
        "responseExample": `{
    "id": "erb_24680",
    "area_id": "area_67890",
    "patient_rooms": 25,
    "weekly_freq_cleaning": 1.5,
    "weekly_freq_floorcare_tile": 0.5,
    "weekly_freq_floorcare_carpet": 0.5,
    "weekly_freq_floorcare_other": 0.2,
    "notes": "High traffic area",
    "created_at": "2024-01-19T09:30:00Z",
    "updated_at": "2024-01-19T09:30:00Z"
  }`
      },
      {
        "method": "PATCH",
        "path": "/api/v1/er-buffers/{id}/",
        "description": "Update an existing ER buffer record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the ER buffer record"
          },
          {
            "name": "patient_rooms",
            "type": "integer",
            "required": false,
            "description": "Updated number of patient rooms"
          },
          {
            "name": "weekly_freq_cleaning",
            "type": "number",
            "required": false,
            "description": "Updated weekly cleaning frequency"
          },
          {
            "name": "weekly_freq_floorcare_tile",
            "type": "number",
            "required": false,
            "description": "Updated weekly tile floor care frequency"
          },
          {
            "name": "weekly_freq_floorcare_carpet",
            "type": "number",
            "required": false,
            "description": "Updated weekly carpet floor care frequency"
          },
          {
            "name": "weekly_freq_floorcare_other",
            "type": "number",
            "required": false,
            "description": "Updated weekly other floor care frequency"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Updated notes"
          }
        ],
        "response":[
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ER buffer record."
          }
        ],
        "curlExample": "curl -X PATCH 'https://api.example.com/api/v1/er-buffers/erb_24680/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"patient_rooms\": 26, \"weekly_freq_cleaning\": 1.6}'",
        "responseExample": `{
    "id": "erb_24680",
    "area_id": "area_67890",
    "patient_rooms": 26,
    "weekly_freq_cleaning": 1.6,
    "weekly_freq_floorcare_tile": 0.5,
    "weekly_freq_floorcare_carpet": 0.5,
    "weekly_freq_floorcare_other": 0.2,
    "notes": "High traffic area",
    "created_at": "2024-01-19T09:30:00Z",
    "updated_at": "2024-01-19T10:45:00Z"
  }`
      },
      {
        "method": "DELETE",
        "path": "/api/v1/er-buffers/{id}/",
        "description": "Delete an ER buffer record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the ER buffer record to delete"
          }
        ],
        "response":[
          {
            "name": "success",
            "type": "boolean",
            "required": true,
            "description": "Indicates if the deletion was successful"
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Message indicating the result of the deletion"
          }
        ],
        "curlExample": "curl -X DELETE 'https://api.example.com/api/v1/er-buffers/erb_24680/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "success": true,
    "message": "ER buffer record deleted successfully"
  }`
      }
    ]
  },
  {
    "id": "census",
    "name": "Census",
    "description": "Manage census data for areas",
    "endpoints": [
      {
        "method": "GET",
        "path": "/api/v1/census/",
        "description": "Retrieve a list of all census records.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": false,
            "description": "Filter census records by area ID"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the census record."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area."
          },
          {
            "name": "census",
            "type": "integer",
            "required": true,
            "description": "Census count."
          },
          {
            "name": "am_policing_time",
            "type": "integer",
            "required": true,
            "description": "AM policing time in minutes."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/census/?area_id=area_67890' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "census_13579",
      "area_id": "area_67890",
      "census": 120,
      "am_policing_time": 180,
      "created_at": "2024-01-20T08:15:00Z",
      "updated_at": "2024-01-20T08:15:00Z"
    }
  ]`
      },
      {
        "method": "GET",
        "path": "/api/v1/census/{id}/",
        "description": "Retrieve details of a specific census record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the census record"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the census record."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area."
          },
          {
            "name": "census",
            "type": "integer",
            "required": true,
            "description": "Census count."
          },
          {
            "name": "am_policing_time",
            "type": "integer",
            "required": true,
            "description": "AM policing time in minutes."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/census/census_13579/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "id": "census_13579",
    "area_id": "area_67890",
    "census": 120,
    "am_policing_time": 180,
    "created_at": "2024-01-20T08:15:00Z",
    "updated_at": "2024-01-20T08:15:00Z"
  }`
      },
      {
        "method": "POST",
        "path": "/api/v1/census/",
        "description": "Create a new census record.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area"
          },
          {
            "name": "census",
            "type": "integer",
            "required": true,
            "description": "Census count"
          },
          {
            "name": "am_policing_time",
            "type": "integer",
            "required": true,
            "description": "AM policing time in minutes"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the census record."
          }
        ],
        "curlExample": "curl -X POST 'https://api.example.com/api/v1/census/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"area_id\": \"area_67890\", \"census\": 120, \"am_policing_time\": 180}'",
        "responseExample": `{
    "id": "census_13579",
    "area_id": "area_67890",
    "census": 120,
    "am_policing_time": 180,
    "created_at": "2024-01-20T08:15:00Z",
    "updated_at": "2024-01-20T08:15:00Z"
  }`
      },
      {
        "method": "PATCH",
        "path": "/api/v1/census/{id}/",
        "description": "Update an existing census record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the census record"
          },
          {
            "name": "census",
            "type": "integer",
            "required": false,
            "description": "Updated census count"
          },
          {
            "name": "am_policing_time",
            "type": "integer",
            "required": false,
            "description": "Updated AM policing time in minutes"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the census record."
          }
        ],
          "curlExample": "curl -X PATCH 'https://api.example.com/api/v1/census/census_13579/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"census\": 125, \"am_policing_time\": 190}'",
        "responseExample": `{
    "id": "census_13579",
    "area_id": "area_67890",
    "census": 125,
    "am_policing_time": 190,
    "created_at": "2024-01-20T08:15:00Z",
    "updated_at": "2024-01-20T09:30:00Z"
  }`
      },
      {
        "method": "DELETE",
        "path": "/api/v1/census/{id}/",
        "description": "Delete a census record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the census record to delete"
          }
        ],
        "response": [
          {
            "name": "success",
            "type": "boolean",
            "required": true,
            "description": "Indicates whether the deletion was successful"
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Message indicating the result of the deletion"
          }
        ],
        "curlExample": "curl -X DELETE 'https://api.example.com/api/v1/census/census_13579/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "success": true,
    "message": "Census record deleted successfully"
  }`
      }
    ]
  },
  {
    "id": "ancillary",
    "name": "Ancillary",
    "description": "Manage ancillary data for areas",
    "endpoints": [
      {
        "method": "GET",
        "path": "/api/v1/ancillary/",
        "description": "Retrieve a list of all ancillary records.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": false,
            "description": "Filter ancillary records by area ID"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ancillary record."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area."
          },
          {
            "name": "cleaning_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly cleaning frequency."
          },
          {
            "name": "tile_buff_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly tile buffing frequency."
          },
          {
            "name": "bonnet_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly bonnet cleaning frequency."
          },
          {
            "name": "other_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Other weekly cleaning frequency."
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Additional notes about the ancillary data."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/ancillary/?area_id=area_67890' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `[
    {
      "id": "anc_24681",
      "area_id": "area_67890",
      "cleaning_weekly_freq": 5.0,
      "tile_buff_weekly_freq": 1.0,
      "bonnet_weekly_freq": 2.0,
      "other_weekly_freq": 0.5,
      "notes": "High traffic ancillary area",
      "created_at": "2024-01-21T10:20:00Z",
      "updated_at": "2024-01-21T10:20:00Z"
    }
  ]`
      },
      {
        "method": "GET",
        "path": "/api/v1/ancillary/{id}/",
        "description": "Retrieve details of a specific ancillary record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the ancillary record"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ancillary record."
          },
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area."
          },
          {
            "name": "cleaning_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly cleaning frequency."
          },
          {
            "name": "tile_buff_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly tile buffing frequency."
          },
          {
            "name": "bonnet_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly bonnet cleaning frequency."
          },
          {
            "name": "other_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Other weekly cleaning frequency."
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Additional notes about the ancillary data."
          },
          {
            "name": "created_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was created."
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "required": true,
            "description": "Timestamp when the record was last updated."
          }
        ],
        "curlExample": "curl -X GET 'https://api.example.com/api/v1/ancillary/anc_24681/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "id": "anc_24681",
    "area_id": "area_67890",
    "cleaning_weekly_freq": 5.0,
    "tile_buff_weekly_freq": 1.0,
    "bonnet_weekly_freq": 2.0,
    "other_weekly_freq": 0.5,
    "notes": "High traffic ancillary area",
    "created_at": "2024-01-21T10:20:00Z",
    "updated_at": "2024-01-21T10:20:00Z"
  }`
      },
      {
        "method": "POST",
        "path": "/api/v1/ancillary/",
        "description": "Create a new ancillary record.",
        "parameters": [
          {
            "name": "area_id",
            "type": "string",
            "required": true,
            "description": "ID of the related area"
          },
          {
            "name": "cleaning_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly cleaning frequency"
          },
          {
            "name": "tile_buff_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly tile buffing frequency"
          },
          {
            "name": "bonnet_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Weekly bonnet cleaning frequency"
          },
          {
            "name": "other_weekly_freq",
            "type": "number",
            "required": true,
            "description": "Other weekly cleaning frequency"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Additional notes"
          }
        ],
        response: [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ancillary record."
          }
        ],
        "curlExample": "curl -X POST 'https://api.example.com/api/v1/ancillary/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"area_id\": \"area_67890\", \"cleaning_weekly_freq\": 5.0, \"tile_buff_weekly_freq\": 1.0, \"bonnet_weekly_freq\": 2.0, \"other_weekly_freq\": 0.5, \"notes\": \"High traffic ancillary area\"}'",
        "responseExample": `{
    "id": "anc_24681",
    "area_id": "area_67890",
    "cleaning_weekly_freq": 5.0,
    "tile_buff_weekly_freq": 1.0,
    "bonnet_weekly_freq": 2.0,
    "other_weekly_freq": 0.5,
    "notes": "High traffic ancillary area",
    "created_at": "2024-01-21T10:20:00Z",
    "updated_at": "2024-01-21T10:20:00Z"
  }`
      },
      {
        "method": "PATCH",
        "path": "/api/v1/ancillary/{id}/",
        "description": "Update an existing ancillary record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the ancillary record"
          },
          {
            "name": "cleaning_weekly_freq",
            "type": "number",
            "required": false,
            "description": "Updated weekly cleaning frequency"
          },
          {
            "name": "tile_buff_weekly_freq",
            "type": "number",
            "required": false,
            "description": "Updated weekly tile buffing frequency"
          },
          {
            "name": "bonnet_weekly_freq",
            "type": "number",
            "required": false,
            "description": "Updated weekly bonnet cleaning frequency"
          },
          {
            "name": "other_weekly_freq",
            "type": "number",
            "required": false,
            "description": "Updated other weekly cleaning frequency"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Updated notes"
          }
        ],
        "response": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier for the ancillary record."
          }
        ],
        "curlExample": "curl -X PATCH 'https://api.example.com/api/v1/ancillary/anc_24681/' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -d '{\"cleaning_weekly_freq\": 6.0, \"notes\": \"Updated frequency for peak season\"}'",
        "responseExample": `{
    "id": "anc_24681",
    "area_id": "area_67890",
    "cleaning_weekly_freq": 6.0,
    "tile_buff_weekly_freq": 1.0,
    "bonnet_weekly_freq": 2.0,
    "other_weekly_freq": 0.5,
    "notes": "Updated frequency for peak season",
    "created_at": "2024-01-21T10:20:00Z",
    "updated_at": "2024-01-21T11:35:00Z"
  }`
      },
      {
        "method": "DELETE",
        "path": "/api/v1/ancillary/{id}/",
        "description": "Delete an ancillary record.",
        "parameters": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Unique identifier of the ancillary record to delete"
          }
        ],
        "response": [
          {
            "name": "success",
            "type": "boolean",
            "required": true,
            "description": "Indicates whether the deletion was successful."
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Description of the deletion result."
          }
        ],
        "curlExample": "curl -X DELETE 'https://api.example.com/api/v1/ancillary/anc_24681/' \\\n  -H 'Authorization: Bearer YOUR_API_KEY'",
        "responseExample": `{
    "success": true,
    "message": "Ancillary record deleted successfully"
  }`
      }
    ]
  }
]

export const apiEndpoints: ApiEndpoint[] = apiServices.flatMap((service) => service.endpoints)
