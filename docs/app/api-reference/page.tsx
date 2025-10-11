import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { apiServices, type ApiMethod } from "@/data/api-endpoints"

export const metadata: Metadata = {
  title: "API Reference | Minimal Docs Site",
  description: "Detailed API reference for our library",
}

function getMethodColor(method: ApiMethod) {
  const colors = {
    GET: "bg-blue-500 hover:bg-blue-600",
    POST: "bg-green-500 hover:bg-green-600",
    PUT: "bg-yellow-500 hover:bg-yellow-600",
    PATCH: "bg-orange-500 hover:bg-orange-600",
    DELETE: "bg-red-500 hover:bg-red-600",
  }
  return colors[method]
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

      {apiServices.map((service, serviceIndex) => (
        <div key={service.id}>
          <div id={service.id} className="scroll-mt-20 mb-8">
            <h2 className="mb-2 text-3xl font-bold">{service.name}</h2>
            <p className="text-muted-foreground">{service.description}</p>
          </div>

          {service.endpoints.map((endpoint, endpointIndex) => (
            <div key={endpointIndex} className="mb-16 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Badge className={getMethodColor(endpoint.method)}>{endpoint.method}</Badge>
                    <code className="text-lg font-semibold">{endpoint.path}</code>
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </div>

                {endpoint.pathParameters && (
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Path Parameters</h3>
                    <div className="space-y-3 rounded-lg border bg-card p-4">
                      {endpoint.pathParameters.map((param, paramIndex) => (
                        <div key={paramIndex}>
                          <div className="mb-1 flex items-center gap-2">
                            <code className="text-sm font-semibold">{param.name}</code>
                            <Badge variant="outline" className="text-xs">
                              {param.type}
                            </Badge>
                            <Badge variant={param.required ? "destructive" : "secondary"} className="text-xs">
                              {param.required ? "required" : "optional"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {endpoint.parameters && (
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Parameters</h3>
                    <div className="space-y-3 rounded-lg border bg-card p-4">
                      {endpoint.parameters.map((param, paramIndex) => (
                        <div key={paramIndex}>
                          <div className="mb-1 flex items-center gap-2">
                            <code className="text-sm font-semibold">{param.name}</code>
                            <Badge variant="outline" className="text-xs">
                              {param.type}
                            </Badge>
                            <Badge variant={param.required ? "destructive" : "secondary"} className="text-xs">
                              {param.required ? "required" : "optional"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="mb-3 text-lg font-semibold">Response</h3>
                  <div className="space-y-3 rounded-lg border bg-card p-4">
                    {endpoint.response.map((field, fieldIndex) => (
                      <div key={fieldIndex}>
                        <div className="mb-1 flex items-center gap-2">
                          <code className="text-sm font-semibold">{field.name}</code>
                          <Badge variant="outline" className="text-xs">
                            {field.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{field.description}</p>
                      </div>
                    ))}
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
                        <code>{endpoint.curlExample}</code>
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="response" className="mt-4">
                    <div className="rounded-lg bg-muted p-4">
                      <pre className="overflow-x-auto text-sm">
                        <code>{endpoint.responseExample}</code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          ))}

          {serviceIndex < apiServices.length - 1 && <hr className="my-12 border-t" />}
        </div>
      ))}
    </main>
  )
}
