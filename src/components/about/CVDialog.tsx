'use client';

import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogHeader,
    DialogDescription,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface CVDialogProps {
    readonly cvUrl: string;
}

export default function CVDialog({ cvUrl }: CVDialogProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .pdf-container iframe {
                border: none;
            }
            .pdf-container iframe::-webkit-scrollbar {
                display: none;
            }
            .pdf-container iframe {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `;
        document.head.appendChild(style);

        return () => {
            // Cleanup: remove the style when component unmounts
            document.head.removeChild(style);
        };
    }, []);

    const pdfUrl = `${cvUrl}#toolbar=0&navpanes=0`;

    if (isMobile) {
        return (
            <Button
                className="bg-gradient-to-r from-primary via-primary/90 to-accent/90 text-white font-bold py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => window.open(pdfUrl, '_blank')}
            >
                View CV
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
                    View CV
                    <EyeIcon className="ml-2 w-5 h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-2xl sm:max-w-4xl h-[80vh] max-h-[90vh] border border-border shadow-xl rounded-lg p-0">
                <DialogHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between">
                    <DialogTitle className="text-xl font-semibold">Curriculum Vitae - Kurniadi Ahmad Wijaya</DialogTitle>
                    <DialogDescription className="sr-only">
                        View my curriculum vitae in a modal window
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-[70vh] sm:h-[80vh] overflow-auto pdf-container">
                    <iframe
                        src={pdfUrl}
                        className="w-full h-full rounded"
                        title="Resume"
                        style={{ minHeight: 400 }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
} 