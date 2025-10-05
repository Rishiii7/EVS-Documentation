import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "API Reference | Minimal Docs Site",
  description: "Detailed API reference for our library",
}

export default function ApiReference() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">API Reference</h1>
        <p className="text-lg text-muted-foreground">
          Complete reference documentation for all API endpoints, including request parameters and response formats.
        </p>
      </div>

      {/* Create User Endpoint */}
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Badge className="bg-green-500 hover:bg-green-600">POST</Badge>
              <code className="text-lg font-semibold">/api/users</code>
            </div>
            <p className="text-muted-foreground">Create a new user in the system.</p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Parameters</h3>
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">email</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                  <Badge variant="destructive" className="text-xs">
                    required
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The user&apos;s email address.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">name</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                  <Badge variant="destructive" className="text-xs">
                    required
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The user&apos;s full name.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">role</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    optional
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  User role. Defaults to <code className="text-xs">user</code>.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Response</h3>
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">id</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Unique identifier for the user.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">email</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The user&apos;s email address.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">created_at</code>
                  <Badge variant="outline" className="text-xs">
                    timestamp
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Timestamp of user creation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <Tabs defaultValue="curl" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="mt-4">
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`curl https://api.example.com/users \\
  -X POST \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "role": "admin"
  }'`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="response" className="mt-4">
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`{
  "id": "usr_1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "admin",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Get User Endpoint */}
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Badge className="bg-blue-500 hover:bg-blue-600">GET</Badge>
              <code className="text-lg font-semibold">/api/users/:id</code>
            </div>
            <p className="text-muted-foreground">Retrieve a specific user by their ID.</p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Path Parameters</h3>
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">id</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                  <Badge variant="destructive" className="text-xs">
                    required
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The unique identifier of the user.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Response</h3>
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">id</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Unique identifier for the user.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">email</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The user&apos;s email address.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">name</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The user&apos;s full name.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <Tabs defaultValue="curl" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="mt-4">
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`curl https://api.example.com/users/usr_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="response" className="mt-4">
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`{
  "id": "usr_1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "admin",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Delete User Endpoint */}
      <div className="mb-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Badge className="bg-red-500 hover:bg-red-600">DELETE</Badge>
              <code className="text-lg font-semibold">/api/users/:id</code>
            </div>
            <p className="text-muted-foreground">Delete a user from the system.</p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Path Parameters</h3>
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">id</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                  <Badge variant="destructive" className="text-xs">
                    required
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">The unique identifier of the user to delete.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Response</h3>
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">success</code>
                  <Badge variant="outline" className="text-xs">
                    boolean
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Indicates if the deletion was successful.</p>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <code className="text-sm font-semibold">message</code>
                  <Badge variant="outline" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Confirmation message.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <Tabs defaultValue="curl" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="mt-4">
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`curl https://api.example.com/users/usr_1234567890 \\
  -X DELETE \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="response" className="mt-4">
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`{
  "success": true,
  "message": "User successfully deleted"
}`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
