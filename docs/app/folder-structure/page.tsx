import type { Metadata } from "next"
import { Folder, File } from "lucide-react"

export const metadata: Metadata = {
  title: "Folder Structure | Minimal Docs Site",
  description: "Project folder structure overview",
}

const folderStructure = [
  {
    name: "app",
    type: "folder",
    children: [
      { name: "api-reference", type: "folder", children: [{ name: "page.tsx", type: "file" }] },
      { name: "components", type: "folder", children: [{ name: "page.tsx", type: "file" }] },
      { name: "folder-structure", type: "folder", children: [{ name: "page.tsx", type: "file" }] },
      { name: "getting-started", type: "folder", children: [{ name: "page.tsx", type: "file" }] },
      { name: "globals.css", type: "file" },
      { name: "layout.tsx", type: "file" },
      { name: "page.tsx", type: "file" },
    ],
  },
  {
    name: "components",
    type: "folder",
    children: [
      {
        name: "ui",
        type: "folder",
        children: [
          { name: "accordion.tsx", type: "file" },
          { name: "alert.tsx", type: "file" },
          { name: "button.tsx", type: "file" },
          { name: "card.tsx", type: "file" },
          { name: "input.tsx", type: "file" },
          { name: "sidebar.tsx", type: "file" },
        ],
      },
      { name: "app-sidebar.tsx", type: "file" },
      { name: "theme-provider.tsx", type: "file" },
      { name: "theme-toggle.tsx", type: "file" },
    ],
  },
  {
    name: "lib",
    type: "folder",
    children: [{ name: "utils.ts", type: "file" }],
  },
  {
    name: "public",
    type: "folder",
    children: [],
  },
]

function TreeItem({
  item,
  level = 0,
}: {
  item: { name: string; type: string; children?: any[] }
  level?: number
}) {
  const isFolder = item.type === "folder"
  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <div
        className="flex items-center gap-2 py-1.5 hover:bg-muted/50 rounded px-2"
        style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
      >
        {isFolder ? <Folder className="size-4 text-blue-500" /> : <File className="size-4 text-muted-foreground" />}
        <span className={isFolder ? "font-medium" : "text-muted-foreground"}>{item.name}</span>
      </div>
      {hasChildren &&
        item.children?.map((child: any, index: number) => (
          <TreeItem key={`${child.name}-${index}`} item={child} level={level + 1} />
        ))}
    </div>
  )
}

export default function FolderStructure() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Folder Structure</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        This page shows the folder structure of the documentation site. The project follows Next.js App Router
        conventions with a clean and organized structure.
      </p>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold">Project Structure</h2>
        <div className="font-mono text-sm">
          {folderStructure.map((item, index) => (
            <TreeItem key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Key Directories</h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold">app/</h3>
            <p className="text-sm text-muted-foreground">
              Contains all pages and routes using Next.js App Router. Each folder represents a route.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">components/</h3>
            <p className="text-sm text-muted-foreground">
              Reusable React components including UI components from shadcn/ui.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">lib/</h3>
            <p className="text-sm text-muted-foreground">Utility functions and helper code.</p>
          </div>
          <div>
            <h3 className="font-semibold">public/</h3>
            <p className="text-sm text-muted-foreground">Static assets like images and fonts.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
