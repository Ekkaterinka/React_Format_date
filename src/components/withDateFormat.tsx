

export const withDateFormat = (Component: any) => (props: any) => {
    const diffInMs = Date.now() - (new Date(props.date).getTime())
    const day = 1000 * 60 * 60 * 24;
    const hourse = 1000 * 60 * 60;
    const minute = 1000 * 60;
    const diffDate = () => {
        if (diffInMs <= 3600000) { return (<p>{Math.round(diffInMs / minute)}минут назад</p>) }
        if (diffInMs <= 86400000) { return (<p>{Math.round(diffInMs / hourse)}часов назад</p>) }
        else { return (<p>{Math.round(diffInMs/ day)} дней назад</p>) }
    }
    return (<Component data={diffDate()} {...props} />)
}


