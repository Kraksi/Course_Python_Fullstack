import { Link } from "react-router-dom";
import dataBook from "../data";

export default function Catalog(){



    return (
        <section>
            <h2>Каталог</h2>
            <nav>
                {dataBook.map( book => (
                    <Link
                        to={`/book/${book.id}`}
                    >
                        {book.title}
                    </Link>
                ))}
            </nav>
        </section>
    )
}