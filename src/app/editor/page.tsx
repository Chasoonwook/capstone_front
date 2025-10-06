import { Suspense } from "react"
import EditorClient from "./EditorClient"

export default function EditorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-muted-foreground">로딩 중...</div>
        </div>
      }
    >
      <EditorClient />
    </Suspense>
  )
}
