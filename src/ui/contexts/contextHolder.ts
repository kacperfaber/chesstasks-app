interface ContextHolder<T> {
    value: T | undefined;

    setValue: (v: T | undefined) => void;
}