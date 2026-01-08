import { connectDB } from "../../../../lib/mongodb";
import Note from "../../../../models/Note";

export async function PUT(req, context) {
  await connectDB();

  // ✅ unwrap params properly (Next.js 16 fix)
  const { id } = await context.params;
  const body = await req.json();

  const updatedNote = await Note.findByIdAndUpdate(
    id,
    body,
    { new: true }
  );

  return Response.json(updatedNote);
}

export async function DELETE(req, context) {
  await connectDB();

  // ✅ unwrap params properly
  const { id } = await context.params;

  await Note.findByIdAndDelete(id);

  return Response.json({ message: "Deleted successfully" });
}
