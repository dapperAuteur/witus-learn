import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { env, hasCloudinary } from "@/lib/env";

// GET /api/upload/cloudinary — returns the unsigned-upload config (cloud name + preset) for a
// signed-in user, so the browser can upload media directly to Cloudinary. Auth-gated so the
// preset isn't handed to anonymous visitors; 503 when Cloudinary isn't configured.
export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!hasCloudinary) return NextResponse.json({ error: "Uploads are not configured." }, { status: 503 });
  return NextResponse.json({
    cloudName: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    uploadPreset: env.CLOUDINARY_UPLOAD_PRESET,
  });
}
