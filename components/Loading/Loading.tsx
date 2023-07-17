import { FC } from "react"
import LoadingAnimation from "./LoadingAnimation"

type LoadingType = {
    loading: boolean,
    error?: null | string
}

const Loading: FC<LoadingType> = ({ loading, error }) => {
    {
        if (loading) return <LoadingAnimation data-testid="loading-animation" />
    }
    {
        if (error) return <h1 style={{ marginTop: '50px', color: 'red' }}>Error: {error}</h1>
    }
    return (
        <></>
    )
}

export default Loading