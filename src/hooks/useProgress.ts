import { useQueryClient } from "@tanstack/react-query";
import lessons from "../lessons";
import { useMemo } from "react";

export function useProgress() {
    const queryClient = useQueryClient();

    // Count completed lessons dynamically from React Query cache
    const { completed, total } = useMemo(() => {
        const totalLessons = Object.keys(lessons).length;
        const completedLessons = Object.values(lessons).reduce((count, lesson) => {
            const checked = queryClient.getQueryData<boolean>(["lesson", lesson.key, "checked"]);
            return checked ? count + 1 : count;
        }, 0);

        return { completed: completedLessons, total: totalLessons };
    }, [queryClient]);

    return { completed, total, percent: (completed / total) * 100 };
}
