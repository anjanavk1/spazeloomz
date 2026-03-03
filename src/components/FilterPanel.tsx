import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface FilterOption {
    id: string;
    label: string;
}

export interface FilterGroup {
    id: string;
    label: string;
    type: "checkbox" | "range" | "color";
    options?: FilterOption[];
    min?: number;
    max?: number;
    step?: number;
}

interface FilterPanelProps {
    filters: FilterGroup[];
    selectedFilters: Record<string, string[] | number[]>;
    onFilterChange: (groupId: string, value: string | number[]) => void;
    onClose?: () => void;
}

const FilterPanel = ({ filters, selectedFilters, onFilterChange, onClose }: FilterPanelProps) => {
    return (
        <div className="w-full bg-background/50 backdrop-blur-md h-full">
            <div className="p-4 border-b border-border flex justify-between items-center">
                <h3 className="font-display text-lg">Filters</h3>
                {onClose && (
                    <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
                        <X className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(100vh-100px)]">
                <Accordion type="multiple" defaultValue={filters.map((f) => f.id)} className="w-full">
                    {filters.map((group) => (
                        <AccordionItem key={group.id} value={group.id} className="border-b-border/50">
                            <AccordionTrigger className="text-sm uppercase tracking-wider hover:no-underline py-4">
                                {group.label}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pt-2 pb-4 space-y-3">
                                    {group.type === "checkbox" &&
                                        group.options?.map((option) => (
                                            <div key={option.id} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`${group.id}-${option.id}`}
                                                    checked={(selectedFilters[group.id] as string[])?.includes(option.id)}
                                                    onCheckedChange={() => onFilterChange(group.id, option.id)}
                                                    className="border-muted-foreground/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                                />
                                                <Label
                                                    htmlFor={`${group.id}-${option.id}`}
                                                    className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                                >
                                                    {option.label}
                                                </Label>
                                            </div>
                                        ))}

                                    {group.type === "color" && (
                                        <div className="flex flex-wrap gap-2">
                                            {group.options?.map((option) => (
                                                <button
                                                    key={option.id}
                                                    className={`w-8 h-8 rounded-full border border-border transition-all ${(selectedFilters[group.id] as string[])?.includes(option.id)
                                                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                                                            : "hover:scale-110"
                                                        }`}
                                                    style={{ backgroundColor: option.id.toLowerCase() }}
                                                    onClick={() => onFilterChange(group.id, option.id)}
                                                    title={option.label}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {group.type === "range" && (
                                        <div className="px-2 pt-4">
                                            <Slider
                                                defaultValue={[group.min || 0, group.max || 100]}
                                                max={group.max}
                                                step={group.step}
                                                className="my-4"
                                                // Note: Slider implementation usually requires state management for the value array
                                                // passing a simplified handler here for now
                                                onValueChange={(val) => onFilterChange(group.id, val)}
                                            />
                                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                                <span>${group.min}</span>
                                                <span>${group.max}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FilterPanel;
