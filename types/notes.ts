import { Id } from "@/convex/_generated/dataModel";

export type Note = {
  _id: Id<"notes">;
  text: string;
  completed: boolean;
  createdAt: number;
};
