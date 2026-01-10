import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileText, Plus, Trash2, Save, Info } from "lucide-react";

interface Note {
  id: string;
  content: string;
  timestamp: Date;
}

export function WorkspaceNotes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      content: "Key observation: Both videos discuss AI regulation but from opposing perspectives.",
      timestamp: new Date(),
    },
  ]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now().toString(),
          content: newNote,
          timestamp: new Date(),
        },
      ]);
      setNewNote("");
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="gradient" className="group">
          <FileText className="w-4 h-4" />
          Workspace Notes
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Workspace Notes
          </SheetTitle>
          <SheetDescription>
            Write and manage your personal research notes
          </SheetDescription>
        </SheetHeader>

        {/* Compliance Notice */}
        <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              This document contains user-written research notes and cited public sources. Notes are session-based and do not trigger any data retrieval.
            </p>
          </div>
        </div>

        {/* Add New Note */}
        <div className="mt-6 space-y-3">
          <label className="text-sm font-medium">Add a new note</label>
          <Textarea
            placeholder="Write your research observation here..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="min-h-[100px]"
          />
          <Button onClick={addNote} disabled={!newNote.trim()} className="w-full">
            <Plus className="w-4 h-4" />
            Add Note
          </Button>
        </div>

        {/* Saved Notes */}
        <div className="mt-8">
          <h4 className="text-sm font-medium mb-4">Your Notes ({notes.length})</h4>
          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-4 rounded-lg bg-muted/50 border border-border"
              >
                <p className="text-sm mb-3">{note.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {note.timestamp.toLocaleDateString()} at{" "}
                    {note.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Citation Templates */}
        <div className="mt-8 pt-6 border-t border-border">
          <h4 className="text-sm font-medium mb-4">Quick Citation Templates</h4>
          <div className="space-y-2">
            <button
              onClick={() =>
                setNewNote(
                  newNote +
                    "\n\nVideo Citation:\nTitle: [Video Title]\nURL: [YouTube URL]\nTimestamp: [00:00]\nExcerpt: \"[Quote from video]\""
                )
              }
              className="w-full p-3 text-left rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-sm"
            >
              <span className="font-medium">+ Video Citation</span>
              <p className="text-xs text-muted-foreground mt-1">
                Add a structured video reference
              </p>
            </button>
            <button
              onClick={() =>
                setNewNote(
                  newNote +
                    "\n\nComment Citation:\nSource Video: [Video Title]\nComment: \"[Comment text]\""
                )
              }
              className="w-full p-3 text-left rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-sm"
            >
              <span className="font-medium">+ Comment Citation</span>
              <p className="text-xs text-muted-foreground mt-1">
                Add a comment reference
              </p>
            </button>
          </div>
        </div>

        {/* Save to Device */}
        <div className="mt-6 pt-6 border-t border-border">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              const notesText = notes
                .map(
                  (n) =>
                    `[${n.timestamp.toLocaleDateString()}]\n${n.content}\n`
                )
                .join("\n---\n\n");
              const blob = new Blob(
                [
                  "ClashLens Research Notes\n" +
                    "========================\n\n" +
                    "This document contains user-written research notes and cited public sources.\n\n" +
                    "---\n\n" +
                    notesText,
                ],
                { type: "text/plain" }
              );
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "clashlens-research-notes.txt";
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <Save className="w-4 h-4" />
            Save Notes to Device
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Download your notes as a text file
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
