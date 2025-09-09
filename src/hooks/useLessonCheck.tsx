import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useLessonCheck(lessonKey: string) {
    const queryClient = useQueryClient();

    const { data: checked } = useQuery({
        queryKey: ["lesson", lessonKey, "checked"],
        // Load from cache OR initial false if nothing in storage
        initialData: false,
        // Don’t fetch — just trust what’s in cache/storage
        queryFn: async () => {
            return queryClient.getQueryData<boolean>(["lesson", lessonKey, "checked"]) ?? false;
        },
        // Important: don’t let React Query auto-refetch this
        staleTime: Infinity,
        gcTime: Infinity,
    });

    const toggle = () => {
        queryClient.setQueryData(["lesson", lessonKey, "checked"], !checked);
    };

    return { checked: checked ?? false, toggle };
}
