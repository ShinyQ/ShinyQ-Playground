'use client';

import { Button } from "../ui/button";
import { EyeIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription
} from "../ui/dialog";
import { useEffect, useState } from "react";

export default function CVDialog() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <Button
                className="bg-gradient-to-r from-primary via-primary/90 to-accent/90 text-white font-bold py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => window.open('/files/cv.pdf', '_blank')}
            >
                See My CV
                <EyeIcon className="ml-2 w-5 h-5" />
            </Button>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="bg-gradient-to-r from-primary via-primary/90 to-accent/90 text-white font-bold py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                    See My CV
                    <EyeIcon className="ml-2 w-5 h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-2xl sm:max-w-4xl h-[80vh] max-h-[90vh] border border-border shadow-xl rounded-lg p-0">
                <DialogTitle className="sr-only">Curriculum Vitae</DialogTitle>
                <DialogDescription className="sr-only">A preview of my CV in PDF format.</DialogDescription>
                <div className="w-full h-[70vh] sm:h-[80vh] overflow-auto">
                    <iframe
                        src="/files/cv.pdf"
                        className="w-full h-full rounded"
                        title="Resume"
                        style={{ minHeight: 400 }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
} 