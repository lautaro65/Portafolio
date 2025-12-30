import React from "react";
import { Minus, X, Minimize2, Maximize2 } from "lucide-react";

interface NotepadWindowProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  maximized: boolean;
  content: string;
  onDragStart?: (e: React.MouseEvent) => void;
  dict: {
    desktop: {
      notepad: string;
    };
  };
}
export default function NotepadWindow({
  onClose,
  onMinimize,
  onMaximize,
  maximized,
  content,
  onDragStart,
  dict,
}: NotepadWindowProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className={`flex items-center justify-between px-4 py-2 bg-[#f5f5f5] border-b border-[#ccc] ${
          maximized ? "" : "rounded-t-xl"
        }`}
        onMouseDown={onDragStart}
      >
        <span className="font-semibold text-[#232323]">
          {dict?.desktop?.notepad || "Bloc de notas"}
        </span>
        <div className="flex gap-2 items-center">
          <button
            onClick={onMinimize}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
            title="Minimizar"
          >
            <Minus className="w-4 h-4" />
          </button>
          {/* Solo mostrar botón maximizar en desktop */}
          {!isMobile && (
            <button
              onClick={onMaximize}
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
              title={maximized ? "Restaurar" : "Maximizar"}
            >
              {maximized ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#ff6b35]/30 transition"
            title="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-2 md:p-4 bg-white font-mono text-[#232323] whitespace-pre-wrap overflow-y-auto">
        {content}
      </div>
    </div>
  );
}
