import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useLessonCheck(lessonKey: string) {
  const queryClient = useQueryClient();

  const { data: checked } = useQuery({
    queryKey: ["lesson", lessonKey, "checked"],
    initialData: false,
    queryFn: async () => false,
  });

  const toggle = () => {
    queryClient.setQueryData(["lesson", lessonKey, "checked"], (prev: boolean | undefined) => !prev);
  };

  return { checked: checked ?? false, toggle };
}
