'use client';

// Look into how this effects SSR and generating all of this on the server if it wraps the whole application

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({children}: {children: React.ReactNode}) => {
    const queryClient = new QueryClient()

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers