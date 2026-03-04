import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import FilterPanel, { FilterGroup } from "@/components/FilterPanel";
import Hero from "@/components/Hero";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const filters: FilterGroup[] = [
    {
        id: "notes",
        label: "Fragrance Family",
        type: "checkbox",
        options: [
            { id: "Woody", label: "Woody" },
            { id: "Floral", label: "Floral" },
            { id: "Oriental", label: "Oriental" },
            { id: "Fresh", label: "Fresh" },
            { id: "Oud", label: "Oud" },
        ],
    },
    {
        id: "intensity",
        label: "Intensity",
        type: "checkbox",
        options: [
            { id: "light", label: "Light / Mist" },
            { id: "medium", label: "Medium / EDP" },
            { id: "intense", label: "Intense / Extrait" },
        ]
    },
    {
        id: "price",
        label: "Price",
        type: "range",
        min: 0,
        max: 1000,
        step: 50,
    },
];

const UnisexPerfumes = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[] | number[]>>({});

    const handleFilterChange = (groupId: string, value: string | number[]) => {
        setSelectedFilters((prev) => {
            const current = prev[groupId] || [];

            if (Array.isArray(value) && typeof value[0] === 'number') {
                return { ...prev, [groupId]: value };
            }

            if (typeof value === 'string') {
                const currentArray = (current as string[]);
                const updated = currentArray.includes(value)
                    ? currentArray.filter((item) => item !== value)
                    : [...currentArray, value];
                return { ...prev, [groupId]: updated };
            }

            return prev;
        });
    };

    const unisexProducts = products.filter(p => {
        if (p.gender !== 'unisex') return false;

        const notesFilters = selectedFilters.notes as string[];
        if (notesFilters && notesFilters.length > 0) {
            if (!p.fragranceFamily || !p.fragranceFamily.some(f => notesFilters.includes(f))) {
                return false;
            }
        }

        const intensityFilters = selectedFilters.intensity as string[];
        if (intensityFilters && intensityFilters.length > 0) {
            if (!p.intensity || !intensityFilters.includes(p.intensity)) {
                return false;
            }
        }

        const priceRange = selectedFilters.price as number[];
        if (priceRange && priceRange.length === 2) {
            if (p.price < priceRange[0] || p.price > priceRange[1]) {
                return false;
            }
        }

        return true;
    });

    return (
        <main className="bg-gradient-to-b from-background to-background/95">
            <Hero
                title="Beyond Boundaries"
                subtitle="Unisex Fragrances"
                size="full"
                align="center"
                overlayOpacity={0.2}
            >
                <p className="text-white/90 max-w-2xl mt-6 text-xl font-display italic">
                    "Scents with no boundaries — crafted for every soul."
                </p>
            </Hero>

            <section className="container mx-auto px-4 py-16 relative">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:hidden mb-4">
                        <Button
                            variant="outline"
                            className="w-full flex justify-between"
                            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                        >
                            <span>Refine Scent</span>
                            <SlidersHorizontal size={16} />
                        </Button>
                    </div>

                    <div className={`lg:w-1/4 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                        <FilterPanel
                            filters={filters}
                            selectedFilters={selectedFilters}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                            {unisexProducts.map((product, i) => (
                                <ProductCard key={product.id} product={product} index={i} />
                            ))}
                        </div>
                        {unisexProducts.length === 0 && (
                            <div className="text-center py-24 text-muted-foreground font-body tracking-widest uppercase text-sm">
                                No fragrances match your selection.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UnisexPerfumes;
