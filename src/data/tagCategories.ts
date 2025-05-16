export interface TagCategory {
    id: string;
    name: string;
    subcategories: string[];
}

export const tagCategories: TagCategory[] = [
    {
        id: "web",
        name: "Web Development",
        subcategories: [
            "Frontend", "Backend", "Full Stack", "E-commerce", "Dashboard",
            "Personal Website"
        ]
    },
    {
        id: "ai",
        name: "AI & Data",
        subcategories: ["Machine Learning", "Data Analysis", "Portfolio Optimization", "NLP"]
    },
    {
        id: "uiux",
        name: "UI/UX Design",
        subcategories: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Testing", "UX Research"]
    },
    {
        id: "devops",
        name: "DevOps & Infrastructure",
        subcategories: ["Cloud", "CI/CD", "Containerization", "Monitoring"]
    }
];

export function getSubcategories(categoryId: string): string[] {
    const category = tagCategories.find(cat => cat.id === categoryId);
    return category?.subcategories ?? [];
}

export function getCategoryForTag(tag: string): string | null {
    for (const category of tagCategories) {
        if (category.subcategories.includes(tag)) {
            return category.id;
        }
    }
    return null;
} 