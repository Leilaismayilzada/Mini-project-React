import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({

  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const QueryProviders = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
