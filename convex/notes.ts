import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Отримання всіх нотаток
export const getNotes = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notes").order("desc").collect();
  },
});

// Додати нотатку
export const addNote = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const noteId = await ctx.db.insert("notes", {
      text: args.text,
      completed: false,
    });
    return noteId;
  },
});

// Перемкнути статус
export const toggleNote = mutation({
  args: { id: v.id("notes") },
  handler: async (ctx, args) => {
    const note = await ctx.db.get(args.id);
    if (!note) throw new Error("Note not found");

    await ctx.db.patch(args.id, {
      completed: !note.completed,
    });
  },
});

// Видалити нотатку
export const removeNote = mutation({
  args: { id: v.id("notes") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Видалення всіх заміток
export const removeAll = mutation({
  args: {},
  handler: async (ctx) => {
    const notes = await ctx.db.query("notes").collect();
    await Promise.all(notes.map((note) => ctx.db.delete(note._id)));
  },
});
