/*
    - using revalidatePath
       - allows you to revalidate data associated with a specific path
       - is useful for scenarios where you want  tp update cached data without waiting for a revalidation period to expire
       - only invalidates the cache when the path is next visited. This means calling revalidatePath with a dynamic route segment will not immediately trigger many revalidations at once. The invalidation only happens when the path is next visited.
 */
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
