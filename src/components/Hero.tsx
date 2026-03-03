import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    videoBackground?: string;
    children?: ReactNode;
    align?: "left" | "center" | "right";
    size?: "small" | "default" | "large" | "full";
    overlayOpacity?: number;
    className?: string;
}

const Hero = ({
    title,
    subtitle,
    backgroundImage,
    videoBackground,
    children,
    align = "center",
    size = "default",
    overlayOpacity = 0.4,
    className = "",
}: HeroProps) => {
    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    const sizeClasses = {
        small: "min-h-[25vh] py-16",
        default: "h-[50vh] min-h-[400px]",
        large: "h-[70vh] min-h-[500px]",
        full: "h-screen min-h-[600px]",
    };

    return (
        <div className={`relative w-full overflow-hidden flex flex-col justify-center ${sizeClasses[size]} ${className}`}>
            {/* Background */}
            <div className="absolute inset-0 z-0">
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                )}
                {/* Video background support could be added here if needed, using videoBackground prop */}

                <div
                    className="absolute inset-0 bg-black transition-opacity duration-700"
                    style={{ opacity: overlayOpacity }}
                />
            </div>

            {/* Content */}
            <div className={`relative z-10 container mx-auto px-4 flex flex-col justify-center min-h-[500px] ${alignmentClasses[align]} space-y-6 pt-10`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4 max-w-4xl"
                >
                    {subtitle && (
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-gold-light/90 font-light">
                            {subtitle}
                        </p>
                    )}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-tight">
                        {title}
                    </h1>
                </motion.div>

                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Hero;
