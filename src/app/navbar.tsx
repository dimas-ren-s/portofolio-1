import Link from "next/link";

function makeNavbarListUI(list: any[]) {
    return (<ul className="flex flex-row">
        {
            list.map(nav => (
                <Link href={`/${nav.url}`} className="hover:text-blue-500"> {/* Kalau mau menambahkan / sebelum */}
                    <li className="mx-2">
                        {nav.nama}
                    </li>
                </Link>
            ))
        }
    </ul >)
}

export default function Navbar() {
    const listNavbar = [
        { nama: 'Home', url: '/' },
        { nama: 'About', url: 'about' },
        { nama: 'Project', url: 'project' },
        { nama: 'Contact', url: 'contact' }
    ];

    return (
        <nav className="bg-blue-200 p-4">
            {makeNavbarListUI(listNavbar)}
        </nav>
    );
}