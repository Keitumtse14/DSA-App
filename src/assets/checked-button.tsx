import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useLessonCheck(lessonKey: string) {
  const queryClient = useQueryClient();

  const { data: checked } = useQuery({
    queryKey: ["lesson", lessonKey, "checked"],
    initialData: false, // first load
    queryFn: async () => false, // only runs if nothing persisted
  });

  const toggle = () => {
    queryClient.setQueryData(["lesson", lessonKey, "checked"], !checked);
  };

  return { checked: checked ?? false, toggle };
}
