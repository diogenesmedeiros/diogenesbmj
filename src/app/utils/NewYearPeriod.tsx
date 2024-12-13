export const NewYearPeriod = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 11, 31, 23, 59);
    const end = new Date(now.getFullYear() + 1, 0, 1, 23, 59, 59);
    return now >= start && now <= end;
}