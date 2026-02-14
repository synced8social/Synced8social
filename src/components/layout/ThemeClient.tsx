'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Sets a theme attribute so we can swap brand accent colors per offer.
 * - default: orange (Synced)
 * - /upwork*: green (Upwork)
 */
export default function ThemeClient() {
    const pathname = usePathname();

    useEffect(() => {
        const theme = pathname?.startsWith('/upwork') ? 'upwork' : 'default';
        // Put on both html + body for easy CSS targeting.
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
    }, [pathname]);

    return null;
}
