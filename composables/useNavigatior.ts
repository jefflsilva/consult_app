export function useNavigator() {
    const router = useRouter();
    const route = useRoute();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return {
        navigateTo,
    };
}