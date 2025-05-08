'use client';

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme");
        if (saved) {
            setIsLight(saved === "light");
        } else {
            setIsLight(window.matchMedia("(prefers-color-scheme: light)").matches);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        const root = document.documentElement;
        root.classList.toggle("light", isLight);
        localStorage.setItem("theme", isLight ? "light" : "dark");
    }, [isLight, mounted]);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted/50 p-2 w-9 h-9"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-muted/50 p-2 w-9 h-9"
            aria-label="Toggle theme"
            onClick={() => setIsLight(prev => !prev)}
        >
            {isLight ? (
                <Moon size={20} className="text-slate-900" />
            ) : (
                <Sun size={20} className="text-yellow-400" />
            )}
        </Button>
    );
}
