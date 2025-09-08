// useLessonCheck.ts
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useLessonCheck(lessonKey: string) {
    const queryClient = useQueryClient();

    // Instead of forcing queryFn -> false, just let it read cached data
    const { data: checked } = useQuery({
        queryKey: ["lesson", lessonKey, "checked"],
        // Provide initial value so it doesn’t throw undefined
        initialData: false,
        queryFn: async () => {
            // This only runs if nothing is in cache (first visit)
            return false;
        },
    });

    const toggle = () => {
        queryClient.setQueryData(["lesson", lessonKey, "checked"], !checked);
    };

    return { checked: checked ?? false, toggle };
}
