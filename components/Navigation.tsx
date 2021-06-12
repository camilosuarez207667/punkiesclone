import Link from 'next/link'

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Index</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation